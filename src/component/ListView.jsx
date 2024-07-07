
import ShopItem from "./ShopItem";

function ListView({products}) {

    return (
        <>
            {products.map((product, i) => (
                <ShopItem
                    key={i}
                    name={product.name}
                    price={product.price}
                    color={product.color}
                    img={product.img}
                /> 
            ))}
        </>
    )
    
}

export default ListView;