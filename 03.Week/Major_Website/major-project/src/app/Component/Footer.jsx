import React from "react";
import footer from "./footer.css";
import {
    BsDiscord,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function Footer() {
  return (
    <div>
    <footer>
    <div class="left">
      <h1 className="text-3xl">
        Subscribe to our newsletter to <br /> stay in touch with the latest.
      </h1>
      <div class="mail">
        <input type="text" placeholder="Enter your email" />
        <i class="ri-mail-line"></i>
      </div>
      <div class="follow">
        <p>Follow us here</p>
        <ul class="icons">
          <li>
            <i class="ri-facebook-circle-line"><BsFacebook/></i>{" "}
          </li>
          <li>
            <i class="ri-discord-line"><BsDiscord/></i>{" "}
          </li>
          <li>
            <i class="ri-instagram-line"><BsInstagram/></i>
          </li>
          <li>
            <i class="ri-github-line"><BsGithub/></i>{" "}
          </li>
          <li>
            <i class="ri-linkedin-box-line"><BsLinkedin/></i>{" "}
          </li>
        </ul>
      </div>
    </div>
    <div class="middle">
      <ul>
        <li className=" w-[20rem]">
          Our services<i class="ri-arrow-right-up-line"></i>
        </li>
        <li>
          Project<i class="ri-arrow-right-up-line"></i>
        </li>
        <li>
          Our Process<i class="ri-arrow-right-up-line"></i>
        </li>
        <li>
          Open Source<i class="ri-arrow-right-up-line"></i>
        </li>
        <li>
          Refferal Program<i class="ri-arrow-right-up-line"></i>
        </li>
        <li>
          Contact<i class="ri-arrow-right-up-line"></i>
        </li>
        <li>
          Blog<i class="ri-arrow-right-up-line"></i>
        </li>
      </ul>
    </div>
    <div class="right">
      <h3>Drop Us a Line</h3>
      <a href="">xyz@gmail.com</a>
      <h3>Call Us</h3>
      <a href="">
        <i class="ri-whatsapp-fill"></i>+91 8210xxxxxx
      </a>
    </div>
  </footer>
    </div>
  )
  
}

export default Footer;
