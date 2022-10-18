import Item from  '../Item/Item';

const ItemList = ({burgers, setPage}) => { 
    return (
        <div>
            {burgers.map(prod => <Item key={prod.id} {...prod} setPage={setPage} /* img={prod.img} name={prod.name} category={prod.category} price={prod.price} *//>)} 
        </div>
    )
}

export default ItemList;