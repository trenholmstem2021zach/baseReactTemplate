import React from 'react';

import { AuthButton } from "../molecules/AuthButton";

export default function Header() {
    return <>
        <header className="usa-header usa-header--basic">
            <hr />
            <div className="usa-overlay"></div>
            <div className="usa-nav-container">
                <div className="usa-navbar">
                    <div className="usa-logo" id="-logo">
                        <em className="usa-logo__text"><a href="/" title="Home">Home</a></em>
                        
                    </div>
                    <button type="button" className="usa-menu-btn">Menu</button>
                    <AuthButton/>
                </div>
                <nav aria-label="Primary navigation" className="usa-nav">
                    <button type="button" className="usa-nav__close">
                        <img src="/assets/img/usa-icons/close.svg" role="img" alt="Close" />
                    </button>
                    <ul className="usa-nav__primary usa-accordion">
                        <li className="usa-nav__primary-item">
                            <button
                                type="button"
                                className="usa-accordion__button usa-nav__link usa-current"
                                aria-expanded="false"
                                aria-controls="basic-nav-section-one"
                            >
                                <span>&lt;Current section&gt;</span>
                            </button>
                            <ul id="basic-nav-section-one" className="usa-nav__submenu">
                                <li className="usa-nav__submenu-item">
                                    <a href=""><span>&lt;Navigation link&gt;</span></a>
                                </li>
                                <li className="usa-nav__submenu-item">
                                    <a href=""><span>&lt;Navigation link&gt;</span></a>
                                </li>
                                <li className="usa-nav__submenu-item">
                                    <a href=""><span>&lt;Navigation link&gt;</span></a>
                                </li>
                                <li className="usa-nav__submenu-item">
                                    <a href=""><span>&lt;Navigation link&gt;</span></a>
                                </li>
                            </ul>
                        </li>
                        <li className="usa-nav__primary-item">
                            <button
                                type="button"
                                className="usa-accordion__button usa-nav__link"
                                aria-expanded="false"
                                aria-controls="basic-nav-section-two"
                            >
                                <span>&lt;Section&gt;</span>
                            </button>
                            <ul id="basic-nav-section-two" className="usa-nav__submenu">
                                <li className="usa-nav__submenu-item">
                                    <a href=""><span>&lt;Navigation link&gt;</span></a>
                                </li>
                                <li className="usa-nav__submenu-item">
                                    <a href=""><span>&lt;Navigation link&gt;</span></a>
                                </li>
                                <li className="usa-nav__submenu-item">
                                    <a href=""><span>&lt;Navigation link&gt;</span></a>
                                </li>
                            </ul>
                        </li>
                        <li className="usa-nav__primary-item">
                            <a href="" className="usa-nav-link"><span>&lt;Simple link&gt;</span></a>
                        </li>
                    </ul>
                    <section aria-label="Search component">
                        <form className="usa-search usa-search--small" role="search">
                            <label className="usa-sr-only">Search</label>
                            <input
                                className="usa-input"
                                id="search-field"
                                type="search"
                                name="search"
                            />
                            <button className="usa-button" type="submit">
                                <img
                                    src="/assets/img/usa-icons-bg/search--white.svg"
                                    className="usa-search__submit-icon"
                                    alt="Search"
                                />
                            </button>
                        </form>
                    </section>
                </nav>
            </div>
            <hr/>
        </header>
    </>
}