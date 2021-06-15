import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import EmailIcon from "@material-ui/icons/Email";
import { Row, Col } from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import "./Footer.css";

function Footer() {
  return (
    <Row className="footer-div">
      <Col lg={2} className="logo">
        <img
          className="logo-img"
          src="https://files.codingninjas.in/cn-logo-dark-9824.svg"
          alt="logo-img"
        />
      </Col>
      <Col lg={2} className="info">
        <h6>CODING NINJAS</h6>
        <a href="https://www.codingninjas.com/v2/about">About Us</a>
        <a href="https://www.codingninjas.com/policy/privacy.pdf">
          Privacy Policy
        </a>
        <a href="https://www.codingninjas.com/policy/tnc.pdf">
          Terms & Condition
        </a>
        <a href="https://www.codingninjas.com/policy/pricing-and-refund.pdf">
          Pricing & Refund Policy
        </a>
        <a href="https://www.codingninjas.com/v2/bug-bounty">Bug Bounty</a>
        <a href="https://www.codingninjas.com/v2/customers">Customer</a>
        <a href="https://www.codingninjas.com/v2/press-release">
          Press Release
        </a>
      </Col>
      <Col lg={2} className="products">
        <h6>PRODUCTS</h6>
        <a href="https://www.codingninjas.com/v2/courses">Courses</a>
        <a href="https://www.codingninjas.com/v2/start-learning">
          Try Courses for Free
        </a>
        <a href="https://careercamp.codingninjas.com/?_ga=2.120222863.665133868.1623422627-987125433.1623422626">
          Career Camps
        </a>
        <a href="https://www.codingninjas.com/hire-from-us">Hire Talent</a>
      </Col>
      <Col lg={2} className="community">
        <h6>COMMUNITY</h6>
        <a href="https://www.codingninjas.com/codestudio">Code Studio</a>
        <a href="https://www.codingninjas.com/blog">Blog</a>
        <a href="https://www.codingninjas.com/v2/events">Events</a>
        <a href="https://campus.codingninjas.com/?_ga=2.120222863.665133868.1623422627-987125433.1623422626">
          Campus Ninja
        </a>
        <a href="https://www.codingninjas.com/v2/affiliate">Affiliate</a>
      </Col>
      <Col lg={2} className="follow-ups">
        <h6>FOLLOW US ON</h6>
        <div className="social-links">
          <a href="https://www.facebook.com/codingninjas">
            <FacebookIcon fontSize="large" />
          </a>
          <a href="https://www.instagram.com/coding.ninjas/">
            <InstagramIcon fontSize="large" />
          </a>
          <a href="https://www.youtube.com/c/CodingNinjasIndia">
            <YouTubeIcon fontSize="large" />
          </a>
          <a href="https://twitter.com/CodingNinjasOff">
            <TwitterIcon fontSize="large" />
          </a>
          <a href="https://www.linkedin.com/company/coding-ninjas-india/">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="https://t.me/codingninjas_official">
            <TelegramIcon fontSize="large" />
          </a>
        </div>
        <div className="contacts">
          <h6>CONTACT US</h6>
          <div style={{ display: "flex", marginTop: 10 }}>
            <PhoneInTalkIcon />
            <p>1800-123-3598</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <EmailIcon />
            <p>contact@codingninjas.com</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Footer;
