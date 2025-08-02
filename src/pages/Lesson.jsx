// src/pages/Lesson.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../api';

export default function Lesson() {
  const { id } = useParams();
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/lessons/${id}`)
      .then(res => res.json())
      .then(data => setLesson(data));
  }, [id]);

  if (!lesson) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">{lesson.title}</h2>
      <p>{lesson.content}</p>
    </div>
  );
}
