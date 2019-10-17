import Web3 from "web3";

export const web3Provider = Web3.givenProvider
  ? new Web3(Web3.givenProvider)
  : undefined;
