import styled from 'styled-components'
export const Container = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  aside {
    flex: 54;
    background: #e5e5e5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      margin-bottom: auto;
      width: 100%;
    }
  }

  main {
    flex: 46;
    background-color: #fff;
    color: ${props => props.theme.colors.blue};
  }
`
export const Content = styled.div`
  background-color: #fff;
  width: 40rem;
  margin: 0 auto;
  p {
    font-size: 1.15rem;
    color: #223;
    padding: 2rem 0 3rem 0rem;
  }
  footer {
    display: flex;
    justify-content: space-between;
    padding-top: 7rem;
    font: 600 1.125rem Roboto, sans-serif;
    span {
      a {
        text-decoration: none;
      }
    }
  }
  h1 {
    font-size: 2.2rem;
    font-family: 'Open Sans';
    font-weight: bold;
    line-height: 3.5rem;
  }
  h2 {
    font-weight: 600;
    padding-top: 3rem;
    font-size: 2rem;
    margin-bottom: 6.8rem;
  }
`
export const Fieldset = styled.fieldset`
  height: 4.6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid #a2a2a2;

  &:focus-within {
    border-left: 4px solid ${props => props.theme.colors.blue};
    margin-left: -3px;
  }

  input,
  label {
    color: ${props => props.theme.colors.blue};
    margin-left: 1.5rem;
  }

  label {
    font-size: 1.15rem;
    color: #223;
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
`
export const Button = styled.button`
  margin-top: 1rem;
  width: 9rem;
  height: 3.5rem;
  border: none;
  font-size: 1.125rem;
  background: ${props => props.theme.colors.blue};
  color: white;

  & + & {
    margin-left: 2rem;
    border: 1px solid ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.blue};
    font-weight: 500;
    background: white;
  }
`
export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0 0 1rem;
  span {
    label {
      font-size: 1.125rem;
      color: #222;
    }
  }
`
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 6rem 0 8rem 0;
  a {
    font-size: 1.5rem;
    text-decoration: none;
    padding: 0.5rem 0;
    color: #555;

    &:hover {
      border-bottom: 3px solid #0c31f1;
      padding-bottom: 3px;
    }
  }
`
