// Scripts

window.addEventListener('DOMContentLoaded', event => {

    // Constants
    const form = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');
    const inputs = document.querySelectorAll('input, textarea');
    const submitSuccessMessage = document.getElementById('submitSuccessMessage');

    // Press submit button
    submitButton.addEventListener('click', () => {
        submitButton.disabled = true;
        submitButton.classList.add('disabled'); 
        submitSuccessMessage.classList.remove('d-none');
        form.submit();
    });

    // Check inputs
    const checkInputs = () => {
        let filled = true;
        inputs.forEach(input => {
            if (input.value === '') {
                filled = false;
            }
        });
        if (filled) {
            submitButton.disabled = false;
            submitButton.classList.remove('disabled');
        } else {
            submitButton.disabled = true;
        }
    };

    form.addEventListener('input', checkInputs);
    

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
