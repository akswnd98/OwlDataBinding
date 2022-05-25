export default abstract class Aspect<EventType> {
  abstract checkInterest (event: EventType): boolean;
}
