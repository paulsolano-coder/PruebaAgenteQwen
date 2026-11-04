// ═══════════════════════════════════════════════════════════════
//  DATOS DEL "HOGAR" (portafolio) — modelados como entidades de
//  Home Assistant: sensores, luces, switches, climate, timers…
// ═══════════════════════════════════════════════════════════════

export const profile = {
  name: 'Paul Anderson Solano Torres',
  shortName: 'Paul A. Solano Torres',
  initials: 'PS',
  role: 'Ingeniero de Software · Full Stack & Automatización',
  location: 'Costa Rica 🇨🇷',
  status: 'Disponible para nuevos proyectos',
  bio: 'Construyo software como quien automatiza una casa inteligente: con sistemas confiables, sensores bien calibrados y escenas que simplemente funcionan. Me especializo en desarrollo web full stack, integraciones API e infraestructura IoT/automatización.',
  email: 'paul.solano@example.com',
  phone: '+506 0000-0000',
  socials: [
    { id: 'github', label: 'GitHub', entity: 'sensor.github_profile', url: 'https://github.com/paulsolano' },
    { id: 'linkedin', label: 'LinkedIn', entity: 'sensor.linkedin_profile', url: 'https://linkedin.com/in/paulsolano' },
    { id: 'mail', label: 'Correo', entity: 'notify.email', url: 'mailto:paul.solano@example.com' },
  ],
}

// ── Saludo / estado general ─────────────────────────────────────
export const greetingByHour = (h) => {
  if (h < 6) return 'Modo nocturno activo ☾'
  if (h < 12) return 'Buenos días'
  if (h < 18) return 'Buenas tardes'
  return 'Buenas noches'
}

// ── Sensores de cabecera (summary cards) ────────────────────────
export const headerSensors = [
  { entity: 'sensor.anios_experiencia', name: 'Años de experiencia', value: 5, unit: 'años', icon: 'clock', trend: '+1 este año' },
  { entity: 'binary_sensor.disponibilidad', name: 'Disponibilidad', value: 'ON', icon: 'power', ok: true, note: 'Abierto a ofertas' },
  { entity: 'sensor.proyectos_completados', name: 'Proyectos entregados', value: 32, unit: '', icon: 'briefcase', trend: 'media 3/año' },
  { entity: 'update.habilidades', name: 'Stack actualizado', value: 'v2026.11', icon: 'update', note: 'hace 2 semanas' },
]

// ── Áreas del dashboard = facetas profesionales ─────────────────
export const areas = [
  { id: 'overview', name: 'Resumen', icon: 'home' },
  { id: 'skills', name: 'Habilidades', icon: 'lightbulb' },
  { id: 'experience', name: 'Trayectoria', icon: 'history' },
  { id: 'projects', name: 'Proyectos', icon: 'robot' },
  { id: 'services', name: 'Servicios', icon: 'switch' },
  { id: 'education', name: 'Formación', icon: 'book' },
  { id: 'contact', name: 'Contacto', icon: 'bell' },
]

// ── SKILLS: luces regulables (dimmers) ──────────────────────────
export const skillGroups = [
  {
    area: 'Frontend',
    icon: 'monitor',
    lights: [
      { name: 'React / Next.js', level: 92, entity: 'light.react_nextjs' },
      { name: 'TypeScript', level: 88, entity: 'light.typescript' },
      { name: 'HTML / CSS / Tailwind', level: 90, entity: 'light.html_css' },
      { name: 'Vue.js', level: 72, entity: 'light.vuejs' },
    ],
  },
  {
    area: 'Backend',
    icon: 'server',
    lights: [
      { name: 'Node.js / Express', level: 90, entity: 'light.nodejs' },
      { name: 'Python / FastAPI', level: 84, entity: 'light.python' },
      { name: 'PostgreSQL / MongoDB', level: 82, entity: 'light.databases' },
      { name: 'REST & GraphQL APIs', level: 88, entity: 'light.apis' },
    ],
  },
  {
    area: 'IoT & Automatización',
    icon: 'chip',
    lights: [
      { name: 'Home Assistant', level: 95, entity: 'light.home_assistant' },
      { name: 'ESP32 / Arduino', level: 85, entity: 'light.esp32_arduino' },
      { name: 'MQTT / Zigbee', level: 87, entity: 'light.mqtt_zigbee' },
      { name: 'Node-RED', level: 80, entity: 'light.node_red' },
    ],
  },
  {
    area: 'DevOps & Cloud',
    icon: 'cloud',
    lights: [
      { name: 'Docker / Compose', level: 86, entity: 'light.docker' },
      { name: 'CI/CD (GitHub Actions)', level: 81, entity: 'light.cicd' },
      { name: 'Linux / Nginx', level: 84, entity: 'light.linux' },
      { name: 'AWS / GCP', level: 70, entity: 'light.cloud' },
    ],
  },
]

