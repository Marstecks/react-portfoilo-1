import  './PortfolioList.scss';

const PortfolioList = ({id, title, active, setSelected}) => {
    
    return (
        <li key={id} className={active ? "nav-list-item active" : "nav-list-item"} onClick={() => {
            setSelected(id)
        }}>
            
            {title}
            
        </li>
        )
}

export default PortfolioList;