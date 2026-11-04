import { useState, useEffect } from 'react'
import Icon from './Icon.jsx'
import { Card, CardHeader, SensorCard, LightCard, SwitchCard, GaugeCard, HistoryCard, EntityId } from './cards.jsx'
import {
  profile, headerSensors, skillGroups, experience, projects, services, education, activityLog, contactStates, greetingByHour,
} from '../data/portfolio.js'

// ═══════════════ RESUMEN (Overview) ═══════════════
export function OverviewView() {
  const [hour, setHour] = useState(new Date().getHours())
  useEffect(() => {
    const t = setInterval(() => setHour(new Date().getHours()), 60000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="view">
      {/* Hero — tarjeta de "estado general del hogar" */}
      <Card hover={false} className="hero-card">
        <div className="hero-card__left">
          <p className="hero-card__greeting">{greetingByHour(hour)}, soy</p>
          <h2 className="hero-card__name">{profile.name}</h2>
          <p className="hero-card__role">{profile.role}</p>
          <p className="hero-card__bio">{profile.bio}</p>
          <div className="hero-card__meta">
            <span className="chip"><Icon name="map" size={14} /> {profile.location}</span>
            <span className="chip chip--ok"><span className="dot dot--ok" /> {profile.status}</span>
          </div>
          <div className="hero-card__actions">
            <a className="btn btn--primary" href="#/contact"><Icon name="send" size={16} /> Contactar</a>
            <a className="btn btn--ghost" href={profile.socials[0].url} target="_blank" rel="noreferrer"><Icon name="github" size={16} /> GitHub</a>
            <a className="btn btn--ghost" href={profile.socials[1].url} target="_blank" rel="noreferrer"><Icon name="linkedin" size={16} /> LinkedIn</a>
          </div>
        </div>
        <div className="hero-card__right">
          <div className="hero-avatar">
            <span>{profile.initials}</span>
            <span className="hero-avatar__ring" />
          </div>
          <EntityId entity="person.paul_anderson_solano_torres" />
        </div>
      </Card>

      {/* Sensores resumen */}
      <SectionTitle icon="home" title="Estado del sistema" sub="sensores principales" />
      <div className="grid grid--sensors">
        {headerSensors.map((s) => <SensorCard key={s.entity} sensor={s} />)}
        <GaugeCard />
      </div>

      {/* Escenas rápidas = accesos a secciones */}
      <SectionTitle icon="lightbulb" title="Escenas rápidas" sub="automatizaciones hacia mi trabajo" />
      <div className="grid grid--scenes">
        <SceneCard icon="robot" title="Ver proyectos" text="6 integraciones destacadas" href="#/projects" />
        <SceneCard icon="history" title="Recorrer trayectoria" text="4 estaciones · 5 años" href="#/experience" />
        <SceneCard icon="switch" title="Activar un servicio" text="4 servicios disponibles" href="#/services" />
        <SceneCard icon="bell" title="Enviar notificación" text="Tiempo de respuesta < 24 h" href="#/contact" />
      </div>

      {/* Historia + entidades populares */}
      <div className="grid grid--two">
        <HistoryCard items={activityLog} />
        <Card hover={false}>
          <CardHeader icon="star" title="Entidades favoritas" subtitle="lo que más me define" />
          <div className="fav-grid">
            {[
              ['light.home_assistant', 'Domótica nivel 95%'],
              ['automation.code_to_deploy', 'CI/CD en 6 min'],
              ['sensor.lineas_de_codigo', '≈ 480k acumuladas'],
              ['binary_sensor.curiosidad', 'ON desde siempre'],
              ['climate.ambiente_laboral', 'Colaborativo · 22°C'],
              ['timer.aprendizaje', 'Continuo · sin alarma'],
            ].map(([e, v]) => (
              <div key={e} className="fav-item">
                <EntityId entity={e} />
                <span>{v}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

function SectionTitle({ icon, title, sub }) {
  return (
    <div className="section-title">
      <Icon name={icon} size={18} />
      <h2>{title}</h2>
      {sub && <span className="section-title__sub">{sub}</span>}
    </div>
  )
}

function SceneCard({ icon, title, text, href }) {
  return (
    <a className="scene-card" href={href}>
      <span className="scene-card__icon"><Icon name={icon} size={22} /></span>
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
      <Icon name="chevron" size={18} className="scene-card__arrow" />
    </a>
  )
}

// ═══════════════ HABILIDADES (luces/dimmers) ═══════════════
export function SkillsView() {
  return (
    <div className="view">
      <Card hover={false} className="intro-card">
        <h2>💡 Iluminación por áreas</h2>
        <p>Cada habilidad es una luz regulable: su brillo representa mi nivel de dominio. Puedes atenuarlas o apagarlas para explorar.</p>
      </Card>
      {skillGroups.map((g) => (
        <section key={g.area}>
          <SectionTitle icon={g.icon} title={g.area} sub={`${g.lights.length} luces`} />
          <div className="grid grid--lights">
            {g.lights.map((l) => <LightCard key={l.entity} light={l} />)}
          </div>
        </section>
      ))}
    </div>
  )
}

// ═══════════════ TRAYECTORIA (history) ═══════════════
export function ExperienceView() {
  return (
    <div className="view">
      <Card hover={false} className="intro-card">
        <h2>🕘 Historial del registro</h2>
        <p>Línea temporal de mi carrera, como el logbook de Home Assistant: cada rol es un período de actividad del sistema.</p>
      </Card>
      <div className="timeline">
        {experience.map((job) => (
          <Card key={job.company} className={`timeline-item ${job.current ? 'timeline-item--current' : ''}`}>
            <div className="timeline-item__rail">
              <span className={`dot dot--${job.current ? 'ok pulse' : 'off'}`} />
              <span className="timeline-item__line" />
            </div>
            <div className="timeline-item__body">
              <div className="timeline-item__head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="timeline-item__company">{job.company} · {job.place}</p>
                </div>
                <span className={`badge ${job.current ? 'badge--ok' : 'badge--muted'}`}>{job.period}</span>
              </div>
              <ul className="timeline-item__bullets">
                {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="tags">
                {job.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <EntityId entity={`binary_sensor.${job.company.toLowerCase().replace(/[^a-z]+/g, '_')}_activo`} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

// ═══════════════ PROYECTOS (integraciones) ═══════════════
export function ProjectsView() {
  return (
    <div className="view">
      <Card hover={false} className="intro-card">
        <h2>🤖 Integraciones instaladas</h2>
        <p>Proyectos reales funcionando en producción, como add-ons dentro de mi ecosistema profesional.</p>
      </Card>
      <div className="grid grid--projects">
        {projects.map((p) => (
          <Card key={p.name} className="project-card" >
            <div className="project-card__banner" style={{ '--accent': p.color }}>
              <Icon name={p.featured ? 'star' : 'robot'} size={22} />
              <span>{p.kind}</span>
              {p.featured && <em className="project-card__flag">Destacado</em>}
            </div>
            <div className="project-card__body">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="project-card__metric">
                <span className="project-card__num" style={{ color: p.color }}>{p.value.toLocaleString('es')}</span>
                <small>{p.unit}</small>
              </div>
              <EntityId entity={p.entities} />
              <div className="tags">
                {p.stack.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <a className="btn btn--ghost project-card__repo" href={p.repo} target="_blank" rel="noreferrer">
                <Icon name="external" size={15} /> Ver repositorio
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

// ═══════════════ SERVICIOS (switches) ═══════════════
export function ServicesView() {
  return (
    <div className="view">
      <Card hover={false} className="intro-card">
        <h2>🔌 Interruptores de servicio</h2>
        <p>Los servicios que ofrezco están "encendidos" y listos para activarse con tu proyecto.</p>
      </Card>
      <div className="grid grid--switches">
        {services.map((s) => <SwitchCard key={s.entity} service={s} />)}
      </div>
      <Card hover={false} className="cta-card">
        <Icon name="rocket" size={26} />
        <div>
          <h3>¿Activamos una escena juntos?</h3>
          <p>Cuéntame tu idea y te envío una propuesta técnica en menos de 48 horas.</p>
        </div>
        <a className="btn btn--primary" href="#/contact"><Icon name="send" size={16} /> Solicitar</a>
      </Card>
    </div>
  )
}

// ═══════════════ FORMACIÓN (updates) ═══════════════
export function EducationView()
  {
  return (
    <div className="view">
      <Card hover={false} className="intro-card">
        <h2>⬆️ Actualizaciones del firmware</h2>
        <p>Mi formación como versiones de software instaladas y verificadas.</p>
      </Card>
      <div className="grid grid--edu">
        {education.map((e) => (
          <Card key={e.title} className="edu-card">
            <div className="edu-card__icon"><Icon name={e.icon} size={22} /></div>
            <div className="edu-card__body">
              <span className="badge badge--muted">{e.type} · {e.year}</span>
              <h3>{e.title}</h3>
              <p>{e.org}</p>
              <div className="edu-card__status"><Icon name="check" size={15} /> Instalado correctamente</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

// ═══════════════ CONTACTO (notify) ═══════════════
export function ContactView() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' })
  const [sent, setSent] = useState(false)

  const submit = (ev) => {
    ev.preventDefault()
    if (!form.name || !form.email || !form.msg) return
    setSent(true)
  }

  return (
    <div className="view">
      <Card hover={false} className="intro-card">
        <h2>🔔 Canal de notificaciones</h2>
        <p>Elige un servicio de notify para contactarme. Todos verificados y en línea.</p>
      </Card>
      <div className="grid grid--two">
        <div className="grid grid--contacts">
          {contactStates.map((c) => (
            <Card key={c.id} className="contact-card">
              <span className="contact-card__icon"><Icon name={c.icon} size={20} /></span>
              <div className="contact-card__text">
                <strong>{c.name}</strong>
                <p>{c.detail}</p>
                <EntityId entity={c.entity} />
              </div>
              <div className="contact-card__meta">
                <span className="badge badge--ok"><span className="dot dot--ok" /> online</span>
                <small>{c.responseTime}</small>
              </div>
            </Card>
          ))}
        </div>

        <Card hover={false} className="notify-form-card">
          <CardHeader icon="send" title="service.notify_portfolio" subtitle="formulario directo" />
          {sent ? (
            <div className="notify-success">
              <Icon name="check" size={40} />
              <h3>¡Notificación enviada!</h3>
              <p>Gracias {form.name.split(' ')[0]}. Te responderé en menos de 24 horas.</p>
              <button className="btn btn--ghost" onClick={() => { setSent(false); setForm({ name: '', email: '', msg: '' }) }}>
                Enviar otra
              </button>
            </div>
          ) : (
            <form className="notify-form" onSubmit={submit}>
              <label>
                <span>sensor.remitente_nombre</span>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Tu nombre" required />
              </label>
              <label>
                <span>sensor.remitente_email</span>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@correo.com" required />
              </label>
              <label>
                <span>message.texto</span>
                <textarea rows="5" value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} placeholder="Cuéntame sobre tu proyecto…" required />
              </label>
              <button className="btn btn--primary" type="submit"><Icon name="send" size={16} /> Llamar al servicio</button>
            </form>
          )}
        </Card>
      </div>
    </div>
  )
}
