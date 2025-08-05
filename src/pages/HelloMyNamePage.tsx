import {useState } from "react"; 

export default function HelloMyNamePage() {
  const [name, setName] = useState("") ;
  const [result, setResult] = useState("Please insert your name") ;
  const [isGreetOK, setisGreetOK] = useState<boolean>(false); ;
  const nameInput = (event: any) => {
    setName(event.target.value) ;
  };
  const greetBtnOnClick = () => {
    if(name == ""){
      setResult("Please insert your name") ;
      setisGreetOK(false) ;
    } else{
      setResult(`Hello ${name}`) ;
      setisGreetOK(true) ;
    }
    
  };
  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        onChange={nameInput}
        value={name}
      />
      <button className="btn btn-primary" onClick={greetBtnOnClick}>Greet Me</button>
      {/* Result Text */}
      <p className={isGreetOK ? "" : "text-danger"}>{result}</p>
    </div>
  );
}

