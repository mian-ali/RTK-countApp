import React from 'react';
import { useSelector } from 'react-redux';
function Coin() {
  const count = useSelector((state) => state.counter.count);
  const themeColor = useSelector((state) => state.theme.color);

  return <div style={{ color: themeColor }}>Coin:{count} </div>;
}

export default Coin;
