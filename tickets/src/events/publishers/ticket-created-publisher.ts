import { Publisher, Subjects, TicketCreatedEvent } from '@v3rsetickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
