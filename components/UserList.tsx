import React, { useState } from "react";
import UserCard from "./UserCard";
import { User } from "../types/User";
import { Typography, Box, Button } from "@mui/material";
import CustomCard from "../components/parts/CustomCard";
import DeleteUserButton from "./DeleteUserButton";

interface UserListProps {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>
}


const UserList: React.FC<UserListProps> = ({ users, setUsers }) => {
    const handleDelete = (userId: number) => {      // ユーザーを削除する処理
        setUsers(users.filter(user => user.id !== userId));   // 削除したユーザーを除外して更新
    };
    console.log(users)
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                ユーザー一覧
            </Typography>
            {users.map(user => (
                <CustomCard
                    key={user.id}
                    title={user.name}
                    description={user.email}
                    actions={
                        <>
                            <Button
                                variant="outlined"
                                href={`/users/${user.id}/details`}
                            >
                                詳細
                            </Button>
                            <Button
                                variant="outlined"
                                href={`/users/${user.id}/edit`}
                            >
                                編集
                            </Button>
                            <DeleteUserButton userId={user.id} onDelete={handleDelete} />
                        </>
                    }
                />
            ))}
        </Box>
    )
}

export default UserList