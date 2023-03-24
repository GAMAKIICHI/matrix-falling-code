var box = document.getElementsByClassName("square");

var animation = anime({
    targets: box,
    translateY: '250px',
    duration: 9000,
    loop: true,
    autoplay: true   
})