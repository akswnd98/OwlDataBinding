import ICommand from './ICommand';

export default abstract class Command implements ICommand {
  abstract execute (): Promise<void>;
}
