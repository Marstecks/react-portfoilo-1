import "./Works.scss";
import {useState} from "react";

const Works = () => {
   const [currentSlide, setCurrentSlide] = useState(0);

 const listData = [
        {
            id: 1,
            img: "assets/images/hero-bg.jpg",
            title: "Gaming Web App",
            descrip:             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolo laborum."
        },        
        {
            id: 2,
            img: "assets/images/hero-bg.jpg",
            title: "E-commerce App",
            descrip:             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolo laborum."
        },        
        {
            id: 3,
            img: "assets/images/hero-bg.jpg",
            title: " Social media App",
            descrip:             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolo laborum."
        },        
        {
            id: 4,
            img: "assets/images/hero-bg.jpg",
            title: "Fashion Web App",
            descrip:             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolo laborum."
        },       
        {
            id: 5,
            img: "assets/images/hero-bg.jpg",
            title: "Video sharing Web App",
            descrip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolo laborum."
        },
    ];
    
 const handleClick = async (direction) => {
     direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : listData.length - 1) : setCurrentSlide(currentSlide < listData.length - 1 ? currentSlide + 1 : 0 );
     
 }

    return (
        <div className="works" id="works">
           <div className="sliderContainer">
<div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
			{ listData.map((item) => {
			return (
			    <div className="container">
			        <div className="item">
			        <div className="left">
			              <div className="leftContainer">
			                  <div className="imgContainer">
			                      <img src={item.img} />
        </div>
			                    <h2 className="title">{item.title}</h2>
			                      <div className="description">{item.descrip}</div>
			                        <div className="project-link">
            <h3>Projects</h3>
        </div>
        </div>
        </div>
			        <div className="right">
			            <img src="assets/images/hero-bg.jpg" />
        </div>
        </div>
        </div>
			)})}
        </div>
        </div>
            <div className="controllers">
            <div className="previous" onClick={() => handleClick("left")}>
                Previous
            </div>
            <div className="next" onClick={() => handleClick("right")}>
                Next
            </div>
            </div>
        </div>
    )
}

export default Works;