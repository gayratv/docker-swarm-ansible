import dotenv from 'dotenv';
dotenv.config();
import { AMQPClient, AMQPError } from '@cloudamqp/amqp-client';

function delay(ms = 10_000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(0), ms);
  });
}

const attmpCnt = 1;

async function run() {
  console.log('RMQ HOST ', process.env.RMQ_HOST);
  // const amqp = new AMQPClient('amqp://' + process.env.RMQ_HOST);
  const amqp = new AMQPClient('amqp://' + process.env.RMQ_HOST);
  let conn: AMQPClient;
  try {
    conn = (await amqp.connect()) as AMQPClient;
  } catch (e) {
    console.log(e.message);
    process.exit(10);
  }
  const ch = await conn.channel();

  ch.basicQos(1, 0, false);

  // const q = await ch.queue('q1', { passive: false, durable: false, autoDelete: true });
  const q = await ch.queue('q1', { passive: false, durable: false });

  await ch.exchangeDeclare('ex1', 'direct', { durable: false });

  await ch.queueBind('q1', 'ex1', 'q1routKey');

  const consumer = await q.subscribe({ noAck: false }, async (msg) => {
    console.log(msg.bodyToString());
    console.log(msg.properties);
    console.log(msg.deliveryTag);
    await delay(1_000);
    await ch.basicAck(msg.deliveryTag);
    // await consumer.cancel();
  });

  // await q.publish('Hello World', { deliveryMode: 2 });
  await ch.basicPublish('ex1', 'q1routKey', 'exchange publish', {
    deliveryMode: 1,
    correlationId: '111',
    replyTo: 'que to reply',
    messageId: '805',
    timestamp: new Date(),
    type: 'returnProxy',
  });

  await ch.basicPublish('ex1', 'q1routKey', 'exchange publish', {
    deliveryMode: 1,
    correlationId: '112',
    replyTo: 'que to reply2',
    messageId: '11',
    timestamp: new Date(),
    type: 'returnProxy',
  });
}

console.log('RMQ HOST ', process.env.RMQ_HOST);
run();
