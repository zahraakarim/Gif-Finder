const GifCard = ({ title, imgUrl }) => {
  console.log(imgUrl);
  return (
    <div>
      <p>{title}</p>
      <img src={imgUrl}></img>
    </div>
  );
};

export default GifCard;
