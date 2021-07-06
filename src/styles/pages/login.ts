import styled from 'styled-components'
export const Container = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;

  a {
    color: ${props => props.theme.colors.blue};
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  aside {
    flex: 54;
    background: ${props => props.theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 1200px) {
      flex: 12;
    }
    @media (max-width: 720px) {
      position: absolute;
      visibility: hidden;
      height: 0;
      width: 0;
    }
    img {
      margin-bottom: auto;
      width: 100%;

      @media (max-width: 1000px) {
        visibility: hidden;
        height: 0;
        width: 0;
      }
    }
  }

  main {
    flex: 46;
    background: ${props => props.theme.colors.backgroundMain};
    color: ${props => props.theme.colors.blue};
    @media (max-width: 720px) {
      flex: 1;
      width: 100vw;
      height: 100%;
      background-image: url(${`https://i.imgur.com/0DhbYpW.png`});
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;
    }
  }
  @media (max-width: 720px) {
    height: 100vh;
  }
`
export const Content = styled.div`
  width: 40rem;
  margin: 0 auto;

  p {
    font-size: 1.15rem;
    color: ${props => props.theme.colors.textform};
    padding: 2rem 0 3rem 0rem;

    @media (max-width: 720px) {
      padding: 0;
      text-align: center;
    }
  }

  form {
    flex: 1;
    height: 100%;
    div.buttonContent {
      display: flex;
      width: 100%;
      @media (max-width: 440px) {
        padding: -1rem;
        width: 90%;
        height: 100%;
      }
    }
    @media (max-width: 668px) {
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  footer {
    display: flex;
    justify-content: space-between;
    padding-top: 7rem;
    font: 600 1.125rem Roboto, sans-serif;
    @media (max-width: 1200px) {
      padding-top: 4rem;
    }
    @media (max-width: 720px) {
      padding: 0;
      padding-bottom: 4rem;
    }
    @media (max-width: 668px) {
      width: 90vw;
      height: 100%;
    }
    @media (max-width: 440px) {
    }

    span {
      @media (max-width: 720px) {
        background: ${props => props.theme.colors.backgroundMain};
      }

      @media (max-width: 440px) {
        padding-top: 1.8rem;
        font-size: 1rem;
      }

      &.or {
        color: ${props => props.theme.colors.text};
      }
      a {
      }
    }
  }
  h1 {
    font-size: 2.2rem;
    font-family: 'Open Sans';
    font-weight: bold;
    line-height: 3.5rem;

    @media (max-width: 1200px) {
      max-width: 90%;
    }
    @media (max-width: 720px) {
      font-size: 2rem;
      line-height: 2rem;
      margin: 0 auto;
    }

    @media (max-width: 440px) {
      font-size: 1.5rem;
    }
  }
  h2 {
    font-weight: 600;
    padding-top: 3rem;
    font-size: 2rem;
    margin-bottom: 6.8rem;
    @media (max-width: 720px) {
      margin-bottom: 2rem;
    }
    @media (max-width: 404px) {
      font-size: 1.2rem;
    }
    @media (max-width: 440px) {
      font-size: 1.5rem;
      padding: 0;
    }
  }

  @media (max-width: 1400px) {
    width: 90%;
  }

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 404px) {
    width: 100%;
  }
`
export const Fieldset = styled.fieldset`
  height: 4.6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid #a2a2a2;
  background-color: ${props => props.theme.colors.backgroundMain};

  &:focus-within {
    border-left: 4px solid ${props => props.theme.colors.blue};
    margin-left: -3px;
  }

  input,
  label {
    background-color: ${props => props.theme.colors.backgroundMain};
    color: ${props => props.theme.colors.textform};
    margin-left: 1.5rem;
  }

  label {
    font-size: 1.15rem;
    padding: 0.5rem 0 0 0;
  }

  input {
    font-size: 1.125rem;
    border: 0;
    display: flex;
    font-weight: 500;
    height: 100%;
    outline: none;
  }

  @media (max-width: 440px) {
    width: 90%;
    height: 4rem;
    &:focus-within {
      border-left: 4px solid ${props => props.theme.colors.blue};
      margin-left: 0;
    }
  }
`
export const Button = styled.button`
  margin-top: 1rem;
  width: 9rem;
  height: 3.5rem;
  border: none;
  font-size: 1.125rem;
  background: ${props => props.theme.colors.blue};
  color: white;

  &.outlined {
    margin-left: 2rem;
    border: 1px solid ${props => props.theme.colors.textform};
    color: ${props => props.theme.colors.textform};
    font-weight: 500;
    background: ${props => props.theme.colors.backgroundMain};
    @media (max-width: 440px) {
      margin-left: 0;
    }
  }

  @media (max-width: 440px) {
    width: 100%;
    margin-left: 0;
    padding: -1rem 0;
  }
`
export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0 2rem 1rem;
  span {
    label {
      font-size: 1.125rem;
      color: ${props => props.theme.colors.textform};
    }
  }
`
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 6rem 0 8rem 0;

  @media (max-width: 1200px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 768px) {
    justify-content: space-around;
  }
  a {
    font-size: 1.5rem;
    text-decoration: none;
    padding: 0.5rem 0;
    color: ${props => props.theme.colors.textLink};
    @media (max-width: 1200px) {
      font-size: 1.75rem;
    }
    @media (max-width: 1000px) {
      font-size: 2rem;
    }

    &:hover {
      border-bottom: 3px solid ${props => props.theme.colors.blue};
      padding-bottom: 3px;
    }
  }
`
