import 'reflect-metadata';
import { injectable } from 'inversify';
import CommandStateChain from '.';

@injectable()
export default class UndoLastCommand extends CommandStateChain {
  async undo () {
    try {
      if (this.data.chain.length > 0) {
        await this.data.chain[this.data.chain.length - 1][0].unexecute();
        this.data.chain.pop();
      }
    } catch (e) {
      console.log(e);
      throw Error('LoginProcessChain.UndoLastCommand.undo failed');
    }
  }
}
