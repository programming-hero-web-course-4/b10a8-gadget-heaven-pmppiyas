import React from 'react';

export default function Footer() {
  return (
    <footer className=" bg-base-300 text-base-content p-10">
      <div className="flex flex-col items-center space-y-4 pb-6">
        <h2 className="text-3xl font-medium">Gadget Heaven</h2>
        <p className="text-lg text-center">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full  gap-y-10">
        <nav className=" w-full flex flex-col justify-center items-center">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shiping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav className=" w-full flex flex-col justify-center items-center">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav className=" w-full flex flex-col justify-center items-center">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </div>
    </footer>
  );
}
