particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 10,  // Número de hojas de cerezo
            "density": {
                "enable": true,
                "value_area": 800  // Área donde se distribuyen las hojas
            }
        },
        "color": {
            "value": "#ffffff"  // Color de las partículas si no usas imagen
        },
        "shape": {
            "type": "image",  // Cambiar de "circle" a "image"
            "image": {
                "src": "images/hoja_de_cerezo.png",  // Ruta de la imagen de la hoja de cerezo
                "width": 150,  // Ajusta el tamaño de la imagen
                "height": 100  // Ajusta el tamaño de la imagen
            }
        },
        "opacity": {
            "value": 0.1,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 60,  // Tamaño de las hojas de cerezo
            "random": true,  // Tamaño aleatorio para dar variedad
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#dddddd",
            "opacity": 0.5,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.2,
            "direction": "right",  // Movimiento hacia la derecha, puedes cambiarlo si deseas otro movimiento
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 120,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
