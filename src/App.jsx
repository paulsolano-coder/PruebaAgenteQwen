import { useState, useEffect } from 'react'
import AppBar from './components/AppBar.jsx'
import Sidebar from './components/Sidebar.jsx'
import { areas } from './data/portfolio.js'
import {
  OverviewView, SkillsView, ExperienceView, ProjectsView,
  ServicesView, EducationView, ContactView,
} from './components/views.jsx'

const views = {
  overview: OverviewView,
  skills: SkillsView,
  experience: ExperienceView,
  projects: ProjectsView,
  services: ServicesView,
  education: EducationView,
  contact: ContactView,
}

// Hash routing simple: #/skills, #/projects… (como "areas" de HA)
function areaFromHash() {
  const id = window.location.hash.replace(/^#\//, '')
  return areas.some((a) => a.id === id) ? id : 'overview'
}

export default function App() {
  const [active, setActive] = useState(areaFromHash)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(() => localStorage.getItem('ha-theme') === 'dark')

  useEffect(() => {
    const onHash = () => setActive(areaFromHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    localStorage.setItem('ha-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => { window.scrollTo({ top: 0 }) }, [active])

  const View = views[active] || OverviewView
  const areaName = areas.find((a) => a.id === active)?.name || 'Resumen'

  const navigate = (id) => {
    window.location.hash = `#/${id}`
    setActive(id)
  }

  return (
    <div className="app-shell">
      <AppBar
        areaName={areaName}
        onMenu={() => setMenuOpen(true)}
        dark={dark}
        onToggleTheme={() => setDark(!dark)}
      />
      <div className="main-wrap">
        <Sidebar active={active} onChange={navigate} open={menuOpen} onClose={() => setMenuOpen(false)} />
        <main className="content" role="tabpanel">
          <View />
        </main>
      </div>
    </div>
  )
}
