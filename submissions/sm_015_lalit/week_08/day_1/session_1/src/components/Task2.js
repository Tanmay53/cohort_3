import React from 'react';

const styleLogin = {
    "background": "linear-gradient(180deg, rgba(253,174,43,1) 0%, rgba(240,126,29,1) 53%)"
}

const styleSearch = {
    "background": "linear-gradient(180deg, rgba(147,198,57,1) 0%, rgba(82,138,65,1) 53%)"
}

const styleHome = {
    "background": "linear-gradient(180deg, rgba(255,95,163,1) 0%, rgba(182,47,103,1) 53%)"
}

const styleSettings = {
    "background": "linear-gradient(180deg, rgba(152,209,216,1) 0%, rgba(80,120,130,1) 53%)"
}

const styleContactUs = {
    "background": "linear-gradient(180deg, rgba(223,42,47,1) 0%, rgba(127,19,17,1) 61%)"
}

const styleHelp = {
    "background": "linear-gradient(180deg, rgba(162,165,240,1) 0%, rgba(75,66,129,1) 61%)"
}

const styleDownload = {
    "background": "linear-gradient(180deg, rgba(205,184,93,1) 0%, rgba(121,85,35,1) 61%)"
}
function Joinus() {
    return (
        <button type="button" className="btn-lg btn-primary col-5 badge-pill text-white">Join Us</button>
    );
}
function Login() {
    return (
        <button style={styleLogin} type="button" className="btn-lg col-5 badge-pill text-white">Login</button>
    );
}

function Search() {
    return (
        <button style={styleSearch} type="button" className="btn-lg col-5 badge-pill text-white">Search</button>
    );
}

function Home() {
    return (
        <button style={styleHome} type="button" className="btn-lg col-5 badge-pill text-white">Home</button>
    );
}

function Settings() {
    return (
        <button style={styleSettings} type="button" className="btn-lg col-5 badge-pill text-white">Settings</button>
    );
}

function ContactUs() {
    return (
        <button style={styleContactUs} type="button" className="btn-lg col-5 badge-pill text-white">Contact Us</button>
    );
}

function Help() {
    return (
        <button style={styleHelp} type="button" className="btn-lg col-5 badge-pill text-white">Help</button>
    );
}

function Download() {
    return (
        <button style={styleDownload} type="button" className="btn-lg col-5 badge-pill text-white">Download</button>
    );
}

export default Joinus;

export { Login, Search, Home, Settings, ContactUs, Help, Download }