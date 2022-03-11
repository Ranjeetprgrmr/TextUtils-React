import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=> {
        setAlert(null);
      }, 2000);
  }
  
  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";

    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar /> */}
      {/*<Router>*/} 
      {/* /users----> Component 1* when we write "exact" to path, it doesn't get confused or else Component 1 and 2 will be understood as same/ }
      {/* /users/home---> Component 2*/ }
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <TextForm heading="Enter the text to Analyze" mode={mode} showAlert={showAlert} />

      {/*<Routes>
            <Route exact path="about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to Analyze" mode={mode} showAlert={showAlert} />} />
        </Routes>*/}
      </div> 
      {/*</Router>*/}
    </>    
  );
}

export default App;
