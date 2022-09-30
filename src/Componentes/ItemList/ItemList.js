import Item from  '../Item/Item'

const ItemList = ({Burgers}) => { 
    return (
        <div>
            { Burgers.map(prod => <Item key={prod.id} img={prod.img} name={prod.name} category={prod.category} price={prod.price}/>)}
        </div>
    )
}

export default ItemList;