import React, { useState } from "react";
import UserCard from "./UserCard";
import { User } from "../types/User";
import { Typography, Box } from "@mui/material";

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
                <UserCard key={user.id} user={user} onUserDeleted={handleDelete} />
            ))}
        </Box>
    )
}

export default UserList