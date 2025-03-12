"use client"

import React from "react";
import { Button } from "@mui/material";
import { softDeleteUser } from "../utils/api";
import { useState } from "react";

interface DeleteUserButtonProps {
  userId: number;
  onDelete: (userId: number) => void;
}

const DeleteUserButton: React.FC<DeleteUserButtonProps> = ({ userId, onDelete }) => {
  const [Deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm('本当にこのユーザーを削除しますか？')) return;

    setDeleting(true);
    try {
      await softDeleteUser(userId.toString()); 
      onDelete(userId); 
    } catch (error) {
      console.error('削除に失敗しました', error);
      alert('削除に失敗しました');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <Button variant="contained" color="error" onClick={handleDelete} disabled={Deleting}>
      {Deleting ? "削除中..." : "ユーザーを削除"}
    </Button>
  );
};

export default DeleteUserButton;