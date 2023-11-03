import { useEffect, useState } from "react"
import { mFetch, mFetchOne } from '../../helpers/mfetch';
import { useParams } from "react-router-dom";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import { ItemDetail } from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const {pid} = useParams()
    const [loading, setLoading] = useState(true)

   

    useEffect(() => {
            mFetchOne(pid)
            .then( response => setProduct(response) )
            .catch(error => console.log(error))
            .finally(() => setLoading(false))  

    },[]
    )

    return (
        <ItemDetail product={product} />
    )
}