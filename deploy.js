const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'light remember select around include talk usual gather explain devote waste siege',
    'https://rinkeby.infura.io/v3/cbe00bd12f7d4c55ac380833d5c19dae'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to depoy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data : bytecode, arguments : ['Hi there']})
        .send({ gas : '1000000', from : accounts[0]});

    console.log('Contract deployed to', result.options.address);
    provider.engine.stop();
}
deploy();
 