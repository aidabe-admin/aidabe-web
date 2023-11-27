import Carousel from "@/app/components/layout/Carousel";
import BlogLayout from "@/app/components/layout/BlogLayout";
import Board from "@/app/components/layout/Board";
import Partners from "@/app/components/layout/Partners";

export default function Home() {
  const slides = [
    {
        title: "Somos AIDABE",
        image: "/carousel-1.jpg",
        subtitle: "La mayor asociación de directores de F&B de habla hispana",
        link: "/asociacion",
        button: "ver más"
    },
    {
        title: "HIP",
        image: "/carousel-2.jpg",
        subtitle: "El principal evento de innovación para impulsar el sector horeca",
        link: null,
        button: null
    },
    {
        title: "Hazte socio",
        image: "/carousel-3.jpg",
        subtitle: "Forma parte de AIDABE hoy mismo",
        link: "/asociados",
        button: "ver más"
    },
  ];

  const posts = [
    {
      title: 'Título 1',
      image: '/post-1.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
      link: '/',
      alt: 'Lorem ipsum dolor sit amet.'
    },
    {
      title: 'Título 2',
      image: '/post-2.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
      link: '/',
      alt: 'Lorem ipsum dolor sit amet.'
    },
    {
      title: 'Título 3',
      image: '/post-3.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
      link: '/',
      alt: 'Lorem ipsum dolor sit amet.'
    },
  ];

  const board = [
    {
      name: 'Eduardo Serrano',
      bio: 'Especializado en Planificación Estratégica por ESSIC, MBA en Gestión de Empresas, Diplomado en Dirección de Hoteles por la AmericanHotel & Motel Association, Diplomado en Dirección de Hoteles por el Hotel Institute Montreux – Suiza. Cuenta con una amplia experiencia como Director de Operaciones de Cadenas Hoteleras, Director General de Restauración de Cadenas Hoteleras, Director de Restauración de Grupos de Restauración, así como Empresario en la hostelería. Es profesor visitante de las principales Universidades, Cámaras de Comercio y Escuelas de Negocio españolas, impartiendo Marketing, Planificación Estratégica, Diseño de Nuevos Modelos de Negocio y Gestión de Empresas Hosteleras (Hoteles y Restauración). Coordina el Máster en Dirección de Alimentos y Bebidas del Basque Culinary Center - Universidad de Mondragón y el Master Online en Dirección de Hoteles y Empresas de Restauración, de la Universidad Católica de Murcia. Es Presidente de AIDABE – Asociación Iberoamericana de Directores de Alimentos y Bebidas – Jefaturas Ejecutivas de Cocina desde el año 2003.',
      linkedin: 'https://linkedin.com/',
      pic: "/board/serrano.jpeg"
    },
    {
      name: 'Nuño S. Urrea',
      bio: 'Dirección Estratégica para empresas de Gastronomía. Director de SADE Gastronomía. Investigador y formador en estrategia, empresa familiar y transformación digital en hostelería. Profesor en diferentes universidades y centros de formación, como Basque Culinary Center o CIB, Culinary Institute of .Barcelona. Colaborador en HIP, Hospitality Innovation Planet y Barra de Ideas, CookData data driven para horeca y ESMA, Consultoría Estratégica en planificación, desarrollo y gestión de proyectos de ocio, turísticos y de hostelería. Socio fundador de VLUBER, delivery de alimentación saludable en las empresas. Fundador y director de HORECA iLab entre 2016 y 2019, consultoría de desarrollo de negocio y transformación digital. Es miembro de la Junta Directiva de AIDABE - Asociación Iberoamericana de Directores de Alimentos y Bebidas - Jefaturas Ejecutivas de Cocina desde el año 2020. ',
      linkedin: 'https://linkedin.com/',
      pic: "/board/urrea.jpeg"
    },
    {
      name: 'Nicolás Ayela',
      bio: 'Máster en Dirección de Marketing por Esuma, Máster en Dirección y Gestión de Empresas Hosteleras por ICADE, Sumiller. U.E.C, Grado en Dirección y Administración de Empresas Hosteleras por la Escuela Superior de Hostelería de Sevilla y Grado en Derecho por la Universidad de Alicante. Actualmente se desempeña como Director del Grupo APS en 3 áreas de negocio: Gestión de establecimientos de restauración, asesoría especializada en restaurantes y formación universitaria & in Company. Es miembro de la Junta Directiva de AIDABE - Asociación Iberoamericana de Directores de Alimentos y Bebidas - Jefaturas Ejecutivas de Cocina desde el año 2023. ',
      linkedin: 'https://linkedin.com/',
      pic: "/board/ayela.png"
    },
    {
      name: 'Vivian Suárez',
      bio: 'Máster en Innovación y Gestión de Restaurantes por Basque Culinary Center, España, Licenciada en Turismo y Hotelería por la Universidad del Valle, Bolivia, Técnico Superior en Gestión y Operación de Cocina por la Cooperación Española Bolhispania – Bolivia. Especialista en Sistemas de Gestión de Calidad ISO, Especialista en Planificación, Gestión y Comercialización del Turismo Rural. Amplio bagaje en la planificación y gestión de AyB / F&B tanto en hotelería (a nivel de unidad de negocio y corporativo), como en restauración independiente, todo ello a nivel internacional. Amplia experiencia en consultoría vinculada al diseño y planificación de proyectos turísticos y, en la organización de eventos corporativos y de particulares. Es miembro de la Junta Directiva de AIDABE - Asociación Iberoamericana de Directores de Alimentos y Bebidas - Jefaturas Ejecutivas de Cocina desde el año 2020. ',
      linkedin: 'https://linkedin.com/',
      pic: "/board/vivian.jpeg"
    },
    {
      name: 'Gory Martínez Hervás',
      bio: 'Profesional del área de Operaciones de Alimentos y Bebidas. Su formación fue cursada en la Escuela de Hostelería de Palma de Mallorca. Cuenta con una experiencia de más de 30 años en el área, ha trabajado en productos hoteleros de todos los conceptos, de lujo, Boutique, todo incluido así como en varios restaurantes de estrella Michelin. Ha sido Corporativo de Alimentos y Bebidas de varios grupos hoteleros con volumen de más de 25 unidades de negocio. Amante de la formación también colabora con la Escuelas de ETB, EHIB y otras instituciones como formador en hostelería y restauración. En los últimos años ha colaborado también como Outsourcing , en varios proyectos aportando sus conocimientos y consiguiendo éxitos significativos . Es miembro de la Junta Directiva de AIDABE - Asociación Iberoamericana de Directores de Alimentos y Bebidas - Jefaturas Ejecutivas de Cocina desde el año 2023.',
      linkedin: 'https://linkedin.com/',
      pic: "/board/martinez.jpeg"
    },
    
  ]

  return (
    <main className="content-wrapper main-wrapper">
        <Carousel content={slides} />
        <BlogLayout posts={posts} />
        <Board board={board} />
        <Partners />
    </main>
  )
}
