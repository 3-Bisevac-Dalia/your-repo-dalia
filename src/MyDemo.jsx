import React, {useState} from "react";

function My Demo() {

    const [name, setName] = useState("enter name above")
    const[answer, setAnswer] = useState("");

    function handleNameChange() {
        setName(e.target.value);
    }
    return(
        <div>
            <input id='myName' onChange={handleNameChange}></input>
            <button onClick={() => setName(document.getElementById("myName").value.SOMETHINGGOES HERE)}
                >Submit name</button>
            <p>Name: {name}</p>
            <p>Answer: {answer}</p>

        </div>
    )
}

