// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Welcome to English Mastery</h1>
      <p className="mt-2">Advanced English training for graduate students</p>
      <Link to="/login" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded">Log In</Link>
    </div>
  );
}
