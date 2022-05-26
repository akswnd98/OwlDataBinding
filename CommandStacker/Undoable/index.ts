import UndoableCommand from '../../Command/Undoable';

export default class Undoable {
  syncPromise: Promise<void>;
  stack: UndoableCommand[];

  constructor () {
    this.syncPromise = Promise.resolve();
    this.stack = [];
  }

  async receiveCommand (command: UndoableCommand) {
    try {
      this.syncPromise.then(() => command.execute());
      await this.syncPromise;
      this.stack.push(command);
    } catch (e) {
      console.log(e);
      throw Error('UndoableCommandStacker.receiveCommand failed');
    }
  }

  async undo () {
    try {
      this.syncPromise.then(() => this.stack[this.stack.length - 1].unexecute());
      await this.syncPromise;
      this.stack.pop();
    } catch (e) {
      console.log(e);
      throw Error('UndoableCommandStacker.undo failed');
    }
  }
}
