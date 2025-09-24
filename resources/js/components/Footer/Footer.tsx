import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">LearnWithUs</h1>
          <p className="text-gray-400">
            Empowering learners to build skills in Frontend, Backend, and AI/ML.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#projects" className="hover:text-red-500">Projects</a></li>
            <li><a href="#features" className="hover:text-red-500">Features</a></li>
            <li><a href="#faq" className="hover:text-red-500">FAQ</a></li>
            <li><a href="#testimonials" className="hover:text-red-500">Testimonials</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-gray-400 mb-4">Email: support@learnwithus.com</p>
          <div className="flex space-x-4">
            <a href="#"><Facebook className="w-6 h-6 hover:text-red-500"/></a>
            <a href="#"><Twitter className="w-6 h-6 hover:text-red-500"/></a>
            <a href="#"><Instagram className="w-6 h-6 hover:text-red-500"/></a>
            <a href="#"><Linkedin className="w-6 h-6 hover:text-red-500"/></a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} LearnWithUs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
