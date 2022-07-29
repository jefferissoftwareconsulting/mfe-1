declare global {
    interface Window {
        globalEventBus?: any;
    }
}
interface EventType {
    topic: string;
    payload?: unknown;
}
declare const eventBus: () => {
    addListener: (listener: Function) => void;
    emit: (event: EventType) => void;
};
export default eventBus;
