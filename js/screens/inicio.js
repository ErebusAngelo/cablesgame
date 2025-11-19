// Pantalla de Inicio
export function initInicio(onComenzar) {
    const comenzarBtn = document.getElementById('comenzar-btn');
    
    // Agregar evento al botón
    if (comenzarBtn) {
        comenzarBtn.addEventListener('click', () => {
            // Animación de salida antes de cambiar de pantalla
            animateExit(() => {
                onComenzar();
            });
        });

        // Efecto de hover mejorado
        comenzarBtn.addEventListener('mouseenter', () => {
            playHoverSound();
        });
    }

    // Iniciar animaciones sutiles adicionales
    initFloatingElements();
}

function animateExit(callback) {
    const screen = document.getElementById('inicio-screen');
    const button = document.getElementById('comenzar-btn');
    
    // Animación del botón
    button.style.transform = 'scale(0.9)';
    button.style.opacity = '0';
    
    // Esperar un momento y ejecutar callback
    setTimeout(() => {
        if (callback) callback();
    }, 300);
}

function playHoverSound() {
    // Placeholder para sonido - se puede agregar un AudioContext
    // Por ahora solo feedback visual adicional
}

function initFloatingElements() {
    // Agregar movimiento paralax sutil al mover el mouse
    const screen = document.getElementById('inicio-screen');
    const logos = document.querySelectorAll('.logo');
    const characters = document.querySelectorAll('.character');
    
    if (screen) {
        screen.addEventListener('mousemove', (e) => {
            const xPos = (e.clientX / window.innerWidth - 0.5) * 20;
            const yPos = (e.clientY / window.innerHeight - 0.5) * 20;
            
            // Aplicar efecto paralax a los logos
            logos.forEach((logo, index) => {
                const factor = (index + 1) * 0.5;
                logo.style.transform = `translate(${xPos * factor}px, ${yPos * factor}px)`;
            });
            
            // Aplicar efecto paralax a los personajes
            characters.forEach((character, index) => {
                const factor = (index + 1) * 0.3;
                const currentTransform = character.style.transform || '';
                character.style.transform = `translate(${-xPos * factor}px, ${-yPos * factor}px)`;
            });
        });
    }

    // Animación de entrada para el fondo
    const background = document.querySelector('.background-layer');
    if (background) {
        setTimeout(() => {
            background.style.transition = 'opacity 1.5s ease';
            background.style.opacity = '0.8';
        }, 100);
    }
}

// Agregar animación de partículas sutil (opcional)
export function createParticles() {
    const screen = document.getElementById('inicio-screen');
    const particlesCount = 15;
    
    for (let i = 0; i < particlesCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 3}s;
        `;
        screen.appendChild(particle);
    }
}
