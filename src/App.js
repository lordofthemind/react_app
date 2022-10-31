import logo from './logo.svg';
import './App.css';

function App() {
  const fname = 'Manish';
  const lname = 'Kumar';
  const  age = '20';
  const job = 'student'

  const inputPlaceholder= 'Enter your details'

  const getFullName = (fname, lname) => `${fname} ${lname}`

  const detailsInputbox = <input placeholder={inputPlaceholder} autoComplete />;

  return (
    <div className="App">
      <h3>Full Name: {getFullName(fname, lname)}</h3>
      <h3>Full Name: {fname+' '+lname}</h3>
      <h3>Full Name: {`${fname} ${lname}`}</h3>
      <p>Age: {age}</p>
      <p>{job}</p>
      <input placeholder={inputPlaceholder} autoComplete />

      {detailsInputbox}
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
