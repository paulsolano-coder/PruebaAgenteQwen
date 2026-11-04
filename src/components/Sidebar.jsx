import Icon from './Icon.jsx'
import { areas, profile } from '../data/portfolio.js'

// ── Sidebar de navegación (áreas del "hogar") ───────────────────
export default function Sidebar({ active, onChange, open, onClose }) {
  return (
    <>
      <div className={`scrim ${open ? 'scrim--show' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
        <div className="sidebar__brand">
          <div className="sidebar__logo"><Icon name="home" size={22} /></div>
          <div>
            <strong>{profile.shortName}</strong>
            <span className="sidebar__sub">Panel · Portafolio</span>
          </div>
        </div>

        <nav className="sidebar__nav" role="tablist" aria-label="Secciones del portafolio">
          {areas.map((a) => (
            <button
              key={a.id}
              role="tab"
              aria-selected={active === a.id}
              className={`sidebar__item ${active === a.id ? 'sidebar__item--active' : ''}`}
              onClick={() => { onChange(a.id); onClose() }}
            >
              <Icon name={a.icon} size={20} />
              <span>{a.name}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar__footer">
          <div className="sidebar__status">
            <span className="dot dot--ok" /> Sistema operativo
          </div>
          <EntityLine entity="person.paul_anderson" value="En casa · disponible" />
          <EntityLine entity="sensor.uptime_career" value="99.9%" />
          <p className="sidebar__copy">© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </aside>
    </>
  )
}

function EntityLine({ entity, value }) {
  return (
    <div className="sidebar__entity">
      <span className="entity-id">{entity}</span>
      <small>{value}</small>
    </div>
  )
}
