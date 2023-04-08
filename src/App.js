import React, { useState, useEffect } from "react";
import WSPGallery from './components/WSPGallery';
import './App.css';
import LoadingScreen from "./components/LoadingScreen";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  const galleryImages = [
    {
      img: require("./components/assets/IMG_0578.jpeg")
    },
    {
      img: require("C:/Users/aykay/Desktop/React-JS-Image-Gallery-main/src/components/assets/photo_2023-04-06_08-58-38.jpg")
    },
    {
      img: require("C:/Users/aykay/Desktop/React-JS-Image-Gallery-main/src/components/assets/photo_2023-04-06_08-58-36.jpg")
    },
    {
      img: require("C:/Users/aykay/Desktop/React-JS-Image-Gallery-main/src/components/assets/photo_2023-04-06_08-58-34.jpg")
    },
    {
      img: require("C:/Users/aykay/Desktop/React-JS-Image-Gallery-main/src/components/assets/photo_2023-04-06_08-58-32.jpg")
    },
    {
      img: require("C:/Users/aykay/Desktop/React-JS-Image-Gallery-main/src/components/assets/photo_2023-04-06_08-58-28.jpg")
    },
    {
      img: require("C:/Users/aykay/Desktop/React-JS-Image-Gallery-main/src/components/assets/photo_2023-04-06_08-58-26.jpg")
    },
    {
      img: require("C:/Users/aykay/Desktop/React-JS-Image-Gallery-main/src/components/assets/photo_2023-04-06_08-58-24.jpg")
    },
    {
      img: require("C:/Users/aykay/Desktop/React-JS-Image-Gallery-main/src/components/assets/photo_2023-04-06_08-58-20.jpg")
    },
    {
      img: require("C:/Users/aykay/Desktop/React-JS-Image-Gallery-main/src/components/assets/photo_2023-04-06_08-58-14.jpg")
    },
    {
      img: require("C:/Users/aykay/Desktop/React-JS-Image-Gallery-main/src/components/assets/photo_2023-04-06_08-58-16.jpg")
    },
    {
      img: require("C:/Users/aykay/Desktop/React-JS-Image-Gallery-main/src/components/assets/photo_2023-04-06_09-17-30.jpg")
    },
    {
      img: require("C:/Users/aykay/Desktop/React-JS-Image-Gallery-main/src/components/assets/photo_2023-04-06_08-58-12.jpg")
    },
  ]

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app loading time for demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
    }, 6750);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <header>
            <strong class="headerText">🐶 This will follow you wherever you go, Think of this as your puppy! 🐶</strong>
          </header>

          <br />
          <div>
            <strong class="HBD">Happy Birthday Belinda 💕!<br/> Have a blast!</strong>
          </div>
          <br /><br />

          <WSPGallery
            galleryImages={galleryImages}
          />

          <br /><br />
          <div>
            <strong class="right"> My bb 🫶,<br />
              I hope you enjoy your birthday presents and everything else. <br/><br/>I'm sorry I couldn't make it for your actual birthday but I'm here for you right now and that's all it matters, <br />this is my small gift to you and I hope you like it, I love you!❣ </strong>


              <strong class = "continue">Also wanted to let you know you're a great person from all aspects and you make other people proud! Hope you continue being supportive, positive and strong like you always have! 💪</strong>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
