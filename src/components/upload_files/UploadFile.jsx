import React,{useState} from 'react'
import UploadFilesForm from './UploadFilesForm'
import { storage } from '../../firebaseConfig';
import { listAll,ref } from 'firebase/storage';

export default function UploadFiles() {
    // Create a reference under which you want to list
    const listRef = ref(storage, 'images');

    // Find all the prefixes and items.
    listAll(listRef)
    .then((res) => {
        res.prefixes.forEach((folderRef) => {
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
        console.log('folder?',folderRef)
        });
        res.items.forEach((itemRef) => {
        // All the items under listRef.
        });
    }).catch((error) => {
        // Uh-oh, an error occurred!
    });

    return (
        <div className="col-md-4 p-3">
            <UploadFilesForm/>
        </div>
    )
}