import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Switch from 'react-switch'
import {
  Container,
  Button,
  Fieldset,
  Content,
  CheckBoxContainer,
  Nav
} from '../styles/pages/login'
type LoginProps = {
  toggleTheme: () => void
}

export function Login({ toggleTheme }: LoginProps) {
  const { title } = useContext(ThemeContext)
  return (
    <Container>
      <main>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={30}
          handleDiameter={15}
          offColor="#ff0000"
          onColor="#000"
        />
        <Content>
          <h2>Digital</h2>
          <h1>
            Artificial Intelligence Driving Results For The Travel Industry
          </h1>
          <p>Welcome back! Please login to your account.</p>
          <form action="">
            <Fieldset>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </Fieldset>
            <Fieldset>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </Fieldset>

            <CheckBoxContainer>
              <span>
                <input type="checkbox" /> <label htmlFor=""> Remeber me</label>
              </span>
              <a href="">Forgot Password?</a>
            </CheckBoxContainer>

            <div>
              <Button>Login</Button>
              <Button>SingUp</Button>
            </div>
            <footer>
              <span>Or login with</span>
              <span>
                <a href="">Facebook</a>
              </span>
              <span>
                <a href="">Linkedin</a>
              </span>
              <span>
                <a href="">Google</a>
              </span>
            </footer>
          </form>
        </Content>
      </main>
      <aside>
        <Nav>
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Blog</a>
          <a href="">Pricing</a>
        </Nav>
        <img src="/menubg.svg" alt="Logo" />
      </aside>
    </Container>
  )
}
