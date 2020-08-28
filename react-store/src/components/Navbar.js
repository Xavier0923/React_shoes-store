import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Panel from '../components/Panel'
import UserProfile from '../components/UserProfile'

const Navbar = props => {

    const toProfile = () => {
        Panel.open({
            component:UserProfile,
            props:{
                user:props.user
            },
            callback: data => {
                console.log(data)
                if(data === 'logout'){
                    props.history.go(0);
                }
            }
        })
    }
    return(
            <div className="navbar">
                <div className="grid">
                    <div className="start">
                        <Link to="/">Home</Link>
                    </div>
                    <Link to="/">
                    <i className="fab fa-xing logo"></i>
                    </Link>
                    <div className="end">
                        {props.user.nickname ? (
                            <>
                            <span className="nickname" onClick={toProfile}>
                                <i className="far fa-user"></i>
                                {props.user.nickname}
                            </span>
                            </>
                            ) : (
                                <>
                                <i className="fas fa-bars bars"></i>
                                <ul className="menu">
                                    <li>
                                    <Link to="/login">login</Link>
                                    </li>
                                    <li>
                                    <Link to="/register">register</Link>
                                    </li>
                                </ul>
                                </>
                            )}
                    </div>
                    
                </div>
            </div> 
    )
}

export default withRouter(Navbar)