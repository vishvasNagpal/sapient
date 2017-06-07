"use strict";

const React = require("react");
const Redux = require("redux");
const ReactRedux = require("react-redux");
const Provider = ReactRedux.Provider;
const ReactDomServer = require('react-dom/server');

class StoreProvider {
    static provideStoreToComponent(store, component, props) {
        const Component = component;
        props = props || {};
        return <Provider store={store}>
                <Component {...props}/>
            </Provider>;
    }

    static renderToString(store, component, props) {
        return ReactDomServer.renderToString(StoreProvider.provideStoreToComponent(store, component, props));
    }

    static renderToStaticMarkup(store, component, props) {
        return ReactDomServer.renderToStaticMarkup(StoreProvider.provideStoreToComponent(store, component, props));
    }

    static renderToStringFromModel(model, component, props) {
        let store = StoreProvider.generateStoreFromModel(model);
        return ReactDomServer.renderToString(StoreProvider.provideStoreToComponent(store, component, props));
    }

    static renderToStaticMarkupFromModel(model, component, props) {
        let store = StoreProvider.generateStoreFromModel(model);
        return ReactDomServer.renderToStaticMarkup(StoreProvider.provideStoreToComponent(store, component, props));
    }

    static generateStoreFromModel(model) {
        return Redux.createStore(function(state, action) {
            console.log(state, action);
            return {model}; // {"model": model}
        });
    }
}

module.exports = StoreProvider;