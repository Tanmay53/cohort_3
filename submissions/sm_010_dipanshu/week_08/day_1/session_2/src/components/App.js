import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <OsList />
        <MobileList />
        <Buttons />
        <Card />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <div className="container mt-5">
//         <h1 className="text-info mb-3">Mobile Operating System</h1>
//         <OsList />
//         <h1 className="text-info mt-5 mb-3">Mobile Manufacturers</h1>
//         <MobileList />
//       </div>

//       <Buttons />

//       <Card />
//     </div>
//   );
// }

export default App;
