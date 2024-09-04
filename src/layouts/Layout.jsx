import { BsChatSquareQuoteFill } from "react-icons/bs";
import { Link } from "react-router-dom";
function Layout({ children }) {
  return (
    <>
      <header>
        <div>
          <h3>وبلاگ</h3>
          <span>
            <BsChatSquareQuoteFill />
          </span>
        </div>
      </header>
      {children}
      <footer>
        <p>
          Developed By
          <Link to="https://github.com/KhalilHashemi" target="_blank">
            Khalil
          </Link>
        </p>
      </footer>
    </>
  );
}

export default Layout;
