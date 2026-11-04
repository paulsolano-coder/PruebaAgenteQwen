import { useState, useEffect } from 'react'
import Icon from './Icon.jsx'

// ── Tarjeta base estilo "state card" de HA ──────────────────────
export function Card({ children, className = '', hover = true }) {
  return <div className={`ha-card ${hover ? 'ha-card--hover' : ''} ${className}`}>{children}</div>
}

export function CardHeader({ icon, title, subtitle, right }) {
  return (
    <div className="ha-card__header">
      <div className="ha-card__header-left">
        {icon && <span className="ha-card__header-icon"><Icon name={icon} size={18} /></span>}
        <div>
          <h3 className="ha-card__title">{title}</h3>
          {subtitle && <p className="ha-card__subtitle">{subtitle}</p>}
        </div>
      </div>
      {right && <div className="ha-card__header-right">{right}</div>}
    </div>
  )
}

export function EntityId({ entity }) {
  return <span className="entity-id">{entity}</span>
}

// ── Sensor card ─────────────────────────────────────────────────
export function SensorCard({ sensor }) {
  const { name, value, unit, icon, trend, note, ok } = sensor
  return (
    <Card className="sensor-card">
      <div className="sensor-card__top">
        <span className="sensor-card__icon"><Icon name={icon || 'home'} size={20} /></span>
        <span className={`badge ${ok ? 'badge--ok' : ''}`}>{ok ? 'ON' : 'ACTIVO'}</span>
      </div>
      <div className="sensor-card__value">
        {typeof value === 'number' ? value.toLocaleString('es') : value}
        {unit && <small className="sensor-card__unit"> {unit}</small>}
      </div>
      <div className="sensor-card__name">{name}</div>
      {(trend || note) && <div className="sensor-card__trend">↗ {trend || note}</div>}
      {sensor.entity && <EntityId entity={sensor.entity} />}
    </Card>
  )
}

// ── Light (skill dimmer) con slider real ────────────────────────
export function LightCard({ light }) {
  const [on, setOn] = useState(true)
  const [level, setLevel] = useState(light.level)

  return (
    <Card className={`light-card ${on ? 'light-card--on' : 'light-card--off'}`}>
      <button
        className={`light-card__bulb ${on ? 'glow' : ''}`}
        onClick={() => setOn(!on)}
        aria-label={`Encender o apagar ${light.name}`}
        title={on ? 'Apagar' : 'Encender'}
      >
        <Icon name="lightbulb" size={26} />
      </button>
      <div className="light-card__body">
        <div className="light-card__row">
          <span className="light-card__name">{light.name}</span>
          <span className="light-card__level">{on ? `${level}%` : 'OFF'}</span>
        </div>
        <input
          type="range" min={0} max={100} value={on ? level : 0}
          disabled={!on}
          onChange={(e) => setLevel(Number(e.target.value))}
          className="dimmer"
          style={{ '--fill': on ? `${level}%` : '0%' }}
          aria-label={`Nivel de dominio de ${light.name}`}
        />
        <EntityId entity={light.entity} />
      </div>
    </Card>
  )
}

// ── Switch card (servicios) ─────────────────────────────────────
export function SwitchCard({ service }) {
  const [on, setOn] = useState(true)
  return (
    <Card className={`switch-card ${on ? 'switch-card--on' : ''}`}>
      <div className="switch-card__main">
        <span className="switch-card__icon"><Icon name={service.icon} size={22} /></span>
        <div className="switch-card__text">
          <div className="switch-card__name">{service.name}</div>
          <div className="switch-card__desc">{service.desc}</div>
          <div className="switch-card__price">{service.price}</div>
        </div>
      </div>
      <div className="switch-card__foot">
        <EntityId entity={service.entity} />
        <label className="toggle" title={on ? 'Servicio activo — disponible para contratar' : 'Pausado'}>
          <input type="checkbox" checked={on} onChange={() => setOn(!on)} />
          <span className="toggle__track"><span className="toggle__thumb" /></span>
        </label>
      </div>
    </Card>
  )
}

// ── Climate-like gauge: "Confort del cliente" animado ───────────
export function GaugeCard({ label = 'Satisfacción de clientes', value = 98, sub = 'basado en 24 proyectos' }) {
  const [anim, setAnim] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setAnim(value), 300)
    return () => clearTimeout(t)
  }, [value])
  const pct = anim / 100
  // arco semicircular
  const r = 54, c = Math.PI * r
  return (
    <Card className="gauge-card" hover={false}>
      <svg viewBox="0 0 140 82" className="gauge-card__svg">
        <path d="M16 76 A54 54 0 0 1 124 76" fill="none" stroke="var(--mds-divider)" strokeWidth="10" strokeLinecap="round" />
        <path
          d="M16 76 A54 54 0 0 1 124 76" fill="none" stroke="url(#gaugeGrad)" strokeWidth="10" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c * (1 - pct)}
          style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(.22,1,.36,1)' }}
        />
        <defs>
          <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#039e54" />
            <stop offset="100%" stopColor="#43cff3" />
          </linearGradient>
        </defs>
        <text x="70" y="66" textAnchor="middle" className="gauge-card__num">{Math.round(anim)}%</text>
      </svg>
      <div className="gauge-card__label">{label}</div>
      <div className="gauge-card__sub">{sub}</div>
    </Card>
  )
}

// ── Timeline de actividad (logbook) ─────────────────────────────
export function HistoryCard({ items, title = 'Actividad reciente', icon = 'history' }) {
  return (
    <Card hover={false}>
      <CardHeader icon={icon} title={title} subtitle="logbook · eventos del hogar profesional" />
      <ul className="history-list">
        {items.map((it, i) => (
          <li key={i} className="history-item">
            <span className="history-item__dot"><Icon name={it.icon} size={14} /></span>
            <div className="history-item__content">
              <p>{it.text}</p>
              <span className="history-item__time">{it.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}
