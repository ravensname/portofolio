import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { profile, about, experience, projects, skills, cvUrl } from '../data'
import useViewNavigate from '../useViewNavigate'

export default function Portfolio() {
  const go = useViewNavigate()
  const [open, setOpen] = useState(false)
  const [openJobs, setOpenJobs] = useState({})
  const toggleJob = (key) => setOpenJobs((s) => ({ ...s, [key]: !s[key] }))

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  const goTo = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const icons = {
  email: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
  github: (
    <>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  cv: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </>
  ),
}

function IconLink({ href, label, icon, download }) {
  return (
    <a className="icon-link" href={href} aria-label={label} title={label} download={download}>
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor"
           strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {icons[icon]}
      </svg>
    </a>
  )
}

  return (
    <>
      <header className="site-header">
        <div className="wrap nav">
          <Link to="/" className="back" onClick={go('/')}>
            <span aria-hidden="true">←</span> Home
          </Link>

          <nav className={open ? 'open' : ''}>
            {['about', 'experience', 'projects', 'skills', 'contact'].map((id) => (
              <a key={id} href={`#${id}`} onClick={goTo(id)}>
                {id[0].toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>

          <button
            className="menu-btn"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            ⋮
          </button>
        </div>
      </header>

      <main className="wrap" id="top">
        <section className="hero">
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="intro">{profile.intro}</p>

          <div className="actions">
            <button
              className="button"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              Get in touch
            </button>

            <a className="button ghost" href={cvUrl} download>
              Download CV
            </a>
          </div>
        </section>

        <section id="about">
          <h2>About</h2>
          {about.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </section>

        <section id="experience">
          <h2>Experience</h2>
          <ul className="jobs">
            {experience.map((job) => {
              const key = job.period + job.title
              const isOpen = !!openJobs[key]
              return (
                <li className={`job-card ${isOpen ? 'open' : ''}`} key={key}>
                  <div className="job-head">
                    <div className="logo">
                      {job.logo ? (
                        <img src={job.logo} alt={`Logo ${job.company}`} />
                      ) : (
                        <span aria-hidden="true">{job.company[0]}</span>
                      )}
                    </div>
                    <div className="job-title">
                      <h3>{job.title}</h3>
                      <p className="company">{job.company}</p>
                    </div>
                    <div className="period">
                      <span className="year">{job.period}</span>
                      {job.current && <span className="current">Current</span>}
                    </div>
                  </div>

                  <button
                    className="toggle"
                    aria-expanded={isOpen}
                    onClick={() => toggleJob(key)}
                  >
                    {isOpen ? 'Hide details' : 'Show details'}
                  </button>

                  <ul>
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>
        </section>

        <section id="projects">
          <h2>Projects</h2>
            <ul className="projects">
              {projects.map((p) => (
                <li className="project-card" key={p.title}>
                  <div className="project-head">
                    <h3>{p.title}</h3>
                    <span className="year">{p.year}</span>
                  </div>
                  <p className="project-desc">{p.description}</p>
                  <div className="chips">
                    {p.tech.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <p className="links">
                    {p.demo && <a href={p.demo}>Live demo</a>}
                    {p.code && <a href={p.code}>Source code</a>}
                  </p>
                </li>
              ))}
            </ul>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <div className="skill-grid">
            {Object.entries(skills).map(([group, items]) => (
              <article className="skill-card" key={group}>
                <h3>{group}</h3>
                <div className="chips">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Open to full-time roles related in Data, Engineering, Analytics. Contact me through LinkedIn or Email.</p>
          <div className="icon-row">
            <IconLink href={`mailto:${profile.email}`} label="Email" icon="email" />
            <IconLink href={profile.github} label="GitHub" icon="github" />
            <IconLink href={profile.linkedin} label="LinkedIn" icon="linkedin" />
            <IconLink href={cvUrl} label="Download CV" icon="cv" download />
          </div>
          </section>
      </main>

      <footer className="wrap">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  )
}