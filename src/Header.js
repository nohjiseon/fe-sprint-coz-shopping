import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isDown, setIsDown] = useState(false);
  const downHandler = () => {
    setIsDown(!isDown);
  };

  return (
    <header>
      <div className="conBox_1128">
        <h1>
          <Link to="/">
            <img src="../coz_logo.png" />
            <span>COZ Shopping</span>
          </Link>
        </h1>

        <div className={isDown ? "dropDown active" : "dropDown"}>
          {isDown ? <div className="dropBack" onClick={downHandler}></div> : null}
          <button onClick={downHandler}></button>
          <ul>
            <li className="user">노지선님, 안녕하세요!</li>
            <li>
              <Link to="/product" onClick={downHandler}>
                <img src="../ico_product.png" />
                상품리스트 페이지
              </Link>
            </li>
            <li>
              <Link to="/bookmark" onClick={downHandler}>
                <img src="../ico_bookmark.png" />
                북마크 페이지
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
