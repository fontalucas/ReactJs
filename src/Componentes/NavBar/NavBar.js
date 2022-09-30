import "./NavBar.css";

const NavBar = () => {
    return (
        <><h1>Real Store</h1>
            <ul class="nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="!#">Hamburguesas</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="!#">Tap</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="!#">Gaseosas</a>
            </li>
        </ul></>
    )
}
export default NavBar;