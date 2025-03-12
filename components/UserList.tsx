import React, { useState } from "react";
import UserCard from "./UserCard";
import { User } from "../types/User";
import { Typography, Box } from "@mui/material";

interface UserListProps {
    users: User[];
}


const UserList: React.FC<UserListProps> = ({ users }) => {
    const [userList, setUserList] = useState(users);

    const handleDelete = (userId: number) => {      // ユーザーを削除する処理

        setUserList(userList.filter(user => user.id !== userId));   // 削除したユーザーを除外して更新
    };
    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                ユーザー一覧
            </Typography>
            {userList.map(user => (
                <UserCard key={user.id} user={user} onDelete={handleDelete} />
            ))}
        </Box>
    )
}

export default UserList