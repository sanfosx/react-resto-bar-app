import { React, useState } from 'react'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../../firebaseConfig'

export default function UploadFileForm(props) {
    const [progress, setProgress] = useState(0)
    let value = []

    const handleSubmit = (e) => {
        e.preventDefault()
        value = (e.target[0].files[0])
        uploadFiles(value)
    }

    const uploadFiles = (file) => {
        if (!file) return
        const storageRef = ref(storage, `/images/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file);
        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(prog);
                console.log('Upload is ' + prog + '% done');
            },
            (error) => {
                // Handle unsuccessful uploads
                console.log('error de la imagen', error.message)
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    value = []
                    setProgress(0);
                });
            }
        );

    }

    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <h1 className="text-center">{props.currentId === '' ? 'Agregar Datos' : 'Modificar Dato'}</h1>
            <div className="form-group input-group p-2">
                <input
                    type="file"
                    className="form-control" />
                <h3>Uploaded {progress} %</h3>
            </div>
            <button className="btn btn-success btn-block" type='submit' >Upload</button>
        </form>
    )
}
