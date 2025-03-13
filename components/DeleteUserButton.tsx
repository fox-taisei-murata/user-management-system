"use client"

import React from "react";
import { Button } from "@mui/material";
import { softDeleteUser } from "../utils/api";
import { useState } from "react";
import CustomButton from '@/components/parts/CustomButton';


interface DeleteUserButtonProps {
  userId: number;
  onDelete: (userId: number) => void;
}

const DeleteUserButton: React.FC<DeleteUserButtonProps> = ({ userId, onDelete }) => {

  const handleDelete = async () => {
    if (!confirm('本当にこのユーザーを削除しますか？')) return;

    try {
      await softDeleteUser(userId.toString()); 
      onDelete(userId); 
    } catch (error) {
      console.error('削除に失敗しました', error);
      alert('削除に失敗しました');
    }
  };

  return (
    <CustomButton  onClick={handleDelete} >
      削除
    </CustomButton>
  );
};

export default DeleteUserButton;