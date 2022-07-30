import React from "react";
import "./Home.css";
import Product from "./Product";
import Header from "./Header";
import book1 from "./image/book.jpg";
import mixer from "./image/mixer.jpg";
import echo from "./image/echo.jpg";
import ipad from "./image/ipad.jpeg";
import band from "./image/band.jpg";

function Home() {
  <Header />;
  return (
    <div>
      <Header />;
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB28684240_.jpg"
          ></img>

          <div className="home__row">
            <Product
              id="15546446"
              title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, 13 September 2011"
              price={29.33}
              image={book1}
              rating={5}
            />
            <Product
              id="15546447"
              title="Kenwood W20010012 Kitchen Machine - Stand 900 W Mixer Grinder (1 Jar, Silver)"
              price={239.0}
              image={mixer}
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id="15546448"
              title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
              price={98.99}
              image={echo}
              rating={4}
            />
            <Product
              id="15546449"
              title="APPLE iPad Pro 2020 (4th Generation) 6 GB RAM 512 GB ROM 12.9 inch with Wi-Fi Only (Space Grey)
          "
              price={598.99}
              rating={4}
              image={ipad}
            />
            <Product
              id="15546445"
              title="(Renewed) Samsung Galaxy Fit E 2019, Fitness Band, Pedometer, Heart Rate & Sleep Tracker, PMOLED Display, 5ATM Water Resistance, MIL-STD-810G, Bluetooth Active SM-R375 - International Version"
              price={199.99}
              rating={3}
              image={band}
            />
          </div>
          <div className="home__row">
            <Product
              id="15546444"
              title="Mi 5X 108 cm (43 inch) Ultra HD (4K) LED Smart Android TV with Dolby Atmos and Dolby Vision"
              price={677.67}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
