import Sock from "./components/sock"
import sock_data from './assets/sock.json';
import promo_data from "./assets/promo.json";
import AppFooter from "./components/Footer";
import Search from "./components/Search";
import Promo from "./components/Promo";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TSE</a>
          <button className="navbar-toggler" type="button" data-bstoggle="
  collapse" data-bs-target="#navbarSupportedContent" ariacontrols="
  navbarSupportedContent" aria-expanded="false" aria-label="Toggle
  navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</
                a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></
                  li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</
                  a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <Search />
          </div>
        </div>
      </nav>
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <div className="container-fluid">
          <div className="row">
            Both socks and space rockets 🚀 will take you to new heights, but
            only one will get cold feet!
            <div className="card-container d-flex flex-row justify-content-start" style={{
              gap: "20px", padding: "20px"
            }}>
              {promo_data.map(promo => {
                return (
                  <Promo data={promo} />
                )
              })}
            </div>
            <div className="card-container" style={{
              display: 'flex', flexWrap: 'wrap', gap:
                '20px'
            }}>              {
                sock_data.map((sock) => (
                  <Sock key={sock.id} data={sock} />
                ))
              }
            </div>
          </div>
        </div>
      </main>
      <AppFooter environment="DEVELOPMENT" />
    </>
  )
}
export default App