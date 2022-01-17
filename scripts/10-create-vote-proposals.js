import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

// Our voting contract.
const voteModule = sdk.getVoteModule(
  "0xD888c4842dB4D105Cc19896b7683eD99d2BDfDF6"
);

// Our ERC-20 contract.
const tokenModule = sdk.getTokenModule(
  "0x276F0ae5c9697EE1f6516658bA7F1DA53763EE6C"
);

(async () => {
  try {
    const amount = 420_000;
    await voteModule.propose(
      "Should the Dao mint an additional " +
        amount +
        " tokens into the treasury?",
      [
        {
          nativeTokenValue: 0,
          transactionData: tokenModule.contract.interface.encodeFunctionData(
            "mint",
            [voteModule.address, ethers.utils.parseUnits(amount.toString(), 18),]
          ),
          toAddress: tokenModule.address,
        },
      ]
    );
    console.log("✅ Successfully created proposal to mint tokens");
  } catch (error) {
    console.error("failed to create first proposal", error);
    process.exit(1);
  }

  try {
      const amount = 6_900;
      await voteModule.propose("Should the DAO transfer " + amount + " tokens from the treasury to " + process.env.WALLET_ADDRESS + " for being awesome?", [
          {
              nativeTokenValue: 0,
              transactionData: tokenModule.contract.interface.encodeFunctionData(
                  "transfer", [process.env.WALLET_ADDRESS, ethers.utils.parseUnits(amount.toString(), 18),]
              ),
              toAddress: tokenModule.address,
          },
      ]);
      console.log(
        "✅ Successfully created proposal to reward ourselves from the treasury, let's hope people vote for it!"
      );
  } catch (error) {
    console.error("failed to create second proposal", error);
  }
})();

