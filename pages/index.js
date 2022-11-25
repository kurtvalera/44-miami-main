import Image from 'next/image';
import React from "react";
import Head from 'next/head';
import { AppConstant } from '../constant/AppConstant';


//React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from 'react';


import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form'
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

import axios from "axios";
import { notification } from 'antd';

export default function Home() {
    const [displayedContentIndex, setDisplayedContentIndex] = useState(0);
    const [mobileNavShown, setMobileNavShown] = useState(false);
    const getBackgroundClass = () => {
        switch (displayedContentIndex) {
            case 0: return "bg-avatar";
            case 1: return "bg-private";
            case 2: return "bg-space";
            case 3: return "bg-physical";
            case 4: return "bg-luxury";
            
        }


    }

    async function delay(time) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time)
        });
    }

    const [isOpen, setIsOpen] = React.useState(false); // 1st modal
    const [isSuccessOpen, setSuccessOpen] = React.useState(false); // 2nd modal
    const [isErrorOpen, setErrorOpen] = React.useState(false); // 3rd modal
    const [timer, setTimer] = React.useState(0);
    const [startTime, setStartTime] = React.useState(0);
    const [endTime, setEndTime] = React.useState(0);

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [walletAddress, setWallet] = useState(null)
    const [showResponseMessage, setMessage] = useState(false)
    const [responseMessage, setResponseMessage] = useState("")


    const onNameInput = ({ target: { value } }) => setName(value)
    const onEmailInput = ({ target: { value } }) => setEmail(value)
    const onWalletInput = ({ target: { value } }) => setWallet(value)


    const onFormSubmit = async (e) => {
        e.preventDefault()

        // Frontend validation

        try {
            const response = await axios.post('/api/join-early-access', {
                name, email, walletAddress, source: "44miami"
            })

            setIsOpen(false);
            await delay(500)
            setResponseMessage("You are now part the chosen few.")
            setMessage(true)
            showSuccessModal()
            // await delay(3000)
            setMessage(false)

        } catch (error) {
            console.log(error)
            setIsOpen(false);
            await delay(500)
            if (error.response && error.response.data.message !== undefined) {
                setResponseMessage(error.response.data.message)
                setMessage(true)
                showErrorModal()
                // await delay(3000)
                setMessage(false)
                return
            }

            setResponseMessage("Something went wrong")
            setMessage(true)
            showErrorModal()
            // showSuccessModal()
            // await delay(3000)
            setMessage(false)
        }
    }

    const onExit = () => {

    }

    const onExited = () => {

    }


    const showModal = () => {
        setIsOpen(true);

    };

    const showSuccessModal = () => {
        setSuccessOpen(true);
    }

    const showErrorModal = () => {
        setErrorOpen(true);
    }


    const hideSuccessModal = () => {
        setSuccessOpen(false);
    }

    const hideErrorModal = () => {
        setErrorOpen(false);
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    };



    return (
        <>
            <Head>
                <title>{AppConstant.meta.title}</title>
            </Head>
            <div className="bg-black bg-blur">
                <div className={`overlay-nav bg-black w-full z-0 absolute inset-0 ${mobileNavShown ? 'block' : 'hidden'}`}>
                    <div className="">
                        <div className="flex flex-row justify-between p-6 mt-6">
                            <div className="mobile-logo">
                                <Image src="/images/44-logo.svg" className="mobile-logo" width={200} height={200} />
                            </div>
                            <div className="on-nav" onClick={() => { setMobileNavShown(!mobileNavShown) }}>
                                <Image src="/images/nav-button-gray.svg" width={50} height={50} />
                            </div>

                        </div>
                        <div className="flex flex-col justify-center align-center w-full">
                            <div className="px-6 py-3">
                                <span className="text-white druk-bold topnav-item  on-nav-avatar" onClick={() => {
                                    setDisplayedContentIndex(0);
                                    setMobileNavShown(!mobileNavShown);
                                }}>AVATARS</span>
                            </div>
                            <div className="px-6 py-3">


                                <span className="text-white druk-bold topnav-item on-nav-private leading-6" onClick={() => {
                                    setDisplayedContentIndex(1);
                                    setMobileNavShown(!mobileNavShown);
                                }}>PRIVATE MEMBERS CLUB</span>

                            </div>
                            <div className="px-6 py-3">
                                <span className="text-white druk-bold topnav-item  on-nav-space"
                                    onClick={() => {
                                        setDisplayedContentIndex(2);
                                        setMobileNavShown(!mobileNavShown);
                                    }}
                                >SPACE PODS</span>
                            </div>
                            {/* asdasd */}
                            <div className="px-6 py-3">
                                <span className="text-white druk-bold topnav-item  on-nav-physical"
                                    onClick={() => {
                                        setDisplayedContentIndex(3);
                                        setMobileNavShown(!mobileNavShown);
                                    }}
                                >FORGING</span>
                            </div>
                            <div className="px-6 py-3">
                                <span className="text-white druk-bold topnav-item   on-nav-luxury"
                                    onClick={() => {
                                        setDisplayedContentIndex(4);
                                        setMobileNavShown(!mobileNavShown);
                                    }}
                                >RESIDENCES</span>
                            </div>
                        </div>
                        <div className="my-10">
                            <div className="on-box ">
                                <div className="on-box-top flex w-full justify-center align-center py-4">
                                    <div className="flex w-full justify-between items-center px-4">
                                        <div className="flex flex-row items-center">
                                            <Image src="/images/ozurapay.svg" className="h-12 w-12 nav-ozura-img mr-5" width={100} height={100} />
                                            <p className="text-white ozura-text mb-0-nav">
                                                Ozurapay
                                            </p>
                                        </div>
                                        <div className="">
                                            <button className="ozura-button-nav fk-grotesk-mono">
                                                BUY NFT
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                <div className="on-box-bot flex w-full justify-center items-center mt-4">
                                    <div className="flex w-full">
                                        <div className="grow">
                                            <div className="justify-center text-center text-white">
                                                <a href="https://www.instagram.com/fortyfourmiami/" target="_blank">
                                                    <FontAwesomeIcon icon={faInstagram} className="fa-ozura" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="grow">
                                            <div className="justify-center text-center text-white">

                                                <FontAwesomeIcon icon={faLinkedin} className="fa-ozura" />

                                            </div>
                                        </div>
                                        <div className="grow">
                                            <div className="justify-center text-center text-white">
                                                <FontAwesomeIcon icon={faDiscord} className="fa-ozura" />
                                            </div>
                                        </div>
                                        <div className="grow">
                                            <div className="justify-center text-center text-white">
                                                <a href="https://www.instagram.com/fortyfourmiami/" target="_blank">
                                                    <FontAwesomeIcon icon={faTwitter} className="fa-ozura" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`container-fluid w-full container-full h-full m-0 p-0 z-50 absolute inset-0 ${mobileNavShown ? 'hidden' : 'block'}`}>
                    <div className={`container-bg bg-black h-full w-full m-0 p-0 ${getBackgroundClass()}`}>
                        <div className={`container-row h-full mx-0 p-0`}>
                            <>
                                <div className="justify-center items-center border-black">
                                    <Modal
                                        show={isOpen}
                                        onHide={hideModal}
                                        onExit={onExit}
                                        size="lg"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered
                                        onExited={onExited}
                                    >

                                        <Modal.Body className="p-4 bg-black">
                                            <Form onSubmit={onFormSubmit}>
                                                <div
                                                    className="text-white float-right text-xl"
                                                    onClick={hideModal}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faXmark}
                                                        className="cursor-pointer"
                                                    />
                                                </div>
                                                <div className="justify-center items-center text-center text-white bg-black border-black mt-8">
                                                    <div className="druk-bold text-5xl">BE PART</div>
                                                    <div className="ogg-roman text-5xl">OF THE CLUB</div>
                                                </div>
                                                <div className="mt-10 px-12">
                                                    <Form.Group className="mb-6">
                                                        <Form.Label className="fk-grotesk-mono gea-label text-white flex ml-5">
                                                            <div className="text-red-600 text-xs font-bold mr-1">
                                                                *
                                                            </div>
                                                            FULL NAME
                                                        </Form.Label>
                                                        <Form.Control type="text" onChange={onNameInput} placeholder="Your full name here..." className="fk-grotesk h-16 gea-input mb-4" />
                                                        <div className={`${name === "" ? "gea-text-error -mt-4 mb-3 ml-8" : "gea-text-error -mt-4 mb-3 ml-8 invisible"}`}>
                                                            Name is required.
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group >
                                                        <Form.Label className="fk-grotesk-mono gea-label text-white flex ml-5">
                                                            <div className="text-red-600 text-xs font-bold mr-1">
                                                                *
                                                            </div>
                                                            EMAIL ADDRESS
                                                        </Form.Label>
                                                        <Form.Control type="email" onChange={onEmailInput} placeholder="Your email address here..." className="fk-grotesk h-16 gea-input shadow-none mb-4" />
                                                        {/* Hidden error message */}
                                                        <div className={`${email === "" ? "gea-text-error -mt-4 mb-3 ml-8" : "gea-text-error -mt-4 mb-3 ml-8 invisible"}`}>
                                                            Email address is required.
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group >
                                                        <Form.Label className="fk-grotesk-mono gea-label text-white flex ml-5">
                                                            <div className="text-red-600 text-xs font-bold mr-1">
                                                                *
                                                            </div>
                                                            WALLET ADDRESS
                                                        </Form.Label>
                                                        <Form.Control type="text" onChange={onWalletInput} placeholder="e.g. 0xde3dbb...6045c71a" className="fk-grotesk h-16 gea-input shadow-none mb-4" />
                                                        {/* Hidden error message */}
                                                        <div className={`${walletAddress === "" ? "gea-text-error -mt-4 mb-3 ml-8" : "gea-text-error -mt-4 mb-3 ml-8 invisible"}`}>
                                                            Wallet address is required.
                                                        </div>
                                                    </Form.Group>
                                                </div>
                                                <div className="flex flex-row justify-center items-center mt-12 px-12">
                                                    <button
                                                        type="submit"
                                                        className={`${!email || !name || !walletAddress ? "gea-button fk-grotesk-mono mb-4 disabled" : "gea-button fk-grotesk-mono mb-4"}`}
                                                    // onClick={showSuccessModal} 
                                                    // Should show the 2nd modal if validated AND close the 1st modal
                                                    >
                                                        GET EARLY ACCESS
                                                    </button>
                                                </div>
                                            </Form>
                                        </Modal.Body>
                                    </Modal>

                                    <Modal
                                        show={isSuccessOpen} // Shows success modal if validated
                                        onHide={hideSuccessModal} // Hide the success/2nd modal
                                        size="lg"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered
                                        contentClassName="modal-gea-success"
                                    >
                                        <Modal.Body className="p-4 bg-black">
                                            <div
                                                className="text-white float-right text-xl"
                                                onClick={hideSuccessModal} // Hide the success/2nd modal
                                            >
                                                <FontAwesomeIcon
                                                    icon={faXmark}
                                                    className="cursor-pointer"
                                                />
                                            </div>
                                            <div className="justify-center items-center text-center text-white bg-black border-black mt-8">
                                                <div className="druk-bold text-5xl modal-gea-success-h1">EXPERIENCE</div>
                                                <div className="ogg-roman text-5xl modal-gea-success-h2">ELEGANCE</div>
                                            </div>
                                            <div className="justify-center items-center text-center mt-6 mb-9">
                                                <div className="text-white fk-grotesk">
                                                    {responseMessage}
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-center items-center px-12">
                                                <button
                                                    className="gea-button fk-grotesk-mono mb-4"
                                                    onClick={hideSuccessModal} // Hide the success/2nd modal
                                                >
                                                    BACK TO HOME
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                    <Modal
                                        show={isErrorOpen} // Shows error modal if input is not validated
                                        onHide={hideErrorModal} // Hide the error modal
                                        size="lg"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered
                                        contentClassName="modal-gea-error"
                                    >
                                        <Modal.Body className="p-4 bg-black">
                                            <div
                                                className="text-white float-right text-xl"
                                                onClick={hideErrorModal} // Hide the success/2nd modal
                                            >
                                                <FontAwesomeIcon
                                                    icon={faXmark}
                                                    className="cursor-pointer"
                                                />
                                            </div>
                                            <div className="justify-center items-center text-center text-white bg-black border-black mt-8">
                                                <div className="druk-bold text-5xl modal-gea-success-h1">VALIDATION</div>
                                                <div className="ogg-roman text-5xl modal-gea-success-h2">UNSUCCESSFUL</div>
                                            </div>
                                            <div className="justify-center items-center text-center mt-6 mb-9">
                                                <div className="text-white fk-grotesk">
                                                    {responseMessage}
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-center items-center px-12">
                                                <button
                                                    className="gea-button fk-grotesk-mono mb-4"
                                                    onClick={hideErrorModal} // Hide the success/2nd modal
                                                >
                                                    RETURN
                                                </button>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>

                            </>
                            <div className="px-16 pt-12 upper-nav">
                                <div className="float-left logo cursor-pointer">
                                    <Image src="/images/44-logo.svg" className="" width={200} height={200} />
                                </div>
                                <div className="float-right top-nav" onClick={() => { setMobileNavShown(!mobileNavShown) }}>
                                    <Image src="/images/nav-button-black.svg" className="topnav-button h-12 w-12 nav-ozura-img-d" width={100} height={100} />
                                </div>



                            </div>

                            {displayedContentIndex === 0 &&
                                <div className="container-fluid container-body w-full flex items-end  body-avatar px-0 mx-0 pr-0 flex-end absolute bottom-36">
                                    <div className="w-2/5 mx-0 pl-16 box-left avatar-box">
                                        <div className="text-white">
                                            <p className="druk-bold text-h1 mb-0 inline">META</p>
                                        </div>
                                        <div className="text-white -mt-12 text-h2-c">
                                            <p className="ogg-roman text-h2 inline">AVATARS</p>
                                        </div>
                                        <div className="text-white -mt-1 w-6/12 md:w-10/12 sm:w-full cb-text">
                                            <p className="fk-grotesk text-d1 mb-0 text-d1-a">The beginning of a whole ecosystem for our private members, with quality-focused, high-end avatars, ready for the Metaverse</p>
                                        </div>
                                        <div className="text-black mt-4">
                                            <button className="h1-button my-4 fk-grotesk-mono" onClick={showModal}>
                                                GET EARLY ACCESS
                                            </button>
                                        </div>
                                    </div>

                                    <div className="w-3/5 mx-0 box-right pr-16 flex flex-col justify-center items-end lg:flex md:hidden sm:hidden">
                                        <div className="box-top lg:flex md:hidden sm:hidden">
                                            <div className="flex w-full items-center">
                                                <div className="grow">
                                                    <Image src="/images/ozurapay.svg" width={50} height={50} className="mx-0" />
                                                </div>
                                                <div className="grow flex items-center pr-16">
                                                    <p className="text-white ozura-text mb-0">
                                                        Ozurapay
                                                    </p>
                                                </div>
                                                <div className="grow">
                                                    <button className="ozura-button fk-grotesk-mono ml-3">
                                                        BUY NFT
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex w-full justify-items-center">
                                                <div className="grow">
                                                    <div className="text-left text-white">
                                                        <p className="fk-grotesk ozura-value invisible m-0">$28.1M</p>
                                                        <p className="fk-grotesk-mono ozura-label text-opacity-50">MKT.CAP</p>
                                                    </div>
                                                </div>
                                                <div className="grow">
                                                    <div className="text-center text-white ml-6">
                                                        <p className="fk-grotesk ozura-value invisible m-0">$28.1M</p>
                                                        <p className="fk-grotesk-mono ozura-label text-opacity-50">24H VOLUME</p>
                                                    </div>
                                                </div>
                                                <div className="grow">
                                                    <div className="text-right text-white">
                                                        <p className="fk-grotesk  ozura-value invisible m-0">$28.1M</p>
                                                        <p className="fk-grotesk-mono  ozura-label text-opacity-50 text-center ml-12">HOLDERS</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="box-bot lg:flex md:hidden sm:hidden">
                                            <div className="flex w-full">
                                                <div className="grow">
                                                    <div className="justify-center text-left text-white">
                                                        <a href="https://www.instagram.com/fortyfourmiami/" target="_blank">
                                                            <FontAwesomeIcon icon={faInstagram} className="fa-ozura" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="grow">
                                                    <div className="justify-center text-right text-white">

                                                        <FontAwesomeIcon icon={faLinkedin} className="fa-ozura" />
                                                    </div>
                                                </div>
                                                <div className="grow">

                                                </div>
                                                <div className="grow">

                                                </div>
                                                <div className="grow">
                                                    <div className="justify-center text-left text-white">
                                                        <FontAwesomeIcon icon={faDiscord} className="fa-ozura" />
                                                    </div>
                                                </div>
                                                <div className="grow">
                                                    <div className="justify-center text-right text-white">
                                                        <a href="https://twitter.com/fortyfourmiami" target="_blank">
                                                            <FontAwesomeIcon icon={faTwitter} className="fa-ozura" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            }
                            {
                                displayedContentIndex === 1 &&
                                <div className="container-fluid container-body w-full flex  items-end body-private px-0 mx-0 pr-0 flex-end absolute bottom-36">
                                    <div className="w-2/5 mx-0 pl-16 box-left ">
                                        <div className="text-white">
                                            <p className="druk-bold text-h1 mb-0">PRIVATE</p>
                                        </div>
                                        <div className="text-white -mt-12 text-h2-c">
                                            <p className="ogg-roman text-h2">MEMBERS</p>
                                        </div>
                                        <div className="text-white -mt-1 w-6/12 md:w-full sm:w-full cb-text pr-6">
                                            <p className="fk-grotesk text-d1 mb-0">We've partnered with one of the most exclusive restaurants in Miami to offer an after-hours private members only speakeasy experience. This will be the first in a number of ways you can use your Avatar IRL</p>
                                        </div>
                                        <div className="text-black mt-4">
                                            <button className="h1-button my-4 fk-grotesk-mono" onClick={showModal}>
                                                GET EARLY ACCESS
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-3/5 mx-0 box-right pr-16 flex flex-col justify-center items-end lg:flex md:hidden sm:hidden">
                                        <div className="box-top lg:flex md:hidden sm:hidden">
                                            <div className="flex w-full items-center">
                                                <div className="grow">
                                                    <Image src="/images/ozurapay.svg" width={50} height={50} className="mx-0" />
                                                </div>
                                                <div className="grow flex items-center pr-16">
                                                    <p className="text-white ozura-text mb-0">
                                                        Ozurapay
                                                    </p>
                                                </div>
                                                <div className="grow">
                                                    <button className="ozura-button fk-grotesk-mono ml-3">
                                                        BUY NFT
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex w-full justify-items-center">
                                                <div className="grow">
                                                    <div className="text-left text-white">
                                                        <p className="fk-grotesk ozura-value invisible m-0">$28.1M</p>
                                                        <p className="fk-grotesk-mono ozura-label text-opacity-50">MKT.CAP</p>
                                                    </div>
                                                </div>
                                                <div className="grow">
                                                    <div className="text-center text-white ml-6">
                                                        <p className="fk-grotesk ozura-value invisible m-0">$28.1M</p>
                                                        <p className="fk-grotesk-mono ozura-label text-opacity-50">24H VOLUME</p>
                                                    </div>
                                                </div>
                                                <div className="grow">
                                                    <div className="text-right text-white">
                                                        <p className="fk-grotesk  ozura-value invisible m-0">$28.1M</p>
                                                        <p className="fk-grotesk-mono  ozura-label text-opacity-50 text-center ml-12">HOLDERS</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="box-bot lg:flex md:hidden sm:hidden">
                                            <div className="flex w-full">
                                                <div className="grow">
                                                    <div className="justify-center text-left text-white">
                                                        <a href="https://www.instagram.com/fortyfourmiami/" target="_blank">
                                                            <FontAwesomeIcon icon={faInstagram} className="fa-ozura" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="grow">
                                                    <div className="justify-center text-right text-white">

                                                        <FontAwesomeIcon icon={faLinkedin} className="fa-ozura" />
                                                    </div>
                                                </div>
                                                <div className="grow">

                                                </div>
                                                <div className="grow">

                                                </div>
                                                <div className="grow">
                                                    <div className="justify-center text-left text-white">
                                                        <FontAwesomeIcon icon={faDiscord} className="fa-ozura" />
                                                    </div>
                                                </div>
                                                <div className="grow">
                                                    <div className="justify-center text-right text-white">
                                                        <a href="https://twitter.com/fortyfourmiami" target="_blank">
                                                            <FontAwesomeIcon icon={faTwitter} className="fa-ozura" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            }

                            {displayedContentIndex === 2 &&
                                <div className="container-fluid container-body w-full flex justify-center items-end body-space px-0 mx-0 pr-0 flex-end absolute bottom-36">
                                    <div className="w-full mx-0 px-16 box-left">
                                        <div className="text-white">
                                            <p className="druk-bold text-h1 mb-0">SPACE</p>
                                        </div>
                                        <div className="text-white -mt-12 text-h2-c">
                                            <p className="ogg-roman text-h2">PODS</p>
                                        </div>
                                        <div className="text-white w-2/5 -mt-1 cb-text cb-space-text">
                                            <p className="fk-grotesk text-d1 mb-0">Futuristic spaces with sprawling views of Miami. Customize and upgrade, to show off your NFT’s and hang out with fellow private members, in space. Powered by OnCyber</p>
                                        </div>
                                        <div className="text-black mt-4">
                                            <button className="h2-button my-4 fk-grotesk-mono">
                                                COMING SOON
                                            </button>


                                        </div>
                                    </div>

                                </div>
                            }

                            {displayedContentIndex === 3 &&
                                <div className="container  container-body w-full  items-end body-physical px-0 mx-0 pr-0 flex-end absolute bottom-36">
                                    <div className="w-5/5 mx-0 px-16 z-50 box-left float-left z-50 absolute bottom-0">
                                        <div className="text-white">
                                            <p className="druk-bold text-h1 mb-0">PHYSICAL</p>
                                        </div>
                                        <div className="text-white -mt-12 text-h2-c">
                                            <p className="ogg-roman text-h2">COLLECTIBLES</p>
                                        </div>
                                        <div className="text-white -mt-1 w-6/12 md:w-10/12 sm:w-10/12 cb-text pc-text">
                                            <p className="fk-grotesk text-d1 mb-0">Forge unique physical collectibles created from your Avatar, get that crazy jacket IRL</p>
                                        </div>
                                        <div className="text-black mt-4">
                                            <button className="h2-button my-4 fk-grotesk-mono">
                                                COMING SOON
                                            </button>
                                        </div>
                                    </div>

                                    <Image src="/images/forging-jacket.svg" className="forging-jacket w-2/5 z-0" width={100} height={100} />


                                </div>
                            }

                            {

                                displayedContentIndex === 4 &&
                                <div className="container-fluid container-body w-full flex justify-center items-end body-luxury px-0 mx-0 pr-0 flex-end absolute bottom-36">
                                    <div className="w-2/5 mx-0 pl-16 box-left sm:w-full">
                                        <div className="text-white">
                                            <p className="druk-bold text-h1 mb-0">LUXURY</p>
                                        </div>
                                        <div className="text-white -mt-12 text-h2-c">
                                            <p className="ogg-roman text-h2">RESIDENCES</p>
                                        </div>
                                        <div className="text-white -mt-1 w-6/12 cb-text luxury-text">
                                            <p className="fk-grotesk text-d1 mb-0">Forty Four Miami Hotel & Residences will feature 44 fully-furnished luxury residences IRL with studios to two-bedroom floor plans plus penthouses. Private members get early access at pre-build stage</p>
                                        </div>
                                        <div className="text-black mt-4">
                                            <button className="h1-button my-4 fk-grotesk-mono" onClick={showModal}>
                                                GET EARLY ACCESS
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-3/5 mx-0 box-right pr-16 flex flex-col justify-center items-end lg:flex md:hidden sm:hidden">
                                        <div className="box-top lg:flex md:hidden sm:hidden">
                                            <div className="flex w-full items-center">
                                                <div className="grow">
                                                    <Image src="/images/ozurapay.svg" width={50} height={50} className="mx-0" />
                                                </div>
                                                <div className="grow flex items-center pr-16">
                                                    <p className="text-white ozura-text mb-0">
                                                        Ozurapay
                                                    </p>
                                                </div>
                                                <div className="grow">
                                                    <button className="ozura-button fk-grotesk-mono ml-3">
                                                        BUY NFT
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex w-full justify-items-center">
                                                <div className="grow">
                                                    <div className="text-left text-white">
                                                        <p className="fk-grotesk ozura-value invisible m-0">$28.1M</p>
                                                        <p className="fk-grotesk-mono ozura-label text-opacity-50">MKT.CAP</p>
                                                    </div>
                                                </div>
                                                <div className="grow">
                                                    <div className="text-center text-white ml-6">
                                                        <p className="fk-grotesk ozura-value invisible m-0">$28.1M</p>
                                                        <p className="fk-grotesk-mono ozura-label text-opacity-50">24H VOLUME</p>
                                                    </div>
                                                </div>
                                                <div className="grow">
                                                    <div className="text-right text-white">
                                                        <p className="fk-grotesk  ozura-value invisible m-0">$28.1M</p>
                                                        <p className="fk-grotesk-mono  ozura-label text-opacity-50 text-center ml-12">HOLDERS</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="box-bot lg:flex md:hidden sm:hidden">
                                            <div className="flex w-full">
                                                <div className="grow">
                                                    <div className="justify-center text-left text-white">
                                                        <a href="https://www.instagram.com/fortyfourmiami/" target="_blank">
                                                            <FontAwesomeIcon icon={faInstagram} className="fa-ozura" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="grow">
                                                    <div className="justify-center text-right text-white">

                                                        <FontAwesomeIcon icon={faLinkedin} className="fa-ozura" />
                                                    </div>
                                                </div>
                                                <div className="grow">

                                                </div>
                                                <div className="grow">

                                                </div>
                                                <div className="grow">
                                                    <div className="justify-center text-left text-white">
                                                        <FontAwesomeIcon icon={faDiscord} className="fa-ozura" />
                                                    </div>
                                                </div>
                                                <div className="grow">
                                                    <div className="justify-center text-right text-white">
                                                        <a href="https://twitter.com/fortyfourmiami" target="_blank">
                                                            <FontAwesomeIcon icon={faTwitter} className="fa-ozura" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            }




                            <div className="text-white fixed bottom-0 w-full bot-nav bg-black h-1/12">
                                <div className="flex items-center justify-between h-full">
                                    <div className={`h-full items-center w-full justify-center flex group cursor-pointer nav-item nav-avatar text-center ${displayedContentIndex === 0 && 'nav-active'}`} onClick={() => setDisplayedContentIndex(0)}>
                                        <p className="fk-grotesk-mono nav-a mb-0  text-xs">
                                            AVATARS
                                        </p>
                                    </div>
                                    <div className={`h-full items-center w-full justify-center flex group cursor-pointer nav-item nav-avatar text-center ${displayedContentIndex === 1 && 'nav-active'}`} onClick={() => setDisplayedContentIndex(1)}>
                                        <p className=" fk-grotesk-mono nav-a mb-0  text-xs px-2">
                                            PRIVATE MEMBERS CLUB
                                        </p>
                                    </div>
                                    <div className={`h-full items-center w-full justify-center flex group cursor-pointer nav-item nav-avatar text-center ${displayedContentIndex === 2 && 'nav-active'}`} onClick={() => setDisplayedContentIndex(2)}>
                                        <p className=" fk-grotesk-mono nav-a mb-0  text-xs">
                                            SPACE PODS
                                        </p>
                                    </div>
                                    <div className={`h-full items-center w-full justify-center flex group cursor-pointer nav-item nav-avatar text-center ${displayedContentIndex === 3 && 'nav-active'}`} onClick={() => setDisplayedContentIndex(3)}>
                                        <p className=" fk-grotesk-mono nav-a mb-0  text-xs">
                                            FORGING
                                        </p>
                                    </div>
                                    <div className={`h-full items-center w-full justify-center flex group cursor-pointer nav-item nav-avatar text-center ${displayedContentIndex === 4 && 'nav-active'}`} onClick={() => setDisplayedContentIndex(4)}>
                                        <p className=" fk-grotesk-mono nav-a mb-0  text-xs">
                                            RESIDENCES
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
