import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { card } from "./Main"

const Details = () => {
  const { id } = useParams()
  const [added, setAdded] = useState(false)
  const item = card.find((p) => p.id === Number(id))

  if (!item) {
    return (
      <section className="flex min-h-[400px] w-full flex-col items-center justify-center gap-[20px]">
        <h1 className="text-[24px] font-[600]">Product not found</h1>
        <Link to={"/"} className="flex h-[40px] w-[120px] items-center justify-center rounded-[4px] bg-black text-white">Go Home</Link>
      </section>
    )
  }

  return (
    <section className="flex w-full justify-center">

      <section className="flex w-[90%] max-w-[840px] flex-wrap items-start justify-between gap-x-[92px] gap-y-[30px] pb-[108px]">

        <section className="aspect-[410/402] w-full max-w-[410px] overflow-hidden rounded-[8px]">
          <img src={item.img} className="h-full w-full object-cover" alt={item.title} />
        </section>

        <section className="flex w-[338px] max-w-full flex-col gap-[15px]">

          <h1 className="text-[28px] font-[600] leading-[34px] tracking-[-0.5px]">{item.title}</h1>
          <p className="text-[17px] leading-[24px] text-[#777]">{item.subtitle}</p>
          <p className="text-[16px] font-[500] leading-[24px]">${item.price.toFixed(2)}</p>
          <p className="text-[14px] leading-[19.5px] text-[#777]">{item.description}</p>

          <button onClick={() => setAdded(true)} className="h-[34px] w-full rounded-[4px] bg-black text-[11px] font-[500] text-white hover:opacity-80">
            {added ? "Added ✓" : "Add to cart"}
          </button>

        </section>

      </section>

    </section>
  )
}

export default Details
