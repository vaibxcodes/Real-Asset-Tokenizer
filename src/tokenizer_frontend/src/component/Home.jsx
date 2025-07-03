
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-black">
        <div className="text-2xl font-bold text-purple-500">RealAsset Tokenizer</div>
        <nav>
          <ul className="flex space-x-6 text-sm uppercase">
            <li><Link to="/dashboard" className="hover:text-purple-400">Dashboard</Link></li>
            <li><Link to="/about" className="hover:text-purple-400">About</Link></li>
            <li><Link to="/feature" className="hover:text-purple-400">Feature</Link></li>
            <li><Link to="/marketplace" className="hover:text-purple-400">Marketplace</Link></li>
           
           <li><Link to="/login" className="hover:text-purple-400">Login</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center bg-center bg-cover" style={{ backgroundImage: "url('/realasset-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Invest in Real Assets with Blockchain Transparency</h1>
          <p className="mb-8 max-w-xl mx-auto text-gray-300">
            RealAsset Tokenizer connects investors with tokenized real estate, infrastructure assets and commodities using smart contracts to ensure trust and global liquidity.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-purple-600 px-6 py-3 rounded-full text-white hover:bg-purple-700">Get Started</button>
            <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-8 text-center bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-3xl font-bold mb-10">Platform Features</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Real Asset Tokenization</h3>
            <p className="text-gray-300">Turn physical properties into tradable NFTs to open new investment channels.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Smart Contract Security</h3>
            <p className="text-gray-300">All transactions are automated and verifiable through blockchain contracts.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Low Fees & Global Access</h3>
            <p className="text-gray-300">Invest and trade from anywhere in the world at a fraction of traditional costs.</p>
          </div>
        </div>
      </section>

       {/* Dashboard Section */}
      <section id="dashboard" className="py-16 px-8 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Investor Dashboard</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-2">Total Investment</h3>
            <p className="text-2xl font-bold text-purple-400">$345,000</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-2">Portfolio Value</h3>
            <p className="text-2xl font-bold text-green-400">$145,500</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-2">Assets Owned</h3>
            <p className="text-2xl font-bold text-blue-400">12</p>
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section id="marketplace" className="py-20 px-8 bg-black text-center">
        <h2 className="text-3xl font-bold mb-6">Marketplace Preview</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Browse available real estate assets, each backed by tokenized ownership and open for fractional investment.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl">
            <img src="/property1.jpg" alt="Property 1" className="rounded-lg mb-4" />
            <h4 className="text-lg font-bold">Luxury Apartment - NYC</h4>
            <p className="text-sm text-gray-400">Token Value: $1,000 | ROI: 8% annually</p>
             <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">
    Invest Now
  </button>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <img src="/property2.jpg" alt="Property 2" className="rounded-lg mb-4" />
            <h4 className="text-lg font-bold">Commercial Space - Dubai</h4>
            <p className="text-sm text-gray-400">Token Value: $5,000 | ROI: 10% annually</p>
             <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">
    Invest Now
  </button>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <img src="/property3.jpg" alt="Property 3" className="rounded-lg mb-4" />
            <h4 className="text-lg font-bold">Beachfront Villa - Bali</h4>
            <p className="text-sm text-gray-400">Token Value: $2,500 | ROI: 7% annually</p>
             <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">
    Invest Now
  </button>
          </div>
         
        </div> 
          <Link to="/marketplace" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6
           rounded-full transition mb-10 mt-10">
    Explore Marketplace
          </Link>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-8 bg-gradient-to-t from-black to-purple-900 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Roadmap</h2>
        <ul className="text-left max-w-3xl mx-auto space-y-4">
          <li>✅ Q1 2025: Platform Launch with Core Features</li>
          <li>✅ Q2 2025: Marketplace for Real Estate NFTs</li>
          <li>🔄 Q3 2025: Mobile App and Global Investor Support</li>
          <li>🔜 Q4 2025: DeFi Lending Integration & Community DAO</li>
        </ul>
      </section>

      
      



      {/* Contact Section */}
      <footer id="login" className="py-10 px-8 bg-black text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
        <p className="text-gray-400 mb-6">Join our community and be the first to know about updates and new opportunities.</p>
        
           <Link to="/login">
      <button className="bg-purple-600 px-6 py-2 rounded-full text-white hover:bg-purple-700">
        Subscribe
      </button>
    </Link>
        
        <p className="text-sm text-gray-500 mt-6">© 2025 RealAsset Tokenizer. All rights reserved.</p>
      </footer>
    </div>
  );
}
