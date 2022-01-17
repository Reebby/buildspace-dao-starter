import { ethers } from 'ethers';
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule("0x276F0ae5c9697EE1f6516658bA7F1DA53763EE6C");

(async () => {
try {
    const amount = 1_000_000;
    const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
    await tokenModule.mint(amountWith18Decimals);
    const totalSupply = await tokenModule.totalSupply();    
    console.log(
        "✅ There now is",
        ethers.utils.formatUnits(totalSupply, 18),
        "$VTOK in circulation",
      );
} catch (error) {
    console.error("Failed to print money", error);
}
})();