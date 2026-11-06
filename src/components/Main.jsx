import { Link } from "react-router-dom"
import hero from '../assets/site/img4.png'
import img1 from '../assets/site/img1.png'
import img2 from '../assets/site/img2.png'
import img3 from '../assets/site/img3.png'

export const card = [
  {
    id: 1,
    img: img1,
    title: "Subtítulo",
    subtitle: "Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo. ",
    price: 10.99,
    text: "Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo.",
    description: "A fresh summer table with grapes, ripe peaches and a glass of chilled wine. A must-have for long afternoons outside.",
  },
  {
    id: 2,
    img: img2,
    title: "Subtítulo",
    subtitle: "Peaches in a woven net",
    price: 14.99,
    text: "Cuerpo del texto para lo que desees ampliar sobre el tema principal.",
    description: "Sun-ripened peaches and apricots in a handmade net bag, served with a glass bottle. Simple, bright and full of flavor.",
  },
  {
    id: 3,
    img: img3,
    title: "Subtítulo",
    subtitle: "Cuerpo del texto para lo que desees ampliar sobre el tema principal",
    price: 12.5,
    text: "Cuerpo del texto para lo que desees ampliar sobre el tema principal.",
    description: "Fresh melon, warm bread and a glass of white wine on a bright morning table. The perfect slow weekend brunch.",
  },
]

const Main = () => {
  return (
    <section className="flex w-full justify-center">

      <section className="flex w-[90%] max-w-[840px] flex-col pb-[70px] pt-[30px]">

        <section className="flex flex-col items-start">
          <h1 className="text-[44px] font-[700] leading-[53px] tracking-[-1px]">Título de la página de inicio</h1>
          <p className="mt-[13px] w-full max-w-[540px] text-[16px] leading-[24px] text-[#333]">
Subtítulo que establece el contexto, comparte más información sobre el sitio web o, en general, motiva a la gente a seguir navegando.           </p>
          <button className="mt-[26px] h-[49px] w-[86px] rounded-[4px] bg-black text-[16px] text-white hover:opacity-80">Botón</button>
        </section>

        <section className="mt-[26px] aspect-[840/426] w-full overflow-hidden rounded-[6px]">
          <img src={hero} className="h-full w-full object-cover" alt="hero" />
        </section>

        <h1 className="mt-[24px] text-[32px] font-[600] leading-[40px] tracking-[-0.5px]">Encabezado de sección</h1>

        <section className="mt-[48px] flex w-full flex-wrap gap-[21px]">
          {card.map((item, index) => (
            <Link key={index} to={"/details/" + item.id} className="flex min-w-[200px] flex-1 flex-col gap-[15px]">

              <section className="aspect-square w-full overflow-hidden rounded-[4px]">
                <img src={item.img} className="h-full w-full object-cover" alt={item.title} />
              </section>

              <section className="flex flex-col gap-[4px]">
                <h2 className="text-[16px] font-[500] leading-[24px]">{item.title}</h2>
                <p className="text-[16px] leading-[23.5px] text-[#777]">{item.text}</p>
              </section>

            </Link>
          ))}
        </section>

      </section>

    </section>
  )
}

export default Main
