import React from "react";
import githubLogo from "../Resorces/github-mark-white.svg";
import linkedLogo from "../Resorces/LI-In-Bug.png"
import gmailLogo from "../Resorces/Gmail_icon_(2020).svg";
import phoneImg from "../Resorces/phone.svg";
import copyIcon from "../Resorces/copy-svgrepo-com.svg";
import { Tooltip } from "@mui/material";
import EmailContactForm from "../components/ContactForm";

const Contact = () => {

    const copyTextToClipboard = async (text) => {
        if ('clipboard' in navigator) {
          return await navigator.clipboard.writeText(text);
        } else {
          return document.execCommand('copy', true, text);
        }
      }

    return (
        <div className="ContactPageWrap">
            <h1 className="pageTitle">Contact me</h1>
            <p className="pageDesc">Please feel free to contact me using one of the methods below.</p>
            <div className="contactWrap">
                <a href="https://github.com/zvischvarcz/" target="_blank" rel="noreferrer"><img src={githubLogo} alt="GitHub logo"/>GitHub</a>
                <a href="www.linkedin.com/in/zvi-schvarcz" target="_blank" rel="noreferrer"><img src={linkedLogo} alt="LinkedIn logo"/>LinkedIn</a>
                <label>
                    <a href="mailto:zvischvarcz@gmail.com" target="_blank" rel="noreferrer"><img src={gmailLogo} alt="Gmail logo" /></a>
                    <div className="nameCopyWrap">
                        zvischvarcz@gmail.com<Tooltip title="Copy to clipboard" arrow><img onClick={() => copyTextToClipboard("zvischvarcz@gmail.com")} className="copyIcon" src={copyIcon} alt="copy text" /></Tooltip>
                    </div>
                    </label>
                <label>
                    <img src={phoneImg} alt="phone icon"/>
                    <div className="nameCopyWrap">
                        +44 (0) 7895 052 933<Tooltip title="Copy to clipboard" arrow><img onClick={() => copyTextToClipboard(+447895052933)} className="copyIcon" src={copyIcon} alt="copy text" /></Tooltip>
                    </div>
                </label>
            </div>
            <div>
                <p className="pageDesc">Or use this form to send me a message directly</p>
                <EmailContactForm />
            </div>
        </div>
    )
}

export default Contact