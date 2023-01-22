import ItemCount from "./ItemCount";


const ItemDetail = ({product}) => {
    return (
        <div width="200"
        style={{
            textAlign: 'center',
            margin: '10px',
            border: '1px solid black',
          }}
        >
            <img alt={product.title} src={product.image} width="200" />
            <h2>{product.title}</h2>
            <h3>{product.category}</h3>
            <h3>{product.description}</h3>

            <ItemCount />

        </div>

    )
}

export default ItemDetail;