import Operator from '../Operator';

export type ConstructorParam<DataType> = {
  data: DataType;
};

export type BaseDataType = {
  [key: string]: any;
};

export default abstract class Model<DataType extends BaseDataType> {
  private data: DataType;

  constructor (payload: ConstructorParam<DataType>) {
    this.data = payload.data;
  }

  bindOperator (operator: Operator<DataType>) {
    operator.bindData(this.data);
  }
}
