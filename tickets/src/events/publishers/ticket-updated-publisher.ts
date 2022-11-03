import { Publisher, Subjects, TicketUpdatedEvent } from '@v3rsetickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
