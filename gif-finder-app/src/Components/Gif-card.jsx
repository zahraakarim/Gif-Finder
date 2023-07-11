const GifCard = ({ title, imgUrl }) => {
  return (
    <div>
      <p>{title}</p>
      <img src={imgUrl}></img>
    </div>
  );
};

export default GifCard;
