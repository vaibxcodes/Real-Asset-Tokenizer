
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
     <div className="bg-black text-white min-h-screen font-sans">
      <header className="p-6 flex justify-between items-center bg-black">
        <h1 className="text-2xl font-bold text-purple-500">RealAsset Tokenizer</h1>
        <nav>
                 <ul className="flex space-x-6 text-sm uppercase">
                    <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
                   <li><Link to="/dashboard" className="hover:text-purple-400">Dashboard</Link></li>
                   <li><Link to="/about" className="hover:text-purple-400">About</Link></li>
                   <li><Link to="/feature" className="hover:text-purple-400">Feature</Link></li>
                   <li><Link to="/marketplace" className="hover:text-purple-400">Marketplace</Link></li>
                  
                   <li><Link to="/login" className="hover:text-purple-400">Login</Link></li>
                 </ul>
               </nav>
      </header>
     <div className="bg-black text-white min-h-screen p-8 font-sans">
      <h1 className="text-4xl font-bold text-center mb-8">About RealAsset Tokenizer</h1>

      <div className="max-w-4xl mx-auto space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">Our Vision</h2>
          <p className="text-gray-300">
            RealAsset Tokenizer is revolutionizing real estate investment by making it more accessible, transparent,
            and secure. We fractionalize physical properties into digital tokens, enabling anyone to invest
            in prime real estate with ease.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">Seamless Transactions</h2>
          <p className="text-gray-300">
            Our platform leverages smart contracts to automate and secure every transaction. This ensures fast,
            error-free exchanges without the need for intermediaries, reducing costs and delays.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">Security and Transparency</h2>
          <p className="text-gray-300">
            Built on blockchain technology, every investment and ownership record is permanently stored
            and verifiable. Our system is designed with end-to-end encryption and multi-layered security protocols
            to protect user assets and data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">Global Accessibility</h2>
          <p className="text-gray-300">
            No matter where you are in the world, RealAsset Tokenizer opens the door to high-value
            property investments. You can diversify your portfolio without geographical limits or large capital.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">Join the Future</h2>
          <p className="text-gray-300">
            Be part of a growing ecosystem of investors and property owners embracing digital transformation.
            Whether you're new to real estate or a seasoned investor, our platform empowers you with modern tools
            for smarter decisions.
          </p>
        </section>
      </div>
    </div>
     <footer>
    <p className="text-sm text-gray-500 mt-6 flex justify-center">© 2025 RealAsset Tokenizer. All rights reserved.</p>
  </footer>
    </div>
  );
}
