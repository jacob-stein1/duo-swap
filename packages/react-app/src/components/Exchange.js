import React, { useState } from "react";
import { Contract } from "@ethersproject/contracts";
import { abis } from "@my-app/contracts";
import {
  ERC20,
  useContractFunction,
  useEheters,
  useTokenAllowance,
  useTokenBalance,
} from "@usedapp/core";
import { ethers } from "ethers";
import { parseUnits } from "@ethersproject/units";

import { ROUTER_ADDRESS } from "../config";

const Exchange = () => {
  return <div>Exchange</div>;
};

export default Exchange;
