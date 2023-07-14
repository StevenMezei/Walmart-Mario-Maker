import React, {useState} from 'react';
import Engine from '../components/engine/Engine';

export default function HomePage() {
    // Error that is set when the backend returns a response
    const [error, setError] = useState(null);
    // game data that will be returned by the backend in the form of JSON and sent to the game component; this data is a result of the backend parsing
    const [gameJSON, setGameJSON] = useState(null);
    const [fileContents, setFileContents] = useState(null);
    const [file, setFile] = useState(null);


    function readInputFile(file) {
        setFile(file);
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
            setFileContents(fileReader.result);
        }, false);

        if (file) {
            fileReader.readAsText(file);
        }
    }


    function sendUserCode() {
        // Set error to null everytime a new request is made
        setError(null);
        let url = 'http://localhost:3300/game';
        // Display error if the fileContent has not been set yet after it has been uploaded. It should work within 2 seconds after file upload
        if (!fileContents) {
            setError("No file detected, please upload a file or wait 2 seconds before trying again");
            return;
        }
        // Send file to backend server as a JSON; the value of userCode is the contents of the file as a string
        let body = {
            "userCode": fileContents
        };
        let init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify(body)
        };
        let resp;
        // Make the POST request
        const response = fetch(url,init).then((res) => {
            // Parse response as JSON
            resp = res;
            return res.json();
        }).then((resJson) => {
            // If request successful, set the game data state. Once the state is set, this component will render the game.
            if (resp.status === 200) {
                setGameJSON(resJson["gameData"]);
                console.log(resJson["gameData"]);
            } else {
                setError(resJson["error"]);

            }
        }).catch((err) => {
            console.log(err);
        });
        console.log(response);
    }


    return (
        <React.Fragment>
            {!gameJSON 
            && 
            <div className="startContainer">
                <div className="startScreen preGameText">
                    <div className="introText">
                        Welcome to Walmart Mario Maker! <br/> Upload your .gregor file containing your game code, and then click generate to start your game!
                    </div>
                    {
                        error && 
                        <div className="errorText">
                            {error}
                        </div>
                    }
                    <div className="startButtonContainer">
                        <label className="startButton startButtonFileUpload">
                            <input type="file" className="startButtonFileUploader" 
                                accept=".gregor" 
                                onChange={event => {readInputFile(event.target.files[0])}}
                                onClick={event => {event.target.value=''}}/>
                            Upload your game code here!
                        </label>
                        <br/>
                        <br/>
                        <span className="startFileSpan">
                            {file ? file["name"] : "No file uploaded"}    
                        </span> 
                        
                        <br />
                        <button className="startButton" onClick={sendUserCode}>
                            Generate!
                        </button>
                    </div>
                </div>
            </div>
            }
            {gameJSON && <Engine gameData={gameJSON} />}
        </React.Fragment>
        
    );
}
