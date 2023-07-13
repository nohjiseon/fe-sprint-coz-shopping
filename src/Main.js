import { useEffect, useState } from "react";

import Product from "./products/Product";
import Category from "./products/Category";
import Exhibition from "./products/Exhibition";
import Brand from "./products/Brand";
import ImgModal from "./ImgModal";

const Main = () => {
  const [productItem, setProductItem] = useState([]);

  const [isPop, setIsPop] = useState(false);
  const popHandler = () => {
    setIsPop(!isPop);
  };

  //   useEffect(() => {
  //     localStorage.setItem("productItem", JSON.stringify(productItem));
  //   }, [productItem]);

  useEffect(() => {
    fetch(`http://cozshopping.codestates-seb.link/api/v1/products?count=4`)
      .then(resp => resp.json())
      .then(data => setProductItem(data));
  }, []);

  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://cozshopping.codestates-seb.link/api/v1/products?count=4");
  //       const data = await response.json();
  //       localStorage.setItem("fetchedData", JSON.stringify(data));
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  return (
    <div className="main_page">
      <h2 className="mainTit">상품 리스트</h2>
      <ul className="list">
        {productItem.map(item => (
          <li key={item.id} onClick={() => popHandler(item)}>
            <ImgModal item={item} />
            <div className="imgConbox">
              <img src={item.brand_image_url === null ? item.image_url : item.brand_image_url} />
              <input type="checkbox" id={item.id} className="hide inp_star" />
              <label htmlFor={item.id} className="label_star"></label>
            </div>

            {item.type === "Product" ? (
              <Product item={item} />
            ) : item.type === "Category" ? (
              <Category item={item} />
            ) : item.type === "Exhibition" ? (
              <Exhibition item={item} />
            ) : (
              <Brand item={item} />
            )}
          </li>
        ))}
      </ul>

      <h2 className="mainTit">북마크 리스트</h2>
    </div>
  );
};
export default Main;
