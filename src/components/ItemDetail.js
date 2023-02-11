import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { cartContext } from "../Context/cartContext";

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(cartContext);
  const [contador, setContador] = useState(0);
  return (
    <div
      width="200"
      style={{
        textAlign: "center",
        margin: "10px",
        border: "1px solid black",
      }}
    >
      <img alt={product.title} src={`/images/${product.imageId}`} width="200" />
      {/* <h2>Estos productos fueron agregados al carrito {contador}</h2> */}
      <h2>{product.title}</h2>
      {/* <h3>{product.categoryId}</h3> */}
      <h3>{product.description}</h3>
      <h3>Stock: {product.stock}</h3>
      <h3>Precio: {product.price}</h3>

      <ItemCount
        contador={contador}
        actualizaValor={setContador}
        stock={product.stock}
      />
      <div>
        <button onClick={() => addItem(product, contador)}>
          Agregar al carrito{" "}
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
