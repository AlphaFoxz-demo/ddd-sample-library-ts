import { EventEmitter2 } from '@nestjs/event-emitter';
import { produce } from 'immer';
import type { ReadonlyDeep } from 'type-fest';

export let Globals: ReadonlyDeep<{ eventEmitter: EventEmitter2 }> = {
  eventEmitter: null as any,
};

export function initGlobals(values: { eventEmitter: EventEmitter2 }) {
  Globals = produce(Globals, (draft) => {
    draft.eventEmitter = values.eventEmitter;
  });
}
