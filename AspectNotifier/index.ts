import 'reflect-metadata';
import { injectable } from 'inversify';
import INotifier from '../INotifier';
import IObserver from '../IObserver';
import Aspect from './Aspect';

export type ConstructorParam<EventType> = {
  observers?: [IObserver, Aspect<EventType>][];
};

@injectable()
export default abstract class AspectNotifier<EventType> implements INotifier {
  observers: [IObserver, Aspect<EventType>][];

  constructor (payload: ConstructorParam<EventType>) {
    this.observers = payload.observers ? payload.observers : [];
  }

  async notify (event: EventType) {
    await Promise.all(this.observers.map(async (o) => {
      if (o[1].checkInterest(event)) {
        await o[0].update(this, event);
      }
    }));
  }

  attachObserver (observer: IObserver, aspect: Aspect<EventType>) {
    this.observers.push([observer, aspect]);
  }

  detachObserver (observer: IObserver) {
    const idx = this.observers.findIndex(([o, a]) => o === observer);
    this.observers.splice(idx, 1);
  }
}
