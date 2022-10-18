import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { getProduct, getProductByCategory } from "../../asyncMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
        const [burgers, setProduct] = useState([])
        const [loading, setLoading] = useState(true)

        const { categoryId } = useParams()


        useEffect(() => {

            const asyncFunction = categoryId ? getProductByCategory : getProduct

            asyncFunction(categoryId).then(response => {
                setProduct(response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })  
        }, [categoryId])
    //tiempo de carga simulado    
    if(loading) {
            return <h1>Cargando productos   ...</h1>
        } 

        return (
            <div>
                <h1>NUESTRAS BURGERS</h1> 
                { burgers.map(() => {
                    return (
                        <div>
                            <ItemList burgers={burgers}/>
                        </div>

                    )
                })}
            </div>
)}

export default ItemListContainer;