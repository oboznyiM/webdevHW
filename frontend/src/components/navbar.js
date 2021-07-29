import React from 'react';
import './navbar.css'
import FilterForm from "../forms/filterForm";
import BookForm from "../forms/bookForm";
import BookList from "./bookList";
import {FaWindowClose, GiOpenBook} from "react-icons/all";
class Navbar extends React.Component {

    render() {
        if (this.props.hidden) {
            return (
                <div className={'navbarHidden'}>
                    <button className={'openNavbar'} onClick={this.props.onClick}>
                        <GiOpenBook size={70}/>
                    </button>
                </div>
            )
        } else {
            return (
                <div className={'navbarShown'}>
                   <button className={'closeNavbar'} onClick={this.props.onClick}>
                       <FaWindowClose size={60}/>
                   </button>
                    <FilterForm filter={this.props.filterData}/>
                    <br/>
                    <BookForm/>
                    <br/>
                    <BookList/>
                </div>
            )
        }
    }

}

export default Navbar