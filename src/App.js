// Frontend: Interactive lesson question UI
// File: src/App.js

import { useEffect, useState } from "react";

function App() {
  const [lessons, setLessons] = useState([]);
  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://english-learning-backend-3l57.onrender.com/api/lessons")
      .then(res => res.json())
      .then(data => {
        setLessons(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleSelect = (lessonId, qIndex, option) => {
    setSelected(prev => ({
      ...prev,
      [`${lessonId}-${qIndex}`]: option
    }));
  };

  if (loading) return <p>Loading lessons...</p>;

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "auto" }}>
      <h1>Advanced English Lessons</h1>

      {lessons.map(lesson => (
        <div key={lesson._id} style={{ marginBottom: "2rem" }}>
          <h2>{lesson.title}</h2>
          <p>{lesson.content}</p>

          {lesson.questions?.map((q, i) => {
            const key = `${lesson._id}-${i}`;
            const userAnswer = selected[key];
            const isCorrect = userAnswer === q.answer;

            return (
              <div key={i} style={{ marginTop: "1rem" }}>
                <strong>{q.prompt}</strong>
                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  {q.options?.map(opt => (
                    <li
                      key={opt}
                      onClick={() => handleSelect(lesson._id, i, opt)}
                      style={{
                        cursor: "pointer",
                        padding: "0.5rem",
                        margin: "0.25rem 0",
                        border: "1px solid #ccc",
                        backgroundColor:
                          userAnswer === opt
                            ? opt === q.answer
                              ? "#c8f7c5"
                              : "#f7c5c5"
                            : "white"
                      }}
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
                {userAnswer && (
                  <p>
                    {isCorrect ? "✅ Correct!" : "❌ Incorrect. Try again."}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default App;
