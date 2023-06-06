import './Menu.scss';
import MenuList from "./MenuList"

const Menu = ({menuOpen, setMenuOpen}) => {
    
    return (
        <div className={`menu ${!menuOpen && "disable"}`}>
        
          <MenuList setMenuOpen={setMenuOpen}/>
        </div>
        )
}

export default Menu;