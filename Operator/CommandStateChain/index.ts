import CommandStateChainModel, { DataType } from '../../Model/CommandStateChain';
import Operator from '../../Operator';
import 'reflect-metadata';
import { inject, injectable, unmanaged } from 'inversify';

export type ConstructorParam = {
  model: CommandStateChainModel;
};

@injectable()
export default class CommandStateChain extends Operator<DataType> {
  constructor (@unmanaged() payload: ConstructorParam) {
    super({
      ...payload,
    });
  }
}
