import style from '../styles/style.css';
function Header(){
    return(
        <header>
            <div className="navbar-container">
                <a href="#">Hello</a>
                <div className="navbar-flex">
                    <ul className='navbar-list'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Gallery</li>
                        <li>Render</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;