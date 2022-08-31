import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { GitHub, Language, WebOutlined } from '@material-ui/icons';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BrushIcon from '@material-ui/icons/Brush';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import lens from '../assets/images/lens.jpg'
import hib from '../assets/images/hib.jpg'
import balletrina from '../assets/images/balletrina.jpg'
import portfolio from '../assets/images/portfolio.jpg';
import portfoliobt from '../assets/images/portfolio-bt.jpg';
import portfoliobt1 from '../assets/images/portfolio-bt1.jpg';
import portfolioweb from '../assets/images/portfolioweb.jpg';
import Resume from '../assets/images/resume.png';
import Resume2 from '../assets/images/resume2.png';


const data = {
    name: 'Evans R. Mondragon',
    phone: '+57 3127921501',
    title: 'Desarrollo Web',
    email: 'evananyta@hotmail.com',
    addres: 'cali - Jamundi Colombia',
    whatsApp: 'https://api.whatsapp.com/send?phone=573127921501&text=hola,%20Dev@ns%20me%20puedes%20ayudar%20con%20mi%20proyecto%20Gracias!?',

    socials: {
        Facebook: {
            link: 'https://www.facebook.com/devans.devans.9469',
            text: 'Devans',
            icon: <FacebookIcon />
        },
        Twitter: {
            link: 'https://twitter.com/Devans2021',
            text: '@Devans2021',
            icon: <TwitterIcon />
        },
        Github: {
            link: 'https://www.github.com/',
            text: 'Devans',
            icon: <GitHubIcon />
        },
        WhatsApp: {
            link: 'https://api.whatsapp.com/send?phone=573127921501&text=hola,%20Dev@ns%20me%20puedes%20ayudar%20con%20mi%20proyecto%20Gracias!?',
            text: 'Dev@ns',
            icon: <WhatsAppIcon />
        }
    },

    about:
        "Soy freelancer en desarrollo web, orientado desde diferentes áreas, como la programación de front-end (HTML, CSS y Javascript), accesibilidad digital, experiencia del usuario y diseño visual. \n Me encanta el desarrollo y el diseño web en todas sus formas y ayudo a las empresas a mejorar su presencia en Internet y a las personas a Entender mejor el mundo de la informática y las nuevas tecnologías.",

    experience: [
        {
            title: "Freelancer",
            date: "Actualmente",
            description: "Desarrollador en tecnologias WEB (HTML, CSS, JAVASCRIPT) CMS WordPress,  frameworks ANGULAR, REACT diseño UI/UX"
        },
        {
            company: "Q-Vision Technologies",
            title: "Ingeniero de aseguramiento de la calidad QA",
            date: "Actualmente",
            description: "Analista de calidad Sector salud proyecto SURA, pruebas funcionales y certificacion de requerimientos, smoke test, pruebas de regresion, pruebas de aceptacion con usuario final, creacion de planes y casos de prueba, gestion de proyectos agiles metodologia SCRUM, gestion de proyecto por medio de AZURE DEVOPS, Bases de datos Oracle, PostgreSql"
        },
        {
            company: "As-Net",
            title: "Analista de Certificación",
            date: "2021 - 2022",
            description: "Analista de Certificación, orientado a gestión de proyectos ágiles en implementación de software sector Bancario, pruebas de calidad y mantenimiento de aplicativos en produccion, Gestion y pruebas QA en aplicativo SEI compensacion Bancaria, bases de Datos DB2 en sistema AS400."
        },
        {
            company: "Banco de Occidente",
            title: "Analista de Calidad",
            date: "2019 - 2021",
            description: "Analista de calidad en aplicaciones del banco del proyecto Conexión Aval, análisis y diseño de casos de prueba, pruebas funcionales y no funcionales, administración de base a de datos Oracle, análisis y diseño de requerimientos y funcionalidades del sistema, administración de procesos ETL, gestión de proyectos metodología SCRUM."
        },
        {
            company: "Carvajal Tecnologia",
            title: "Ingeniero de Implementación",
            date: "2018 - 2019",
            description: "Analista de calidad en aplicaciones del banco proyecto Conexión Aval, análisis y diseño de casos de prueba, pruebas funcionales y no funcionales, administración de base a de datos Oracle, análisis y diseño de requerimientos y funcionalidades del sistema, administración de procesos ETL, gestión de proyectos metodología SCRUM."
        }
    ],

    education: [
        {
            title: "Ingeniero de Sistemas",
            date: "2013 - 2018",
            description: "Profesional en ingenieria de sistemas"
        },
        {
            title: "Seminario Administracion de bases de Datos Oracle",
            date: "2018 - 2018",
            description: "Seminario de profundización en administracion de bases de datos Oracle"
        },
        {
            title: "Especialidad Gestion y Seguridad de Bases de Datos",
            date: "2019 - 2020",
            description: "Especialización Tecnologica en Gestion y Seguridad de Bases de Datos SENA"
        }
    ],

    services: [
        {
            title: 'Desarrollo Web',
            description: 'Desarrollo de sitios o aplicaciones Web en tecnologias, Html, Css, JS Frameworks',
            icon: <WebOutlined />
        },
        {
            title: 'Wordpress',
            description: 'Desarrollo de sitios estaticos o dinamicos administrables por el usuario ',
            icon: <DashboardIcon />
        },
        {
            title: 'UI-UX',
            description: 'Diseño de interfaces y experiencia de usuario, analisis SEO',
            icon: <BrushIcon />
        }

    ],

    projects: [
        {
            tag: 'React',
            image: portfolio,
            title: 'Portafolio',
            caption: 'Portafolio con React JS',
            description: 'Portafolio desarrollado con React JS, uso de estilos CSS y Material UI',
            links: [

                { link: 'https://portafolio.devans.online/', icon: <Language /> },
                { link: 'https://github.com/3v4n5', icon: <GitHub /> }

            ]
        },
        {
            tag: 'Web',
            image: portfoliobt,
            title: 'Portafolio Bootstrap',
            caption: 'Portafolio con Bootstrap 5',
            description: 'Portafolio desarrollado con Bootstrap 5, maquetacion y estilos CSS',
            links: [

                { link: 'https://3v4n5.github.io/app-Bootstrap-1/', icon: <Language /> },
                { link: 'https://github.com/3v4n5', icon: <GitHub /> }

            ]
        },
        {
            tag: 'Web',
            image: portfoliobt1,
            title: 'Portafolio Bootstrap',
            caption: 'Portafolio con Bootstrap 5',
            description: 'Portafolio desarrollado con Bootstrap 5, maquetacion y estilos CSS',
            links: [

                { link: 'https://3v4n5.github.io/app-Botstrap-5-portafolio/', icon: <Language /> },
                { link: 'https://github.com/3v4n5', icon: <GitHub /> }

            ]
        },
        {
            tag: 'Web',
            image: portfolioweb,
            title: 'Portafolio Web',
            caption: 'Portafolio HTML, CSS, JS',
            description: 'Portafolio desarrollado con HTML, CSS, JS',
            links: [

                { link: 'https://3v4n5.github.io/portafolio-CSS-JS/', icon: <Language /> },
                { link: 'https://github.com/3v4n5', icon: <GitHub /> }

            ]
        },
        {
            tag: 'Web',
            image: Resume,
            title: 'Resume Web, Html, Bootstrap, Js',
            caption: 'Resume HTML, CSS, JS, BOOTSTRAP',
            description: 'Resume Desarrollado con HTML, BOOTSTRAP, JS',
            links: [

                { link: 'https://3v4n5.github.io/Resume-Bootstrap-JS-Html/', icon: <Language /> },
                { link: 'https://github.com/3v4n5', icon: <GitHub /> }

            ]
        },
        {
            tag: 'Web',
            image: Resume2,
            title: 'Resume Web, Html, CSS, JS',
            caption: 'Resume HTML, CSS, JS',
            description: 'Resume Desarrollado con HTML, CSS, JS',
            links: [

                { link: 'https://3v4n5.github.io/Resume-Html-CSS-JS/', icon: <Language /> },
                { link: 'https://github.com/3v4n5', icon: <GitHub /> }

            ]
        },
        {
            tag: 'WordPress',
            image: lens,
            title: 'Lens Arte y Felicidad',
            caption: ' Tienda de Regalos',
            description: 'Tienda de regalos desarrollada con WP, HTML, CSS, Ecommerce medios de pago y carrito de compras.',
            links: [

                { link: 'https://lensarteyfelicidad.com/', icon: <Language /> },
                { link: 'https://github.com/3v4n5', icon: <GitHub /> }

            ]

        },
        {
            tag: 'WordPress',
            image: balletrina,
            title: 'Balletrina',
            caption: 'Tienda de Ropa',
            description: 'Tienda de Ropa desarrollada con WP, HTML, CSS, Ecommerce medios de pago y carrito de compras.',
            links: [

                { link: 'https://balletrina.com/', icon: <Language /> },
                { link: 'https://github.com/3v4n5', icon: <GitHub /> }

            ]

        },
        {
            tag: 'WordPress',
            image: hib,
            title: 'Hib un Estilo Propio',
            caption: 'Tienda Urbana',
            description: 'Tienda de Urbana desarrollada con WP, HTML, CSS, Ecommerce medios de pago y carrito de compras.',
            links: [

                { link: 'https://hibunestilopropio.com/', icon: <Language /> },
                { link: 'https://github.com/3v4n5', icon: <GitHub /> }

            ]

        }
    ]

}

export default data;
