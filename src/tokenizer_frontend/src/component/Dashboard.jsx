
import React from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const investmentData = [
  { month: "Jan", value: 20000 },
  { month: "Feb", value: 30000 },
  { month: "Mar", value: 45000 },
  { month: "Apr", value: 55000 },
  { month: "May", value: 75000 },
  { month: "Jun", value: 125000 },
];

const liveProperties = [
  { name: "Skyline Tower - NYC", price: "$950,000" },
  { name: "Oceanview Condo - Miami", price: "$650,000" },
  { name: "Hilltop Mansion - LA", price: "$1,200,000" },
];

export default function Dashboard() {
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
      <h1 className="text-4xl font-bold text-center mb-4">User Dashboard</h1>
      <p className="text-center text-lg text-gray-400 mb-12">Hello, <span className="text-purple-400 font-semibold text-2xl">Akash</span></p>


      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-gray-800 p-6 rounded-xl text-center">
          <h3 className="text-xl font-semibold mb-2">Total Investment</h3>
          <p className="text-2xl font-bold text-purple-400">$130,000</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl text-center">
          <h3 className="text-xl font-semibold mb-2">Portfolio Value</h3>
          <p className="text-2xl font-bold text-green-400">$350,500</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl text-center">
          <h3 className="text-xl font-semibold mb-2">Assets Owned</h3>
          <p className="text-2xl font-bold text-blue-400">18</p>
        </div>
      </div>

      {/* Investment Graph */}
      <div className="bg-gray-900 p-6 rounded-xl mb-12">
        <h2 className="text-2xl font-bold mb-4">Investment Growth</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={investmentData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#555" />
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip contentStyle={{ backgroundColor: '#222', border: 'none' }} />
              <Line type="monotone" dataKey="value" stroke="#a855f7" strokeWidth={3} dot={{ fill: '#a855f7' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-gray-900 p-6 rounded-xl mb-12">
        <h2 className="text-2xl font-bold mb-4">Recent Transactions</h2>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="pb-2">Date</th>
              <th className="pb-2">Property</th>
              <th className="pb-2">Amount</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="py-2">2025-06-20</td>
              <td>Beachfront Villa - Bali</td>
              <td>$2,500</td>
              <td className="text-green-400">Confirmed</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2">2025-06-15</td>
              <td>Commercial Tower - Dubai</td>
              <td>$5,000</td>
              <td className="text-yellow-400">Pending</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2">2025-06-10</td>
              <td>Luxury Apartment - NYC</td>
              <td>$1,000</td>
              <td className="text-green-400">Confirmed</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2">2025-06-05</td>
              <td>Eco Housing - Amsterdam</td>
              <td>$3,200</td>
              <td className="text-green-400">Confirmed</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="py-2">2025-05-28</td>
              <td>Smart Office - Tokyo</td>
              <td>$4,800</td>
              <td className="text-red-400">Failed</td>
            </tr>
            <tr>
              <td className="py-2">2025-05-20</td>
              <td>Suburban Home - Texas</td>
              <td>$2,100</td>
              <td className="text-green-400">Confirmed</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Live Properties */}
      <div className="bg-gray-900 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Live Properties</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveProperties.map((property, idx) => (
            <div key={idx} className="bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-purple-500 transition">
              <h3 className="text-lg font-semibold mb-2 text-purple-400">{property.name}</h3>
              <p className="text-green-400 font-bold">{property.price}</p>
              <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 py-2 rounded text-white">Invest Now</button>
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
