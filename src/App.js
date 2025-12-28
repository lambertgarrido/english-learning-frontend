import { useEffect, useState } from "react";

function App() {
  const [lessons, setLessons] = useState([]);
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

  if (loading) return <p>Loading lessons...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Advanced English Lessons</h1>

      {lessons.map(lesson => (
        <div key={lesson._id} style={{ marginBottom: "1.5rem" }}>
          <h2>{lesson.title}</h2>
          <p>{lesson.content}</p>

          {lesson.questions?.map((q, i) => (
            <div key={i}>
              <strong>{q.prompt}</strong>
              <ul>
                {q.options?.map(opt => (
                  <li key={opt}>{opt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
