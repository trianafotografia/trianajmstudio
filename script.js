// Colección de fotos por boda
const photoSets = {
    boda1: ['images/photo1-1.jpg', 'images/photo1-2.jpg', 'images/photo1-3.jpg', 'images/photo1-4.jpg', 'images/photo1-5.jpg', 'images/photo1-6.jpg', 'images/photo1-7.jpg', 'images/photo1-8.jpg', 'images/photo1-9.jpg', 'images/photo1-10.jpg', 'images/photo1-11.jpg', 'images/photo1-12.jpg', 'images/photo1-13.jpg', 'images/photo1-14.jpg', 'images/photo1-15.jpg', 'images/photo1-16.jpg', 'images/photo1-17.jpg', 'images/photo1-18.jpg', 'images/photo1-19.jpg', 'images/photo1-20.jpg', 'images/photo1-21.jpg', 'images/photo1-22.jpg', 'images/photo1-23.jpg', 'images/photo1-24.jpg', 'images/photo1-25.jpg', 'images/photo1-26.jpg']
,
    boda2: ['images/photo2-1.jpg', 'images/photo2-2.jpg', 'images/photo2-3.jpg', 'images/photo2-4.jpg', 'images/photo2-5.jpg', 'images/photo2-6.jpg', 'images/photo2-7.jpg', 'images/photo2-8.jpg', 'images/photo2-9.jpg', 'images/photo2-10.jpg', 'images/photo2-11.jpg', 'images/photo2-12.jpg', 'images/photo2-13.jpg', 'images/photo2-14.jpg', 'images/photo2-15.jpg', 'images/photo2-16.jpg', 'images/photo2-17.jpg', 'images/photo2-18.jpg', 'images/photo2-19.jpg', 'images/photo2-20.jpg', 'images/photo2-21.jpg', 'images/photo2-22.jpg', 'images/photo2-23.jpg']
,
    boda3: ['images/photo3-1.jpg', 'images/photo3-2.jpg', 'images/photo3-3.jpg', 'images/photo3-4.jpg', 'images/photo3-5.jpg', 'images/photo3-6.jpg', 'images/photo3-7.jpg', 'images/photo3-8.jpg', 'images/photo3-9.jpg', 'images/photo3-10.jpg', 'images/photo3-11.jpg', 'images/photo3-12.jpg', 'images/photo3-13.jpg', 'images/photo3-14.jpg']


};

// Obtener elementos del DOM
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Variable para rastrear el índice actual de la foto y el conjunto actual
let currentPhotoIndex = 0;
let currentSet = [];

// Función para abrir el modal con las fotos correspondientes
function openModal(setName) {
    currentSet = photoSets[setName];
    currentPhotoIndex = 0; // Comenzamos desde la primera foto del conjunto
    modal.style.display = 'block';
    updateModalImage();
}

// Función para actualizar la imagen mostrada en el modal
function updateModalImage() {
    if (currentSet.length > 0) {
        modalImg.src = currentSet[currentPhotoIndex];
    }
}

// Evento para cerrar el modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Eventos para navegar entre las fotos
prevButton.addEventListener('click', () => {
    if (currentPhotoIndex > 0) {
        currentPhotoIndex--;
        updateModalImage();
    }
});

nextButton.addEventListener('click', () => {
    if (currentPhotoIndex < currentSet.length - 1) {
        currentPhotoIndex++;
        updateModalImage();
    }
});

// Agregar eventos a las imágenes de la galería
const galleryPhotos = document.querySelectorAll('.gallery-photo');
galleryPhotos.forEach(photo => {
    photo.addEventListener('click', () => {
        const setName = photo.getAttribute('data-set'); // Obtener el conjunto de fotos correspondiente
        openModal(setName); // Abrir el modal con las fotos del conjunto
    });
});

// Cerrar el modal al hacer clic fuera de la imagen
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Obtener elementos del menú hamburguesa y sidebar
const hamburgerMenu = document.getElementById('hamburger-menu');
const sidebar = document.getElementById('sidebar');

// Agregar evento al botón hamburguesa
hamburgerMenu.addEventListener('click', function () {
    // Alternar la clase "active" en el menú hamburguesa y el sidebar
    hamburgerMenu.classList.toggle('active');
    sidebar.classList.toggle('active');
});

// Cerrar el menú cuando se hace clic en una opción
document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.addEventListener('click', function () {
        // Remover la clase "active" del menú hamburguesa y el sidebar
        hamburgerMenu.classList.remove('active');
        sidebar.classList.remove('active');
    });
});

// Seleccionar todos los contenedores de videos
document.querySelectorAll('.video-container').forEach(container => {
    const video = container.querySelector('.trailer-video');
    const playButton = container.querySelector('.play-button');

    // Agregar evento al hacer clic en el botón Play
    playButton.addEventListener('click', () => {
        // Reproducir el video
        video.play();
        // Agregar la clase "playing" al video para ocultar el botón Play
        video.classList.add('playing');
    });

    // Opcional: Mostrar el botón Play si el usuario pausa el video
    video.addEventListener('pause', () => {
        video.classList.remove('playing');
    });
});