import React from "react";

function StockList({ stocks }) {
  return (
    <ul>
      {stocks.map((stock, index) => (
        <li key={index}>
          <strong>{stock.name}</strong>: ${stock.price.toFixed(2)}
        </li>
      ))}
    </ul>
  );
}

export default StockList;
