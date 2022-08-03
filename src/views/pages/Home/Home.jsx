import { Button} from 'react-bootstrap';
import React from 'react'
import {useNavigate } from 'react-router-dom'
import reusable from "../../../resources/css/Reusable.module.scss"
import classes from "./Home.module.scss";
import logo from "./imgs/roweblogo.png";
const Home = () => {

    const navigate = useNavigate();

    const gotoPage = (page) => {
        return navigate(page);
    }

    return (
        <div className={reusable.mainContainer}>
            <div className={classes.homePageContainer}>
                
                <div className={classes.headerContainer}>
                   <h1>Home page</h1>
                    <img alt="logo" width={150} src={logo}/>
                </div>
                <div className={classes.btnContainer}>
                    <div className={reusable.btnContainer}>
                        <Button onClick={() => gotoPage("/login")}>Login</Button>
                    </div>
                    <div className={reusable.btnContainer}>
                        <Button onClick={() => gotoPage("/register")}>Register</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home