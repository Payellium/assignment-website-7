import React from "react";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer sm:footer-horizontal bg-black text-neutral-content p-10 mt-10">
        <nav>
          <h6 className="footer-title">CS — Ticket System</h6>
          <p>
            Lorem Ipsum is simply dummy text of the <br />
            printing and typesetting industry. Lorem <br />
            Ipsum has been the industry's standard <br />
            dummy text ever since the 1500s, when an <br />
            unknown printer took a galley of type and <br />
            scrambled it to make a type specimen book.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social links</h6>
          <div className="flex gap-2">
            <img src={icon1} alt="" />
            <a className="link link-hover">@CS — Ticket System</a>
          </div>
          <div className="flex gap-2">
            <img src={icon2} alt="" />
            <a className="link link-hover">@CS — Ticket System</a>
          </div>
          <div className="flex gap-2">
            <img src={icon3} alt="" />
            <a className="link link-hover">@CS — Ticket System</a>
          </div>
          <div className="flex gap-2">
            <img src={icon4} alt="" />
            <a className="link link-hover">support@cst.com</a>
          </div>
        </nav>
      </div>
      <div className="footer sm:footer-horizontal footer-center bg-black text-base-content p-4 border-t">
        <aside>
          <p>
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
