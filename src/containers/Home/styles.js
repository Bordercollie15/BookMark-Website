import styled from 'styled-components'

export const Title = styled.h1`
  color: ${props => props.primary ? props.theme.colors.primaryText : props.theme.colors.secondaryText};
  font-size: ${props => props.primary ? "1.5em" : "1em"};
  font-family: ${({theme}) => theme.fonts.titleFont.family};
  background:#E8E5FF;
  padding:10px;
  border-radius:50px;
  text-align: center;
  @media only screen and (max-width: 800px) {
    text-align: left;
    font-style: italic;
  }
`
export const Green = styled.button`
  background-color: #E8E5FF;
  border: 4px;
  color: white;
  border-radius: 50px;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  text-decoration:none;
  `

export const Subtitle = styled(Title)`
  font-size: 0.8em;
  padding-top:30px;
  height:50px;
  border-radius:50px;
`
export const Background = styled.body`
  background-color: #383266;
  text-align:center;
  padding:100px;
  border-radius:10px;;
`