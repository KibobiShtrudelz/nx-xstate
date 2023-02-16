import { createMachine, assign } from 'xstate';

interface CountContext {
  count: number;
  updatedAt: Date;
  message: string;
}

type CountEvents = {
  type: 'INCREMENT';
  value: number;
  time: Date;
};

export const toggleMachine = createMachine<CountContext, CountEvents>(
  {
    // adding a schema for the events will make them typesafe
    schema: {
      events: {} as CountEvents,
    },
    context: {
      count: 0,
      updatedAt: new Date(),
      message: 'Hello World',
    },
    on: {
      INCREMENT: {
        actions: 'assignToContext',
      },
    },
  },
  {
    actions: {
      assignToContext: assign({
        // increment the current count by the event value
        count: (context, event) => context.count + event.value,

        /*
         * you can update multiple properties at once
         * we name the context parameter `_`,
         * to indicate that we don’t use it
         */
        updatedAt: (_, event) => event.time,

        /*
         * to keep TypeScript happy,
         * update using a function with the context parameter
         * again we use the name `_` to indicate that the
         * parameter is unused
         */
        message: (_) => 'Count changed',
      }),
    },
  }
);
