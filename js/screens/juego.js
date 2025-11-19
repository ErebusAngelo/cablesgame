// Pantalla de Juego
let draggedElement = null;

export function initJuego() {
    console.log('Juego iniciado');
    
    // Inicializar elementos arrastrables
    initDraggableElements();
    
    // Inicializar zonas de drop
    initDropZones();
}

function initDraggableElements() {
    const draggableItems = document.querySelectorAll('.draggable-item');
    
    draggableItems.forEach(item => {
        item.setAttribute('draggable', 'true');
        
        item.addEventListener('dragstart', (e) => {
            draggedElement = e.target.closest('.draggable-item');
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', draggedElement.innerHTML);
            
            // Efecto visual al arrastrar
            setTimeout(() => {
                draggedElement.style.opacity = '0.5';
            }, 0);
        });
        
        item.addEventListener('dragend', (e) => {
            draggedElement.style.opacity = '1';
        });
    });
}

function initDropZones() {
    // Las zonas donde se pueden soltar los elementos
    const dropZones = document.querySelectorAll('.structure, .building');
    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            zone.style.transform = 'scale(1.05)';
            zone.style.filter = 'brightness(1.1)';
        });
        
        zone.addEventListener('dragleave', (e) => {
            zone.style.transform = '';
            zone.style.filter = '';
        });
        
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.style.transform = '';
            zone.style.filter = '';
            
            if (draggedElement) {
                // Aquí puedes agregar lógica para verificar si el elemento
                // se soltó en el lugar correcto
                console.log('Elemento soltado en:', zone);
                
                // Efecto de éxito
                zone.style.animation = 'bounce 0.5s ease';
                setTimeout(() => {
                    zone.style.animation = '';
                }, 500);
            }
        });
    });
}

// Función para verificar si el juego está completo
function checkGameComplete() {
    // Lógica para verificar si todos los elementos están en su lugar
    // y mostrar mensaje de éxito
}

// Animación de rebote para feedback
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }
`;
document.head.appendChild(style);
