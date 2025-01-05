import logo from '../assets/nba-logo.png';

function Header() {
  return (
    <div className="container">
      <img className="logo" src={logo} alt="nbalogo" />
      <div className="header">NBA LEGENDS</div>
    </div>
  );
}

export default Header;
