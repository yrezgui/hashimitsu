var React         = require('react/addons');
var _             = require('lodash');
var AppConstants  = require('../constants/AppConstants');
var MenuItems     = AppConstants.MenuItems;

var Header = React.createClass({

  getInitialState: function() {
    return {
      currentMenuItemId: _.find(MenuItems, {default: true}).id
    };
  },
  onSelectItem: function() {

  },
  renderMenuItem: function(key) {
    var item      = MenuItems[key];
    var className = '';

    if(this.state.currentMenuItemId === item.id) {
      className = 'active';
    }

    return (
      <li className={className} key={item.id}>
        <a href="#" onClick={this.onSelectItem} dataItemId={item.id}>{item.text}</a>
      </li>
    );
  },
  render: function() {

    var headerStyle = {
      padding: '10px 5px'
    };

    return (
      <header style={headerStyle}>
        <ul className="nav nav-tabs">
          {Object.keys(MenuItems).map(this.renderMenuItem)}
        </ul>
      </header>
    );
  }
});

module.exports = Header;