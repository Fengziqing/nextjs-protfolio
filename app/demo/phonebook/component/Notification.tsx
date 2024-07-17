"use client"
import React, { useEffect, useState } from "react"
interface Props {
    message: string
}
export default function Notification({ message }: Props) {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false)
        }, 5000)
        return () => {
            clearTimeout(timer)
        }
    }, [])

    if (!visible || message === "") {
        return null
    }
    return (
        <div role="alert" className="alert alert-success">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            <span>{message}</span>
        </div>
    )
}
