import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Productos from '../Productos/Productos.json'

import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()
    const promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(Productos)
        },2000)
    })

    useEffect(() => {
        
        setLoading(true)

        promise
            .then((res) => {
                setData( res.find((prod) => prod.id === Number(itemId)) )
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div className="container my-5">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail  data={data}/>
            }
        </div>
    )
}

export default ItemDetailContainer