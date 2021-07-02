import usePersistedState from '../hooks/usePersistedState'
import dark from '../styles/global/themes/dark'
import light from '../styles/global/themes/light'
import { ThemeProvider } from 'styled-components'
import { Login } from './Login'
export default function Home() {
  const [theme, setTheme] = usePersistedState('theme', light)
  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }

  return (
    <ThemeProvider theme={theme}>
      <Login toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}
