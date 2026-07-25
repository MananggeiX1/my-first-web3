async function main() {

    const Storage = await ethers.getContractFactory("SimpleStorage");

    const storage = await Storage.deploy();

    await storage.waitForDeployment();

    console.log("Contract:", storage.target);

}

main().catch((error)=>{
    console.error(error);
    process.exitCode=1;
});
