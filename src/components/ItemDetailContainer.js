import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();

  const getProduct = () => {
    const db = getFirestore();
    const querySnapshot = doc(db, "items", id);

    getDoc(querySnapshot)
      .then((response) => {
        setSingleProduct({ id: response.id, ...response.data() });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <ItemDetail product={singleProduct} />
    </div>
  );
};

export default ItemDetailContainer;
