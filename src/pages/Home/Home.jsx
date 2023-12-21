import React from "react";
import "./Home.scss";
import group1 from "../../assets/img/group1.png";
import build__about1 from "../../assets/img/build__aout1.png";
import group8 from "../../assets/img/Group 8 (1).png"
import oval__img from "../../assets/img/Oval__img.png"
import group_9 from "../../assets/img/Group 9.png"
import group_2 from "../../assets/img/Group 2.png"
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
      <div className="container">
      
      <div className="Hero">
      <img className="hero__img" src={group1} alt="" />
        <div className=" hero__flex">
          <h2 className="title">
            Find the <br />
            Best <span className="span__title">talent</span>
            <br />
          </h2>
          <div className="hero__right">
            <span>
              <svg
                width="50"
                height="4"
                viewBox="0 0 50 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="50" height="4" fill="#79C8C7" />
              </svg>
            </span>
            <p>
              Finding the right people and building high <br /> performing teams
              can be hard. Most companies <br />
              aren’t tapping into the abundance of global talent. <br /> We’re
              about to change that.
            </p>
          </div>
        </div>
      </div>
      <div className="Build">
        <div className="build__left">
          <img className="build__line" src="" alt="" />
          <h2>
            Build & manage <br /> distributed teams <br /> like no one else.
          </h2>
        </div>
        <div className="build__right">
          <div className="build_about1">
            <img src={build__about1} alt="" />
            <div className="text">
              <h4>Experienced Individuals</h4>
              <p>
                Our network is made up of highly experienced professionals <br /> who
                are passionate about what they do.
              </p>
            </div>
          </div>
        </div>
        <img className="build__groupimg" src={group8} alt="" />
      </div>
      <div className="results">
        <img className="group9img" src={group_9} alt="" />
        <div className="title">
          <h2>
          Delivering real results for top <br /> companies. Some of our <span>success stories.</span>
          </h2>
        </div>
        <div className="results__footer">
          <div className="rf_about">
          <p> “The team perfectly fit the specialized skill set  <br /> required. They focused on the most essential <br /> features helping us launch the platform eight <br /> months faster than planned.</p>
        <h4>Kady Baker</h4>
        <p>Product Manager at Bookmark</p>
               <img src={oval__img} alt="" />
          </div>
          <div className="rf_about">
          <p> “The team perfectly fit the specialized skill set  <br /> required. They focused on the most essential <br /> features helping us launch the platform eight <br /> months faster than planned.</p>
        <h4>Kady Baker</h4>
        <p>Product Manager at Bookmark</p>
               <img src={oval__img} alt="" />
          </div>
          <div className="rf_about">
          <p> “The team perfectly fit the specialized skill set  <br /> required. They focused on the most essential <br /> features helping us launch the platform eight <br /> months faster than planned.</p>
        <h4>Kady Baker</h4>
        <p>Product Manager at Bookmark</p>
               <img  src={oval__img} alt="" />
          </div>
               
        </div>
        <svg className="img12" width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 8">
<rect id="Rectangle" width="100" height="100" transform="matrix(1 0 0 -1 100 100)" fill="#2C6269"/>
<path id="Combined Shape Copy" fill-rule="evenodd" clip-rule="evenodd" d="M100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200ZM100 133C81.7746 133 67 118.225 67 100C67 81.7746 81.7746 67 100 67C118.225 67 133 81.7746 133 100C133 118.225 118.225 133 100 133Z" fill="#012F34"/>
<path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M100 56H200V60H100V56ZM100 64H200V68H100V64ZM200 72H100V76H200V72ZM100 80H200V84H100V80ZM200 88H100V92H200V88ZM100 96H200V100H100V96Z" fill="#79C8C7"/>
</g>
</svg>


      </div>
      <div className="ready">
        <img src={group_2} alt="" />
        <h1>Ready to get started?</h1>
        
          <div className="link_contact">
          <Link className="ready__link" to="contact" >contact us</Link>
          </div>
      
      </div>
     
      </div>
    </div>
  );
}

export default Home;
