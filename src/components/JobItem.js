var React         = require('react/addons');
var TechConstants = require('../constants/TechConstants');
var _             = require('lodash');

var JobItem = React.createClass({
  propTypes: {
    model: React.PropTypes.object
  },
  getIcon: function (tags) {
    var icon = TechConstants.DEFAULT;

    var result = _.find(Object.keys(TechConstants), function search(key) {
      return _.contains(TechConstants[key].alias, tags[0]);
    });

    if(result) {
      return TechConstants[result];
    }

    return icon;
  },
  render: function () {

    var icon  = this.getIcon(this.props.model.tags_text_list);
    var title = this.props.model['link_list_1/_text'];
    title     = _.isArray(title) ? title[0] : title;

    var iconContainerStyle = {
      width: 64,
      height: 64,
      textAlign: 'center'
    };

    var iconStyle = {
      width: 40,
      height: 40,
      fontSize: '32px',
      textAlign: 'center',
      color: '#fff',
      padding: '10px',
      background: icon.color
    };

    return (
      <div>
        <div className="media">
          <a className="media-left" style={iconContainerStyle}>
            <i className={icon.symbol} style={iconStyle}></i>
          </a>
          <div className="media-body">
            <h4 className="media-heading">{title}</h4>
            <span>{this.props.model.html_1}</span> · <i>{this.props.model.text_1}</i>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = JobItem;