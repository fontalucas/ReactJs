import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [burgers, setProduct] = useState([])
    const { productId } = useParams()
        
        useEffect(() => {
            getProductById(productId)
                .then(burgers => 
                    setProduct(burgers))
                }
            , []) 


    return (
        <>
        <h1>DETALLE</h1>
        <ItemDetail {...burgers}/>
        </>
    )
}

export default ItemDetailContainer