export default {
    mounted(el, binding) {
        const callback = (entries) => {
            if (entries[0].isIntersecting) {
                binding.value()
            }
        };
        const observer = new IntersectionObserver(callback, {
            rootMargin: '0px',
            threshold: 1.0
        });
        observer.observe(el)
    }
}
