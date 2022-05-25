import Model, { BaseDataType } from '../Model';

export type ConstructorParam<DataType> = {
  model: Model<DataType>;
};

export default abstract class Operator<DataType extends BaseDataType> {
  protected data!: DataType;

  constructor (payload: ConstructorParam<DataType>) {
    payload.model.bindOperator(this);
  }

  bindData (data: DataType) {
    this.data = data;
  }
}
