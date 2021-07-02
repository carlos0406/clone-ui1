import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: "border-box";
  
  }
  
  body{
  }
  body,input,button,textarea{
    font: 400 1rem Roboto,sans-serif;
  }
  @media(max-width:1080px){
    html{
        font-size: 93.75%;  
    }
}
`
