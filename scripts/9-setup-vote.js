import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const voteModule = sdk.getVoteModule(
  "0xD888c4842dB4D105Cc19896b7683eD99d2BDfDF6"
);

const tokenModule = sdk.getTokenModule(
  "0x276F0ae5c9697EE1f6516658bA7F1DA53763EE6C"
);

(async () => {
  try {
    await tokenModule.grantRole("minter", voteModule.address);
    console.log(
      "Successfully gave vote module permissions to act on token module"
    );
  } catch (error) {
    console.error(
      "failed to grant vote module permissions on token module",
      error
    );
    process.exit(1);
  }

  try {
    const ownedTokenBalance = await tokenModule.balanceOf(
      process.env.WALLET_ADDRESS
    );
    // Grab 90% of the supply that we hold.
    const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
    const percent90 = ownedAmount.div(100).mul(90);

    // Transfer 90% of the supply to our voting contract.
    await tokenModule.transfer(voteModule.address, percent90);
    console.log("✅ Successfully transferred tokens to vote module");
  } catch (error) {
    console.error("failed to transfer tokens to vote module", error);
  }
})();
