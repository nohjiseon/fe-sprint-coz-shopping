import { useEffect, useState } from "react";

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
          <li key={item.id} onClick={popHandler}>
            <div className="imgConbox">
              <img src={item.image_url === null ? item.brand_image_url : item.image_url} />
              <input type="checkbox" id={item.id} className="hide inp_star" />
              <label htmlFor={item.id} className="label_star"></label>
            </div>

            {item.type === "Product" ? (
              <div className="txtConbox">
                <div className="listTit">
                  <strong>{item.title}</strong>
                </div>
                <div className="listPrice">
                  <strong className="col_blue">{item.discountPercentage}%</strong>
                  <p>{Number(item.price).toLocaleString()}원</p>
                </div>
              </div>
            ) : item.type === "Category" ? (
              <div className="txtConbox">
                <div className="listTit">
                  <strong># {item.title}</strong>
                </div>
              </div>
            ) : item.type === "Exhibition" ? (
              <div className="txtConbox">
                <div className="listTit">
                  <strong>{item.title}</strong>
                  <p>{item.sub_title}</p>
                </div>
              </div>
            ) : (
              //  item.type === "Brand"
              <div className="txtConbox">
                <div className="listTit">
                  <strong>{item.brand_name}</strong>
                </div>
                <div className="listPrice">
                  <strong>관심고객수</strong>
                  <p>{Number(item.follower).toLocaleString()}</p>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      <h2 className="mainTit">북마크 리스트</h2>

      <div className="detailPop">
        {/* <img src="" /> */}
        {console.log(productItem[0].title)}
      </div>
    </div>
  );
};
export default Main;
