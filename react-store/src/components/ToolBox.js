import React from 'react'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'


class ToolBox extends React.Component{

    state = {
        searchText:'',
    }

    // 抓取搜尋的值
    handleChange = e => {
        const value = e.target.value
        this.setState({
            searchText:value
        })

        this.props.search(value)
    }

    // 清除搜尋框
    clearSearchText = () =>{
        this.setState({
            searchText:'',
        })
        this.props.search('')
    }

    goCart = () => {
        if(!global.auth.isLogin()){
            this.props.history.push('/login');
            toast.info('Please Login First')
            return
        }
        this.props.history.push('/cart')
    }

    render(){
        return (
            <div className="tool-box">
                <div className="logo-text">STORE</div>
                <div className="search-box">
                    <div className="has-addons">
                        <div className="control">
                            <input type="text" className="input search-input"
                            placeholder="Search Product" value={this.state.searchText} onChange={this.handleChange}
                            />
                        </div>
                        <div className="control">
                            <button className="button" onClick={this.clearSearchText}>X</button>
                        </div>
                    </div>
                </div>
                <div to="/Cart" className="cart-box" onClick={this.goCart}>
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-num">({this.props.cartNum})</span>
                </div>
            </div>
        )
    }
}

export default withRouter(ToolBox)