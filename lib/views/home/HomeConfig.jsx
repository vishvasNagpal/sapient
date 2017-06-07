"use strict";
let React = require('react');
const ReactRedux = require('react-redux');
const AbstractComponent = requireLib('views/AbstractComponent');
const ViewConfig = requireLib('constants/ViewConfig');

class HomeConfig extends AbstractComponent {
    render() {
        let View = this.getComponent(ViewConfig.MODULE.HOME.LIST_VIEW);

        return(
            <View></View>
        );
    }
}

HomeConfig.propTypes = {
    //viewConfig: React.PropTypes.string.isRequired
};

module.exports = ReactRedux.connect(function (state) {
    return {
        //viewConfig:state.model.viewConfig
    };
})(HomeConfig);