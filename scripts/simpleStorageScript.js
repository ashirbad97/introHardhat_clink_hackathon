const hre = require("hardhat")

main = async () => {
    // Get an access to the contract by getting an object of the contract
    const simpleStorageFactory = await hre.ethers.getContractFactory("simpleStorage")
    // Parameters of deploy are kept bank since there are no constructors in our contract  
    const simpleStorageContract = await simpleStorageFactory.deploy()
    // Since by default all public variables have a view getter defined to them, therefore we can simply call them
    const number = await simpleStorageContract.number()
    console.log(number.toString())
    // Making a transaction to the smart contract and waiting for it to finish i.e to make the transaction
    // We are passing the number as a string coz. incase the number is large JS will fail to understand, as Hardhat is intelligent enough to differentaite
    // btw string and number.
    const transaction = await simpleStorageContract.setNumber("7")
    // Waiting for one block for the confirmation of the transaction made
    await transaction.wait(1)
    // Fetching the new updated number
    const updatedNumber = await simpleStorageContract.number()
    // Since it returns a type of BigNumber so have to manually convert it
    console.log(updatedNumber.toString())
}

main().then(
    () => process.exit(0)
).catch((error) => {
    console.log(error)
    process.exit(1)
})