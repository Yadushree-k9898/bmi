// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [weight, setWeight] = useState(0);
//   const [height, setHeight] = useState(0);
//   const [bmi, setBmi] = useState("");
//   const [message, setMessage] = useState("");

//   let calcBmi = (e) => {
//     e.preventDefault();
//     if (weight === 0 || height === 0) {
//       alert("Please enter a valid weight and height");
//     } else {
//       let bmi = (weight / (height * height)) * 703;
//       setBmi(bmi.toFixed(1));

//       if (bmi < 25) {
//         setMessage("You are Underweight😢");
//       } else if (bmi >= 25 && bmi < 30) {
//         setMessage("You are Healthy😃");
//       } else {
//         setMessage("You are Overweight😐");
//       }
//     }
//   };

//   let reload = () => {
//     window.location.reload();
//   };

//   return (
//     <div className="App">
//       <div className="container">
//         <h2>BMI CALCULATOR</h2>
//         <form onSubmit={calcBmi}>
//           <div>
//             <label>Weight (ibs)</label>
//             <input
//               type="text"
//               placeholder="Enter Weight Value"
//               onChange={(e) => setWeight(e.target.value)}
//               value={weight}
//             />
//           </div>
//           <div>
//             <label>Height (inch)</label>
//             <input
//               type="text"
//               placeholder="Enter Height Value"
//               onChange={(e) => setHeight(e.target.value)}
//               value={height}
//             />
//           </div>
//           <div>
//             <button className="btn" type="submit">
//               Submit
//             </button>
//             <button className="btn btn-outline" type="submit" onClick={reload}>
//               Reload
//             </button>
//           </div>

//           <div className="center">
//             <h3>Your BMI is: </h3>
//             <p>{message}</p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default App;





import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e) => {
    e.preventDefault();

    // Ensure weight and height are numbers
    let weightNum = parseFloat(weight);
    let heightNum = parseFloat(height);

    if (weightNum === 0 || heightNum === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmiValue = (weightNum / (heightNum * heightNum)) * 703;
      setBmi(bmiValue.toFixed(1));

      if (bmiValue < 18.5) {
        setMessage("You are Underweight😢");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setMessage("You are Healthy😃");
      } else {
        setMessage("You are Overweight😐");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI CALCULATOR</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="text"
              placeholder="Enter Weight Value"
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
            />
          </div>
          <div>
            <label>Height (inch)</label>
            <input
              type="text"
              placeholder="Enter Height Value"
              onChange={(e) => setHeight(e.target.value)}
              value={height}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="button" onClick={reload}>
              Reload
            </button>
          </div>

          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;

