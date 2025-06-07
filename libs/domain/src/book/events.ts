import { createUsername, Username } from './values';

export class UserCreatedEvent {
  constructor(readonly username: Username) {}
}

new UserCreatedEvent(createUsername('')) as any;
