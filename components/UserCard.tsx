// components/UserCard.tsx
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { User } from "../types/User";
import DeleteUserButton from "./DeleteUserButton";
interface UserCardProps {
  user: User;
  onUserDeleted: (userId: number) => void;
}
const UserCard: React.FC<UserCardProps> = ({ user, onUserDeleted }) => {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography color="text.secondary">{user.email}</Typography>
        <Typography variant="body2">役割: {user.role}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          component={Link}
          href={`/users/${user.id}/details`}
        >
          詳細
        </Button>
        <Button
          variant="outlined"
          component={Link}
          href={`/users/${user.id}/edit`}
        >
          編集
        </Button>
        <DeleteUserButton userId={user.id} onDelete={onUserDeleted} />
      </CardActions>
    </Card>
  );
};
export default UserCard;