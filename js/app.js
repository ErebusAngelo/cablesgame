// App Principal - Gestor de Pantallas
import { initInicio } from './screens/inicio.js';
import { initJuego } from './screens/juego.js';

class App {
    constructor() {
        this.currentScreen = 'inicio';
        this.screens = {
            inicio: document.getElementById('inicio-screen'),
            juego: document.getElementById('juego-screen')
        };
        
        this.init();
    }

    init() {
        // Inicializar pantalla de inicio
        initInicio(this.goToJuego.bind(this));
        
        // Precargar assets
        this.preloadAssets();
    }

    goToJuego() {
        this.changeScreen('juego');
        initJuego();
    }

    changeScreen(screenName) {
        // Ocultar pantalla actual
        if (this.screens[this.currentScreen]) {
            this.screens[this.currentScreen].classList.remove('active');
        }

        // Mostrar nueva pantalla
        this.currentScreen = screenName;
        if (this.screens[screenName]) {
            this.screens[screenName].classList.add('active');
        }
    }

    preloadAssets() {
        // Precargar imágenes para transiciones suaves
        const imagesToPreload = [
            'assets/inicio/fondo.png',
            'assets/inicio/chico.svg',
            'assets/inicio/chica.svg',
            'assets/inicio/logoinnova.svg',
            'assets/inicio/logotuprimerconexion.svg'
        ];

        imagesToPreload.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
