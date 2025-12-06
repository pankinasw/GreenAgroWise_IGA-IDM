import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>
        Добро пожаловать в GreenAgroWise IGA Portal
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        Управляйте доступами к 27 системам компании в одном месте
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" href="/request" sx={{ mr: 2 }}>
          Запросить доступ
        </Button>
        <Button variant="outlined" href="/myaccess">
          Мои доступы
        </Button>
      </Box>
    </Box>
  );
}
