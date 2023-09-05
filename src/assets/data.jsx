import netflixclone from "../assets/netflixcolen.png"
import tescommerce from "../assets/tescommerce.png"
import asiarticle from "../assets/asiarticle.png"

const tab = [
  { id: 1, name: "Home", path: "/home" },
  { id: 2, name: "About", path: "/about", child: "/profile" },
  { id: 3, name: "Experiences", path: "/experiences" },
];

const projects = [
  {
    id: 1,
    name: "Netflix Clone",
    desc: "A simple Netflix clone website, made with React JS, Tailwind CSS, and The Movie Database API. This project was made to practice my understanding of ReactJS and how to fetch API. Users are allowed to sign up, view movie details, add liked movie and watch movie trailers. The website utilizes the API from The Movie Database to fetch movie data and display it in a user-friendly interface.",
    img: netflixclone,
    link : 'https://gamamujur.github.io/react-netflixclone/'
  },
  {
    id: 2,
    name: "TesCommerce",
    desc: "A simple e-commerce website, made with Next JS, Tailwind CSS, and Fakestore API. Tescommerce allows users to browse products from various categories. It features a shopping cart system, cart views and total items in the cart. The website utilizes the Fakestore API to fetch product data and display it to users. This project also implements the use of Redux.",
    img: tescommerce,
    link:'https://tescommerce.vercel.app/'
  },
  {
    id: 3,
    name: "Asiarticle",
    desc: "A short web article of some countries in Asia. This project utilizes ReactJS, TailwindCSS and Framer Motion. The purpose of the making of this project was to measure my understanding in Framer Motion.",
    img: asiarticle,
    link:'https://asiarticle.vercel.app/'
  },
  
];

const experience = [
  {
    id: 1,
    date: "2023",
    utilize: "HTML, CSS, TailwindCSS, JavaScript, jQuery, PHP, Laravel, MySQL",
    position: "Fullstack Web Developer",
    desc: "In my role as a Fullstack Web Developer, I played a crucial part in the development of a web-based ERP application. My responsibilities were not only the frontend and backend development but also user interface design and database management."
  },
  {
    id: 2,
    date: "2022",
    utilize: "HTML, CSS, TailwindCSS, PHP, Laravel, MySQL",
    position: "Web Developer Intern",
    desc: "As a Web Developer Intern, my primary focus was around the creation of a web-based human resource management system. My contributions included designing user interfaces, enhancing the application's functionalities, and resolving any issues during development. This internship solidified my skills in the utilized tech."
  },
  {
    id: 3,
    date: "2020",
    utilize: "PHP, MySQL",
    position: "Backend Developer Intern",
    desc: "In my role as a Backend Developer Intern, I utilized PHP and MySQL to construct the backend infrastructure for a web-based inventory system. My role included database modeling to ensure the system's functionality. This experience laid the foundation for my proficiency in backend development."
  }
];

export { tab,projects, experience };
