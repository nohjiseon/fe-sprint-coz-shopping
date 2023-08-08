const Exhibition = ({ item }) => {
  return (
    <div className="txtConbox">
      <div className="listTit">
        <strong>{item.title}</strong>
        <p>{item.sub_title}</p>
      </div>
    </div>
  );
};
export default Exhibition;
