import React from 'react'

export default class Bar extends React.Component {
  //https://github.com/react-bootstrap/react-router-bootstrap/issues/91
  static contextTypes = {
    router: function() {
      router: React.PropTypes.object
    }
  };

  render() {
    const hash = this.props.location.hash
    console.log("render:" + hash);
    if (!hash) {
      return <div>'Empty'</div>
    } else {
      return <div>'Bar'</div>
    }
  }

  componentDidUpdate() {
    const hash = this.props.location.hash
    if (!hash) {
      console.log("push:" + hash);
      this.context.router.push('/bar#12345')
      //this.forceUpdate();
    }
  }
  componentDidMount() {

    const hash = this.props.location.hash
    if (!hash) {
      console.log("push:" + hash);
      this.context.router.push('/bar#12345')
      //this.forceUpdate();
    }
  }

}