// ── EXPERIENCIA: historial / registros ──────────────────────────
export const experience = [
  {
    period: '2024 — Hoy',
    role: 'Senior Full Stack Developer',
    company: 'TechNova Solutions',
    place: 'Remoto',
    state: 'on',
    current: true,
    bullets: [
      'Liderazgo técnico de un equipo de 5 desarrolladores en producto SaaS de monitoreo IoT (+12k dispositivos conectados).',
      'Migración de monolito a microservicios con Docker y Kubernetes, reduciendo el tiempo de despliegue de 40 min a 6 min.',
      'Diseño de pipeline CI/CD con GitHub Actions y pruebas automatizadas (cobertura 87%).',
    ],
    tags: ['React', 'Node.js', 'Kubernetes', 'MQTT'],
  },
  {
    period: '2022 — 2024',
    role: 'Software Developer · IoT Engineer',
    company: 'Domótica Centroamericana S.A.',
    place: 'San José, CR',
    state: 'off',
    current: false,
    bullets: [
      'Desarrollo de pasarelas de integración entre Home Assistant y sistemas de edificios (Modbus, KNX, Zigbee).',
      'Creación de dashboards personalizados para clientes corporativos con alertas inteligentes y automatizaciones por escenas.',
      'Reducción del 35% del consumo energético en instalaciones piloto mediante reglas de automatización.',
    ],
    tags: ['Python', 'Home Assistant', 'ESP32', 'Zigbee'],
  },
  {
    period: '2020 — 2022',
    role: 'Frontend Developer',
    company: 'PixelForge Studio',
    place: 'Heredia, CR',
    state: 'off',
    current: false,
    bullets: [
      'Construcción de aplicaciones web responsivas para clientes retail y banca con React y TypeScript.',
      'Implementación de design systems y componentes accesibles (WCAG AA).',
      'Optimización de rendimiento: Lighthouse promedio de 62 → 94 en 14 sitios.',
    ],
    tags: ['React', 'TypeScript', 'SCSS', 'A11y'],
  },
  {
    period: '2019 — 2020',
    role: 'Desarrollador Junior & Soporte Técnico',
    company: 'UniTech Labs',
    place: 'Alajuela, CR',
    state: 'off',
    current: false,
    bullets: [
      'Mantenimiento de aplicaciones internas PHP/MySQL y automatización de reportes con scripts Python.',
      'Soporte de infraestructura: redes, servidores y respaldo diario (uptime 99.7%).',
    ],
    tags: ['PHP', 'MySQL', 'Python', 'Linux'],
  },
]

// ── PROYECTOS: "integraciones" instaladas ───────────────────────
export const projects = [
  {
    name: 'CasaFlow',
    kind: 'Plataforma domótica',
    desc: 'Plataforma web + app para controlar escenarios de hogar inteligente con sincronización en tiempo real vía WebSocket y MQTT.',
    entities: 'sensor.casaflow_users',
    value: 4200, unit: 'usuarios',
    stack: ['React', 'Node.js', 'MQTT', 'PostgreSQL'],
    color: '#41adf2',
    repo: 'https://github.com/paulsolano/casaflow',
    featured: true,
  },
  {
    name: 'EnergyLens',
    kind: 'Dashboard de eficiencia',
    desc: 'Visualización de consumo eléctrico por circuito con pronóstico de demanda (regresión) y alertas de anomalías.',
    entities: 'sensor.energy_lens_devices',
    value: 980, unit: 'dispositivos',
    stack: ['Next.js', 'Python', 'InfluxDB', 'Grafana'],
    color: '#43cff3',
    repo: 'https://github.com/paulsolano/energylens',
    featured: true,
  },
  {
    name: 'SceneKit',
    kind: 'Librería open source',
    desc: 'Motor declarativo para crear automatizaciones tipo "si esto, entonces aquello" (rule engine ligero embebible).',
    entities: 'sensor.scenekit_stars',
    value: 640, unit: '★ GitHub',
    stack: ['TypeScript', 'Vitest', 'npm'],
    color: '#f9c83c',
    repo: 'https://github.com/paulsolano/scenekit',
    featured: false,
  },
  {
    name: 'FleetGuard',
    kind: 'Monitoreo logístico',
    desc: 'Sistema de rastreo GPS y telemetría para flotas con geocercas, notificaciones push y reportes automáticos.',
    entities: 'sensor.fleetguard_vehicles',
    value: 150, unit: 'vehículos',
    stack: ['React Native', 'FastAPI', 'Redis', 'GCP'],
    color: '#03bfcf',
    repo: 'https://github.com/paulsolano/fleetguard',
    featured: false,
  },
  {
    name: 'Portada HA',
    kind: 'Theme / Custom card',
    desc: 'Tema y tarjetas personalizadas para Home Assistant inspiradas en portafolios profesionales; publicado en HACS.',
    entities: 'sensor.portada_downloads',
    value: 2100, unit: 'descargas',
    stack: ['Lovelace', 'JS', 'CSS'],
    color: '#a280e6',
    repo: 'https://github.com/paulsolano/portada',
    featured: false,
  },
  {
    name: 'AgroSense',
    kind: 'IoT agrícola',
    desc: 'Estaciones de campo con ESP32 para riego automatizado según humedad de suelo, pronóstico y precios de energía.',
    entities: 'sensor.agrosense_stations',
    value: 45, unit: 'estaciones',
    stack: ['ESP32', 'MQTT', 'Node-RED', 'LoRa'],
    color: '#4caf50',
    repo: 'https://github.com/paulsolano/agrosense',
    featured: false,
  },
]

