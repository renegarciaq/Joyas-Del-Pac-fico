import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  const getProducts = () => {
    const db = getFirestore();
    const queryBase = collection(db, "items");
    const querySnapshot = category
      ? query(queryBase, where("categoryId", "==", category))
      : queryBase;
    // collection(db, "items");

    getDocs(querySnapshot)
      .then((response) => {
        const data = response.docs.map((doc) => {
          console.log(doc.id);
          return { id: doc.id, ...doc.data() };
        });
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, [category]);

  return (
    <div>
      {}
      <ItemList productos={products} />
    </div>
  );
};

export default ItemListContainer;
