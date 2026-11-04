import { useState, useEffect } from 'react'
import Icon from './Icon.jsx'
import { profile } from '../data/portfolio.js'

// ── Barra superior estilo app-bar de Home Assistant ─────────────
export default function AppBar({ areaName, onMenu, dark, onToggleTheme }) {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const time = now.toLocaleTimeString('es-CR', { hour: '2-digit', minute: '2-digit' })

  return (
    <header className="app-bar">
      <button className="app-bar__icon-btn" onClick={onMenu} aria-label="Abrir menú">
        <Icon name="menu" size={22} />
      </button>
      <div className="app-bar__title">
        <span className="app-bar__logo"><Icon name="home" size={18} /></span>
        <h1>{areaName}</h1>
      </div>
      <div className="app-bar__actions">
        <span className="app-bar__wifi" title="Conectado — siempre en línea"><Icon name="wifi" size={18} /></span>
        <span className="app-bar__clock">{time}</span>
        <button className="app-bar__icon-btn" onClick={onToggleTheme} aria-label="Cambiar tema" title={dark ? 'Tema claro' : 'Tema oscuro'}>
          <Icon name={dark ? 'power' : 'lightbulb'} size={20} />
        </button>
        <div className="app-bar__avatar" title={profile.name}>{profile.initials}</div>
      </div>
    </header>
  )
}
