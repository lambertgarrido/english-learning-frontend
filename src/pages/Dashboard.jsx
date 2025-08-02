// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../api';

export default function Dashboard() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/lessons`)
      .then(res => res.json())
      .then(data => setLessons(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Your Lessons</h2>
      <div className="mt-4 space-y-2">
        {lessons.map(lesson => (
          <Link key={lesson._id} to={`/lesson/${lesson._id}`} className="block p-4 bg-gray-100 rounded hover:bg-gray-200">
            {lesson.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
