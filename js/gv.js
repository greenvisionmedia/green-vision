document.addEventListener('DOMContentLoaded', () => {
    // Query shorthands
    const get = (i) => document.getElementById(i);
    const toggle = (e) => {
        e.classList.toggle('on');
    };

    let contact = get('contact'),
        formBox = get('form-box');

    // Contact appear
    new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    toggle(contact);
                    toggle(formBox);
                    observer.disconnect();
                }
            });
        },
        {
            rootMargin: '200px',
        }
    ).observe(contact);
});
