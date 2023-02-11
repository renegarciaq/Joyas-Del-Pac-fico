import { useContext, useEffect, useState } from "react";
import { cartContext } from "../Context/cartContext";
import cartIcon from "./img/cart.png";
const styles = {
  imagenLogo: {
    width: "20px",
  },
};

const CartWidget = () => {
  const { cart } = useContext(cartContext); 
  const [total, setTotal] = useState(0)
  
  useEffect(() => {
    setTotal (
      cart?.reduce((prev, curr) => {
      return prev + curr.quantity
      }, 0)
    )
  }, [cart])
  return (
    <button>
      {total}
      <img src={cartIcon} style={styles.imagenLogo} alt="cart" />
    </button>
  );
};

export default CartWidget;
