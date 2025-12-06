import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  CircularProgress,
  Alert,
} from '@mui/material';
import { CheckCircle, Cancel } from '@mui/icons-material';

interface Access {
  system: string;
  role: string;
  status: 'active' | 'pending' | 'revoked';
  grantedDate: string;
  expiryDate?: string;
}

const mockAccesses: Access[] = [
  { system: 'SAP S/4HANA', role: 'Финансовый контролёр', status: 'active', grantedDate: '2025-01-15' },
  { system: '1С:ЗУП', role: 'Кадровик', status: 'active', grantedDate: '2025-02-01' },
  { system: 'Microsoft 365', role: 'Стандартный пользователь', status: 'active', grantedDate: '2025-01-01' },
  { system: 'ФГИС Зерно', role: 'Оператор', status: 'pending', grantedDate: '2025-04-05', expiryDate: '2025-07-05' },
  { system: 'ServiceNow', role: 'Заявитель', status: 'revoked', grantedDate: '2024-12-01', expiryDate: '2025-03-01' },
];

export default function MyAccess() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Мои доступы
      </Typography>

      <Alert severity="info" sx={{ mb: 3 }}>
        Здесь отображаются все ваши текущие и запрошенные роли в 27 системах компании
      </Alert>

      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5 }}>
              <TableCell><strong>Система</strong></TableCell>
              <TableCell><strong>Роль</strong></TableCell>
              <TableCell><strong>Статус</strong></TableCell>
              <TableCell><strong>Дата предоставления</strong></TableCell>
              <TableCell><strong>Срок действия</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockAccesses.map((access, index) => (
              <TableRow key={index} hover>
                <TableCell>{access.system}</TableCell>
                <TableCell>{access.role}</TableCell>
                <TableCell>
                  {access.status === 'active' && <Chip icon={<CheckCircle />} label="Активен" color="success" size="small" />}
                  {access.status === 'pending' && <Chip label="На согласовании" color="warning" size="small" />}
                  {access.status === 'revoked' && <Chip icon={<Cancel />} label="Отозван" color="error" size="small" />}
                </TableCell>
                <TableCell>{access.grantedDate}</TableCell>
                <TableCell>{access.expiryDate || 'Бессрочно'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
        Обновлено: {new Date().toLocaleDateString('ru-RU')}
      </Typography>
    </Box>
  );
}
