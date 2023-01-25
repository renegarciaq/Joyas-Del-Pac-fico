import ItemCount from "./ItemCount";
import { useState } from "react";


const ItemDetail = ({product}) => {
    const [contador, setContador] = useState(0);
    const stock = 10;
    return (
        <div width="200"
        style={{
            textAlign: 'center',
            margin: '10px',
            border: '1px solid black',
          }}
        >
            <img alt={product.title} src={product.image} width="200" />
            <h2>Estos productos fueron agregados al carrito {contador}</h2>
            <h2>{product.title}</h2>
            <h3>{product.category}</h3>
            <h3>{product.description}</h3>

            <ItemCount contador={contador} actualizaValor={setContador} stock={stock} />

        </div>

    )
}

export default ItemDetail;