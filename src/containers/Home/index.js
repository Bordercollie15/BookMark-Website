import React from 'react'
import { Title, Subtitle, Green, Background } from './styles'
import { Link } from 'react-router-dom'

const Home = ({ name }) => (
  <>
    <Background>
      <Title primary>
        Hello, {name}! Welcome to BookMark!!! :D
      </Title>
      <Subtitle>
        The BookMark Bookclub: We are a group of book-lovers and writers! Sign up or login below! Find new books to read, discuss 
        books with friends, and get some inspirational quotes! Make to-read lists, and more. Join BookMark Now!
      </Subtitle>
        
      <Subtitle>
        <span class="material-symbols-outlined">arrow_downward
        </span>
      </Subtitle>
      <Green>
        <Link to="/signin">Sign Up</Link>
      </Green>
      <Green>
        <Link to="/login">Login</Link>
      </Green>
    </Background>
  </>
)

export default Home