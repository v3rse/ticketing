import { PaymentCreatedEvent, Publisher, Subjects } from '@v3rsetickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
