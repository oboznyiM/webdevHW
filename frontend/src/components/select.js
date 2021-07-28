import React from 'react';
import './select.css'

class Select extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className={'select'}>
                <div className={'choice'}>
                    <div className={'main'} onClick={()=>{console.log('azaza')}}>
                        <div>{this.props.book.description}</div>
                        <img alt={'Oops'} src={this.props.book.imageURL} height={'400em'} width={'500 em'}/>
                    </div>
                    <div className={'circles'}>
                        <button className={'circle-button dislike'} onClick={this.props.onLikeClick}></button>
                        <button className={'circle-button like'} onClick={this.props.onLikeClick}></button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Select;