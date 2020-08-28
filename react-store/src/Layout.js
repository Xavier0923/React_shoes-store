import React,{ useMemo } from 'react'
import Navbar from './components/Navbar'

const Layout = props => {

    const user = useMemo(() => {
        return global.auth.getUser() || {}
    },[])

    return(
    <div className="main">
        <Navbar user={user}/>
        {props.children}
    </div>
    )
}

export default Layout