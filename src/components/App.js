/**
 * @Author: Q.S. Wang <qiangswa>
 * @Date:   1970-01-01T10:00:00+10:00
 * @Email:  wangqs_eclipse@yahoo.com
 * @Filename: App.js
 * @Last modified by:   qiangswa
 * @Last modified time: 2017-09-01T14:39:20+10:00
 * @Copyright: Q.S. Wang(wangqs_eclipse@yahoo.com)
 */

 import React from 'react'
 import {
   Link
 } from 'react-router-dom'


export default function App({ children }) {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/foo">Foo</Link>
        {' '}
        <Link to="/bar">Bar</Link>
      </header>
      <div>
        <button>Go to /foo</button>
      </div>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}

 // const BasicExample = () => (
 //   <Router>
 //     <div>
 //       <ul>
 //         <li><Link to="/">Home</Link></li>
 //         <li><Link to="/about">About</Link></li>
 //         <li><Link to="/topics">Topics</Link></li>
 //       </ul>
 //
 //       <hr/>
 //
 //       <Route exact path="/" component={Home}/>
 //       <Route path="/about" component={About}/>
 //       <Route path="/topics" component={Topics}/>
 //     </div>
 //   </Router>
 // )
