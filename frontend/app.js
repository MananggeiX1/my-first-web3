const contractAddress = "PASTE_ALAMAT_KONTRAK_DI_SINI";

const abi = [
  "function setValue(uint256 _value) public",
  "function getValue() public view returns (uint256)"
];

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const contract = new ethers.Contract(contractAddress, abi, signer);

    return contract;
  } else {
    alert("Silakan install MetaMask.");
  }
}

async function setValue() {
  const contract = await connect();
  const value = document.getElementById("valueInput").value;

  const tx = await contract.setValue(value);
  await tx.wait();

  alert("Nilai berhasil disimpan!");
}

async function getValue() {
  const contract = await connect();
  const value = await contract.getValue();

  document.getElementById("result").innerText = value;
}
