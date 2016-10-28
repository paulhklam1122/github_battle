var React = require('react');
var transparentBg = require('../styles').transparentBg;
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      username: ''
    }
  },
  handleUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    })
  },
  handleSubmitUser: function(event) {
    event.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      });
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  render: function() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username}/>
    );
  }
});

// class PromptContainer extends React.Component {
//   static defaultProps() {
//     username: ''
//   }
//   handleUpdateUser(e) {
//     e.preventDefault();
//     this.setState({
//       username: e.target.value
//     });
//   }
//   handleSubmitUser(event) {
//     even.preventDefault();
//     var username = this.state.username
//     this.setState({
//       username: ''
//     });
//
//     if (this.props.routeParams.playerOne) {
//       this.context.router.push({
//         pathname: '/battle',
//         query: {
//           playerOne: this.props.routeParams.playerOne,
//           playerTwo: this.state.username
//         }
//       });
//     } else {
//       this.context.router.push('/playerTwo/' + this.state.username)
//     }
//   }
//   render() {
//     return (
//       <Prompt
//         onSubmitUser={this.handleSubmitUser}
//         onUpdateUser={this.handleUpdateUser}
//         header={this.props.route.header}
//         username={this.state.username}/>
//     );
//   }
// }

module.exports = PromptContainer;
