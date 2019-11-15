import React from "react";
import ProductGrid from "../components/ProductGrid";
import "./Selection.css";

interface Props {}

const Selection = () => {
  const imgs = [
    {
      src:
        "//cdn.shopify.com/s/files/1/0030/1796/5603/products/IMG_4869_large.jpg?v=1572581572",
      alt: "Grande statue Timor"
    },

    {
      src:
        "//cdn.shopify.com/s/files/1/0030/1796/5603/products/IMG_4962_large.jpg?v=1572862892",
      alt: "Grande Boite à Offrandes balinaise en perles et coquillages Bukit"
    },

    {
      src:
        "//cdn.shopify.com/s/files/1/0030/1796/5603/products/IMG_4807_large.jpg?v=1572572585",
      alt: "Panier en corde et petits coquillages"
    },

    {
      src:
        "//cdn.shopify.com/s/files/1/0030/1796/5603/products/IMG_4839_large.jpg?v=1572519302",
      alt: "Collier Papou Jerami en coquillages et paille naturelle"
    },

    {
      src:
        "//cdn.shopify.com/s/files/1/0030/1796/5603/products/IMG_4825_large.jpg?v=1572518819",
      alt: "Collier Papou Matahari orné de raphia"
    },

    {
      src:
        "//cdn.shopify.com/s/files/1/0030/1796/5603/products/IMG_4737_large.jpg?v=1572432365",
      alt: "Statue Timor en bois blanchi"
    },

    {
      src:
        "//cdn.shopify.com/s/files/1/0030/1796/5603/products/IMG_4811_large.jpg?v=1572573022",
      alt: "Suspension cauris"
    },

    {
      src:
        "//cdn.shopify.com/s/files/1/0030/1796/5603/products/IMG_4914_large.jpg?v=1572673633",
      alt: "Panière en bambou et rotin blanchie"
    },

    {
      src:
        "//cdn.shopify.com/s/files/1/0030/1796/5603/products/IMG_4828_large.jpg?v=1572518081",
      alt: "Décoration murale en rotin et coquillages"
    },

    {
      src:
        "//cdn.shopify.com/s/files/1/0030/1796/5603/products/IMG_4795_large.jpg?v=1572516923",
      alt: "Grand collier ethnique en perles de bois"
    },

    {
      src:
        "//cdn.shopify.com/s/files/1/0030/1796/5603/products/IMG_4791_large.jpg?v=1572514862",
      alt: "Collier balinais en perles de bois et coquillages"
    },

    {
      src:
        "//cdn.shopify.com/s/files/1/0030/1796/5603/products/IMG_4778_large.jpg?v=1572432533",
      alt: "Totem coquillages Mata Uang"
    },

    {
      src:
        "//cdn.shopify.com/s/files/1/0030/1796/5603/products/IMG_4734_large.jpg?v=1572431478",
      alt: "Disque bois sculpté Timor"
    },

    {
      src:
        "//cdn.shopify.com/s/files/1/0030/1796/5603/products/IMG_4896_large.jpg?v=1572679545",
      alt: "Bougeoir en coquillages Mawar"
    },

    {
      src:
        "//cdn.shopify.com/s/files/1/0030/1796/5603/products/IMG_4858_large.jpg?v=1572581467",
      alt: "Grande statue à pique Timor"
    },

    {
      src:
        "//cdn.shopify.com/s/files/1/0030/1796/5603/products/IMG_4813_large.jpg?v=1572512396",
      alt: "Bougeoir en coquillages Kemboja"
    },

    {
      src:
        "//cdn.shopify.com/s/files/1/0030/1796/5603/products/IMG_4754_large.jpg?v=1572433564",
      alt: "Collier Papou en coquillages et plumes blanc Jelas"
    },

    {
      src:
        "//cdn.shopify.com/s/files/1/0030/1796/5603/products/IMG_4743_large.jpg?v=1572432166",
      alt: "Plateau en bois blanchi Baki"
    },

    {
      src:
        "//cdn.shopify.com/s/files/1/0030/1796/5603/products/IMG_4801_large.jpg?v=1572510999",
      alt: "Décoration en paille Matahari"
    },

    {
      src:
        "//cdn.shopify.com/s/files/1/0030/1796/5603/products/IMG_4768_large.jpg?v=1572431658",
      alt: "Disque en marbre Java"
    }
  ];

  return (
    <div className="Selection">
      <div className="flex-item-centre tab_title">
        <h2 className="title">La sélection de Ki</h2>
        <p></p>
      </div>
      <div className="flex-item-center">
        <ul className="slider-tab flex-item">
          <li id="tab_1566187898855_products_grid" className="active first">
            <a href=".">
              <span>Noël</span>
            </a>
          </li>
          <li id="tab_1566212704328_products_grid" className="">
            <a href=".">
              <span>Nouveautés</span>
            </a>
          </li>
          <li id="tab_1571027001277_products_grid" className="">
            <a href=".">
              <span>Petits Prix</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-item-center">
        <div className="ProductGrid">
          {imgs.map(image => (
            <ProductGrid src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Selection;
