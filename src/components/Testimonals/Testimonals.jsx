import "./Testimonals.scss";
import { CiTurnR1 } from "react-icons/ci";

const Testimonals = () => {

const data = [
        {
            id: 1,
            img: "assets/images/hero-bg.jpg",
            descrip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolo laborum.",
            name:"Innocent Chibuikem",
            title: "CEO Of DIVINO",
            featured: true,
        },
        {
            id: 1,
            img: "assets/images/hero-bg.jpg",
            descrip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolo laborum.",
            name:"Innocent Marvelous",
            title: "CEO Of MARSTECKS",
            featured: false,
        },
        {
            id: 3,
            img: "assets/images/hero-bg.jpg",
            descrip: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolo laborum.",
            name:"Marvelous Innocent",
            title: "CEO Of AHIAOMA",
            featured: false,
        },
        
      ]

	return (
		<div className="testimonals" id="testimonals">
			<h2 > Testimonals </h2>
			<div className="container">
			    {data.map((item) => {
			        return (
			        
			    <div className={item.featured ? "card featured" : "card"}>
			        <div className="header">
			            <img src={item.img}/>
			        </div>
			        <div className="center">
			            <p className="details">
			            {item.descrip}
			            </p>
			        </div>
			        <div className="bottom">
			        <h3 className="name">{item.name}</h3>
			        <h3 className="title">{item.title}</h3>
			        </div>
			    </div>
			        )
			    })}
			</div>
		</div>
	)
}

export default Testimonals;
