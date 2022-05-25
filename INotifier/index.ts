import IObserver from '../IObserver';

export default interface INotifier {
  notify (event: any): Promise<void>;
}
