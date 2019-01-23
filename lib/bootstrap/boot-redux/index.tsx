// Libs
// Redux
import { createStore, applyMiddleware, compose } from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'
import { get } from 'lodash'

// Router
import { routerMiddleware, push } from 'connected-react-router'

// ---------------------------------------------------------------------------
// Main app reducer
export const routeDispatcher = store => route => store.dispatch(push(route))

export const routeGetter = store => () =>
  get(store.getState(), 'router.location.pathname')

const bootstrapRedux = ({ history, reducer, hotReducer }) => {
  const routerReduxMiddleware = routerMiddleware(history)

  const middleware = applyMiddleware(
    thunk,
    reduxImmutableStateInvariant(),
    routerReduxMiddleware,
  )

  const composeEnhancers =
    __ENV_DEV__ && window
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose

  // Redux Store for application
  const configureStore = () => {
    const store = createStore(reducer(history), composeEnhancers(middleware))

    const replaceReducer = (location, reducer) => {
      module.hot.accept(location, () => {
        store.replaceReducer(reducer(history))
      })
    }

    if (module.hot) {
      hotReducer(replaceReducer)
    }

    return store
  }

  return configureStore()
}

export default bootstrapRedux
