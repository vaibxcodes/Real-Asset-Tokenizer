
import React from "react";
import { Link } from "react-router-dom";
const properties = [
  {
    name: "Luxury Apartment - NYC",
    price: "$18000",
    roi: "8% annually",
    image: "./public/property1.jpg",
  },
  {
    name: "Commercial Space - Dubai",
    price: "$15000",
    roi: "10% annually",
    image: "./public/property2.jpg",
  },
  {
    name: "Beachfront Villa - Bali",
    price: "$22500",
    roi: "7% annually",
    image: "./public/property3.jpg",
  },
    {
        name: "Eco Housing - Amsterdam",
        price: "$17000",
        roi: "6% annually",
        image: "./public/property4.jpg",
    },
    {
        name: "Smart Office - Tokyo",
        price: "$14000",
        roi: "9% annually",
        image: "./public/property5.jpg",
    },
    {
        name: "Suburban Home - Texas",
        price: "$10000",
        roi: "5% annually",
        image: "./public/property6.jpg",
    },
     {
    name: "Front Villa - Bali",
    price: "$25,000",
    roi: "7% annually",
    image: "./public/property7.jpg",
  },
   {
    name: "Front Villa - Bali",
    price: "$28,000",
    roi: "7% annually",
    image: "./public/property7.jpg",
  },
   {
    name: "Front Villa - Bali",
    price: "$23,000",
    roi: "7% annually",
    image: "./public/property9.jpg",
  },
   {
    name: "Beachfront Villa - Bali",
    price: "$30000",
    roi: "7% annually",
    image: "./public/property10.jpg",
  },
   {
    name: "Beachfront Villa - Bali",
    price: "$25000",
    roi: "7% annually",
    image: "./public/property11.jpg",
  },
   {
    name: "Beachfront Villa - Bali",
    price: "$22500",
    roi: "7% annually",
    image: "./public/property12.jpg",
  },
];


export default function Marketplace() {
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
      <h1 className="text-4xl font-bold text-center mb-8">Marketplace Property</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition"
          >
            <img
              src={property.image}
              alt={property.name}
              className="rounded-lg mb-4"
            />
            <h4 className="text-lg font-bold">{property.name}</h4>
            <p className="text-sm text-gray-400">
              Token Value: {property.price} | ROI: {property.roi}
            </p>
            <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">
    Invest Now
  </button>
          </div>
        ))}
      </div>
    </div>
     <footer>
    <p className="text-sm text-gray-500 mt-6 flex justify-center">© 2025 RealAsset Tokenizer. All rights reserved.</p>
  </footer>
    </div>
  );
}
