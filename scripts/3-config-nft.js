import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xB5e0b624577722e4290CA0C87A729E0765353346"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Abstract Viral",
        description: "This NFT will give you access to ViralDAO!",
        image: readFileSync("scripts/assets/14.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
