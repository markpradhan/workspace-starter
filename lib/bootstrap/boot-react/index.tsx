// Libs
// React
import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

// Redux
import { Provider } from 'react-redux'

// Router
import { ConnectedRouter, push } from 'connected-react-router'

// Main Theme
import { ThemeProvider, createGlobalStyle } from 'styled-components'

// ---------------------------------------------------------------------------

// Style Imports
import NormalizeStyles from '@workspace-starter/theme/normalize'

// ---------------------------------------------------------------------------

const bootstrapReact = ({
  store,
  history,
  Router,
  theme,
  pushRoute = undefined,
  styles = [],
}) => {
  // GlobalStyles
  const GlobalStyle = createGlobalStyle`
    ${NormalizeStyles}
    ${styles}
  `

  class App extends Component {
    componentDidMount() {
      if (pushRoute) store.dispatch(push(pushRoute))
    }

    render() {
      return (
        <Provider store={store}>
          <ConnectedRouter history={history} key={Math.random()}>
            <ThemeProvider theme={theme}>
              <Fragment>
                <Router />
                <GlobalStyle />
              </Fragment>
            </ThemeProvider>
          </ConnectedRouter>
        </Provider>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'))
}

export default bootstrapReact
