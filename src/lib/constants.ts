export const PROJECT_ID = 'liquilock-frame';
export const PROJECT_TITLE = "LiquiLock Frame";
export const PROJECT_DESCRIPTION = "Donate ETH to LiquiLock and receive LP tokens";

export const LIQUILOCK_CONTRACT_ADDRESS = "0x719Fdd695Be2b410a22D0F3AC87151e09f069e33";
export const LIQUILOCK_ABI = [
  {
    "inputs": [
      { "internalType": "address", "name": "token", "type": "address" },
      { "internalType": "uint256", "name": "quantity", "type": "uint256" }
    ],
    "name": "donate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;

export const WETH_ADDRESS = "0x4200000000000000000000000000000000000006"; // WETH address on Base
export const ETH_DECIMALS = 18; // ETH has 18 decimals
