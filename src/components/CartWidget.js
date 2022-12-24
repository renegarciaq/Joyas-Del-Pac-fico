import cartIcon from "./img/cart.png";
const styles = {
  imagenLogo: {
    width: "20px",
  },
};

const CartWidget = () => {
  return (
    <button>
      <img src={cartIcon} style={styles.imagenLogo} alt="cart" />
    </button>
  );
};

export default CartWidget;
