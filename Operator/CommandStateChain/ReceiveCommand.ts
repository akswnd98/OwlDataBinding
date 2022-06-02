import 'reflect-metadata';
import { injectable } from 'inversify';
import StateTransitionCommand from '../../Command/Undoable/StateTransition';
import Operator from '..';
import CommandStateChain, { DataType } from '../../Model/CommandStateChain';

@injectable()
export default class ReceiveCommand extends Operator<DataType> {
  async receiveCommand (command: StateTransitionCommand) {
    try {
      await command.execute();
      this.data.chain.push([command, command.generateNextState()]);
    } catch (e) {
      console.log(e);
      throw Error('CommandStateChain.ReceiveCommand.receiveCommand failed');
    }
  }
}
