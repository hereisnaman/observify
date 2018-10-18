const observify = require('../dist/');

let message = 'loading';

const pub = observify({
  loading: true,
});

const messageUpdater = state => {
  if (state.loading) {
    message = 'loading';
  } else {
    message = 'hello world';
  }
};

const logger = state => {
  console.log('loading: ', state.loading);
};

pub._subscribe(messageUpdater);
pub._subscribe(logger);

console.log('message: ', message); // message: loading
pub.loading = false;
pub._unsubscribe(messageUpdater);

console.log('message: ', message); // message: hello world
pub.loading = true;
console.log('message: ', message); // message: hello world

/*
  output:

    message:  loading
    loading:  false
    message:  hello world
    loading:  true
    message:  hello world
*/
