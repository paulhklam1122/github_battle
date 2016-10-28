var React = require('react');

// var Main = React.createClass({
//   render: function() {
//     return (
//       <div>
//         Hello from Main
//         {this.props.children}
//       </div>
//     );
//   }
// });


class Main extends React.Component {
  render() {
    return (
      <div className='main-container'>
        {this.props.children}
      </div>
    );
  }
};

module.exports = Main;
