"use client"
import React, { useState } from "react"
import { BacktoDemoButtom } from "../BacktoDemoButtom"
import { MetaMaskInpageProvider } from "@metamask/providers"

declare global {
    interface Window {
        ethereum?: MetaMaskInpageProvider
    }
}

function page() {
    const [Connect, setConnect] = useState("Connect Wallet")
    async function connectWallet() {
        if (typeof window.ethereum !== "undefined") {
            await window.ethereum.request({ method: "eth_requestAccounts" })
            setConnect("Connected!")
        } else {
            const item = document.getElementById("failed")! as HTMLDialogElement
            item.showModal()
        }
    }
    async function FundMe() {}
    async function withdraw() {}
    return (
        <div className="mx-12 py-12 px-2 content-center justify-center">
            <BacktoDemoButtom />
            <h1>Fund Haruko Contract</h1>
            <div
                style={{ animation: "fadeInUp 0.9s" }}
                className="block w-80 mt-2 mb-10 text-center shadow-2xl bg-[#e8c8be] rounded-3xl px-9 mx-auto
                sm:w-96 sm:py-8 py-6 sm:px-12 
                lg:w-[480px]
                [&>*]:my-2 [&>*]:border-none [&>*]:shadow-lg [&>*]:hover:opacity-90 [&>*]:hover:shadow-sm
                dark:bg-[#AEA885]"
            >
                <button
                    id="connectBtn"
                    className="btn sm:btn-wide text-white bg-[#deb0bd] dark:bg-gray-500 "
                    onClick={connectWallet}
                >
                    {Connect}
                </button>
                <button
                    className="btn sm:btn-wide text-white bg-[#deb0bd] dark:bg-gray-500 "
                    onClick={FundMe}
                >
                    Fund Me
                </button>
                <button
                    className="btn sm:btn-wide text-white bg-[#deb0bd] dark:bg-gray-500"
                    onClick={withdraw}
                >
                    Withdraw
                </button>
            </div>

            <dialog id="failed" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-[#B63231]">
                    <h3 className="font-bold sm:text-lg text-sm">Oops!</h3>
                    <p className="py-4">
                        You browser do not have metamask wallet, please install
                        metamask.
                    </p>
                    <div className="modal-action">
                        <form method="dialog" className="mx-auto">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-warning">OK</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default page
