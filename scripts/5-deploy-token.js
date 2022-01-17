import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x51778365B59deCc041123A4CC424fDE121ac3Bcc");

(async () => {
try {
    const tokenModule = await app.deployTokenModule({
        name: "Viral Governance Token",
        symbol: "VTOK"
    });
    console.log(
        "✅ Successfully deployed token module, address:",
        tokenModule.address,
      );
} catch (error) {
    console.error("failed to deploy token module", error);
}
})();
// Your app address is: 0x51778365B59deCc041123A4CC424fDE121ac3Bcc
// ✅ Successfully deployed token module, address: 0x276F0ae5c9697EE1f6516658bA7F1DA53763EE6C