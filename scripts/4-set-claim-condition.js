import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
  "0xB5e0b624577722e4290CA0C87A729E0765353346"
);

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 50_000,
      maxQuantityPerTransaction: 1,
    });

    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log(
      "✅ Successfully set claim condition on bundle drop:",
      bundleDrop.address
    );
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})();
// Your app address is: 0x51778365B59deCc041123A4CC424fDE121ac3Bcc
// ✅ Successfully set claim condition on bundle drop: 0xB5e0b624577722e4290CA0C87A729E0765353346