import React, {useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log('mount count')
  })

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <h1>Current: {count}</h1>
    </div>
  );
}

//класові компоненти
// export default class Count extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };

//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);
//     this.reset = this.reset.bind(this);
//   }

//   increment() {
//     this.setState((state) => ({
//       count: state.count + 1,
//     }));
//   }
//   decrement() {
//     this.setState((state) => ({
//       count: state.count - 1,
//     }));
//   }
//   reset() {
//     this.setState({
//       count: 0,
//     });
//   }

//   render() {
//     return (
//     <div>
//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.decrement}>Decrement</button>
//         <button onClick={this.reset}>Reset</button>
//         <h1>Current: {this.state.count}</h1>
//     </div>);
//   }
// }
