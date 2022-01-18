import React, {Component} from 'react';
import { Cascader } from 'antd';
import options from "./cities.js";





// Just show the latest item.
function displayRender(label) {
    return label[label.length - 1];
}




class SearchBox extends Component {
    onChange=(value)=> {
        if(value===undefined) return
        this.props.updateData(value[1])
    }
    render() {
        return (
                <Cascader
                    options={options}
                    expandTrigger="hover"
                    displayRender={displayRender}
                    onChange={this.onChange}
                />
        );
    }
}

export default SearchBox;
