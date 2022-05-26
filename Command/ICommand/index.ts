export default interface ICommand {
  execute (): Promise<void>;
}
