import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidapi";
import Sidebar from "./sidebar.jsx";
import SearchCard from "./SearchCard.jsx";

function Search() {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    fetchData(`search/?q=${searchQuery}`).then(({ contents }) => {
      console.log(contents);
      setResult(contents);
    });
  };

  return (
    <div className="searchmain-container">
  <div className="searchcontent-container">
    <Sidebar />
    <div className="searchscrollable-container">
      <div className="searchgrid-container">
        {result?.map((item, index) => {
          if (item?.type !== "video") return null;
          return <SearchCard key={index} video={item?.video} />;
        })}
      </div>
    </div>
  </div>
</div>

  );
}

export default Search;