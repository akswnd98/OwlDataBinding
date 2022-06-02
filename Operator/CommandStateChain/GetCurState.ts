import 'reflect-metadata';
import { injectable } from 'inversify';
import CommandStateChain from '../CommandStateChain';
import State from '../../State';

@injectable()
export default abstract class GetCurState extends CommandStateChain {
  get state () {
    if (this.data.chain.length > 0) {
      return this.data.chain[this.data.chain.length - 1][1];
    } else {
      return this.baseState;
    }
  }

  protected abstract get baseState (): State;
}
