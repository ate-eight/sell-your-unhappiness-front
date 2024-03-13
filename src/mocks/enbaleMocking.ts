async function enableMocking() {
    if (process.env.NODE_ENV !== 'development') {
        return;
    }

    const { worker } = await import('./browser');
    // const { server } = await import('./server');

    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
    if (worker) return worker.start();
    // if (server) return server.listen();
}
export default enableMocking;
