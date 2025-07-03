import React from "react";
import { Link } from "react-router-dom";

const features = [
  { title: "Tokenized Apartments", description: "Own a fraction of luxury apartments in top cities." },
  { title: "Smart Contracts", description: "Automated, secure blockchain-based transactions." },
  { title: "Low Transaction Fees", description: "Save more with minimal costs on each deal." },
  { title: "Verified Assets", description: "All properties undergo a strict verification process." },
  { title: "Global Access", description: "Invest from anywhere in the world with ease." },
  { title: "Real-Time Dashboard", description: "Monitor asset performance instantly." },
  { title: "Secure Wallets", description: "Store and manage NFTs with integrated wallets." },
  { title: "Marketplace Liquidity", description: "Easily trade your assets anytime." },
  { title: "Regulatory Compliance", description: "Fully compliant with local and global laws." },
  { title: "Community DAO", description: "Vote and participate in key platform decisions." },
  { title: "Mobile App", description: "Access your investments on the go." },
  { title: "Investor Insights", description: "Get analytics and data-driven guidance." }
];

export default function FeatureCards() {
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
    <section className="py-20 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Platform Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl hover:shadow-lg hover:bg-purple-700 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-400">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
       <footer>
    <p className="text-sm text-gray-500 mt-6 flex justify-center">© 2025 RealAsset Tokenizer. All rights reserved.</p>
  </footer>

    </section>
    </div>
  );
}
