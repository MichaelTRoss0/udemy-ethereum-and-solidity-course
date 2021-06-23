import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x207dfae17284f5e440A102127Fbf0bb2538bB8ab"
);

export default instance;
