"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faEnvelope,
  faPhone,
  faPrint,
  faCoffee,
  faHandHoldingUsd,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-15">
      <section className="container mx-auto px-4 py-8">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 relative"
          id="grid-container"
        >
          <div className="bg-footer-texture bg-cover bg-center rounded-lg md:col-span-1"></div>

          <div className="text-center md:text-center md:col-span-1 text-sm">
            <h6 className="font-semibold uppercase mb-2 text-gray-800">
              {" "}
              Follow Us
            </h6>
            <div className="flex justify-center md:justify-center space-x-2">
              <Link
                href="https://www.facebook.com/javier.jaramillo3/"
                className="text-gray-600 hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </Link>

              <Link
                href="https://twitter.com/jejaramilloc"
                className="text-gray-600 hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </Link>

              <Link
                href="https://www.instagram.com/jjaramillo321/"
                className="text-gray-600 hover:text-pink-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/javierjaramillo1/"
                className="text-gray-600 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </Link>

              <Link
                href="https://github.com/jjaramillo34"
                className="text-gray-600 hover:text-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </Link>
            </div>
          </div>

          <div className="text-center md:text-center md:col-span-1 text-sm mt-4 md:mt-0 text-gray-800">
            <h6 className="font-semibold uppercase mb-2">Quick Links</h6>
            <ul className="list-none">
              <li>
                <Link href="/" className="hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/restaurants" className="hover:text-blue-500">
                  Restaurants
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="text-center md:text-left md:col-span-1 text-sm mt-4 md:mt-0 text-gray-800"
            id="contact-social"
          >
            <h6 className="font-semibold uppercase mb-2">
              Contact Information
            </h6>
            <p>
              <FontAwesomeIcon icon={faHome} size="sm" className="mr-2" />
              368 9th Ave, New York, NY 10001
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} size="sm" className="mr-2" />
              <a
                href="mailto:javier@jaramillohub.com"
                className="hover:text-blue-500"
              >
                javier@jaramillohub.com
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} size="sm" className="mr-2" />
              +1 347 239 9026
            </p>
            <p>
              <FontAwesomeIcon icon={faPrint} size="sm" className="mr-2" />
              +1 347 239 9026
            </p>
          </div>
        </div>
      </section>

      <section className="text-center py-4 bg-gray-100" id="donate">
        <h6 className="text-lg font-semibold mb-4 text-gray-800">
          {" "}
          Support Us
        </h6>
        <p className="text-sm text-gray-600">
          If you like our work, you can support us by buying us a coffee or
          donating.
        </p>
        <br />
        <Link
          href="https://www.buymeacoffee.com/jjaramillo"
          className="bg-teal-400 hover:bg-black text-white font-bold py-2 px-4 rounded-full m-2 transition-colors duration-300 ease-in-out shadow-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faCoffee} className="mr-2" /> Buy Me a Coffee
        </Link>
        <Link
          href="https://www.zeffy.com/en-US/embed/donation-form/b049bb8b-44c1-4adb-ae7e-9f816c4ca942?modal=true"
          className="bg-teal-400 hover:bg-black text-white font-bold py-2 px-4 rounded-full m-2 transition-colors duration-300 ease-in-out shadow-md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faHandHoldingUsd} className="mr-2" /> Donate
        </Link>
      </section>

      <div className="text-center mt-4 py-4 bg-gray-100">
        <p className="text-sm text-gray-600">
          © 2024{" "}
          <Link href="/" className="hover:text-blue-500">
            Restaurants Directory
          </Link>
          . All rights reserved. Developed by{" "}
          <Link
            href="https://jaramillohub.com"
            target="_blank"
            className="hover:text-blue-500"
            rel="noopener noreferrer"
          >
            Javier Jaramillo
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
