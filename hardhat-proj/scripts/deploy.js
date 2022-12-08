const{ethers}=require("hardhat");

async function main(){
  //which contract to deploy
  const whitelistcontract=await ethers.getContractFactory("WhiteList");
  //deploy
  const deploywhitelistcontract=await whitelistcontract.deploy(10); //here 10 is constructor input
  //wait for deployment
  await deploywhitelistcontract.deployed();
  //print address
  console.log("Whitelist contract address: ", deploywhitelistcontract.address);
}

main().then(()=>process.exit(0)).catch((error)=>{
  console.log(error);
  process.exit(1);
});