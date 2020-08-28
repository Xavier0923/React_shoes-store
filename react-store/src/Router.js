import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import App from './pages/App'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'
import Register from './pages/Register'

// 函式元件
const Router = () => (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/login" component={Login} />
                <Route path='/cart' component={Cart} />
                <Route path='/register' component={Register} />
                <Route component={NotFound} />
                <Redirect to="/"/>
            </Switch>
        </BrowserRouter>
)


export default Router