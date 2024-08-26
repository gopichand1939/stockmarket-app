import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is installed and imported
import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

function TradeForm({ onTrade }) {
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [type, setType] = useState('buy');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Example API endpoint, replace with your actual endpoint
      await axios.post('/api/trade', { symbol, quantity, type });
      onTrade();
      setError(''); // Clear error if successful
    } catch (err) {
      console.error('Error during trade:', err);
      setError('Failed to perform trade. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <FormControl fullWidth margin="normal">
        <InputLabel>Symbol</InputLabel>
        <TextField
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          label="Symbol"
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Quantity</InputLabel>
        <TextField
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          label="Quantity"
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Type</InputLabel>
        <Select
          value={type}
          onChange={(e) => setType(e.target.value)}
          label="Type"
        >
          <MenuItem value="buy">Buy</MenuItem>
          <MenuItem value="sell">Sell</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Trade
      </Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default TradeForm;
