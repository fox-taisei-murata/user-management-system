import { User } from "../types/User";
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';


export interface UserDetailsProps {
    user: User;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
    return (
        <Card sx={{ maxWidth: 400, margin: 'auto', mt: 3 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    ユーザー詳細
                </Typography>
                <Typography >
                    ID: {user.id}
                </Typography>
                <Typography >
                    名前: {user.name}
                </Typography>
                <Typography>
                    メールアドレス: {user.email}
                </Typography>
                <Typography>
                    役職: {user.role}
                </Typography>
            </CardContent>
        </Card>
    );
};