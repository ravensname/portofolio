import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { profile, about, experience, projects, skills, cvUrl } from '../data'
import useViewNavigate from '../useViewNavigate'

export default function Portfolio() {
  const go = useViewNavigate()

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  const goTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className="site-header">
        <div className="wrap nav">
          <Link to="/" className="back" onClick={go('/')}><span aria-hidden="true">←</span> Home</Link>
          <nav>
            {['about', 'experience', 'projects', 'skills', 'contact'].map((id) => (
              <a key={id} href={`#${id}`} onClick={goTo(id)}>
                {id[0].toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="wrap" id="top">
        <section className="hero">
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="intro">{profile.intro}</p>
          <a className="button" href="#contact">Get in touch</a>
          <a className="button ghost" href={cvUrl} download>Download CV</a>
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
            {experience.map((job) => (
              <li className="job-card" key={job.period + job.title}>
                <div className="job-head">
                  <div className="logo">
                    {job.logo ? (
                      <img src={`${import.meta.env.BASE_URL}${job.logo}`} alt={`Logo ${job.company}`} />
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
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <ul className="projects">
            {projects.map((p) => (
              <li key={p.title}>
                <span className="year">{p.year}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <p className="tech">{p.tech.join(', ')}</p>
                  <p className="links">
                    {p.demo && <a href={p.demo}>Live demo</a>}
                    {p.code && <a href={p.code}>Source code</a>}
                  </p>
                </div>
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
          <p>The quickest way to reach me is email.</p>
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