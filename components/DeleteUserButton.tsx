"use client"

import React from "react";
import { Button } from "@mui/material";
import { softDeleteUser } from "../utils/api";
import { useState } from "react";
import CustomButton from '@/components/parts/CustomButton';
import CustomModal from '@/components/parts/CustomModal';


interface DeleteUserButtonProps {
  userId: number;
  onDelete: (userId: number) => void;
}

const DeleteUserButton: React.FC<DeleteUserButtonProps> = ({ userId, onDelete }) => {

  const [openModal, setOpenModal] = useState(false);

  const handleDelete = async () => {

    try {
      await softDeleteUser(userId.toString());
      onDelete(userId);
    } catch (error) {
      console.error('削除に失敗しました', error);
      alert('削除に失敗しました');
    }
  };

  return (
    <>
      <CustomButton onClick={() => setOpenModal(true)}>
        削除
      </CustomButton>

      <CustomModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={handleDelete}
        title="削除確認"
        content = "本当にこのユーザーを削除しますか？"
      />
    </>
  );
};

export default DeleteUserButton;