// app/register/page.tsx

'use client'; // クライアントコンポーネントとしてマーク

import React from 'react';
import RegisterForm from '../../components/RegisterForm';
import { Typography, Box, Link } from '@mui/material';
import { useRouter } from 'next/navigation'

// TODO: 新規登録ページを実装し、RegisterFormコンポーネントを使用する
const RegisterPage: React.FC = () => {
  const router = useRouter();
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
    <Typography variant="h4" gutterBottom>
      新規登録ページ
    </Typography>
    <RegisterForm onSuccess={() => router.push('/users')} />
  </Box>
  );
}

export default RegisterPage;