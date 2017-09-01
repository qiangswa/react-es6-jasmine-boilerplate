/**
 * @Author: Q.S. Wang <qiangswa>
 * @Date:   1970-01-01T10:00:00+10:00
 * @Email:  wangqs_eclipse@yahoo.com
 * @Filename: Bar.js
 * @Last modified by:   qiangswa
 * @Last modified time: 2017-09-01T14:38:13+10:00
 * @Copyright: Q.S. Wang(wangqs_eclipse@yahoo.com)
 */



import React from 'react'

export default class Bar extends React.Component {
  //https://github.com/react-bootstrap/react-router-bootstrap/issues/91
  // static contextTypes = {
  //   router: function() {
  //     router: React.PropTypes.object
  //   }
  // };

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

  }

  componentDidMount() {

    const hash = this.props.location.hash
    if (!hash) {
      console.log("push:" + hash);
      // console.log(this.props.histor
      this.props.history.push('/bar#12345')
      //this.forceUpdate();
    }
  }

}
