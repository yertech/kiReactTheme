import React from "react";
import { MdShoppingCart } from "react-icons/md";
import "./ProductGrid.css";

interface ProductProps {
  src: string;
  alt: string;
}

const ProductGrid: React.FC<ProductProps> = ({ src, alt }) => {
  return (
    <div className="product" key={alt}>
      <div className="item-product-image-box">
        <a className="product-image" href="/" title="Grande statue Timor">
          <div className="product-img-additional back">
            <img className="lazy" src={src} alt={alt} />
          </div>
        </a>
        <div className="product-hover-box hidden-xs">
          <a className="detail_view" href="/"></a>
        </div>
      </div>
      <h3 className="product-name">
        <a href="/" title="Grande statue Timor">
          Grande statue Timor
        </a>
      </h3>
      <div className="price-box">
        <p className="special-price c--anim-btn">
          <span className="price c-anim-btn">42,00€</span>
          <span>
            {" "}
            <a href="/" title="Add to cart" className="addToCart">
              AJOUT AU PANIER
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductGrid;
