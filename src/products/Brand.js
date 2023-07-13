const Brand = ({ item }) => {
  return (
    <div className="txtConbox">
      <div className="listTit">
        <strong>{item.brand_name}</strong>
      </div>
      <div className="listPrice">
        <strong>관심고객수</strong>
        <p>{Number(item.follower).toLocaleString()}</p>
      </div>
    </div>
  );
};
export default Brand;
