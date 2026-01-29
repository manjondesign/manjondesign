Proyecto MANJÓN Design
[index.html](https://github.com/user-attachments/files/24932695/index.html)
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">

  <!-- Viewport corregido para iOS (evita zoom-out y tamaños reducidos) -->
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">

  <title>MANJÓN Diseño Gráfico</title>

  <!-- Nuevo CSS con nombre distinto para evitar caché -->
  <link rel="stylesheet" href="style-final.css">[style-final.css](https://github.com/user-attachments/files/24932697/style-final.css)
[script.js](https://github.com/user-attachments/files/24932696/script.js)

</head>

<body>

  <div class="stage">

    <!-- Pantalla 0: Logo original -->
    <div class="screen active">
      <img class="logo" src="img/Logos MANJONDESIGN_v2-1.png" alt="Logo MANJÓN Diseño Gráfico">
    </div>

    <!-- Pantalla 1: Email -->
    <div class="screen email email-1">
      <a href="mailto:manjondesign@gmail.com" class="picto-email">
        <svg viewBox="0 0 200 140" fill="none" stroke="#333" stroke-width="4">
          <rect x="2" y="2" width="196" height="136" fill="none"/>
          <line x1="2" y1="2" x2="100" y2="138"/>
          <line x1="198" y1="2" x2="100" y2="138"/>
        </svg>
      </a>
    </div>

    <!-- Pantalla 2 -->
    <div class="screen">
      <img class="logo" src="img/Logos MANJONDESIGN_v2-2.png" alt="Logo variación 2">
    </div>

    <!-- Pantalla 3 -->
    <div class="screen email email-2">
      <a href="mailto:manjondesign@gmail.com" class="picto-email">
        <svg viewBox="0 0 200 140" fill="none" stroke="#333" stroke-width="4">
          <rect x="2" y="2" width="196" height="136" fill="none"/>
          <line x1="2" y1="2" x2="100" y2="138"/>
          <line x1="198" y1="2" x2="100" y2="138"/>
        </svg>
      </a>
    </div>

    <!-- Pantalla 4 -->
    <div class="screen">
      <img class="logo" src="img/Logos MANJONDESIGN_v2-3.png" alt="Logo variación 3">
    </div>

    <!-- Pantalla 5 -->
    <div class="screen email email-3">
      <a href="mailto:manjondesign@gmail.com" class="picto-email">
        <svg viewBox="0 0 200 140" fill="none" stroke="#333" stroke-width="4">
          <rect x="2" y="2" width="196" height="136" fill="none"/>
          <line x1="2" y1="2" x2="100" y2="138"/>
          <line x1="198" y1="2" x2="100" y2="138"/>
        </svg>
      </a>
    </div>

    <!-- Pantalla 6 -->
    <div class="screen">
      <img class="logo" src="img/Logos MANJONDESIGN_v2-4.png" alt="Logo variación 4">
    </div>

    <!-- Pantalla 7 -->
    <div class="screen email email-4">
      <a href="mailto:manjondesign@gmail.com" class="picto-email">
        <svg viewBox="0 0 200 140" fill="none" stroke="#333" stroke-width="4">
          <rect x="2" y="2" width="196" height="136" fill="none"/>
          <line x1="2" y1="2" x2="100" y2="138"/>
          <line x1="198" y1="2" x2="100" y2="138"/>
        </svg>
      </a>
    </div>

  </div>

  <script src="script.js"></script>
</body>
</html>

// ---------------------------------------------
// LÓGICA DE PANTALLAS (sin sonidos)
// ---------------------------------------------
let index = 0;
const screens = document.querySelectorAll('.screen');
const total = screens.length;
let locked = false;

function showScreen(i) {
  screens.forEach((s, idx) => {
    if (idx === i) {
      s.classList.add('active');
    } else {
      s.classList.remove('active');
    }
  });
}

// ---------------------------------------------
// NAVEGACIÓN HACIA ADELANTE
// ---------------------------------------------
function next() {
  if (!locked) {
    locked = true;
    index = (index + 1) % total;
    showScreen(index);
    setTimeout(() => locked = false, 900);
  }
}

// ---------------------------------------------
// NAVEGACIÓN HACIA ATRÁS
// ---------------------------------------------
function prev() {
  if (!locked) {
    locked = true;
    index = (index - 1 + total) % total;
    showScreen(index);
    setTimeout(() => locked = false, 900);
  }
}

// ---------------------------------------------
// SCROLL EN ORDENADOR
// ---------------------------------------------
window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) next();
  else prev();
});

