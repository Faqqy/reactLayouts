function ShopCard({name, color, img, price}) {
    return (
      <article className="ShopCard">
        <h3 className="ShopCard__header">
          {name}
        </h3>
        <span className="ShopCard__color">
          {color}
        </span>
        <img
          className="ShopCard__img"
          src={img}
        />
        <div className="ShopCard__footer">
          <span className="ShopCrad__price">
            ${price}
          </span>
          <div className="ShopCard__button">
            ADD TO CART
          </div>
        </div>
      </article>
    );
  }

export default ShopCard;