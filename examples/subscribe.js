import { observify } from '../dist/';

const uiState = observify({
  loading: true,
});

uiState._subscribe(state => {
  console.log('UI updated: ', state);
});

const authState = observify({
  authenticated: false,
});

authState._subscribe(state => {
  if (state.authenticated) {
    console.log('Authenticated');
  }

  uiState.loading = !state.authenticated;
});

authState.authenticated = true;

/* Output:
 * Authenticated
 * UI updated:  { loading: false }
 */
