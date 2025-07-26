import SpellCard from './SpellCard';
import styles from './SpellList.module.css';

function SpellList({ spells }) {
  return (
    <div className={styles.container}>
      {spells.map((spell) => (
        <SpellCard key={spell.id} spell={spell} />
      ))}
    </div>
  );
}

export default SpellList;