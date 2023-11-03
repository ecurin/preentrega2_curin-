import React, { useState, useEffect } from 'react';
import Titulo from "../Titulo/Titulo"
import { mFetch } from '../../helpers/mfetch';
import { ItemCounter } from '../ItemCounter/ItemCounter';
import FormContainer from '../FormContainer/FormContainer';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';




function ItemListContainer({greeting = 'valor inicial'}){
    
    const subTit = 'Bienvenidos a nuestro sitio.'
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {cid} = useParams()

    useEffect(() => {
        if(cid){
            mFetch()
            .then(response => setProducts(response.filter(product=> product.category ===cid)))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        }else{
            mFetch()
            .then(response => setProducts(response))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        }


    },[cid]);
    

    return (
        <>
        <Titulo 
                titulo ={greeting}
            
        />
                
              
            <div className='d-flex justify-content-center'>
            {
                loading ? <h2>Cargando...</h2>
            :
                <ItemList products={products} />
            }  
            </div>
            
            
        </>
    )
}

//colocar en linea 53 <FormContainer />

export default ItemListContainer