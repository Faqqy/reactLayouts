import ShopCard from "./ShopCard";

function CardsView({products}) {

    return (
        <>
            {products.map((product, i) => (
                <ShopCard
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

export default CardsView;