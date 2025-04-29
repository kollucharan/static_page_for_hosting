

import './Header.css';
import headerlogo from '../../assets/images/Talviewlogo.png';

export default function Header() {
  return (
    <header className="site-header">
      <img src={headerlogo} alt="Talview logo"  className='Headerclass'/>
    </header>
  );
}
