function ListView({name, img, color, price}) {
    return (
      <div className="ShopItem">
        <div className="ShopItem__cell">
          <img
            className="ShopItem__img"
            alt={name}
            title={name}
            src={img}
          />
        </div>
        <div className="ShopItem__cell">
          <h3 className="ShopItem__header">
            {name}
          </h3>
        </div>
        <div className="ShopItem__cell">
          <span className="ShopItem__color">
            {color}
          </span>
        </div>
        <div className="ShopItem__cell">
          <span className="ShopItem__price">
          ${price}
          </span>
        </div>
        <div className="ShopItem__cell">
          <div className="ShopItem__button">
            ADD TO CART
          </div>
        </div>
      </div>
    );
  }
  
  export default ListView;