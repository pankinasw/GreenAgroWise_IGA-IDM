import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function RequestAccess() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Запрос доступа
      </Typography>
      <Typography variant="body1">
        Выберите роль из списка и нажмите «Отправить заявку» — она уйдёт на согласование.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary">
          Отправить заявку на доступ
        </Button>
      </Box>
    </Box>
  </Box>
}
