import { yieldhubZapABI, omnidexRouter01ABI } from 'features/configure';

export const zapDepositEstimate = ({
  web3,
  zapAddress,
  vaultAddress,
  tokenAddress,
  tokenAmount,
}) => {
  const contract = new web3.eth.Contract(yieldhubZapABI, zapAddress);
  // const ret = contract.methods.estimateSwap(vaultAddress, tokenAddress, tokenAmount).call();
  // console.log(ret);
  return contract.methods.estimateSwap(vaultAddress, tokenAddress, tokenAmount).call();
  // { swapAmountIn uint256, swapAmountOut uint256, swapTokenOut address }
};

export const zapWithdrawEstimate = ({ web3, routerAddress, amountIn, reserveIn, reserveOut }) => {
  const contract = new web3.eth.Contract(omnidexRouter01ABI, routerAddress);
  // const ret = contract.methods.getAmountOut(amountIn, reserveIn, reserveOut).call();
  // console.log(ret);
  return contract.methods.getAmountOut(amountIn, reserveIn, reserveOut).call();
  // { amountOut uint }
};