// ---------------------------------------------
// SWIPE EN MÓVIL (para asegurar compatibilidad)
// ---------------------------------------------
let touchStartY = 0;

window.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
});

window.addEventListener('touchend', (e) => {
  const touchEndY = e.changedTouches[0].clientY;
  const deltaY = touchStartY - touchEndY;

  if (Math.abs(deltaY) < 40) return;

  if (deltaY > 0) next();
  else prev();
});

// ---------------------------------------------
// INICIO
// ---------------------------------------------
showScreen(index);

/* ------------------------------
   RESET
------------------------------ */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overscroll-behavior: none;
  font-family: sans-serif;
  overflow: hidden;
}

/* ------------------------------
   CONTENEDOR PRINCIPAL
------------------------------ */
.stage {
  position: relative;
  width: 100vw;
  height: 100dvh;   /* altura real del dispositivo */
}

/* ------------------------------
   PANTALLAS SUPERPUESTAS
------------------------------ */
.screen {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  pointer-events: none;
  transition: opacity 0.8s ease;

  z-index: 0;
}

.screen.active {
  opacity: 1;
  pointer-events: auto;
  z-index: 1;
}

/* ------------------------------
   LOGOS
------------------------------ */
.logo {
  width: 50vw;
  max-width: 440px;   
  min-width: 200px;
  height: auto;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

/* --- MÓVIL: logo grande --- */
@media (max-width: 900px) {
  .logo {
    width: 90vw;      
    max-width: 90vw;  
    height: auto;
  }
}

.screen.active .logo {
  opacity: 1;
  transform: translateY(0);
}

/* ------------------------------
   PICTO EMAIL
------------------------------ */
.picto-email svg {
  width: 140px;
  height: 98px;
}

.picto-email {
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;

  color: #333;
  text-decoration: none;
}

.screen.active .picto-email {
  opacity: 1;
  transform: translateY(0);
}

/* --- MÓVIL: sobre más pequeño --- */
@media (max-width: 900px) {
  .picto-email svg {
    width: 110px;
    height: 78px;
  }
}

/* ------------------------------
   FONDOS DE EMAIL
------------------------------ */
.email { background: #f5f5f5; }
.email-1 { background: #f2e9e4; }
.email-2 { background: #e8f3ff; }
.email-3 { background: #f7f7d4; }
.email-4 { background: #e9f7ef; }

/* -----------------------------------------
   MICRO‑LATIDO + LEVE ASCENSO (visible en móvil)
----------------------------------------- */
@keyframes emailPulseMobile {
  0%   { transform: scale(1) translateY(0); }
  40%  { transform: scale(1.05) translateY(-3px); }
  100% { transform: scale(1) translateY(0); }
}

/* Solo en pantallas activas */
.screen.active .picto-email {
  animation: emailPulseMobile 2.8s ease-in-out infinite;
}

/* --- MÓVIL HORIZONTAL: evitar desbordes y centrar --- */
@media (max-height: 500px) and (orientation: landscape) {
  .logo {
    width: auto;
    height: 70vh;        /* se adapta a la altura */
    max-height: 70vh;
    max-width: 90vw;     /* aire lateral */
  }
}

/* --- ESCRITORIO HORIZONTAL: logo más grande --- */
@media (min-width: 1200px) and (min-aspect-ratio: 16/10) {
  .logo {
    max-width: 520px;    /* presencia editorial */
  }
}

/* --- VENTANAS VERTICALES (solo escritorio/tablet) --- */
@media (max-aspect-ratio: 3/4) and (min-width: 900px) {
  .logo {
    width: 60vw;
    max-width: 360px;    /* equilibrio en vertical */
  }
}


