import { OrderCreatedEvent, Publisher, Subjects } from "@v3rsetickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
   readonly subject = Subjects.OrderCreated;
}