import 'reflect-metadata';
import { injectable } from 'inversify';
import IReceiver from '..';
import Command from '../../Command';

@injectable()
export default abstract class Receiver implements IReceiver {
  abstract receiveCommand (command: Command): Promise<void>;
}
