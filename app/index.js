var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

// const USER_DATA = {
//   name: 'Paul Lam',
//   username: 'paulhklam1122',
//   image: "https://avatars1.githubusercontent.com/u/19393158?v=3&s=466"
// };

/*
Focused
Independent
Reusable
Small
Testable
*/

// ----------------ES5------------------

// var Link = React.createClass({
//   changeURL: function() {
//     window.location.replace(this.props.href)
//   },
//   render: function() {
//     return (
//       <span
//         style={{color: 'blue', cursor: 'pointer'}}
//         onClick={this.changeURL}>
//         {this.props.children}
//       </span>
//     );
//   }
// });
//
// var ProfilePic = React.createClass({
//   render: function() {
//     return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
//   }
// });
//
// var ProfileLink = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <Link href={'https://www.github.com/' + this.props.username} >
//           {this.props.username}
//         </Link>
//       </div>
//     );
//   }
// });
//
// var ProfileName = React.createClass({
//   render: function() {
//     return (
//       <div>{this.props.name}</div>
//     );
//   }
// });
//
// var Avatar = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <ProfilePic imageUrl={this.props.user.image} />
//         <ProfileName name={this.props.user.name} />
//         <ProfileLink username={this.props.user.username}/>
//       </div>
//     );
//   }
// });

// ----------------ES6------------------

// class Link extends React.Component {
//   changeURL() {
//     console.log(this)
//     window.location.replace(this.props.href)
//   }
//   render() {
//     return(
//       <span
//         style={{color: 'blue', cursor: 'pointer'}}
//         onClick={this.changeURL.bind(this)}>
//         {this.props.children}
//       </span>
//     );
//   }
// }
//
// class ProfilePic extends React.Component {
//   render() {
//     return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />;
//   }
// }
//
// class ProfileLink extends React.Component {
//   render() {
//     return (
//       <div>
//         <Link href={'https://www.github.com/' + this.props.username} >
//           {this.props.username}
//         </Link>
//       </div>
//     );
//   }
// }
//
// class ProfileName extends React.Component {
//   render() {
//     return (
//       <div>{this.props.name}</div>
//     );
//   }
// }
//
//
// class Avatar extends React.Component {
//   render() {
//     return (
//       <div>
//         <ProfilePic imageUrl={this.props.user.image} />
//         <ProfileName name={this.props.user.name} />
//         <ProfileLink username={this.props.user.username}/>
//       </div>
//     );
//   }
// }

ReactDOM.render(routes, document.getElementById('app'));
