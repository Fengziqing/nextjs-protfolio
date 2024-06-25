"use client"
import React, { ChangeEvent, useEffect, useState } from "react"
import { BacktoDemoButtom } from "../BacktoDemoButtom"
import { MetaMaskInpageProvider } from "@metamask/providers"
import { abi, contractAddress } from "./constants.js"
import { ethers } from "ethers"
declare global {
    interface Window {
        ethereum?: MetaMaskInpageProvider
    }
}

function FundMe() {
    const [Connect, setConnect] = useState(false)
    const [fundMoney, setFundMoney] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
    const [failedMessage, setFailedMessage] = useState("")
    const [hasMetaMask, setHasMetaMask] = useState(false)

    useEffect(() => {
        if (typeof window.ethereum !== "undefined") {
            setHasMetaMask(true)
        }
    }, [])

    async function getBalance() {
        if (checkConnection) {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const balance = await provider.getBalance(contractAddress)
            setSuccessMessage(
                `current balance is ${ethers.utils.formatEther(balance)}`,
            )
            const item = document.getElementById("success") as HTMLDialogElement
            item.showModal()
        }
    }
    async function checkConnection() {
        if (hasMetaMask) {
            await window.ethereum!.request({ method: "eth_requestAccounts" })
            return true
        } else {
            setFailedMessage(
                "You browser do not have metamask wallet, please install metamask.",
            )
            const item = document.getElementById("failed")! as HTMLDialogElement
            item.showModal()
            return false
        }
    }
    async function connectWallet() {
        if (await checkConnection()) {
            setConnect(true)
        }
    }

    function handleFundMoneyChange(e: ChangeEvent<HTMLInputElement>) {
        setFundMoney(e.target.value)
    }

    function listenFortransactionMine(transactionResponse, provider) {
        return new Promise((resolve, reject) => {
            provider.once(transactionResponse.hash, (transactionRecipt) => {
                console.log("transaction completed with confirmation")
            })
            resolve()
        })
    }

    async function fundMe() {
        if (await checkConnection()) {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(contractAddress, abi, signer)
            try {
                const transactionResponse = await contract.fund({
                    value: ethers.utils.parseEther(fundMoney),
                })
                await listenFortransactionMine(transactionResponse, provider)
            } catch (error) {
                setFailedMessage("Some Error Occurred! Fund Canceled")
                const item = document.getElementById(
                    "failed",
                )! as HTMLDialogElement
                item.showModal()
                return
            }

            setSuccessMessage(`thanks for your fund! - ${fundMoney}`)
            const item = document.getElementById(
                "success",
            )! as HTMLDialogElement
            item.showModal()
        }
    }

    async function withdraw() {
        if (await checkConnection()) {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(contractAddress, abi, signer)
            try {
                const transactionResponse = await contract.withdraw({
                    gasLimit: 2000000,
                })
                await listenFortransactionMine(transactionResponse, provider)
                setSuccessMessage("withdraw all your money successfully!")
                const item = document.getElementById(
                    "success",
                )! as HTMLDialogElement
                item.showModal()
            } catch (error) {
                console.log(error.message)
                setFailedMessage(error.message)
                const item = document.getElementById(
                    "failed",
                )! as HTMLDialogElement
                item.showModal()
            }
        }
    }
    return (
        <div className="mx-12 py-12 px-2 content-center justify-center">
            <BacktoDemoButtom />
            <h1>Fund Haruko Contract</h1>
            <p className=" text-yellow-500">
                Recommend use test network like sepolia or localhost network
            </p>
            <p className=" text-red-500 font-bold text-xl">
                Please do NOT use any REAL MONEY for this contract!
            </p>
            <div
                style={{ animation: "fadeInUp 0.9s" }}
                className="block w-80 mt-2 mb-10 text-center shadow-2xl bg-[#e8c8be] rounded-3xl px-9 mx-auto
                sm:w-96 sm:py-8 py-6 sm:px-12 
                lg:w-[480px]
                [&>*]:my-3 [&>*]:border-none [&>button]:shadow-lg [&>button]:hover:opacity-90 [&>botton]:hover:shadow-sm
                dark:bg-[#AEA885]"
            >
                <h1>Haruko Smart Contract</h1>

                <button
                    id="balanceBtn"
                    className="btn sm:btn-wide text-white bg-green-500 dark:bg-gray-500 "
                    onClick={getBalance}
                >
                    Balance
                </button>
                {hasMetaMask ? (
                    Connect ? (
                        <p> Connected! </p>
                    ) : (
                        <button
                            id="connectBtn"
                            className="btn sm:btn-wide text-white bg-[#deb0bd] dark:bg-gray-500 "
                            onClick={connectWallet}
                        >
                            Connect
                        </button>
                    )
                ) : (
                    <p>Please install metamask</p>
                )}
                <input
                    className="input border-solid border-2 border-gray-300 box-content w-1/2"
                    type="number"
                    value={fundMoney}
                    placeholder="0.1"
                    onChange={handleFundMoneyChange}
                ></input>
                <button
                    className="btn sm:btn-wide text-white bg-yellow-500 dark:bg-gray-500 "
                    onClick={fundMe}
                >
                    Fund Me
                </button>
                <button
                    className="btn sm:btn-wide text-white bg-blue-500 dark:bg-gray-500"
                    onClick={withdraw}
                >
                    Withdraw
                </button>
            </div>

            <dialog id="success" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-[#B6C796]">
                    <h3 className="font-bold sm:text-lg text-sm">
                        {successMessage}
                    </h3>
                    <div className="modal-action">
                        <form method="dialog" className="mx-auto">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-success">OK</button>
                        </form>
                    </div>
                </div>
            </dialog>

            <dialog id="failed" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-[#B63231]">
                    <h3 className="font-bold sm:text-lg text-sm">Oops!</h3>
                    <p className="py-4">{failedMessage}</p>
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

export default FundMe
