import React from "react";

const Navbar = () => {
  return (
    <div className="navbar max-w-[1440px] mx-auto flex justify-between">
        <div>
            <a className="btn btn-ghost text-xl">CS — Ticket System</a>
        </div>
        <div>
            <ul className="menu menu-horizontal px-1">
                <li>
                    <a>Home</a>
                </li>
                <li>
                    <a>FAQ</a>
                </li>
                <li>
                    <a>Changelog</a>
                </li>
                <li>
                    <a>Blog</a>
                </li>
                <li>
                    <a>Download</a>
                </li>
                <li>
                    <a>Contact</a>
                </li>
                <li>
                    <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2]">+ New Ticket</button>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;
