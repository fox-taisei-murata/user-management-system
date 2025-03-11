// app/users/[id]/edit/page.tsx

"use client"; // クライアントコンポーネントとしてマーク

import React from "react";
import { useParams } from "next/navigation";
import { Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import EditUserForm from "../../../../components/EditUserForm";

// TODO: URLパラメータからユーザーIDを取得し、EditUserFormコンポーネントに渡す
const EditUserPage: React.FC = () => {

  const { id } = useParams();
  const router = useRouter();

  // ユーザーIDが取得できていない場合はnullを返す
  if (!id || Array.isArray(id)) {
    return <Typography>ユーザーIDが無効です。</Typography>;
  }

  const handleSuccess = () => {
    router.push("/users"); 
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        ユーザー編集
      </Typography>
      <EditUserForm userId={Number(id)} onSuccess={handleSuccess} />
    </Box>
  );
};

export default EditUserPage;
