import "./Topbar.scss";

const Topbar = ({menuOpen, setMenuOpen}) => {

    return (
        <div className={`topbar ${menuOpen && "active"}`}>
			<div className="wrapper">
				<div className="left">
					<a href="#hero" className="logo">Marstecks</a>
        </div>
				<div className="right">
					<div className="nav-menu">
						<div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
							<span className="first-stroke"></span>
							<span className="second-stroke"></span>
							<span className="third-stroke"></span>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Topbar;