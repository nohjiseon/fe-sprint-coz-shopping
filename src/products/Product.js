const Product = ({ item }) => {
  return (
    <div className="txtConbox">
      <div className="listTit">
        <strong>{item.title}</strong>
      </div>
      <div className="listPrice">
        <strong className="col_blue">{item.discountPercentage}%</strong>
        <p>{Number(item.price).toLocaleString()}원</p>
      </div>
    </div>
  );
};
export default Product;
