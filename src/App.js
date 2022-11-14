import '../node_modules/leaflet/dist/leaflet.css'
import { ReactComponent as Arrow } from './images/icon-arrow.svg'
import Map from './Component/Map'



function App() {
  return (
    <div className="App">

      <div className="top">
        <div className="container w-100">
          <div className="search-section py-4 px-xs-3 px-1 ">
            <h1 className='pt-3'>IP Adresse Tracker</h1>
            <div className="input-group mx-auto input-search my-4">
              <input type="text" className="form-control p-2 " placeholder="search for any IP adresse or domain" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn-sub" type="button" ><Arrow /></button>
            </div>
          </div>

          <div className="info-section w-100 mx-auto">
            <div className='row row-cols-lg-4 bg-white rounded-3 mx-auto shadow '>
              <div className="col px-lg-4 py-lg-4 px-3 py-3 d-flex justify-content-lg-between justify-content-center">
                <div className='info-text text-lg-start text-center '>
                  <h6>IP ADRESSE</h6>
                  <h2>192.212.174.101</h2>
                </div>
                <div className="vr"></div>
              </div>

              <div className="col px-lg-4 py-lg-4 px-3 py-3 d-flex justify-content-lg-between justify-content-center">
                <div className='info-text text-lg-start text-center'>
                  <h6>LOCATION</h6>
                  <h2>192.212.174.101</h2>
                </div>
                <div className="vr"></div>
              </div>

              <div className="col px-lg-4 py-lg-4 px-3 py-3 d-flex justify-content-lg-between justify-content-center">
                <div className='info-text text-lg-start text-center'>
                  <h6>TIMEZOME</h6>
                  <h2>192.212.174.101</h2>
                </div>
                <div className="vr"></div>
              </div>

              <div className="col px-lg-4 py-lg-4 px-3 py-3 d-flex justify-content-lg-between justify-content-center">
                <div className='info-text text-lg-start text-center'>
                  <h6>ISP</h6>
                  <h2>192.212.174.101</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mp'>
        <Map />
      </div>
    </div>
  );
}

export default App;
