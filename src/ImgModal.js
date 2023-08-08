const ImgModal = ({ isPop, tempSrc, tempTit, elId, popHandler }) => {
  return (
    <div className={isPop ? "detailPop" : "detailPop none"} onClick={popHandler}>
      <div className="img_conBox" onClick={event => event.stopPropagation()}>
        <button className="closeBtn" onClick={popHandler}></button>
        <img src={tempSrc} />
        <input type="checkbox" id={"modal" + elId} className="hide inp_star" />
        <label htmlFor={"modal" + elId} className="label_star">
          {tempTit}
        </label>
      </div>
    </div>
  );
};
export default ImgModal;
