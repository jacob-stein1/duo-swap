import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xed2Fd70fD6FEbdAbeeff75e97E3d3eD2efafa407";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      "https://eth-goerli.g.alchemy.com/v2/liSIjiO1BSjFBkf8rreuaTU5ddZkYt7X",
  },
};
