const { expect } = require("chai");

describe("SimpleStorage", function () {

  it("Should store value", async function () {

    const Storage = await ethers.getContractFactory("SimpleStorage");

    const storage = await Storage.deploy();

    await storage.setValue(100);

    expect(await storage.getValue()).to.equal(100);

  });

});
