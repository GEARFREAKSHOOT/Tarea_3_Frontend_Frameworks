import { useEffect, useState } from 'react';
import SpellList from './components/SpellList';
import ClassSelector from './components/ClassSelector';
import './App.css';

function App() {
  const [selectedClass, setSelectedClass] = useState('');
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const fetchSpells = async () => {
      if (!selectedClass) return;

      try {
        const idsRes = await fetch(`https://inesdi2025-resources-p2.fly.dev/v1/classes/${selectedClass}/spells`);
        const ids = await idsRes.json();

        const spellData = await Promise.all(
          ids.map(async (id) => {
            const res = await fetch(`https://inesdi2025-resources-p2.fly.dev/v1/spells/${id}`);
            return await res.json();
          })
        );

        const filtered = spellData.filter(
          (spell) =>
            spell.name && spell.action && spell.duration && spell.range && spell.type
        );

        setSpells(filtered);
      } catch (error) {
        console.error('Error fetching spells:', error);
      }
    };

    fetchSpells();
  }, [selectedClass]);

  return (
    <div className="app-container">
      <div className="header">
        <h1>Clasificación de hechizos</h1>
        <div className="selector-wrapper">
          <ClassSelector onClassSelect={setSelectedClass} />
        </div>
      </div>
      <SpellList spells={spells} />
    </div>
  );
}

export default App;