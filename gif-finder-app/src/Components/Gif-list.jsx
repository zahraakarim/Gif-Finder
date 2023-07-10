import { useEffect, useState } from "react";
import GifCard from "./Gif-card";
import axios from "axios";

const GifList = () => {
  const [listOfGifs, setListOfGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("cats");
  const [newSearchTerm, setNewSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=jGxDITanYyRGQO3vTmXNxujtsLiCNvZ9&q=${newSearchTerm}&limit=30&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
      )
      .then(({ data }) => {
        setListOfGifs(data.data);
      });
  }, [newSearchTerm]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewSearchTerm(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="Gif-list">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            placeholder="Find me..."
            type="text"
            value={searchTerm}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
      {listOfGifs.map((gif) => {
        return (
          <GifCard
            key={gif.id}
            title={gif.title}
            imgUrl={gif.images.original.url}
          />
        );
      })}
    </div>
  );
};

export default GifList;
