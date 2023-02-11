import { useContext, useEffect, useState } from "react";
import { cartContext } from "../Context/cartContext";
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  updateDoc,
} from "firebase/firestore";

const Cart = () => {
  const { cart, removeItem, clear } = useContext(cartContext);
  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [order, setOrder] = useState({});
  const db = getFirestore();

  useEffect(() => {
    setOrder({
      buyer: {
        name: "",
        phone: "",
        email: "",
      },
      items: cart.map((product) => {
        const { name, price, id } = product;
        return { name, price, id };
      }),
      total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
    });
  }, [cart]);

  if (cart.length === 0) {
    return <h2>El carrito está vacío</h2>;
  }
  const createOrder = (event) => {
    event.preventDefault();
    const querySnapshot = collection(db, "orders");

    const currentOrder = {
      ...order,
      buyer: formValue,
    };

    addDoc(querySnapshot, currentOrder)
      .then((response) => {
        updateStockProducts();
        alert("Su orden fue creada con éxito, id " + response.id);
      })
      .catch((error) => console.log(error));
  };

  const updateStockProducts = () => {
    cart.forEach((product) => {
      const querySnapshot = doc(db, "items", product.id);

      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity,
      })
        .then(() => {
          console.log("el producto actualizó su stock");
        })
        .catch((error) => console.log(error));
    });
    clear();
  };

  const handleInput = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ padding: "40px" }}>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <img
                  alt={product.id}
                  src={`/images/${product.image}`}
                  width="100px"
                />
                <h3>Item: {product.name}</h3>
                <h4>Cantidad: {product.quantity}</h4>
                <h4>Precio:{product.price}</h4>
                <button
                  onClick={() => removeItem(product.id)}
                  style={{ height: "30px" }}
                >
                  Eliminar del Carrito
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: "100px" }}>
          <button onClick={() => clear()}>Vaciar Carrito</button>
        </div>
      </div>
      <div style={{ padding: "40px" }}>
        <h2>Completa el formulario</h2>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <input
            name="name"
            type="text"
            placeholder="name"
            value={formValue.name}
            onChange={handleInput}
            style={{ margin: "20px" }}
          />
          <input
            name="phone"
            type="text"
            placeholder="phone (+56912345678)"
            value={formValue.phone}
            onChange={handleInput}
            style={{ margin: "20px" }}
          />
          <input
            name="email"
            type="email"
            placeholder="email"
            value={formValue.email}
            onChange={handleInput}
            style={{ margin: "20px" }}
          />
          <div style={{ marginTop: "20px" }}>
            <button onClick={createOrder}>Crear orden</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cart;
