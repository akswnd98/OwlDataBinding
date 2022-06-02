import Command from '../Command';

export default interface IReceiver {
  receiveCommand (command: Command): Promise<void>;
}
