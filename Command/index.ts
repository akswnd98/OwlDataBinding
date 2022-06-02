import 'reflect-metadata';
import { injectable } from 'inversify';
import ICommand from './ICommand';

@injectable()
export default abstract class Command implements ICommand {
  abstract execute (): Promise<void>;
}
