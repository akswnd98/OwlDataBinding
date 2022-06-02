import 'reflect-metadata';
import { injectable } from 'inversify';
import UndoableCommand from '@/src/owl-data-binding/Command/Undoable';
import Receiver from '@/src/owl-data-binding/IReceiver/Receiver';

@injectable()
export default abstract class CommandStacker extends Receiver {
  protected syncPromise: Promise<void>;
  protected abstract stack: UndoableCommand[];

  constructor () {
    super();
    this.syncPromise = Promise.resolve();
  }

  async receiveCommand (command: UndoableCommand) {
    try {
      await this.syncPromise.then(async () => {
        await command.execute();
        this.stack.push(command);
      });
    } catch (e) {
      console.log(e);
      throw Error('CommandStacker.receiveCommand failed');
    }
  }

  async undo () {
    try {
      if (this.stack.length <= 0) throw Error('no more back');
      await this.syncPromise.then(async () => {
        await this.stack[this.stack.length - 1].unexecute()
        this.stack.pop();
      });
    } catch (e) {
      console.log(e);
      throw Error('CommandStacker.undo failed');
    }
  }
}
