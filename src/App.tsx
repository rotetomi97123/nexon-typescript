import DraggableSlider from "./components/DraggableSlider";
import DraggableSlider2 from "./components/DraggableSlider2";
import DraggableSlider3 from "./components/DraggableSlider3";
import DraggableSlider4 from "./components/DraggableSlider4";
import "./index.scss";

const App = () => {
  return (
    <div className="Wrapper">
      <div className="Content">
        <div className="Content-text">
          <h1>AZ AJÁNDÉK KÖZÖS</h1>
          <div>
            <button>Döntsünk róla együtt</button>
            <p>
              A szánkópályán minden beosztás 250 ezer forintot jelent.Húzza a
              szánkókat aszerint ahogyan Ön osztaná el az adományt az
              alapitványok között.A kiválasztott arányokat vegül egyesitjük,s
              ennek megfelelően osztjuk szét a felajánlott összeget a négy
              szervezet között. Miután végzett, az "Elküldöm" gombra kattintva
              véglegesitse döntését.
            </p>
          </div>
        </div>
        <div className="sliderWrapper">
          <DraggableSlider />
          <img src="https://i.ibb.co/8jVs5SS/Vector-4.png" alt="cloud" />
          <DraggableSlider2 />
          <img src="https://i.ibb.co/8BTDB1L/Vector-5.png" alt="cloud" />
          <DraggableSlider3 />
          <img src="https://i.ibb.co/8BTDB1L/Vector-5.png" alt="cloud" />
          <DraggableSlider4 />
          <img src="https://i.ibb.co/8BTDB1L/Vector-5.png" alt="cloud" />
        </div>
      </div>
    </div>
  );
};

export default App;
