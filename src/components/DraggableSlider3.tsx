import React, { useState, useEffect } from "react";
import { useAppContext } from "./AppContext";
import { FaInfo } from "react-icons/fa6";
import { FiLink } from "react-icons/fi";
import { FaRegCircleXmark } from "react-icons/fa6";
import "../index.scss";

const DraggableSlider3: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const [infoVisible, setInfoVisible] = useState(false);
  const numPositions = 10;
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleMove = (clientX: number) => {
      const sliderContainer = document.getElementById("slider-container");
      if (sliderContainer) {
        const containerWidth = sliderContainer.offsetWidth;
        const newPosition =
          Math.min(
            Math.max(
              (clientX - sliderContainer.getBoundingClientRect().left) /
                containerWidth,
              0
            ),
            1
          ) * 100; // Convert to percentage
        setSliderPosition(newPosition);

        // Log the value (0 to 10) as the ball is dragged
        const value = Math.round(newPosition / (100 / numPositions));
        dispatch({ type: "ADD_ITEM3", payload: value * 250000 });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        if (e.cancelable) {
          e.preventDefault();
        }
        handleMove(e.touches[0].clientX);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);

        // Snap to the nearest position
        const snappedPosition =
          Math.round(sliderPosition / (100 / numPositions)) *
          (100 / numPositions);
        setSliderPosition(snappedPosition);
      }
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, sliderPosition]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.cancelable) {
      e.preventDefault();
    }
    setIsDragging(true);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.cancelable) {
      e.preventDefault();
    }
    setIsDragging(true);
  };

  const renderLines = () => {
    const lines = [];
    for (let i = 0; i < numPositions; i++) {
      lines.push(
        <div
          key={i}
          className="line"
          style={{ left: `${(i + 1) * (100 / numPositions)}%` }}
        />
      );
    }
    return lines;
  };

  return (
    <div
      id="slider-container"
      className={isDragging ? "dragging" : ""}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div className="price">{state.shelf3[0]}Ft</div>
      <div className="slider-name">NOÉ ÁLLATOTTHON ALAPITVÁNY</div>
      <div id="slider" style={{ left: `${sliderPosition}%` }} />
      <div className="info" onClick={() => setInfoVisible(true)}>
        <FaInfo />
      </div>
      <div className="link">
        <FiLink />
      </div>
      {renderLines()}
      {infoVisible && (
        <div className="infoDiv">
          <div className="infoDiv-exit" onClick={() => setInfoVisible(false)}>
            <FaRegCircleXmark />
          </div>
          <h2>Noé állatotthon alapitvány</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo
            quos rem eius voluptas, inventore quam architecto amet at animi a
            aliquid quasi autem aspernatur suscipit harum laborum saepe
            similique. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Itaque adipisci cum fugiat, voluptatibus iste possimus, eaque nam at
            dolorum, blanditiis non! Natus mollitia magni at veritatis quasi
            odio libero commodi. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Labore id iusto commodi dolorum quo fugit maxime,
            a laboriosam itaque, libero praesentium explicabo tenetur! Saepe
            neque necessitatibus soluta, molestias obcaecati cumque!
          </p>
        </div>
      )}
    </div>
  );
};

export default DraggableSlider3;
