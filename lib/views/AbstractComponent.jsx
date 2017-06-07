'use strict';
const React = require('react');
const requireCache = {};
class AbstractComponent extends React.Component {
    getComponent(componentPath) {
        let component = requireCache[componentPath];
        if (!component) {
            component = requireCache[componentPath] = requireLib(componentPath);
        }
        return component;
    }
}

module.exports = AbstractComponent;