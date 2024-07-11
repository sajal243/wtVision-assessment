// src/components/Wrapper.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';


function Wrapper({ data, children }) {
  const location = useLocation();

  return (
    <div className="side_body">
      {location.pathname !== '/login' && <Sidebar data={data} />}
      {children}
    </div>
  );
}

export default Wrapper;
