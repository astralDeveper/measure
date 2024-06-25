import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, serverTimestamp, collection, getDocs, deleteDoc, updateDoc, getDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDIGTV7d0Q_vCU4rlBpV0xog0ZENR73Nws",
    authDomain: "measure-boss.firebaseapp.com",
    projectId: "measure-boss",
    storageBucket: "measure-boss.appspot.com",
    messagingSenderId: "672665291420",
    appId: "1:672665291420:web:aabb1532cd4576e6b77b59",
    measurementId: "G-JPXV1915Z0"
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();

export const fbSignUp = async (body) => {
    try {
        if (!body.email || !body.password) {
            throw new Error("Email and Password are required.");
        }
        const userCredential = await createUserWithEmailAndPassword(auth, body.email, body.password);
        const user = userCredential.user;
        await setDoc(doc(db, 'users', user.uid), { email: body.email, phone: body.phone, type: body.type });
        return user;
    } catch (error) {
        throw error;
    }
};

export const DeleteDoc = async (collectionName, documentId) => {
    try {
        await deleteDoc(doc(db, collectionName, documentId));
        console.log("Document successfully deleted!");
    } catch (error) {
        console.error("Error deleting document: ", error);
        throw error;
    }
};

const GetAllDocs = async (collectionName) => {
    let res = [];
    const collecRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collecRef);
    querySnapshot.forEach((doc) => {
        res.push({ id: doc.id, ...doc.data() }); // Include document ID along with data
    });
    return res;
};

const LoginUser = async (auth, email, password) => {
    let userCredential = await signInWithEmailAndPassword(auth, email, password);
    let user = userCredential.user;
    return user;
};

function UploadFile(file) {
    return new Promise((resolve, reject) => {
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                reject(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                });
            }
        );

    })
}

const LogOutUser = async (auth) => {
    await signOut(auth)
    return { message: 'User Logged Out' }
};

export let fbAuth = () => {
    return new Promise((resolve, reject) => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                // ...
                resolve(uid)
            } else {
                // User is signed out
                // ...
                reject("No User In Logged In")
            }
        });
    })
}

const getDocumentFromId = async (collectionName, docName) => {
    const docRef = doc(db, collectionName, docName);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

const getId = () => {
    const id = localStorage.getItem('id');
    const type = localStorage.getItem('type');
    return { id, type };
};

const setId = (id, type) => {
    localStorage.setItem('id', id);
    localStorage.setItem('type', type ? type : 'user');
};

const passwordReset = async (email) => {
    return await sendPasswordResetEmail(auth, email)
  }



export { LoginUser, LogOutUser, auth, GetAllDocs, UploadFile, storage, db, getId, setId, getDocumentFromId, passwordReset };