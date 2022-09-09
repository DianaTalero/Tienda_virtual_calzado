export const createProductCard = ({ name, image, description, price }) => {
  return `
    <article class="product">
      <figure class="product__content">
        <div class="product__image-container">
          <img src=${image} alt=${name} class="product__image" width="180" height="200" />
        </div>
        
        <figcaption class="product__details">
          <h3 class="product__title">${name}</h3>
          
          <p class="product__text">${description}</p>
  
          <div class="product__footer">
            <p class="product__price">$${price} USD</p>
  
            <button class="product__cta">Add to cart</button>
          </div>
        </figcaption>
      </figure>
    </article>
  `;
};