// ── SERVICIOS: switches ─────────────────────────────────────────
export const services = [
  { name: 'Desarrollo Web Full Stack', desc: 'Aplicaciones SPA/SSR, APIs REST y panel de administración llave en mano.', icon: 'web', price: 'Desde $2,500', entity: 'switch.service_fullstack' },
  { name: 'Integración IoT & Domótica', desc: 'Conexión de dispositivos, sensores y plataformas con Home Assistant o soluciones a medida.', icon: 'chip', price: 'Desde $1,800', entity: 'switch.service_iot' },
  { name: 'Automatización de Procesos', desc: 'Workflows con Node-RED, scripts y colas de tareas para eliminar trabajo repetitivo.', icon: 'robot', price: 'Desde $1,200', entity: 'switch.service_automation' },
  { name: 'Consultoría & Code Review', desc: 'Auditoría de arquitectura, calidad de código y planes de mejora continua.', icon: 'shield', price: '$65/hora', entity: 'switch.service_consulting' },
]

// ── FORMACIÓN: "updates" disponibles/instalados ─────────────────
export const education = [
  { year: '2025', title: 'Certified Home Assistant Advanced Power User', org: 'Nabu Casa', type: 'Certificación', icon: 'badge' },
  { year: '2023', title: 'AWS Certified Cloud Practitioner', org: 'Amazon Web Services', type: 'Certificación', icon: 'badge' },
  { year: '2019', title: 'B.S. en Ingeniería en Computación', org: 'Universidad Nacional (UNA), Costa Rica', type: 'Grado', icon: 'cap' },
  { year: '2021', title: 'Specialization: Microservices Architecture', org: 'Coursera / UT Austin', type: 'Curso', icon: 'book' },
]

// ── ACTIVIDAD reciente: timeline / logs ─────────────────────────
export const activityLog = [
  { time: 'hace 2 días', icon: 'rocket', text: 'Desplegué EnergyLens v2.4 con pronóstico de demanda por ML.' },
  { time: 'hace 1 semana', icon: 'star', text: 'SceneKit superó las 640 ★ en GitHub — gracias a la comunidad.' },
  { time: 'hace 2 semanas', icon: 'update', text: 'Actualicé mi stack: React 19, Vite 7 y Node 22 en producción.' },
  { time: 'hace 1 mes', icon: 'certificate', text: 'Certificación Home Assistant Advanced completada ✅' },
  { time: 'hace 2 meses', icon: 'handshake', text: 'Charla invitada: "Domótica para pymes" en Meetup CR IoT.' },
]

// ── Contactos favoritos: personas del hogar ─────────────────────
export const contactStates = [
  { id: 'email', entity: 'notify.gmail', name: 'Correo electrónico', detail: 'paul.solano@example.com', icon: 'mail', responseTime: '< 24 h' },
  { id: 'whatsapp', entity: 'notify.whatsapp', name: 'WhatsApp', detail: '+506 0000-0000', icon: 'phone', responseTime: '< 2 h' },
  { id: 'linkedin', entity: 'sensor.linkedin', name: 'LinkedIn', detail: '/in/paulsolano', icon: 'linkedin', responseTime: '< 12 h' },
  { id: 'github', entity: 'sensor.github', name: 'GitHub', detail: '@paulsolano', icon: 'github', responseTime: '< 48 h' },
]
