import React from 'react';
import "library/components/anotherlabel/anotherlabel.less";

export default class Label extends React.Component {
    render() {
        return <span className='c-another-label' data-qa={this.props.dataQA}>{ this.props.children }</span>;
    }
}