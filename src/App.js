import "./App.css";
import { CssBaseline } from "@mui/material";

import { useEffect, useState } from "react";
import Popup from "./components/popup/Popup";
import CardContainer from "./components/cardContainer/CardContainer";
import Navbar from "./components/navbar/Navbar";
import HeroSearch from "./components/heroSearch/HeroSearch";

const clintId = "Bh0LzJxKZe_w06YmzZi-O42Vcktkk8F5zM2GCK_R9NI";

let timeoutId;
function App() {
  const [imgArry, setImgArry] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [clickedImgInfo, setClickedImgInfo] = useState({});
  const [triggerPopup, setTriggerPopup] = useState(false);

  useEffect(() => {
    const getRandomImg = async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos/?client_id=${clintId}`
      );
      const data = await response.json();
      setImgArry(data);
    };
    getRandomImg();
  }, []);


  //*This code will only run when searchKeyword State changes...
  useEffect(() => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      searchImg();
    }, 1000);
  }, [searchKeyword]);


  // *To get images when user enters keyword...
  const searchImg = async () => {
    let seachImgArr = [];
    if (searchKeyword !== "") {
      const response = await fetch(
        `https://api.unsplash.com/search/collections?page=1&query=${searchKeyword}&client_id=${clintId}`
      );
      const data = await response.json();
      data.results.map((x) => {
        x.preview_photos.map((imgs) => seachImgArr.push(imgs));
      });

      setImgArry(seachImgArr);
    }
  };
  


  //* Just saves the target value into a state variable...
  const handleSearchInput = (e) => {
    setSearchKeyword(e.target.value);
  };



  //* This runs when user clickes on the image card...
  const handlePopup = async (id) => {
    const response = await fetch(
      `https://api.unsplash.com/photos/${id}?client_id=${clintId}`
    );
    const data = await response.json();
    setClickedImgInfo(data);
    setTriggerPopup(true);
  };

  
  return (
    <div className="App">
      <CssBaseline />
      <Navbar handleSearchInput={handleSearchInput} />
      <HeroSearch handleSearchInput={handleSearchInput} />
      <CardContainer handlePopup={handlePopup} imgArry={imgArry} />
      <Popup
        triggered={triggerPopup}
        setTriggerPopup={setTriggerPopup}
        imgObj={clickedImgInfo}
      />
    </div>
  );
}

export default App;
