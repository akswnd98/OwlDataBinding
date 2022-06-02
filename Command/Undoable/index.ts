import 'reflect-metadata';
import { injectable } from 'inversify';
import Command from '..';

@injectable()
export default abstract class Undoable extends Command {
  abstract unexecute (): Promise<void>;
}
