const MenuList = ({setMenuOpen}) => {

    return (
        <ul onClick={ () => setMenuOpen(false)}>
                <li>
                    <a href="#hero">Home</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#works">Works</a>
                </li>
                <li>
                    <a href="#testimonals">Testimonals</a>
                </li>
                <li>
                    <a href="#contacts">Contacts</a>
                </li>
        </ul>
    )
}

export default MenuList;