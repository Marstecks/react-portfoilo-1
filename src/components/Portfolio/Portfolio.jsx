import "./Portfolio.scss";
import PortfolioList from "../PortfolioList/PortfolioList.jsx";
import {useState, useEffect} from 'react';
import {
    featuredData,
    webData,
    mobileData,
    designData,
    brandingData
} from "../../fakeData.js";


const Portfolio = () => {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    
    const dataList = [
            {
                id:"featured",
                title:"Featured"
            },
            {
                id:"web",
                title:"Web App"
            },            
            {
                id: "mobile",
                title:"Mobile App"
            },
            {
                id: "design",
                title:"Design"
            },
            {
                id: "branding",
                title:"Branding"
            }
        ]
        
        useEffect(() => {
            switch (selected) {
                case 'featured':
                    setData(featuredData);
                    break;
                case 'web':
                    setData(webData);
                    break;
                case 'mobile':
                    setData(mobileData);
                    break;
                case 'design':
                    setData(designData);
                    break;
                case 'branding':
                    setData(brandingData);
                    break;                 
                
                default:
                    setData(featuredData);
            }
        }, [selected])

	return (
		<div className="portfolio" id="portfolio">
			<h2>Portfolio</h2>
			<ul className="nav-list">
			     {dataList.map((item) => {
			       return ( <PortfolioList 
			       title={item.title}
			       id={item.id}
			       active={selected === item.id}
			       setSelected={setSelected}
			       />
			            )
			         })
			   }
			</ul>
			<div className="container">
			    { 
			        data.map((d) => {
			            return (
			                
			    <div className="item">
			        <img src={d.img} />
			        <div className="item-title">
			            <h2>{d.title}</h2>
			        </div>
			    </div> 
			            )
			        })
			    }
			</div>
		</div>
	)
}

export default Portfolio;
