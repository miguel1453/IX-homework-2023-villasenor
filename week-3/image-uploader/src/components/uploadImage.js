import { storage } from '../firebase/firebase'
import React, {useState} from "react";
import service from "../firebase/ImageService";

export default function UploadImage() {
    const [file, setFile] = useState(null);

    function onFormSubmit(e) {
        e.preventDefault();
        try {
            service.uploadImage(file);
        } catch (error) {
            console.log(error)
        }
    }

    function onFileSelected(e) {
        if (e.target.files.length) {
            setFile(e.target.files[0])
        } else {
            setFile(null);
        }
    }

    return (
        <div className="container">
            <form onSubmit={onFormSubmit}>
                <div className="p-2">
                    <label className="form-label">Choose Image</label>
                    <input
                        className="form-control"
                        type='file'
                        onChange={onFileSelected}
                        ></input>
                    <button className="btn btn-primary mt-3" type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}
