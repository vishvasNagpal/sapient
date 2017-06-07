"use strict";
let React = require('react');
const ReactRedux = require('react-redux');
const AbstractComponent = requireLib('views/AbstractComponent');
const ViewConfig = requireLib('constants/ViewConfig');

class ListItem extends AbstractComponent {
    render() {
        let listItems= this.props.data.productsInCart;
        return(
            <div className="list">
                {listItems.map(function(item){
                    let image = "public/images/" + item.p_img;
                return(<div className="row listItem">
                    <div className="col-sm-9 col-xs-12 productInfo">
                        <div className="media">
                            <div className="media-left">
                                <a href="#">
                                    <img className="media-object" src={image} />
                                </a>
                            </div>
                            <div className="media-body">
                                <h4 className="pName"> {item.p_name}</h4>
                                <p className="pStyle">Style#: {item.p_style}</p>
                                <p className="pColor">Color: {item.p_selected_color.name}</p>
                                <p className="visible-xs size">Size: {item.p_selected_size.code}</p>
                                <div className="visible-xs qty">Qty: <input className="form-control" type="text" name="qty" value={item.p_quantity}/></div>
                                <h3 className="visible-xs price"><span>{item.c_currency}</span>{item.p_price.toFixed(2)}</h3>
                            </div>
                        </div>
                        <div className="actionItems">
                            <ul className="list-inline">
                                <li data-toggle="modal" data-pid={item.p_id} className="edit" data-target="#editModal">EDIT</li>
                                <li>|</li>
                                <li>X REMOVE</li>
                                <li>|</li>
                                <li>SAVE FOR LATER</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-1 hidden-xs text-center size">{item.p_selected_size.code}</div>
                    <div className="col-sm-1 hidden-xs text-center qty"><input disabled="disabled" className="form-control" type="text" name="qty" value={item.p_quantity}/></div>
                    <div className="col-sm-1 hidden-xs text-center price"><span>{item.c_currency}</span>{item.p_price.toFixed(2)}</div>
                </div>)
                })
                }
            </div>


        );
    }
}


module.exports = ReactRedux.connect(function (state) {
    return {
        data:state.model.data
    };
})(ListItem);