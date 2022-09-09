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
                        <em className="usa-logo__text">Home</em>
                        
                    </div>
                    <button type="button" className="usa-menu-btn">Menu</button>
                    <AuthButton/>
                </div>
                <nav aria-label="Primary navigation" className="usa-nav">
                    <button type="button" className="usa-nav__close">
              here
                    </button>
                    <ul className="usa-nav__primary usa-accordion">
                            <li className="usa-nav__primary-item">
                            <a href="/about" className="usa-nav-link"><span>About</span></a>
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
                                    src="/images/search.jpeg"
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