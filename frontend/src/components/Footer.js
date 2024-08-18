import React from "react";
import "./Footer.css";
import LogoImg from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-box">
        <h3>Absatract</h3>
        <ul>
          <li>
            <a href="#">Branches</a>
          </li>
        </ul>
      </div>
      <div className="footer-box">
        <h3>Resources</h3>
        <ul>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Release Notes</a>
          </li>
          <li>
            <a href="#">Status</a>
          </li>
        </ul>
      </div>
      <div className="footer-box">
        <h3>Community</h3>
        <ul>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Dribbble</a>
          </li>
          <li>
            <a href="#">Podcast</a>
          </li>
        </ul>
      </div>
      <div className="footer-box">
        <h3>Company</h3>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Carrers</a>
          </li>
          <li>
            <a href="#">Legal</a>
          </li>
          <h4 className="contact">Contact Us</h4>
          <li>
            <a href="#">info@abstract.com</a>
          </li>
        </ul>
      </div>
      <div className="footer-box">
        <img src={LogoImg} alt="logo" height={"50px"} width={"50px"} />
        <p> &copy; Copyright 2022 </p>
        <p>Abstract Studio Design, Inc.</p>
        <p> All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
