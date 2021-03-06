// Libs
// Router
import createHistory from 'history/createBrowserHistory'

// Redux bootstrapper
import bootstrapRedux from '@workspace-starter/bootstrap/boot-redux'

// React bootstrapper
import bootstrapReact from '@workspace-starter/bootstrap/boot-react'

// ----------------------------------------------------------------------------
// App files
import reducer from './reducer'
import Router from './router'
import theme from '@workspace-starter/theme'

// ----------------------------------------------------------------------------
// Hot reducer helper
const hotReducer = replaceReducer => replaceReducer('./reducer', reducer)

// ----------------------------------------------------------------------------
// Bootstrap
// Create history
const history = createHistory()

// Create store
export const store = bootstrapRedux({ history, reducer, hotReducer })

// Bootstrap react
bootstrapReact({ store, history, Router, theme })
