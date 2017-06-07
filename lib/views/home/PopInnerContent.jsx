"use strict";
let React = require('react');
const ReactRedux = require('react-redux');
const AbstractComponent = requireLib('views/AbstractComponent');
const ViewConfig = requireLib('constants/ViewConfig');

class PopInnerContent extends AbstractComponent {
    render() {
        let productsInCart = this.props.data.productsInCart;
        let fetch_id = parseInt(this.props.data.fetch_id);
        let item ;
        for(let i = 0; i < productsInCart.length; i++){
            if(parseInt(productsInCart[i].p_id) === fetch_id){
                item = productsInCart[i];
                break;
            }


        }

        return(
            <div className="row editPop popInnerContent">
                <div className="col-xs-6">
                    <div className="editInfo">
                        <h2>{item.p_name}</h2>
                        <h3 className="price"><span>$</span>{item.p_price.toFixed(2)}</h3>
                        <p>{item.p_selected_color.name}</p>
                        <ul className="list-inline color">
                            <li className={item.p_selected_color.name + " selected"}></li>
                            {item.p_available_options.colors.map(function(color){
                                return(<li className={color.name}></li>)
                            })}
                        </ul>
                        <ul className="list-inline actions">
                            <li><select className="form-control">
                                <option>size</option>
                                {item.p_available_options.sizes.map(function(size){
                                    return(<option>{size.name}</option>)
                                })}

                            </select>
                            </li>
                            <li><select className="form-control">
                                <option>qty:1</option>
                                <option>qty:2</option>
                                <option>qty:3</option>
                            </select></li>
                        </ul>
                        <button className="btn btn-lg btn-primary editBtn">ADD TO BAG</button>
                    </div>
                </div>
                <div className="col-xs-6 popImg"><img src={"public/images/" + item.p_img} /></div>
            </div>

        );
    }
}


module.exports = ReactRedux.connect(function (state) {
    return {
        data:state.model.data
    };
})(PopInnerContent);