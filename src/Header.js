function Header(){
    return(
      <div>
          <header className="d-none d-lg-flex">
            <nav>
        <a href="index.php">
        <img src="./images/logo.svg" />
        </a>
        <div className="nav-menu">
            <ul>
                <li><a href="empty_legs.php">Empty Legs</a></li>
                <li><a href="#">Private Charter</a></li>
                <li><a href="#">Packages</a></li>
                <li><a href="#">Fleets</a></li>
                <li><a href="#">Joy Ride</a></li>
                <li><a href="#">Insight</a></li>
            </ul>
        </div>
        <div className="regsiterBtn">
            <button className="Btn Btn-transparent">Sign In</button>
            <button className="Btn Btn-primary">Sign Up</button>
        </div>
    </nav>
</header>

<header className="d-block d-lg-none px-3 mob-header">
    <a href="index.php">
    <img src="./images/logo.svg" />
    </a>
    <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
        <a href="#">Empty Legs</a>
        <a href="#">Private Charter</a>
        <a href="#">Packages</a>
        <a href="#">Fleets</a>
        <a href="#">Joy Ride</a>
        <a href="#">Insight</a>
    </div>
    <span className="hamburger float-end" onclick="openNav()">&#9776;</span>
    <div className="regsiterBtn d-none d-sm-block">
        <button className="Btn Btn-transparent">Sign In</button>
        <button className="Btn Btn-primary">Sign Up</button>
    </div>
    
</header>
</div>  
    );
}
export default Header;