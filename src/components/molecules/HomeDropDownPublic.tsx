import { AuthButton } from "./AuthButton"

export const HomeDropDownPublic = () => {

    return (
        <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
         
          <span className="fs-4">Zachary Lewis and Associates</span>
        </a>
  
        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#" className="nav-link" aria-current="page">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Our Team</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Our Companies</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Our Story</a></li>
         
        </ul>
      </header>
      </div>
    )
}