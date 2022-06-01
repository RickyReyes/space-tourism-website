import '../App.css';
import { Link } from "react-router-dom"


export default function Home({ showMobileMenu, setShowMobileMenu }) {
  return (
    <main className="Home">
      <div className="home-flex">
        <div className="home-flex-left">
          <h1 className="heading">So, you want to travel to 
          <span className="space">space</span>
          </h1>
          <p className="hero-p">
            Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </p>
          </div>
        <div className="home-flex-right">
          <Link  className="explore" to="/destinations" onClick={() => setShowMobileMenu(false)}>
            explore
          </Link>
        </div>
      </div>
    </main>
  );
}