import React, {Component} from 'react';
import './ButtonSmall.css'

class ButtonSmall extends Component {
    state={isclick:true}


    render() {
        const stylelist={
            'position': 'relative',
            'border-radius': '15px',
            'background': 'var(--button-bg-color)',
            'font-weight': '700',
            'transition': 'all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            'box-shadow': 'var(--button-shadow) ',
            'cursor': 'pointer',

            'color': '#6D6E74',
            'font-size': '22px',
            'line-height': '40px',
            'width': '40px',
            'height': '40px',

        }
        const stylelist1={
            'position': 'relative',
            'border-radius': '15px',
            'background': 'var(--button-bg-color)',
            'font-weight': '700',
            'transition': 'all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            'box-shadow': 'var(--button-shadow) inset',
            'cursor': 'pointer',

            'color': '#6D6E74',
            'font-size': '22px',
            'line-height': '40px',
            'width': '40px',
            'height': '40px',
        }
        return (
            <div>
                <button onChange={()=>{
                    const {isclick}=this.state
                    this.setState({isclick:!isclick})
                    console.log('@')
                }} className={this.state.isclick?'buttonsmall1': 'buttonsmall'} />
            </div>
        );
    }
}

export default ButtonSmall;