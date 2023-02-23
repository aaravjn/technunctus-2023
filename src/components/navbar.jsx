import "../css/navbar.css"
import logo from "../assets/logo.png"
import { Box } from '@mui/material'

export default function Navbar() {
    return (
        <>
            <nav className="navbar fixed navbar-expand-lg">
                <div className="navbar-cont container-fluid">
                    <div className="link">
                        <Box
                            component='img'
                            sx={{height: 55, width: 55}}
                            alt="logo"
                            src={logo}
                        />
                        <span className="brand">
                            Technunctus
                        </span>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 links">
                        <li className="nav-item">
                            <a className="nav-link link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link" href="/">Sponsors</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link link" href="/">Events</a>
                        </li>
                    </ul>
                    
                    </div>
                </div>
            </nav>
        </>
    )
}