import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Sidebar = (props) => {
    return (
        <>
            <Button className='btn-success w-100'>Logo</Button>
            <Nav defaultActiveKey="/home" className="flex-column text-center border border-1">
                <NavLink className='nav-link btn btn-light' to='books'>books</NavLink>
                <NavLink className='nav-link btn btn-light' to='categories'>categories</NavLink>
            </Nav>
        </>
    )
}

export default Sidebar;

