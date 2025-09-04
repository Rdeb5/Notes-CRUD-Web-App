import { create } from 'zustand';
import axios from 'axios';
import SignupForm from '../Components/SignupForm';

const authStore = create((set) => ({

    loggedIn: null,

    loginForm: {
        email: "",
        password: "",
    },

    signupForm: {
        email: "",
        password: "",
    },

    updateLoginForm: (e) => {
        const { name, value } = e.target

        set(state => {
            return ({
                loginForm: {
                    ...state.loginForm,
                    [name]: value,
                },
            });
        });
    },

    updateSignupForm: (e) => {
        const { name, value } = e.target

        set(state => {
            return ({
                signupForm: {
                    ...state.signupForm,
                    [name]: value,
                },
            });
        });
    },

    login: async (e) => {

        const { loginForm } = authStore.getState();

        await axios.post("http://localhost:3000/login", loginForm, { withCredentials: true, });

        set({ loggedIn: true });

        set({
            loginForm: {
                email: "",
                password: "",
            },
        })
    },

    checkAuth: async () => {
        try {
            await axios.get('http://localhost:3000/check-auth', { withCredentials: true });
            set({ loggedIn: true })
        }
        catch (err) {
            set({ loggedIn: false });
        }
    },

    signup: async () => {
        const { signupForm } = authStore.getState();
        const res = await axios.post('http://localhost:3000/signup', signupForm, { withCredentials: true });

        set({
            signupForm: {
                email: "",
                password: "",
            }
        })
    },

    logout: async () => {
        await axios.get("http://localhost:3000/logout", { withCredentials: true })
        set({ loggedIn: false });
    }
}));

export default authStore; 