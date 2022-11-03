import { OrderCancelledEvent, OrderCreatedEvent, Publisher, Subjects } from "@v3rsetickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
}