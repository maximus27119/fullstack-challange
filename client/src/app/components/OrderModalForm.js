'use client';
import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const OrderForm = ({ onAddOrder }) => {
  const [clientName, setClientName] = useState('');
  const [orderName, setOrderName] = useState('');

  const clearFormFields = () => {
    setClientName('');
    setOrderName('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      clientName,
      orderName,
    };

    onAddOrder(newOrder);
    clearFormFields();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: '0 auto' }}>
      <TextField
        label="Client Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />
      <TextField
        label="Order Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={orderName}
        onChange={(e) => setOrderName(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Order
      </Button>
    </Box>
  );
};

export default OrderForm;
