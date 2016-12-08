import React from 'react';
import "library/components/label/label.less";

export default class Label extends React.Component {
    render() {
        return <span className='c-label' data-qa={this.props.dataQA}>{ this.props.children }</span>;
    }
}