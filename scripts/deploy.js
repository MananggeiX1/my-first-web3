async function main() {

 const Storage = await ethers.getContractFactory("SimpleStorage");

 const storage = await Storage.deploy();

 await storage.waitForDeployment();

 console.log(storage.target);

}

main();
