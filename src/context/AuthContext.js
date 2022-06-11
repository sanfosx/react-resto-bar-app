import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";
import {
    auth,
    db
} from "../firebaseConfig";
import {
    useNavigate
} from "react-router-dom";
import {
    setDoc,
    doc,
    deleteDoc,
    getDoc
} from "firebase/firestore";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    deleteUser,
    updateEmail,
    updatePassword
}
from "firebase/auth";

export const authContext = createContext()
export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("There is no Auth provider");
    return context;
};

export function AuthProvider({
    children
}) {
    const [userLoged, setUserLoged] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        signOut(auth)
        console.log('bye', userLoged)
        navigate('/login')
        setUserLoged('')
        localStorage.removeItem("USER");
        setLoading(false)
    }

    const addUserInFirestore = async (id, data) => {
        console.log('authdata q tiene', data)
        data.uid = id
        await setDoc(doc(db, "usuarios", id), data);
    }

    const clearUserInFirestore = (id) => {
        return deleteDoc(doc(db, 'usuarios', id));
    }

    const clearUser = () => {
        return (deleteUser(auth.currentUser), console.log('borradookkkkkkk'))
    }

    const changeEmailUser = (email) => {
        return updateEmail(auth.currentUser, email)
    }

    const changePasswordUser = (password) => {
        return updatePassword(auth.currentUser, password)
    }

    const addToLocalStore = async (dataUser) => {

        const docRef = doc(db, "usuarios", dataUser.uid);
        const docSnap = await getDoc(docRef);
        let user = {}

        if (docSnap.exists()) {
            console.log("usuario existente")
            console.log(docSnap.data())
            console.log('USER', JSON.parse(localStorage.getItem("USER")))
            user = docSnap.data()
        } else {
            if (dataUser.providerData[0].providerId === 'google.com') {
                user = {
                    uid: dataUser.uid,
                    name: dataUser.displayName.split(" ", 1).toString(),
                    email: dataUser.email,
                    password: ""
                }
                await setDoc(doc(db, 'usuarios', dataUser.uid), user)
                console.log("Se agrego el usuario !");
            } else {
                console.log('se registro con usuario y mail')
            }
        }

        if (typeof (Storage) !== "undefined") {
            // LocalStorage disponible
            localStorage.setItem('USER', JSON.stringify(user));
            console.log('usuario en localStorage', user)
        } else {} // LocalStorage no soportado en este navegador   

    }

    useEffect(() => {
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUserLoged(currentUser);
            addToLocalStore(currentUser)
            setLoading(false);
        });
        return () => unsubuscribe();
    }, []);

    return ( <
        authContext.Provider value = {
            {
                signup,
                login,
                userLoged,
                logout,
                loading,
                loginWithGoogle,
                addUserInFirestore,
                changeEmailUser,
                changePasswordUser,
                clearUser,
                clearUserInFirestore
            }
        } > {
            children
        } </authContext.Provider>
    )
}