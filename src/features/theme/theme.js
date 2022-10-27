import React from 'react';
import { useDispatch } from 'react-redux';
import themeColor from './themeSlice';

function Theme() {
  const [color, setColor] = React.useState('white');
  const dispatch = useDispatch();
  return (
    <div>
      <input
        placeholder="enter color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(themeColor(color));
        }}>
        CHnage Color
      </button>
      <h2>{color}</h2>
    </div>
  );
}

export default Theme;
