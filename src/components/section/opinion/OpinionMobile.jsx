import { useEffect, useState } from "react"
import { OPINIONES_CLIENTES } from "../../../../public/constants"

let idInterval = null
let idTimeOut = null
let opinion = 0
const delayAll = 8000 // delay del intervalo como del timeout

function OpinionMobile() {
    const cantOpinions = OPINIONES_CLIENTES.length
    const [opinionActual, setOpinionActual] = useState(0)
    const [animacion,setAnimacion] = useState(false)
    if (cantOpinions === 0) return
    const changeOpinion = (indexOpinion) => {
        opinion = indexOpinion
        setOpinionActual(opinion)
    }

    const deleteTimeOut = ()=>{
        if(idTimeOut) clearTimeout(idTimeOut)

    }
    const activeTimeOut = ()=>{
        deleteTimeOut()
        idTimeOut = setTimeout(()=> {
            activarAnimacion()
        }, delayAll)
    }
    const deleteAnimationInterval = ()=>{
        if(idInterval) clearInterval(idInterval)
    }
const activarAnimacion = ()=> setAnimacion(!animacion   )

    useEffect(() => {
        
        idInterval = setInterval(() => {

            if (opinion < cantOpinions - 1) changeOpinion(opinion += 1)
            else {
                changeOpinion(0)
            }
        }, delayAll);

        return ()=> {
            deleteAnimationInterval()
            deleteTimeOut()
        }

    }, [animacion])
    

    return (
        <div className="container-opinion-mobile flex flex-col gap-10 ">
            <div className=" flex flex-col gap-3">
                <div className="shadow-[inset_-12px_-8px_40px_#46464620] w-fit p-2 rounded-[10px]">
                    <h3 className="font-bold text-blue-600">{OPINIONES_CLIENTES[opinionActual].nombre}</h3>
                    <span className="font-semibold">{OPINIONES_CLIENTES[opinionActual].cargo}</span>
                </div>
                <p className=" text-xl relative shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] p-2 rounded-[10px]">
                    {OPINIONES_CLIENTES[opinionActual].opinion}
                    <span style={{'clipPath':'polygon(50% 100%, 0 0, 100% 0);'}} className="w-5 h-4 absolute bottom-[-16px] mx-auto left-0 right-0 bg-blue-600"></span>
                </p>
            </div>

            <div id="clientes" className="flex gap-3 flex-wrap justify-center items-center">
                {
                    OPINIONES_CLIENTES.map((opinion, index) => {
                        const isOpinionActual = index === opinionActual
                        return <button key={opinion.nombre} onClick={() => {
                            deleteTimeOut()
                            deleteAnimationInterval()
                            changeOpinion(index)
                            activeTimeOut()
                        }} className={`border-2 ${isOpinionActual && 'border-blue-600'} hover:border-blue-600 p-1 rounded-[10px]`} id={opinion.nombre}>
                            <img className=" w-12 md:w-16 rounded-[10px]" src={opinion.imagen} alt={`imagen del cliente ${opinion.nombre}`} />
                        </button>


                    })
                }
            </div>
        </div>
    )
}

export default OpinionMobile