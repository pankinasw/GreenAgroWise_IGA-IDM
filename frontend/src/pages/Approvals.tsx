import React, { useState } from 'react';
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
  Button,
  Avatar,
  Stack,
  Tooltip,
  IconButton,
} from '@mui/material';
import { Check, Close, Info } from '@mui/icons-material';

interface Request {
  id: string;
  user: string;
  role: string;
  system: string;
  requested: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  currentApprover: string;
}

const mockRequests: Request[] = [
  {
    id: 'REQ-2025-0421',
    user: 'Иванов И.И.',
    role: 'Главный бухгалтер 1С',
    system: '1С:ЗУП КОРП',
    requested: '2025-04-05',
    reason: 'Необходимость закрытия периода',
    status: 'pending',
    currentApprover: 'Ваше имя',
  },
  {
    id: 'REQ-2025-0419',
    user: 'Петрова А.С.',
    role: 'Трейдер',
    system: 'OpenLink Endur',
    requested: '2025-04-03',
    reason: 'Участие в хеджировании',
    status: 'pending',
    currentApprover: 'Ваше имя',
  },
  {
    id: 'REQ-2025-0401',
    user: 'Сидорова Е.В.',
    role: 'Оператор ФГИС Зерно',
    system: 'ФГИС Зерно',
    requested: '2025-03-28',
    reason: 'Работа с прослеживаемости',
    status: 'pending',
    currentApprover: 'Ваше имя',
  },
];

export default function Approvals() {
  const [requests] = useState(mockRequests);

  const handleApprove = (id: string) => {
    alert(`Заявка ${id} одобрена!`);
  };

  const handleReject = (id: string) => {
    alert(`Заявка ${id} отклонена`);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Согласование заявок
      </Typography>

      <Paper sx={{ p: 3, mb: 3, backgroundColor: '#fff8e1' }}>
        <Typography variant="body1">
          У вас <strong>3 новых заявки</strong> на согласование
        </Typography>
      </Paper>

      <TableContainer component={Paper} elevation={2}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
              <TableCell><strong>Заявка</strong></TableCell>
              <TableCell><strong>Сотрудник</strong></TableCell>
              <TableCell><strong>Роль</strong></TableCell>
              <TableCell><strong>Система</strong></TableCell>
              <TableCell><strong>Причина</strong></TableCell>
              <TableCell><strong>Дата</strong></TableCell>
              <TableCell align="center"><strong>Действие</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((req) => (
              <TableRow key={req.id} hover>
                <TableCell>
                  <Chip label={req.id} size="small" color="primary" />
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Avatar sx={{ width: 32, height: 32, fontSize: 14 }}>
                      {req.user.split(' ').map(n => n[0]).join('')}
                    </Avatar>
                    <Box>
                      <Typography variant="body2">{req.user}</Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell><strong>{req.role}</strong></TableCell>
                <TableCell>{req.system}</TableCell>
                <TableCell>
                  <Tooltip title={req.reason}>
                    <IconButton size="small">
                      <Info fontSize="small" />
                    </IconButton>
                  </Tooltip>
                  {req.reason.substring(0, 30)}...
                </TableCell>
                <TableCell>{req.requested}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    startIcon={<Check />}
                    onClick={() => handleApprove(req.id)}
                    sx={{ mr: 1 }}
                  >
                    Одобрить
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    startIcon={<Close />}
                    onClick={() => handleReject(req.id)}
                  >
                    Отклонить
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
