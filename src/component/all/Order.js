import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetch_order_Data} from '../all/payment/getPaymentData';
import {OrderInfoItem} from './OrderInfoItem';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Select from 'react-select';

import $ from  "jquery";
import "./input_style.css";

class Order extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: true,
        };
    }


    componentDidMount() {
        this.props.fetchFirstPage();



    }

    render() {
        let {data,isFetching} = this.props.reddit;
        const { open } = this.state;
      //  const fetching =isFetching;
      //  console.log(isFetching ,fetching );
        const styles = {
            fontSize: 14,
            color: 'blue',
        }
        const options = [
            {label: "one", value: 1, className: 'custom-class'},
            {label: "two", value: 2, className: 'awesome-class'}
            // more options...
        ];

        return (
            <div>
                <Select
                    options={options}
                    placeholder={'Select something'}
                    clearable={false}
                    style={styles.select}
                />




                { !isFetching ?





                    <div>

                        {data.map((item, index) => (
                            <OrderInfoItem key={index}
                                           category={item.data.advertiser_category}
                                           headerImage={item.data.header_img}
                                           headerSize={item.data.header_size}
                                           headerTitle={item.data.header_title}
                            />
                        ))}
                    </div>
                    :
                    <div>Loadind...</div>
                }

                <div className="label-float">
                    <input type="text" placeholder="Telefone " value={"test"}/>
                    <label>Telefone</label>
                </div>
                <br/>
                <div className="label-float">
                    <input type="text" placeholder=" " required/>
                    <label>Nome de Usuário</label>
                </div>




                <div style={{ width: 300 }}>
                    <Button
                        onClick={() => this.setState({ open: !open })}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        click
                    </Button>
                    <Collapse in={this.state.open}>
                        <div id="example-collapse-text">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </Collapse>
                </div>




            </div>




        )
    }




}


const mapStateToProps = state => {
    return {
        reddit: state.loadOrderElement.reddit
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFirstPage: bindActionCreators(fetch_order_Data, dispatch)
     //   ,
     //  fetchMoreData: bindActionCreators(fetchMoreData, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Order);