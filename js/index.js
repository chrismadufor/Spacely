function goToHomePage() {
    window.location.assign('index.html')
}

function showMobileNav() {
    let mobileNav = document.querySelector('.mobile-nav')
    mobileNav.classList.toggle('nav-active')
    
}

// Apply header styles
window.addEventListener('scroll', () => {
    let header = document.querySelector('header')
    header.classList.toggle('scrolling-active', window.scrollY > 0)
})

function openSignUpWithEmailModal() {
    let signUpModal = document.getElementById('sign-up-with-email')
    if (signUpModal.style.display == 'block') signUpModal.style.display = 'none'
    else signUpModal.style.display = 'block'
}

window.onclick = function(event) {
    let signUpModal = document.getElementById('sign-up-with-email')
    if (event.target == signUpModal) {
        openSignUpWithEmailModal()
    }
}

$('.hero').owlCarousel({
    items: 1,
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
})

$('.testimonial-wrap').owlCarousel({
    items: 1,
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
})

$('.type-wrap').owlCarousel({
    items: 1,
    loop:true,
    margin:20,
    nav:true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})
$('.popular-wrap').owlCarousel({
    items: 1,
    loop:true,
    margin:20,
    nav:true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        1000:{
            items:3
        },
        1150:{
            items:4
        }
    }
})