var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <For index="index" of={[100, 200, 300]}>
          <span key={index}>{index}</span>
        </For>
      </div>
    );
  }
});
