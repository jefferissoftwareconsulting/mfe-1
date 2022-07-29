var eventBus = function () { return ({
    addListener: function (listener) {
        window.globalEventBus
            ? window.globalEventBus.addListener(listener)
            : window.addEventListener("eventBus", (function (e) {
                return listener(e.detail);
            }));
    },
    emit: function (event) {
        window.globalEventBus
            ? window.globalEventBus.emit(event)
            : window.dispatchEvent(new CustomEvent("eventBus", { detail: event }));
    },
}); };
export default eventBus;
//# sourceMappingURL=event-bus.js.map