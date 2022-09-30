import './Item.css';

const Item = ({img , name, category, price}) => {
  return (
    <div class="card">
        <img src={img} class="card-img-top" alt={name}></img>
      <div class="card-body">
        <h4 class="card-title">{name}</h4>
        <p class="card-text">{category}</p>
        <h6>{price}</h6>
        <button class="btn btn-primary">Agregar al carrito</button>
      </div>
    </div>

  )
}
export default Item;