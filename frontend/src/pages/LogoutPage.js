import React, { useEffect } from "react"
import authStore from "../stores/authStore"

export default function LogoutPage() {
    const store = authStore();
    useEffect(() => {
        store.logout();
    }, [])
    return (
        <div>
            <h1>Logged Out</h1>
        </div>
    )
}