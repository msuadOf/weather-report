import React, {Component} from 'react';
import FloatButton from "./float-icon-text-button";

class Hovers extends Component {
    render() {
        return (
            <div>
                <FloatButton isTop={true}  onClick={()=>this.click2Top()}>顶部</FloatButton>
            </div>
        );
    }
}

export default Hovers;