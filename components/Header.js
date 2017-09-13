import Link from 'next/link'
import Autocomplete from './Autocomplete';

const Header = () => (
  <header>
    <div className="melitest-nav-bounds">
      <div className="melitest-logo">
        <Link prefetch href='/index' as='/'>
          <img src="/static/Logo_ML@2x.png" />
        </Link>
      </div>
      <Autocomplete />            
    </div>
    <style jsx>{`
      header {
        position: fixed;
        width: 100%;
        height: 54px;
        top: 0;
        background-color: #fff059;
        z-index: 10;
      }
      .melitest-nav-bounds {
        max-width: 840px;
        margin: auto;
        height: 100%;
      }
      .melitest-logo {
        position: absolute;
        height: 100%;
        cursor: pointer;
      }
      .melitest-logo img {
        position: relative;
        top: 10%;
        max-height: 80%;
      }
    `}</style>
  </header>
)

export default Header