# 🏠 Portafolio Dashboard — Paul Anderson Solano Torres

Portafolio profesional con una UI **altamente inspirada en Home Assistant**: cada faceta de la carrera está modelada como una *entidad* del hogar inteligente.

## ✨ Concepto: el portafolio como un "hogar inteligente"

| Sección | Metáfora de Home Assistant | Interacción real |
|---|---|---|
| **Resumen** | Summary view con sensores + escenas | Gauge animado, saludo según la hora, tarjetas de `sensor.*` |
| **Habilidades** | Luces regulables (`light.*`) | Cada skill es un **dimmer**: encender/apagar y atenuar con slider |
| **Trayectoria** | Logbook / historial | Timeline estilo HA con estado `on` (activo) / `off` (histórico) |
| **Proyectos** | Integraciones instaladas | Tarjetas con métricas tipo `sensor.casaflow_users` |
| **Servicios** | Interruptores (`switch.*`) | **Toggles funcionales** para "activar/pausar" servicios |
| **Formación** | Update entities | Certificados como "paquetes instalados correctamente ✅" |
| **Contacto** | Servicios `notify.*` | Formulario que simula llamar a `service.notify_portfolio` |

Detalles fieles a HA: app-bar con reloj en vivo, sidebar con "areas", IDs de entidad en monospace (`person.paul_anderson`, `binary_sensor.disponibilidad`…), colores `#185a9f` / `#41adf2` / ámbar `#f9c83c`, tema claro/oscuro con toggle persistente, iconografía Material Design Icons y diseño 100% responsive (sidebar off-canvas en móvil).

## 🚀 Cómo ejecutar

```bash
npm install       # dependencias
npm run dev       # desarrollo → http://localhost:5173
npm run build     # build de producción → dist/
npm run preview   # servir el build → http://localhost:4173
```

## 📁 Estructura

```
src/
├── App.jsx                  # layout shell + hash routing (#/skills, #/projects…)
├── data/portfolio.js        # TODO el contenido del portafolio como "entidades"
├── components/
│   ├── Icon.jsx             # MDI icons inline (SVG)
│   ├── AppBar.jsx           # barra superior con reloj / avatar / tema
│   ├── Sidebar.jsx          # navegación por "areas"
│   ├── cards.jsx            # SensorCard, LightCard, SwitchCard, GaugeCard, HistoryCard
│   └── views.jsx            # 7 vistas del dashboard
└── styles/global.css        # design system estilo HA (claro/oscuro)
```

## ✏️ Personalizar

Edita `src/data/portfolio.js` — nombre, experiencia, proyectos, skills y contactos están centralizados ahí; la UI se regenera sola.
