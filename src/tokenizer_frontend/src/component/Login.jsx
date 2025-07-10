import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWallet } from "./WalletContext";
import { HttpAgent } from "@dfinity/agent";
import { idlFactory as tokenizer_idl, canisterId as tokenizer_id } from "../../../declarations/tokenizer_backend"; // ✅ Ensure correct path

export default function LoginPage() {
  const [connected, setConnected] = useState(false);
  const { setPrincipal } = useWallet();
  const navigate = useNavigate();

  const connectPlug = async () => {
    if (!window.ic?.plug) {
      alert("Plug Wallet not found. Please install it.");
      return;
    }

    const whitelist = [tokenizer_id]; // ✅ Use actual canister ID
    const host = "https://mainnet.dfinity.network";

    try {
      const isConnected = await window.ic.plug.requestConnect({ whitelist, host });

      if (isConnected) {
        const principal = await window.ic.plug.getPrincipal();
        const principalText = principal.toText();

        setPrincipal(principalText);
        setConnected(true);

        // ✅ Create agent and actor using Plug
        await window.ic.plug.createAgent({ whitelist, host });

        const actor = await window.ic.plug.createActor({
          canisterId: tokenizer_id,
          interfaceFactory: tokenizer_idl,
        });

        // ✅ Call the backend to create profile
        const result = await actor.create_profile();
        console.log("Profile creation result:", result);

        // Optionally fetch profile info too
        const profile = await actor.get_profile();

        // ✅ Save to localStorage
        localStorage.setItem("user_profile", JSON.stringify({
          ...profile,
          principal: principalText,
        }));

        // ✅ Redirect
        navigate('/dashboard');
      } else {
        alert("Connection cancelled.");
      }
    } catch (error) {
      console.error("Error connecting to Plug or backend:", error);
      alert("Connection failed. See console for details.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen font-sans flex items-center justify-center">
      <div className="p-6 bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6 text-purple-500">Connect Plug Wallet</h1>
        <p className="text-gray-400 mb-6">Authenticate with your Plug Wallet</p>

        {!connected ? (
          <button
            onClick={connectPlug}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-xl transition duration-300"
          >
            Connect Plug Wallet
          </button>
        ) : (
          <p className="text-green-400 mt-4">
            ✅ Connected and Redirecting...
          </p>
        )}
      </div>
    </div>
  );
}
