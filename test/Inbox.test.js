const { expect } = require("chai");
const { ethers } = require("hardhat");

let inbox;

beforeEach(async () => {
  const inboxContract = ethers.getContractFactory("Inbox");
  inbox = await inboxContract.deploy("Hi there!");
  await inbox.deployed();
});

describe("Inbox", () => {
  it("has a default message", async () => {
    expect(await inbox.message()).to.equal("Hi there!");
  });
  it("can change the message", async () => {
    const setMsgTx = await inbox.setMessage("bye");
    await setMsgTx.wait();
    expect(await inbox.message()).to.equal("Hi there!");
  });
});
