import { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import MarketplaceAbi from "../contractsData/Marketplace.json";
import MarketplaceAddress from "../contractsData/Marketplace-address.json";
import NFTAbi from "../contractsData/NFT.json";
import NFTAddress from "../contractsData/NFT-address.json";
import Loading from "../components/Loading";

export const Web3Context = createContext();

export default Web3Context;

export const Web3Provider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState(null);
  const [nft, setNFT] = useState({});
  const [marketplace, setMarketplace] = useState({});

  // MetaMask Login/Connect
  async function web3Handler() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Set signer
    const signer = provider.getSigner();
    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });
    window.ethereum.on("accountsChanged", async function (accounts) {
      setAccount(accounts[0]);
      await web3Handler();
    });
    loadContracts(signer);
  }

  async function loadContracts(signer) {
    // Get deployed copies of contracts
    const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer);
    setMarketplace(marketplace);
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer);
    setNFT(nft);
    setLoading(false);
  }

  useEffect(() => {
    web3Handler();
  }, []);

  const contextData = {
    loading,
    account,
    nft,
    marketplace,
    web3Handler,
  };

  return (
    <Web3Context.Provider value={contextData}>
      {loading ? <Loading /> : children}
    </Web3Context.Provider>
  );
};
