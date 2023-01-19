import { useState } from "react";

const ItemCount = () => {
    const [contador, setContador] = useState(0)
    const stock = 10
    const sumar = () => {
        if (stock === contador){
            return
        }
        setContador(contador + 1)
    };
    const restar = () => {
        if(contador === 0){
            return
        }
        setContador(contador - 1)
    };
  return (
    <div>
        <div>
        <button onClick={restar}>-</button>
        <div>
            <span>{contador}</span>
        </div>
        <button onClick={sumar}>+</button>
        </div>
        <div>
            <button>Agregar al carrito </button>
        </div>
    </div>
  )
}

export default ItemCount