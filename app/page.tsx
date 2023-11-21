import Carousel from "@/app/components/layout/Carousel";

export default function Home() {
  const slides = [
    {
        title: "Somos AIDABE",
        image: "/carousel-1.jpg",
        subtitle: "La mayor asociación de directores de F&B de habla hispana",
        link: null,
        button: null
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
        subtitle: "La mayor asociación de directores de F&B de habla hispana",
        link: "/asociados",
        button: "ver más"
    },
]

  return (
    <main className="content-wrapper main-wrapper">
        <Carousel content={slides} />
    </main>
  )
}
