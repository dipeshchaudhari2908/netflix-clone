import React,{useState,useEffect} from 'react';
import './Nav.css';


function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };

    },[]);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img src="https://pngimg.com/uploads/netflix/netflix_PNG32.png" alt="Netflix logo" className="nav__logo"/>

            <img src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-128.png" alt="Netflix logo" className="nav__avatar"/>
        </div>
    )
}

export default Nav
