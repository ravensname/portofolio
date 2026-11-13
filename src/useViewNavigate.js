import { flushSync } from 'react-dom'
import { useNavigate } from 'react-router-dom'

export default function useViewNavigate() {
  const navigate = useNavigate()

  return (to) => (e) => {
    e.preventDefault()
    if (!document.startViewTransition) {
      navigate(to)
      return
    }
    document.startViewTransition(() => {
      flushSync(() => navigate(to))
    })
  }
}