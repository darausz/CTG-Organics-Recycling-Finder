import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className='home-page'>
      <header className="home-page-header header">
        <h1 className="home-page-header-heading">
          U.S. ORGANICS RECYCLING FINDER
        </h1>
        <p className="home-page-header-description">
          We offer a platform where we enhance food waste reduction through an easy to search, user friendly online solutions hub.
        </p>
      </header>
      <div className="infographic-container">
        <div className="infographic-item">
          <div className="infographic-image-wrapper">
            filler image
          </div>
          <div className="infographic-description">
            Food waste is defined as <span className="infographic-description-emphasized">edible material</span> that is discarded, or uneaten at various stages of the food supply chain.
          </div>
        </div>
        <div className="infographic-item">
          <div className="infographic-image-wrapper">
            filler image
          </div>
          <div className="infographic-description">
            FAO estimates that about <span className="infographic-description-emphasized">one third</span> of all food produced in the world each year is wasted.
          </div>
        </div>
        <div className="infographic-item">
          <div className="infographic-image-wrapper">
            filler image
          </div>
          <div className="infographic-description">
            NRDC states that the number of calories wasted in the U.S. each year could ull feed about <span className="infographic-description-emphasized">150 million</span> people.
          </div>
        </div>
      </div>
      <button className="start-button">
        <Link to="/search">
          Start making an impact
        </Link>
      </button>

    </div>
  )
}