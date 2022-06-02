import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import Model, { BaseDataType } from '../Model';

export type ConstructorParam<DataType extends BaseDataType> = {
  model: Model<DataType>;
};

@injectable()
export default abstract class Operator<DataType extends BaseDataType> {
  protected data!: DataType;

  constructor (@unmanaged() payload: ConstructorParam<DataType>) {
    payload.model.bindOperator(this);
  }

  bindData (data: DataType) {
    this.data = data;
  }
}
