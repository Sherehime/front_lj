import React from 'react';
import PropTypes from 'prop-types';



export class OrderInfoItem extends React.Component {

    static propTypes = {
        category: PropTypes.string,
        headerImage: PropTypes.string,
        headerSize: PropTypes.array,
        headerTitle: PropTypes.string
    };

    render() {
        let {category, headerImage, headerSize, headerTitle} = this.props;
        return (
            <div>
                {category}
                <br/>
                {headerTitle}
                {headerImage &&
                <img src={headerImage} width={headerSize[0]} height={headerSize[1]}/>
                }
                <hr/>
            </div>
        )
    }
}


export default OrderInfoItem;