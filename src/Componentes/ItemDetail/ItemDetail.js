

const ItemDetail = ({ id, name, price, category, img, stock, description }) => {
    return (
        <div>
            <img src={img} alt={name} style={{width: 50}}/>
            <h2>{name}</h2>
            <p> Precio: ${price}</p>
            <p> Descripcion: {description}</p>
        </div>
    )
}

export default ItemDetail