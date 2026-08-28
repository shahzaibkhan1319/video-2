/* ==========================================
   DR. ZEESHAN KHAN CLINIC
   3D WELCOME JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==============================
       3D WELCOME SCREEN
    ============================== */

    const welcome = document.createElement("div");

    welcome.className = "welcome-screen";

    welcome.innerHTML = `
        <div class="welcome-3d">

            <div class="medical-icon">✚</div>

            <p>WELCOME TO</p>

            <h1>
                Dr. <span>Zeeshan Khan</span>
            </h1>

            <h3>Medical Clinic</h3>

            <div class="loading">
                <div class="loading-bar"></div>
            </div>

            <small>Professional Healthcare • Compassionate Care</small>

        </div>
    `;

    document.body.prepend(welcome);


    /* ==============================
       WELCOME SCREEN STYLE
    ============================== */

    const style = document.createElement("style");

    style.innerHTML = `

        .welcome-screen {
            position: fixed;
            inset: 0;
            z-index: 99999;

            display: flex;
            align-items: center;
            justify-content: center;

            background:
                radial-gradient(
                    circle at center,
                    #e9ffff,
                    #d8f1f5 40%,
                    #102a43 120%
                );

            perspective: 1200px;

            transition:
                opacity 1s ease,
                visibility 1s ease;
        }


        .welcome-screen.hide {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }


        .welcome-3d {
            text-align: center;

            padding: 55px 70px;

            border-radius: 35px;

            background:
                rgba(255,255,255,.82);

            backdrop-filter: blur(20px);

            box-shadow:
                25px 30px 70px rgba(0,0,0,.25),
                -15px -15px 40px rgba(255,255,255,.9),
                inset 2px 2px 8px white;

            transform:
                rotateX(12deg)
                rotateY(-10deg)
                translateZ(80px);

            animation:
                welcomeFloat 3s ease-in-out infinite;

            position: relative;
        }


        .medical-icon {
            width: 75px;
            height: 75px;

            margin: 0 auto 20px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 50%;

            font-size: 42px;

            color: white;

            background:
                linear-gradient(
                    145deg,
                    #00b3b3,
                    #087f8c
                );

            box-shadow:
                10px 15px 25px rgba(0,0,0,.2),
                inset 3px 3px 7px rgba(255,255,255,.5);

            transform: translateZ(60px);

            animation:
                iconRotate 4s linear infinite;
        }


        .welcome-3d p {
            color: #607d8b;

            letter-spacing: 5px;

            font-size: 12px;

            font-weight: 600;

            margin-bottom: 10px;
        }


        .welcome-3d h1 {
            font-size: 48px;

            color: #102a43;

            margin-bottom: 5px;

            text-shadow:
                4px 5px 0 rgba(0,168,168,.08);

            transform: translateZ(40px);
        }


        .welcome-3d h1 span {
            color: #00a8a8;
        }


        .welcome-3d h3 {
            color: #087f8c;

            font-weight: 500;

            margin-bottom: 25px;
        }


        .loading {
            width: 220px;
            height: 6px;

            margin: 0 auto 18px;

            overflow: hidden;

            border-radius: 10px;

            background: #d7e9ee;
        }


        .loading-bar {
            height: 100%;
            width: 0%;

            border-radius: 10px;

            background:
                linear-gradient(
                    90deg,
                    #00a8a8,
                    #087f8c
                );

            animation:
                loading 2.5s ease forwards;
        }


        .welcome-3d small {
            color: #78909c;

            font-size: 11px;
        }


        @keyframes welcomeFloat {

            0%, 100% {
                transform:
                    rotateX(12deg)
                    rotateY(-10deg)
                    translateY(0)
                    translateZ(80px);
            }

            50% {
                transform:
                    rotateX(7deg)
                    rotateY(8deg)
                    translateY(-15px)
                    translateZ(100px);
            }

        }


        @keyframes iconRotate {

            0% {
                transform:
                    rotateY(0deg)
                    translateZ(60px);
            }

            50% {
                transform:
                    rotateY(180deg)
                    translateZ(60px);
            }

            100% {
                transform:
                    rotateY(360deg)
                    translateZ(60px);
            }

        }


        @keyframes loading {

            from {
                width: 0%;
            }

            to {
                width: 100%;
            }

        }


        @media(max-width:600px) {

            .welcome-3d {
                width: 88%;
                padding: 40px 20px;
            }

            .welcome-3d h1 {
                font-size: 32px;
            }

            .medical-icon {
                width: 60px;
                height: 60px;
                font-size: 32px;
            }

        }

    `;

    document.head.appendChild(style);


    /* ==============================
       REMOVE WELCOME SCREEN
    ============================== */

    setTimeout(() => {

        welcome.classList.add("hide");

        setTimeout(() => {
            welcome.remove();
        }, 1000);

    }, 3000);


    /* ==============================
       3D MOUSE EFFECT
    ============================== */

    const cards = document.querySelectorAll(
        ".service-card, .image-card, .doctor-image, .about-image"
    );


    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -5;

            const rotateY =
                ((x - centerX) / centerX) * 5;


            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


    /* ==============================
       SCROLL REVEAL
    ============================== */

    const sections =
        document.querySelectorAll(
            ".about, .services, .doctor, .appointment, .contact"
        );


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show-section"
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    sections.forEach(section => {

        section.classList.add(
            "hidden-section"
        );

        observer.observe(section);

    });


    /* ==============================
       SCROLL ANIMATION CSS
    ============================== */

    const revealStyle =
        document.createElement("style");

    revealStyle.innerHTML = `

        .hidden-section {
            opacity: 0;
            transform:
                translateY(70px)
                rotateX(8deg);

            transition:
                opacity 1s ease,
                transform 1s ease;
        }


        .show-section {
            opacity: 1;

            transform:
                translateY(0)
                rotateX(0);
        }

    `;

    document.head.appendChild(revealStyle);


});