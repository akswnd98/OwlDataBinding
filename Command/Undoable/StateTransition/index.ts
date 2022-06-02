import UndoableCommand from '../../Undoable';
import State from '../../../State';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';

export type ConstructorParam = {
};

@injectable()
export default abstract class StateTransition<StateType extends State=State> extends UndoableCommand {
  constructor () {
    super();
  }

  abstract generateNextState (): StateType;
}
