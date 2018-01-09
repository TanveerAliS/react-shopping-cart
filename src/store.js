import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

function configureStore(preloadedState) {
  const composeEnhancers =
    typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;

  const store = createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk))
  );

  // store.dispatch(fetchProducts())

  return store;
}

export default configureStore;