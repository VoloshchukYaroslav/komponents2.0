function Products ({items}){
    return (items.map(({id,name,price,category,inStock})=>{
        return <li key={id}>
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{category}</p>
            <span>{inStock?"В наявності": "Немає"}</span>
        </li>
    }))
}

export default Products