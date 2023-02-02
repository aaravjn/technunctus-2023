import "../css/navbar.css"


export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="navbar-cont container-fluid">
                    <div className="brand text">
                        <img src={require("../assets/logo.png")} height="37" width={42}/>
                        <span>Technunctus</span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 links">
                        <li className="nav-item">
                            <a className="nav-link text" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text" href="/">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text" href="/">Sponsors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text" href="/">Events</a>
                        </li>
                    </ul>
                    
                    </div>
                </div>
            </nav>
        </>
    )
}