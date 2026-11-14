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
          <p className="links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.github}>GitHub</a>
            <a href={profile.linkedin}>LinkedIn</a>
            <a href={cvUrl} download>Download CV</a>
          </p>
        </section>
      </main>

      <footer className="wrap">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  )
}