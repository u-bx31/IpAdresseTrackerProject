import '../node_modules/leaflet/dist/leaflet.css'
import { ReactComponent as Arrow } from './images/icon-arrow.svg'
import Map from './Component/Map'
import React, { useEffect, useState } from 'react';
import Modal from './Component/Modal'
import axios from 'axios';


function App() {

  const [info, setInfo] = useState([]);
  const [empty, setEmpty] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [ip, setIp] = useState()
  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;
  const getData = async (ip, url) => {
    try {
      console.log(ip);
      const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_ntzUVZSOwQ3iR1Nca9cFwnWcgWG8Q&${checkIpAddress.test(ip) ? `ipAddress=${ip}` : checkDomain.test(ip) ? `domain=${ip}` : `${setErrorMessage(true)}`}`);
      console.log(response.data);
      setInfo([response.data])
    } catch (error) {
      console.error(error);
    }
  }

  const handleSearch = () => {
    setModalShow(true)
    setErrorMessage(false)
    setTimeout(()=>setModalShow(false),2000)
    getData(ip)
  }

  const getIp = (value) => {
    setIp(value);
  }
  useEffect(() => {
    if (info.length !== 0) {
      setEmpty(false)
    }
  }, [info])

  if (empty) {
    return (
      <React.StrictMode>
        <div className="top" >
          <Modal show={modalShow} message={errorMessage} />
          <div className="container w-100">
            <div className="search-section py-4 px-xs-3 px-1 ">
              <h1 className='pt-3'>IP Adresse Tracker</h1>
              <div className="input-group mx-auto input-search my-4">
                <input type="text" className="form-control p-2 " value={ip} onChange={(e) => { getIp(e.target.value) }} placeholder="search for any IP adresse or domain" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn-sub" type="button" onClick={() => handleSearch()} ><Arrow /></button>
              </div>
            </div>

            <div className="info-section w-100 mx-auto">
              <div className='row row-cols-lg-4 bg-white rounded-3 mx-auto shadow '>
                <div className="col px-lg-4 py-lg-4 px-3 py-3 d-flex justify-content-lg-between justify-content-center">
                  <div className='info-text text-lg-start text-center '>
                    <h6>IP ADRESSE</h6>
                    <h2>{'-'}</h2>
                  </div>
                  <div className="vr"></div>
                </div>

                <div className="col px-lg-4 py-lg-4 px-3 py-3 d-flex justify-content-lg-between justify-content-center">
                  <div className='info-text text-lg-start text-center'>
                    <h6>LOCATION</h6>
                    <h2>{'-'}</h2>
                  </div>
                  <div className="vr"></div>
                </div>

                <div className="col px-lg-4 py-lg-4 px-3 py-3 d-flex justify-content-lg-between justify-content-center">
                  <div className='info-text text-lg-start text-center'>
                    <h6>TIMEZOME</h6>
                    <h2>{'-'}</h2>
                  </div>
                  <div className="vr"></div>
                </div>

                <div className="col px-lg-4 py-lg-4 px-3 py-3 d-flex justify-content-lg-between justify-content-center">
                  <div className='info-text text-lg-start text-center'>
                    <h6>ISP</h6>
                    <h2>{'-'}</h2>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='mp'>
          <Map />
        </div>
      </React.StrictMode>
    )
  }
  else {
    return (
      <React.StrictMode>

        <div className="top" >
          <Modal show={modalShow} message={errorMessage}/>
          <div className="container w-100">
            <div className="search-section py-4 px-xs-3 px-1 ">
              <h1 className='pt-3'>IP Adresse Tracker</h1>
              <div className="input-group mx-auto input-search my-4">
                <input type="text" className="form-control p-2 " value={ip} onChange={(e) => { getIp(e.target.value) }} placeholder="search for any IP adresse or domain" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn-sub" type="button" onClick={() => handleSearch()} ><Arrow /></button>
              </div>
            </div>

            <div className="info-section w-100 mx-auto">
              {info.map((c) => {
                const { ip, isp, location } = c;
                const { country, region, timezone, city } = location;
                return (<div className='row row-cols-lg-4 bg-white rounded-3 mx-auto shadow '>
                  <div className="col px-lg-4 py-lg-4 px-3 py-3 d-flex justify-content-lg-between justify-content-center">
                    <div className='info-text text-lg-start text-center '>
                      <h6>IP ADRESSE</h6>
                      <h2>{!empty ? ip : '-'}</h2>
                    </div>
                    <div className="vr"></div>
                  </div>

                  <div className="col px-lg-1 py-lg-4 px-3 py-3 d-flex justify-content-lg-between justify-content-center">
                    <div className='info-text text-lg-start text-center'>
                      <h6>LOCATION</h6>
                      <h2 className='text-break'>{!empty ? `${region},${country},${city}` : '-'}</h2>
                    </div>
                    <div className="vr"></div>
                  </div>

                  <div className="col px-lg-4 py-lg-4 px-3 py-3 d-flex justify-content-lg-between justify-content-center">
                    <div className='info-text text-lg-start text-center'>
                      <h6>TIMEZOME</h6>
                      <h2>{!empty ? timezone : '-'}</h2>
                    </div>
                    <div className="vr"></div>
                  </div>

                  <div className="col px-lg-4 py-lg-4 px-3 py-3 d-flex justify-content-lg-between justify-content-center">
                    <div className='info-text text-lg-start text-center'>
                      <h6>ISP</h6>
                      <h2>{!empty ? isp : '-'}</h2>
                    </div>
                  </div>
                </div>)

              })}

            </div>
          </div>
        </div>
        <div className='mp'>
          <Map info={info} />
        </div>
      </React.StrictMode>
    );
  }

}

export default App;
