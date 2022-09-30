import Burgers from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    return (
        <div>
            <h1>NUESTRAS BURGERS</h1>
            <ItemList Burgers={Burgers}/>
        </div>
)}

export default ItemListContainer;