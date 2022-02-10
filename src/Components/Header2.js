import React from "react";
import { Link } from "react-router-dom";

const Header2 = () => {
    return (
        <header>
            <div>
                <Link to = '/'>Home Pgae</Link>
                <Link to = '/add'>Add page</Link>
                <Link to='/watched'>Watched</Link>
            </div>
        </header>
    )
}

export default Header2
