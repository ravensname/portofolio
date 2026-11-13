import { Link } from 'react-router-dom'
import { profile, cvUrl } from '../data'
import useViewNavigate from '../useViewNavigate'

export default function Home() {
  const go = useViewNavigate()

  return (
    <div className="home">
      <header className="top">
        <span className="brand">{profile.name}</span>
        <p className="status"><span className="dot" />Open to new opportunities</p>
      </header>

      <main className="center">
        <p className="hello">Hi, I'm {profile.name}</p>
        <h1>Welcome to my portfolio</h1>
        <p className="sub">{profile.intro}</p>
        <div className="actions">
          <Link className="button" to="/portfolio" onClick={go('/portfolio')}>View my work</Link>
          <a className="button ghost" href={cvUrl} download>Download CV</a>
        </div>
      </main>
    </div>
  )
}