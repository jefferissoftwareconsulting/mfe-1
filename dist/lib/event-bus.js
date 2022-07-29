const eventBus = () => ({
    addListener: (listener) => {
        window.globalEventBus
            ? window.globalEventBus.addListener(listener)
            : window.addEventListener("eventBus", ((e) => listener(e.detail)));
    },
    emit: (event) => {
        window.globalEventBus
            ? window.globalEventBus.emit(event)
            : window.dispatchEvent(new CustomEvent("eventBus", { detail: event }));
    },
});
export default eventBus;
//# sourceMappingURL=event-bus.js.map