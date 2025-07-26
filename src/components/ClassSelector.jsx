import { useEffect, useState } from 'react';

function ClassSelector({ onClassSelect }) {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('https://inesdi2025-resources-p2.fly.dev/v1/classes')
      .then((res) => res.json())
      .then((data) => setClasses(data))
      .catch((err) => console.error('Error fetching classes:', err));
  }, []);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor="class-select"><strong>Selecciona un tipo de hechizo:</strong></label>
      <select
        id="class-select"
        onChange={(e) => onClassSelect(e.target.value)}
        style={{ marginLeft: '1rem', padding: '0.5rem' }}
      >
        <option value="">-- Selecciona un tipo de hechizo --</option>
        {classes.map((cls) => (
          <option key={cls} value={cls}>{cls.charAt(0).toUpperCase() + cls.slice(1)}</option>
        ))}
      </select>
    </div>
  );
}

export default ClassSelector;