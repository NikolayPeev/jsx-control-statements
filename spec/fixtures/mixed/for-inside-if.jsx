var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <If condition={this.props.test}>
          <For each="blah" of={this.props.blahs}>
            <span key={blah}>{blah}</span>
          </For>
        <Else />
          <For each="otherBlah" of={this.props.otherBlahs}>
            <span key={otherBlah}>{otherBlah}</span>
          </For>
        </If>
      </div>
    );
  }
});
