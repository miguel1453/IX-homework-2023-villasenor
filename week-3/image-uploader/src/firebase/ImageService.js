import {storage} from "./firebase";
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'

class ImageService {
    uploadImage(file) {
        return new Promise((resolve, reject) => {
            const fileRef = ref(storage, 'images/' + file.name);
            const uploadTask = uploadBytesResumable(fileRef, file);

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    // handle update
                    // listen to updates
                },
                (err) => {
                    // handle error
                    reject(err.message);
                },
                () => {
                    // get downLoadUrl for completed upload
                    // resolve our promise
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                        // resolve the download url
                        resolve(downloadUrl);
                    });
                }
            );

        })
    }
}

const service = new ImageService();
export default service;