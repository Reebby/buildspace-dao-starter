import sdk from "./1-initialize-sdk.js";

// Grab the app module address.
const appModule = sdk.getAppModule(
  "0x51778365B59deCc041123A4CC424fDE121ac3Bcc"
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      name: "ViralDAO's Trend Proposal",
      votingTokenAddress: "0x276F0ae5c9697EE1f6516658bA7F1DA53763EE6C",
      proposalStartWaitTimeInSeconds: 0,
      proposalVotingTimeInSeconds: 24 * 60 * 60,
      votingQuorumFraction:0,
      minimumNumberOfTokensNeededToPropose: "0",
    });
    console.log(
        "✅ Successfully deployed vote module, address:",
        voteModule.address,
      );
  } catch (error) {
    console.error("Failed to deploy vote module", error);
  }
})();
