import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Aenugula Prudhviraj</h3>
            <p className="text-white/80">Cyber Security Enthusiasist</p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="g.dev/a-prudhvi-raj"
                  className="text-white/80 hover:text-teal-200 transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="wa.me/919985014377"
                  className="text-white/80 hover:text-teal-200 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="github.com/a-prudhviraj"
                className="text-white/80 hover:text-teal-200 transition-colors duration-200"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a
                href="linkedin.com/in/a-prudhvi-raj"
                className="text-white/80 hover:text-teal-200 transition-colors duration-200"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="x.com/prudhvi_raj_a"
                className="text-white/80 hover:text-teal-200 transition-colors duration-200"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/80">© 2025 John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
