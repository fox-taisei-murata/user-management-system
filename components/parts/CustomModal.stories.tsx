// components/parts/CustomModal.stories.tsx

import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CustomModal from "./CustomModal";
import CustomButton from "./CustomButton";
import { Box } from "@mui/material";

// TODO: メタデータ
const meta: Meta<typeof CustomModal> = {
    title: "components/parts/CustomModal",
    component: CustomModal,
    tags: ["autodocs"],
};

export default meta;

// TODO: ストーリーの定義

// TODO: デフォルトストーリーの作成
export const Default: StoryObj<typeof CustomModal> = {
    render: () => {
        const [open, setOpen] = useState(false);

        return (
            <Box>
                <CustomButton variantType="primary" onClick={() => setOpen(true)}>
                    モーダルを開く
                </CustomButton>
                <CustomModal
                    open={open}
                    title = "タイトル"
                    content = "内容"
                    onClose={() => setOpen(false)}
                    onConfirm={() => {
                        alert("確認ボタンがクリックされました");
                        setOpen(false);
                    }}
                />
            </Box>
        );
    },
};