import styles from './SpellCard.module.css';

function SpellCard({ spell }) {
  return (
    <div className={styles.card}>
      {/* Imagen */}
      {spell.icon && (
        <img
          src={spell.icon}
          alt={spell.name}
          className={styles.icon}
        />
      )}

      {/* Nombre + Nivel */}
      <h3>
        {spell.name} <small style={{ color: '#333' }}>Lv. {spell.level}</small>
      </h3>

      {/* Etiquetas */}
      <div className={styles.tags}>
        <span className={`${styles.badge} ${styles.cantrip}`}>Cantrip</span>
        {spell.upcast && (
          <span className={`${styles.badge} ${styles.upcast}`}>Upcast</span>
        )}
      </div>

      {/* Línea divisoria */}
      <hr className={styles.divider} />

      {/* Descripción */}
      <a
        href={spell.url}
        target="_blank"
        rel="noopener noreferrer"
          className={styles.url}>
          Ver más detalles del hechizo
      </a>
      
      {/* Info técnica */}
      <div>
        <div className={styles.infoRow}><strong>Action:</strong><span>{spell.action}</span></div>
        <div className={styles.infoRow}><strong>Duration:</strong><span>{spell.duration}</span></div>
        <div className={styles.infoRow}><strong>Range:</strong><span>{spell.range}</span></div>
        <div className={styles.infoRow}><strong>Type:</strong><span>{spell.type}</span></div>
      </div>

      {/* Damage */}
      {spell.damage && spell.damage.length > 0 && (
        <div className={styles.infoRow} style={{ alignItems: 'flex-start' }}>
          <strong>Damage:</strong>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
            {[...new Map(
              spell.damage.map(dmg => [JSON.stringify(dmg), dmg])
                ).values()].map((dmg, index) => (
                <li key={index} className={styles.damageItem}>
                  <div><strong>dice:</strong> {dmg.dice}</div>
                  <div><strong>type:</strong> {dmg.damageType}</div>
                  {dmg.weapon && <div><strong>weapon:</strong> yes</div>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

export default SpellCard;