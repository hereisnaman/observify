# observify

A simple function to create an observable object. You can implement observers, pub-subs, reducers and many other patterns with ease.

The function takes a target and return a proxy object, which you can subscribe to. On mutation including creation, deletion or change of any of its property, it will notify all the subscribers.

## subscribers
The observable maintains a list of subscriber functions. It calls all the subscriber functions synchronously on any change to the target object. You can use `._subscribe()` and `._unsubscribe()` functions to add or remove subscribers to an observable respectively.

```
import { observify } from 'observify';

const target = {  
  loading: true,
};

const logger = state => {
  console.log('updated state: ', state);
};

/* you can pass an array of subcribers as a second 
 * argument to add them at initialization.
 */
const observable = observify(target, [logger]);

const updateUI = (state) => {
  if(!state.loading){
    console.log('loading is set false');
  }
};

/* you can use the ._subscribe() to add
 * subscribers to your observable.
observable._subscribe(updateUI);

observable.loading = false;
/* output:
 * updated state: { loading: false }
 * loading is set false
 */
 
observable.loading = false; 
/* no output, as on change the proxy does a deep 
 * equality check before notifying subscriber.
 */
 
/* you can use ._unsubscribe() to remove a
 * subscriber from the observable.
observable._unsubscribe(udpateUI);

observable.loading = true;
/* output:
 * updated state: { loading: true }
 */
```

## dependency
An observable can be dependent on other observable. Which means if B is a dependency of A, A will notify all its subscribers if there is any change to B. You can use `._addDependency()` and `._removeDependency()` functions to add or remove dependency to an observable respectively.

Dependencies can be used to implement reducers. [Check the example here.](https://github.com/hereisnaman/observify/blob/master/examples/dependency.js)

```
import { observify } from 'observify';

const logger = state => {
  console.log('updated state: ', state;
};

const observableA = observify({
  foo: false,
}, [logger]);

const observableB = observify({
  bar: true,
}, [logger]);

observableA._addDependency(observableB);
observableB.bar = false;
/* output:
 * udpated state: { bar: false }
 * updated state: { foo: false }
 */
```

## todo

- [ ] Add option to configure deep, shallow or no check before notifying the subscribers.
- [ ] Add option to freeze the proxy object.
- [ ] Add option to call subscribers async.
