import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import Productos from '../Productos/Productos.json'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    const[data, setData]=useState([])
    const {categoryId}= useParams()
    const promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(Productos)
        },2000)
    })

    useEffect(()=>{
        promise
        .then((res)=>{
            if(categoryId){
                setData(res.filter((item)=> item.category === categoryId))
            }else{
                setData(res)
            }
        })
        .catch((error)=> console.log(error))
    },[categoryId])
    return(
        <div>
            <div className='row fondo'>
                <div className='col-12'>
                <img
                className="d-block w-100 "
                src='../imagenes/carrusel1.jpg'
                alt="Ihpone 14"
                        />  
                </div>

                <div className='col-12 col-sm-6'>
                    <img
                    className="d-block w-100"
                    src='../imagenes/watch.jpg'
                    alt="Apple Watch Series 8"
                            />
                </div>

                <div className='col-12 col-sm-6'>
                    <img
                    className="d-block w-100 "
                    src='../imagenes/mac-inicio.jpg'
                    alt="Macbook Pro "
                            />
                </div>
                        
                        
                
            </div>

        
            <ItemList data={data}/>
            

            
        </div>   
    )
}

    export default ItemListContainer