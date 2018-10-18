export class Dependency {
  constructor(subscribers) {
    this.subscribers = new Set(subscribers);

    this.subscribe = this.subscribe.bind(this);
    this.notify = this.notify.bind(this);
  }

  subscribe(subscriber) {
    this.subscribers.add(subscriber);
  }

  notify(target) {
    this.subscribers.forEach(subscriber => subscriber(target));
  }
}
