const Item = ({producto}) => {
    return(
        <li 
        style={{
            textAlign: 'center',
            margin: '10px',
            border: '1px solid black',
          }}
        key={producto.id} width="200">
            <img alt={producto.title} src={producto.image} width="200"/>
            <h2>{producto.title}</h2>
            <h3>{producto.category}</h3>
            <h3>{producto.description}</h3>
        </li>
    
    ); 
};

export default Item;