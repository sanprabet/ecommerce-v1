import { useState } from "react";
import { storage } from "../../../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
 
function App() {

    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);
 
    function handleChange(event) {
        setFile(event.target.files[0]);
    }
 
    const handleUpload = () => {
        if (!file) {
            alert("Please upload an image first!");
        }
 
        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
 
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
 
                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                });
            }
        );
    };
 
    return (
        <div>
            <input type="file" onChange={handleChange} accept="/image/*" />
            <button onClick={handleUpload}>Upload to Firebase</button>
            <p>{percent} "% done"</p>
        </div>
    );
}
 
export default App;