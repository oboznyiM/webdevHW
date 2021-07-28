import React from 'react';
import './navbar.css'
import FilterForm from "../forms/filterForm";
class Navbar extends React.Component {
    render() {
        if (this.props.hidden) {
            return (
                <div className={'navbarHidden'}>
                    <button onClick={this.props.onClick}>Hidden</button>
                </div>
            )
        } else {
            return (
                <div className={'navbarShown'}>
                   <button onClick={this.props.onClick}>Shown</button>
                    <FilterForm filter={this.props.filterData}/>
                </div>
            )
        }
    }

}

export default Navbar