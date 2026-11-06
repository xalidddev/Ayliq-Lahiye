import { Link } from "react-router-dom"

const links = ["Página", "Página", "Página"]

const Header = () => {
  return (
    <section className="flex h-[108px] w-full justify-center">

      <section className="flex w-[90%] max-w-[840px] items-center justify-between">

        <Link to={"/"} className="text-[14px] font-[500]">Nombre del sitio</Link>

        <section className="flex items-center gap-[31px] text-[14px] font-[500]">
          {links.map((item, index) => (
            <Link key={index} to={"/"} className="hover:opacity-60">{item}</Link>
          ))}
          <button className="h-[34px] w-[62px] rounded-[4px] bg-black text-[11px] font-[500] text-white hover:opacity-80">Botón</button>
        </section>

      </section>

    </section>
  )
}

export default Header
