import styles from '@/app/(secciones)/asociacion/asociacion.module.scss';

import Button from '@/app/ui/button';
import BoardLayout from '@/app/ui/BoardLayout';

export default function Board() {
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

    return(
        <section className="main-wrapper board-page">
            <header className={styles.section_header}>
                <h2 className={styles.section_title}>La asociación</h2>
            </header>
            <section className={styles.section}>
                <h3 className={styles.section_subtitle}>Sobre AIDABE</h3>
                <p className={styles.section_text}>
                    La Asociación Iberoamericana de Directoras y Directores de Alimentos y Bebidas Jefaturas Ejecutivas de Cocina, nace con el objetivo de promover la labor, establecer relaciones profesionales, y fomentar el intercambio de información, entre los perfiles directivos de la industria de Servicios de Alimentación y Bebidas / Food Service Industry.
                </p>
                <p className={styles.section_text}>
                    Entre sus actividades están la promoción de su figura, actividades y mejores prácticas; la representación de sus intereses ante empresas, instituciones y la sociedad; y la inversión en procesos de I+D+i vinculados a estas actividades, todo ello con criterios de sostenibilidad social, ambiental, y económica, son igualmente, parte de nuestra misión.
                </p>
            </section>
            <section className={`${styles.section} ${styles.proposito}`}>
                <h3 className={styles.section_subtitle}>Nuestro propósito</h3>
                <p className={styles.section_text}>
                    Propósito: Buscar el reconocimiento social, la mejora profesional y la defensa de los intereses del colectivo de profesionales al frente de una Dirección de Alimentos y Bebidas (AyB / F&B), así como de las Jefaturas Ejecutivas de Cocina en la Península Ibérica y Latinoamérica.
                </p>
                <a href="/codigo-etico.pdf" download={true}>
                    <Button id="codigo-etico-btn" style="default" text="Código ético" />
                </a>
            </section>
            <section className={styles.section}>
                <h3 className={styles.section_subtitle}>Nuestros objetivos</h3>
                <ul className={styles.section_list}>
                    <li className={styles.list_item}>
                        <div className={styles.aidabe_bullet}></div>
                        <p className={styles.list_text}>
                            Poner en conocimiento la relevancia empresarial, las competencias y la figura profesional de quienes están al frente de la dirección de Alimentos y Bebidas, así como de las jefaturas ejecutivas de cocina.
                        </p>
                    </li>
                    <li className={styles.list_item}>
                    <div className={styles.aidabe_bullet}></div>
                        <p className={styles.list_text}>
                            Posicionar el área de Alimentos y Bebidas (F&B) como una unidad de negocio estratégica en el sector hostelero, destacando su importancia en la rentabilidad y éxito de las empresas del sector.
                        </p>
                    </li>
                    <li className={styles.list_item}>
                    <div className={styles.aidabe_bullet}></div>
                        <p className={styles.list_text}>
                            Liderar las conversaciones sobre el horizonte del F&B, estableciendo un espacio de diálogo y colaboración con otros actores donde se puedan compartir ideas, experiencias y mejores prácticas.
                        </p>
                    </li>
                    <li className={styles.list_item}>
                    <div className={styles.aidabe_bullet}></div>
                        <p className={styles.list_text}>
                            Defender los intereses de nuestros asociados, trabajando para garantizar que sus necesidades y preocupaciones sean escuchadas y atendidas en el sector de la hostelería.
                        </p>
                    </li>
                </ul>
            </section>
            <div className={styles.board_wrapper}>
                <BoardLayout board={board} />
            </div>
        </section>
    )
}