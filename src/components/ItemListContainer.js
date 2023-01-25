import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState ([]); 
    const { category } = useParams();

    const getProducts = fetch('https://fakestoreapi.com/products', {
      method: 'GET',
      headers: {
        'content-type': 'json',
    }
    });

    useEffect(() => {
      getProducts
      .then((res) => {
        return res.json()
      })
      .then((response) => {
        if(category){
          const filterProduct = response.filter((p)=>p.category===category);
          setProducts(filterProduct)
        }else{setProducts(response)}
      })
      .catch((error) => console.log(error))
    }, [category]);

    return (
      <div>
        {greeting}
        <ItemList productos={products}/>
      </div>
    );

  };
  
  export default ItemListContainer;  