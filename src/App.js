import Topbar from './components/Topbar/Topbar';
import Hero from './components/Hero-Section/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import Works from './components/Works/Works';
import Testimonals from './components/Testimonals/Testimonals';
import Contacts from './components/Contacts/Contacts';
import Menu from './components/Menu/Menu';
import './App.scss';
import { useState } from 'react';


const App = () => {
    const [menuOpen, setMenuOpen] = useState(0);
    
    return (
        <div className="App" >
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <div className="section">
                <Hero />
                <Portfolio />
                <Works />
                <Testimonals />
                <Contacts />
            </div>
        </div>
        
        )
}

export default App;