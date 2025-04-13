import { OPINIONES_CLIENTES } from "../../../../public/constants"

function OpinionFromPc() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3  gap-3">
        {OPINIONES_CLIENTES.map((opinion)=>{
            return <article className="p-3 border  hover:border-blue-600 w-fit flex flex-col justify-between gap-5 bg-white shadow-[inset_-12px_-8px_40px_#46464620] rounded-[10px]">
                <p>
                    {opinion.opinion}
                </p>
                <div className="flex gap-3">
                    <img className="rounded-[10px] w-14" src={opinion.imagen} alt="" />
                    <div className="flex flex-col gap-2 ">
                        <span className="text-blue-600 font-bold">{opinion.nombre}</span>
                        <span className="font-semibold">{opinion.cargo}</span>
                    </div>
                </div>
            </article>
        })}
    </div>
  )
}

export default OpinionFromPc