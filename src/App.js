import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TradeForm from './components/TradeForm';

function App() {
  const [stocks, setStocks] = useState([]);
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    // Fetch initial stock prices
    axios.get('/api/stocks').then(response => setStocks(response.data));
  }, []);

  const handleTrade = () => {
    // Refresh holdings and stocks after a trade
    axios.get('/api/holdings').then(response => setHoldings(response.data));
  };

  return (
    <div>
      <h1>Stock Market App</h1>
      <TradeForm onTrade={handleTrade} />
      <h2>Stocks</h2>
      <ul>
        {stocks.map(stock => (
          <li key={stock.symbol}>
            {stock.symbol}: ${stock.price}
          </li>
        ))}
      </ul>
      <h2>Holdings</h2>
      <ul>
        {holdings.map(holding => (
          <li key={holding.symbol}>
            {holding.symbol}: {holding.quantity} shares
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
