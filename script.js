// =========================================
// HERENCIA NAVBAR + FOOTER RESPONSIVE
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    // =========================================
    // NAVBAR
    // =========================================

    const navHTML = `
    
    <nav class="navbar navbar-expand-lg custom-navbar">

        <div class="container-fluid px-lg-5">

            <!-- LOGO -->
            <a class="navbar-brand logo" href="index.html">
                <img src="recursos/LogoOficial.png" alt="Logo Javier Salazar">
            </a>

            <!-- BOTÓN HAMBURGUESA -->
            <button 
                class="navbar-toggler custom-toggler" 
                type="button" 
                data-bs-toggle="collapse"
                data-bs-target="#menuNavbar"
                aria-controls="menuNavbar"
                aria-expanded="false"
                aria-label="Toggle navigation">

                <span class="navbar-toggler-icon"></span>

            </button>

            <!-- MENÚ -->
            <div class="collapse navbar-collapse justify-content-end" id="menuNavbar">

                <ul class="navbar-nav nav-links align-items-lg-center">

                    <li class="nav-item">
                        <a href="index.html" class="nav-link" id="nav-index">
                            Inicio
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="sobre-mi.html" class="nav-link" id="nav-sobre-mi">
                            Sobre mi
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="portafolio.html" class="nav-link" id="nav-portafolio">
                            Portafolio
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="servicios.html" class="nav-link" id="nav-servicios">
                            Servicios
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="contacto.html" class="nav-link" id="nav-contacto">
                            Contacto
                        </a>
                    </li>

                </ul>

            </div>

        </div>

    </nav>
    `;

    // =========================================
    // FOOTER
    // =========================================

    const footerHTML = `

    <div class="container-fluid px-lg-5">

        <div class="footer-container">

            <!-- LINKS -->
            <div class="footer-links">

                <a href="#">CV completo (pdf)</a>

                <a href="#">
                    Terminos y condiciones
                </a>

                <a href="#">
                    Privacidad
                </a>

            </div>

            <!-- LOGO -->
            <div class="footer-logo">
                <img src="recursos/LogoOficial.png" alt="Logo Footer">
            </div>

            <!-- REDES -->
            <div class="footer-social">

                <p>Redes Sociales</p>

                <div class="social-icons">

                    <a href="#">
                        <img src="recursos/git.png" alt="GitHub">
                    </a>

                    <a href="#">
                        <img src="recursos/insta.png" alt="Instagram">
                    </a>

                    <a href="#">
                        <img src="recursos/face.png" alt="Facebook">
                    </a>

                    <a href="#">
                        <img src="recursos/lin.png" alt="LinkedIn">
                    </a>

                    <a href="#">
                        <img src="recursos/wat.png" alt="WhatsApp">
                    </a>

                </div>

            </div>

        </div>

        <!-- FOOTER BOTTOM -->
        <div class="footer-bottom">

            <div class="footer-copy-left">
                <p>© 2026, Javier Salazar</p>
            </div>

            <div class="footer-copy-center">
                <p>
                    © 2026, Javier Salazar Todos los derechos reservados
                </p>
            </div>

        </div>

    </div>
    `;

    // =========================================
    // INYECTAR HEADER Y FOOTER
    // =========================================

    const headerTag = document.querySelector("header");
    const footerTag = document.querySelector("footer");

    if (headerTag) {
        headerTag.innerHTML = navHTML;
    }

    if (footerTag) {
        footerTag.innerHTML = footerHTML;
    }

    // =========================================
    // ACTIVAR LINK SEGÚN LA PÁGINA
    // =========================================

    const activePage = window.location.pathname.split("/").pop();

    if (activePage === "index.html" || activePage === "") {

        document
            .getElementById("nav-index")
            ?.classList.add("active");

    } else {

        const idToActivate =
            "nav-" + activePage.replace(".html", "");

        const activeLink =
            document.getElementById(idToActivate);

        if (activeLink) {
            activeLink.classList.add("active");
        }
    }

    // =========================================
    // CERRAR MENÚ EN MOBILE
    // =========================================

    const navLinks =
        document.querySelectorAll(".nav-link");

    const navbarCollapse =
        document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (
                window.innerWidth < 992 &&
                navbarCollapse.classList.contains("show")
            ) {

                const bsCollapse =
                    new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });

                bsCollapse.hide();
            }

        });

    });

});