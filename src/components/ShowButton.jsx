import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShowButton() {
  const navigate = useNavigate();

  const goToNextComponent = () => {
    navigate('/DisplayEvent.jsx'); // The path you defined in your routes
  };

  return (
    <div>
      <button onClick={goToNextComponent}>Go to Next Component</button>
    </div>
  );
}

export default ShowButton;
