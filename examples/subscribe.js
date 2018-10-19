import { observify } from '../dist/';

const pub = observify({
  loading: true,
});

const logger = state => {
  console.log('updated state: ', state);
};

pub._subscribe(logger);

pub.loading = false;
pub._unsubscribe(logger);

pub.loading = true;

/*
  output:

  updated state:  { loading: false }
*/
