import './horizontalNav.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
export default function HorizontalNav(){
    return(
        <div>
        <nav className="horizontalNav">
            <Link to="/" className='name'>
                MovieFinder
            </Link>
            <ul>
                <CustomLink to="/movies">Movies</CustomLink>
                <CustomLink to="/tv">TV Shows</CustomLink>
                <CustomLink to="/cartoon">Cartoons</CustomLink>
            </ul>  
        </nav>
        </div>
    )
}

function CustomLink({to,children, ...property}){
    // const path = window.location.pathname
    const resolvedPath = useResolvedPath(to)
    //converts relative paths to absolute path
    const isActive = useMatch({path: resolvedPath.pathname, end:true})
    //to make sure entire url is same and with end true we check entire url and not partial url
    return(
        <li className={isActive === to?"active":""}>
            <Link to={to} {...property}>
                {children}
            </Link>
        </li>
    )
}