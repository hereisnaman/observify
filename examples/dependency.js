import { observify } from '../dist/';

const createStore = (reducers = {}) => {
  const store = observify({});

  Object.keys(reducers).forEach(key => {
    store[key] = observify(reducers[key]);

    store._addDependency(store[key]);
  });

  return store;
};

const logger = state => console.log('Updated state: ', state);

const ui = {
  loading: true,
};

const auth = {
  authenticated: false,
};

const store = createStore({ ui, auth });

store._subscribe(logger);

console.log('Initial state: ', store);
store.auth.authenticated = true;
store.ui.loading = false;
