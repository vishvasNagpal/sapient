"use strict";
let React = require('react');
const ReactRedux = require('react-redux');
const AbstractComponent = requireLib('views/AbstractComponent');
const ViewConfig = requireLib('constants/ViewConfig');
const ListItem = requireLib('views/home/ListItem');
const Modal = requireLib('views/home/Modal');

class HomeListView extends AbstractComponent {
    render() {
        let data = this.props.data;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-xs-9 cartHeading"><h1>YOUR SHOPPING BAG</h1></div>
                    <div className="col-xs-3 visible-xs numItem"><h2>{data.itemsNo} items</h2></div>
                </div>

                <div className="row itemsRowsHeading hidden-xs">
                    <div className="col-sm-9 col-xs-12">{data.itemsNo} Items</div>
                    <div className="col-sm-1 text-center">SIZE</div>
                    <div className="col-sm-1 text-center">QTY</div>
                    <div className="col-sm-1 text-center">PRICE</div>
                </div>

                <ListItem></ListItem>
                <Modal></Modal>

                <div className="row">
                    <div className="col-sm-4 hidden-xs contactSec">
                        <div className="col-sm-11">
                            <p className="black">Need help <br/>or have a question?</p>
                            <p>Call Customer care service at <br/>1-800-555-5555</p>
                            <p><a href="#" className="light">Chat with one of <br/>out sattylists</a></p>
                            <p><a href="#" className="light">See return <br/>and exchange policy</a></p>
                        </div>
                    </div>
                    <div className="col-sm-8 col-xs-12">
                        <div className="row promotionSec">
                            <div className="col-sm-6 col-xs-12 head"><p>ENTER PROMOTION CODE <br/>OR GIFT CARD</p></div>
                            <div className="col-sm-6 col-xs-12">
                                <div className="col-xs-8 col-sm-7 col-md-8"><input type="text" className="form-control" value="" /></div>
                                <div className="col-xs-4 col-sm-5 col-md-4"><button className="btn btn-block btn-default">APPLY</button></div>
                            </div>
                            <div className="col-xs-12"><div className="col-xs-12 border"></div></div>
                        </div>
                        <div className="row checkoutInfo">
                            <div className="col-xs-7">SUBTOTAL</div>
                            <div className="col-xs-5 text-right price"><span>{data.c_currency}</span>{data.subtotal.toFixed(2)}</div>
                        </div>
                        <div className="row checkoutInfo">
                            <div className="col-xs-7">PROMOTION CODE {data.promotion.code} APPLIED</div>
                            <div className="col-xs-5 text-right price"> - <span>{data.c_currency}</span>{data.discount.toFixed(2)}</div>
                        </div>
                        {
                            data.totalValue > 50 ?
                                <div className="row checkoutInfo">
                                    <div className="col-xs-7"><p>ESTIMATED SHIPPING</p><p className="info">You qualify free shipping</p></div>
                                    <div className="col-xs-5 text-right">FREE</div>
                                </div>
                                : null

                        }

                        <div className="row finalPrice">
                            <div className="col-xs-12"><div className="col-xs-12 border-top"></div></div>
                            <div className="col-xs-7"><p>ESTIMATED TOTAL</p><p className="info">Tax will be applied during checkout</p></div>
                            <div className="col-xs-5 text-right price"><span>{data.c_currency}</span>{data.totalValue.toFixed(2)}</div>
                            <div className="col-xs-12"><div className="col-xs-12 border-bottom"></div></div>
                        </div>
                        <div className="row checkout">
                            <div className="col-sm-4"></div>
                            <div className="col-xs-12 col-sm-4 info text-right">CONTINUE SHOPPING</div>
                            <div className="col-xs-12 col-sm-4"><button className="btn btn-block btn-lg btn-primary">CHECKOUT</button></div>
                        </div>
                    </div>
                </div>

            </div>
            );
    }
}

HomeListView.propTypes = {
    //viewConfig: React.PropTypes.string.isRequired
};

module.exports = ReactRedux.connect(function (state) {
    return {
        data:state.model.data
    };
})(HomeListView);