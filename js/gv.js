document.addEventListener('DOMContentLoaded', () => {
    // Query shorthands
    const get = (i) => document.getElementById(i);
    const toggle = (e) => {
        e.classList.toggle('on');
    };

    let contact = get('contact'),
        trigger = get('trigger'),
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
            rootMargin: '16px',
        }
    ).observe(trigger);

    // BASIN

    let form = get('form'),
        success = get('succ-box'),
        failure = get('fail-box');

    form.onsubmit = function (event) {
        event.preventDefault();

        let formData = new FormData(form),
            xhr = new XMLHttpRequest();

        xhr.open('POST', form.action, true);
        xhr.send(formData);
        xhr.onload = function (e) {
            if (xhr.status === 200) {
                toggle(formBox);
                toggle(success);
            } else {
                var response = JSON.parse(xhr.response);
                toggle(formBox);
                toggle(failure);
            }
        };
    };
});
