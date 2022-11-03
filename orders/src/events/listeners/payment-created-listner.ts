import {
  Listener,
  OrderStatus,
  PaymentCreatedEvent,
  Subjects,
} from '@v3rsetickets/common';
import { Message } from 'node-nats-streaming';
import { Order } from '../../models/order';
import { queueGroupName } from './queue-group-name';

export class PaymentCreatedListener extends Listener<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
  queueGroupName: string = queueGroupName;

  async onMessage(data: PaymentCreatedEvent['data'], msg: Message) {
    try {
      const order = await Order.findById(data.orderId);

      if (!order) {
        throw new Error('Order not found');
      }

      order.set({
        status: OrderStatus.Complete,
      });
      await order.save();
      msg.ack();
    } catch (error: any) {
      console.error('Failed to process payment:created event: ', error.message);
    }
  }
}
