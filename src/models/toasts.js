const toasts = {
    state: [],
    reducers: {
        added: (state, toast) => [toast, ...state],
        removed: (state, toast) => state.filter(t => t.id !== toast.id)
    },
    effects: dispatch => ({
        async add(message) {
            const toast = {
                message,
                id: new Date().getTime()
            };
            dispatch.toasts.added(toast);

            await new Promise(r => setTimeout(r, 2000));
            dispatch.toasts.removed(toast);
        }
    })
};

export default toasts;