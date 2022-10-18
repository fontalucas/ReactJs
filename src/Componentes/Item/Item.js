import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, img , name, category, price}) => {
  return (
    <div class="card">
        <img src={img} alt={name} class="card-img-top" />
      <div class="card-body">
        <h4 class="card-title">{name}</h4>
        <p class="card-text">{category}</p>
        <h6>{price}</h6>
        <Link to={`/detail/${id}`}>Ver detalle</Link>
        <button class="btn btn-primary">Agregar al carrito</button>
      </div>
    </div>

  )
}
export default Item;