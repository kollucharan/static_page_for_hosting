

// import './Header.css';
// import headerlogo from '../../assets/images/Talviewlogo.png';

// export default function Header() {

//   const handle = () => {
//     window.open("https://www.talview.com/", "_blank");
//   }
//   return (
//     <header className="site-header">
//       <img src={headerlogo} alt="Talview logo"  className='Headerclass'onClick={handle}/>
//     </header>
//   );
// }
import './Header.css';
import headerlogo from '../../assets/images/Talviewlogo.png';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoClick = () => {
    window.open("https://www.talview.com/en/", "_blank");
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="site-header">
      <div className="header-left">
        <img
          src={headerlogo}
          alt="Talview logo"
          className="Headerclass"
          onClick={handleLogoClick}
        />
      </div>

      {/* Hamburger for mobile */}
      <div className={`hamburger${menuOpen ? ' open' : ''}`} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>

      <nav className={`nav-links${menuOpen ? ' mobile-open' : ''}`}>  
        <a href="https://www.talview.com/en/" target="_blank" rel="noreferrer">Home</a>
        <a href="https://www.talview.com/en/solutions" target="_blank" rel="noreferrer">Our solutions</a>
        <a href="https://www.talview.com/en/products"  target="_blank" rel="noreferrer">Proctoring and Hiring Solutions</a>
      </nav>
    </header>
  );
}

