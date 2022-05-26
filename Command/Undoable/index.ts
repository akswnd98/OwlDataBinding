import Command from '..';

export default abstract class Undoable extends Command {
  abstract unexecute (): Promise<void>;
}
