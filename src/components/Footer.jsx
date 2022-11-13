import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5 mb-4 pt-3" align="center">
            <div>
                <p className="text-muted mb-3">
                    Copyright &copy;
                    <span id="year">2022 Student Project at Lexicon Småland</span>
                </p>
            </div>

            <div>
                <a className="btn btn-sm text-light" href="?lang=en">
                    English
                </a>
            </div>

            <div>
                <a className="btn btn-sm text-light mb-3" href="?lang=sv">
                    Swedish
                </a>
            </div>
        </footer>
    );
};

export default Footer;