// components/EditUserForm.tsx

"use client"; // クライアントコンポーネントとしてマーク

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
    TextField,
    Button,
    Box,
    Typography,
    Alert,
    CircularProgress,
} from "@mui/material";
import { fetchUserById, updateUser } from "../utils/api";
import { User } from "../types/User";
import { useRouter } from "next/navigation";

// 必要に応じて利用する
interface EditUserFormInputs {
    name: string;
    email: string;
    role: string;
}

interface EditUserFormProps {
    onSuccess?: () => void;
    onError?: (error: any) => void;
    disabled?: boolean;
    userId: number;
}

// TODO: ユーザー編集フォームコンポーネントを実装する
const EditUserForm: React.FC<EditUserFormProps> = ({
    userId,
    onSuccess,
    onError,
    disabled = false,
}) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<EditUserFormInputs>();
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const fetchUser = await fetchUserById(userId);
                if (fetchUser) {
                    setValue("name", fetchUser.name);
                    setValue("email", fetchUser.email);
                    setValue("role", fetchUser.role);
                } else {
                    setError("ユーザー情報が見つかりませんでした");
                }
            } catch (err) {
                setError("ユーザーの登録に失敗しました。" + err);
                setSuccess(false);
                if (onError) onError(err);
            }
        };

        fetchUser();
    }, [userId, setValue, onError]);

    const onSubmit: SubmitHandler<EditUserFormInputs> = async (data) => {
        setLoading(true);
        try {
            await updateUser(userId, {
                name: data.name,
                email: data.email,
                role: data.role,
            });
            setSuccess(true);
            setError(null);
            if (onSuccess) onSuccess();
        } catch (err) {
            setError("ユーザーの更新に失敗しました。" + err);
            setSuccess(false);
            if (onError) onError(err);
        }
        setLoading(false);
    };

    return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
            <Typography variant="h5" gutterBottom>
                ユーザー情報編集
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            {success && <Alert severity="success">更新が完了しました。</Alert>}

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* 名前フィールド */}
                <TextField
                    label="名前"
                    fullWidth
                    margin="normal"
                    {...register("name", { required: "名前は必須です。" })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    disabled={disabled}
                />
                {/* メールフィールド */}
                <TextField
                    label="メール"
                    type="email"
                    fullWidth
                    margin="normal"
                    {...register("email", {
                        required: "メールは必須です。",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "有効なメールアドレスを入力してください。",
                        },
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    disabled={disabled}
                />
                {/* ロールフィールド */}
                <TextField
                    label="役職"
                    fullWidth
                    margin="normal"
                    {...register("role", { required: "役職は必須です。" })}
                    error={!!errors.role}
                    helperText={errors.role?.message}
                    disabled={disabled}
                />
                {/* 送信ボタン */}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    disabled={loading || disabled}
                >
                    {loading ? <CircularProgress size={24} /> : "更新"}
                </Button>
            </form>
        </Box>

    );
};

export default EditUserForm;