import { useEffect, useState } from "react";

import Product from "./products/Product";
import Category from "./products/Category";
import Exhibition from "./products/Exhibition";
import Brand from "./products/Brand";
import ImgModal from "./ImgModal";

const Main = () => {
  const [productItem, setProductItem] = useState([]);

  const [isPop, setIsPop] = useState(false);
  const [tempSrc, setTempSrc] = useState("");
  const [tempTit, setTempTit] = useState("");
  const [elId, elSetId] = useState("");
  // const [isChk, setIsChk] = useState(false);

  const getImg = (id, title, image_url, brand_image_url) => {
    brand_image_url === null ? setTempSrc(image_url) : setTempSrc(brand_image_url);
    setIsPop(true);
    // setIsChk(!isChk);
    setTempTit(title);
    elSetId(id);
  };

  const popHandler = () => {
    setIsPop(!isPop);
  };

  // const chkHandler = () => {
  //   setIsChk(!isChk);
  // };

  useEffect(() => {
    fetch(`http://cozshopping.codestates-seb.link/api/v1/products?count=4`)
      .then(resp => resp.json())
      .then(data => setProductItem(data));
  }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://cozshopping.codestates-seb.link/api/v1");
  //     const data = await response.json();
  //     localStorage.setItem("fetchedData", JSON.stringify(data));
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  return (
    <div className="main_page">
      <h2 className="mainTit">상품 리스트</h2>
      <ul className="list">
        {productItem.map(item => (
          <li key={item.id} onClick={() => getImg(item.id, item.title, item.image_url, item.brand_image_url)}>
            <div className="imgConbox">
              <img src={item.brand_image_url === null ? item.image_url : item.brand_image_url} />
              <input
                type="checkbox"
                id={item.id}
                className="hide inp_star"
                onClick={event => event.stopPropagation()}
              />
              <label htmlFor={item.id} className="label_star" onClick={event => event.stopPropagation()}></label>
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

      <ImgModal isPop={isPop} tempSrc={tempSrc} tempTit={tempTit} elId={elId} popHandler={popHandler} />

      <h2 className="mainTit">북마크 리스트</h2>
    </div>
  );
};
export default Main;
