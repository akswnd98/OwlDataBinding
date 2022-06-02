import Model from '../../Model';
import 'reflect-metadata';
import { injectable } from 'inversify';
import State from '../../State';
import StateTransitionCommand from '../../Command/Undoable/StateTransition';

export type DataType = {
  chain: [StateTransitionCommand, State][];
};

@injectable()
export default class CommandStateChain extends Model<DataType> {
  constructor () {
    super({
      data: {
        chain: [],
      },
    });
  }
}
