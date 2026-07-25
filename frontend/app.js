const contractAddress = "YOUR_CONTRACT_ADDRESS";

const abi = [
    "function setValue(uint256 _value)",
    "function getValue() view returns(uint256)"
];

let provider;
let signer;
let contract;

async function connectWallet(){

    if(typeof window.ethereum === "undefined"){
        alert("Please install MetaMask");
        return;
    }

    await window.ethereum.request({
        method:"eth_requestAccounts"
    });

    provider = new ethers.BrowserProvider(window.ethereum);

    signer = await provider.getSigner();

    contract = new ethers.Contract(
        contractAddress,
        abi,
        signer
    );

    alert("Wallet Connected");
}

async function setValue(){

    const value = document.getElementById("valueInput").value;

    if(value==""){
        alert("Enter a value");
        return;
    }

    const tx = await contract.setValue(value);

    await tx.wait();

    alert("Transaction Success");
}

async function getValue(){

    const value = await contract.getValue();

    document.getElementById("result").innerHTML = value;
}

document
.getElementById("connectButton")
.onclick = connectWallet;

document
.getElementById("setButton")
.onclick = setValue;

document
.getElementById("getButton")
.onclick = getValue;
