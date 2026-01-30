import { motion } from "framer-motion";
import "./InfiniteSlider.css";

const InfiniteSlider = ({ items, speed = 20, direction = "left" }) => {
  return (
    <div className="infinite-slider-container">
      <div
        className="infinite-slider-track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {/* Render items twice to create seamless loop */}
        {[...items, ...items].map((item, index) => (
          <div className="slider-item" key={index}>
            <div className="slider-card">
              <div className="slider-icon-box">{item.icon}</div>
              <div className="slider-divider"></div>
              <div className="slider-content-box">
                <h4 className="slider-title">{item.name}</h4>
                <p className="slider-subtitle">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
