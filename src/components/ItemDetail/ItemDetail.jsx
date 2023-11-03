import { ItemCounter } from "../ItemCounter/ItemCounter"

export  const ItemDetail = ({product}) => {

    const onAdd = cant => {
        window.alert('Se han agregado  [' + cant + '] unidades.')

    }

    return(
        <div className='d-flex'>
            <div >
                    <img src={product.imageURL} className='' />
            </div>
            <div >
                <p>Sku: {product.id}</p>
                <p>Nombre: {product.name} </p>
                <p>Category: {product.category} </p>
                <p>Precio: {product.price} </p>

                <ItemCounter onAdd={onAdd}/>
            </div>
        </div>
    )
}

