import { useCallback, useRef } from 'react';

const useIntersectionObserver = (fetchCallBack: () => void) => {
    const observer = useRef<IntersectionObserver>();

    const createObserver = useCallback((ref: HTMLDivElement) => {
        if (ref == null) return;
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };
        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    fetchCallBack();
                }
            });
        };

        observer.current = new IntersectionObserver(callback, observerOptions);
        observer.current.observe(ref);
        return ref;
    }, []);

    const disconnectObserver = useCallback(() => {
        if (observer.current != null) {
            observer.current.disconnect();
        }
    }, [observer]);

    return { observer, createObserver, disconnectObserver };
};
export default useIntersectionObserver;
