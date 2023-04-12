//rfc
// import React from 'react'

// export default function Time(props) {
//   return (
//     <div>
//       <h1> Now {props.time}</h1>
//     </div>
//   )
// }
// Time.defaultProps = {time: 'today'}

import React, { Component } from 'react'

export default class Time extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.time}</h1>
      </div>
    )
  }
}
