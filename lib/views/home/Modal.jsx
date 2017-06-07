"use strict";
let React = require('react');
const ReactRedux = require('react-redux');
const AbstractComponent = requireLib('views/AbstractComponent');
const ViewConfig = requireLib('constants/ViewConfig');

class Modal extends AbstractComponent {
    render() {
        return(
            <div className="modal fade" tabindex="-1" id="editModal" role="dialog" aria-labelledby="gridSystemModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <div className="modal-body">
                            <h4 className="loading">Loading...</h4>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


module.exports = ReactRedux.connect(function (state) {
    return {
        data:state.model.data
    };
})(Modal);