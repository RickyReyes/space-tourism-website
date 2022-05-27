import '../App.css';
import { Link } from "react-router-dom"


export default function Home({ showMobileMenu, setShowMobileMenu }) {
  return (
    <div className="Home">
      <div className="home-flex">
        <div className="home-flex-left">
          <div className="heading">So, you want to travel to 
          <h1 className="space">space</h1>
          </div>
          <p className="hero-p">
            Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </p>
          </div>
        <div className="home-flex-right">
          <Link style={{textDecoration: 'none'}} to="/destinations" onClick={() => setShowMobileMenu(false)}>
            <button className="explore">explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
}