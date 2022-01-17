import {ethers} from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x51778365B59deCc041123A4CC424fDE121ac3Bcc");

(async () => {
try {
    const bundleDropModule = await app.deployBundleDropModule({
        name: "ViralDAO Membership",
        description: "A DAO for social media influencers",
        image: readFileSync("scripts/assets/27.jpg"),
        primarySaleRecipientAddress: ethers.constants.AddressZero,
    })
    console.log(
        "✅ Successfully deployed bundleDrop module, address:",
        bundleDropModule.address,
      );
      console.log(
        "✅ bundleDrop metadata:",
        await bundleDropModule.getMetadata(),
      );
} catch (error) {
    console.log("failed to deploy bundleDrop module", error);
}
})();

// Your app address is: 0x51778365B59deCc041123A4CC424fDE121ac3Bcc
// ✅ Successfully deployed bundleDrop module, address: 0xB5e0b624577722e4290CA0C87A729E0765353346