import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import { TodoList } from './containers/TodoList'
import theme from './theme'
import Sign from './containers/sign'
import Log from './containers/log'
const userName = null

const App = () => (
  <BrowserRouter basename="/home">
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {!!userName ? <Home name={userName} /> : <Home name="stranger" />}
          </Route>
          <Route path="/signin" component={Sign}/>
          <Route path="/dashboard" component={TodoList}/>
          <Route path="/login" component={Log}/>
        </Switch>
      </div>
    </ThemeProvider>
  </BrowserRouter>
)

export default App