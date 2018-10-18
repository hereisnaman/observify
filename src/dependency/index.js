export default class Dependency {
  constructor(target, subscribers) {
    // initialize
    this.target = target;
    this.subscribers = new Set(subscribers);
  }

  subscribe = subscriber => {
    this.subscribers.add(subscriber);
  };

  unsubscribe = subscriber => {
    this.subscribers.delete(subscriber);
  };

  notify = () => {
    this.subscribers.forEach(subscriber => subscriber(this._observable));
  };
}
