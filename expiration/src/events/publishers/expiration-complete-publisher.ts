import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from '@v3rsetickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
