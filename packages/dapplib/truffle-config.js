require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski strong cost snow coconut hard light army gift'; 
let testAccounts = [
"0x2520e7dea5f875f16effbc2e2573bfe9c52951fd95268848810f6a359363667a",
"0xd8a3c08195d68b74c3b4de52c5efebc5261aaca771cd92933524ecedd5400911",
"0x14fc94e3e400796ca2b836eafb7557e651b5a0484ecb11c846a0f0f8ce462ad0",
"0xd01455fbe8617dbe5b97e1b2cfb2cc1281ae0a1d742500989ada5a061abd76a5",
"0x8e9505b80e4b31b1a75f54afcf6e567628ba3acc5e2e129f452938fed6f63fe3",
"0xfd3726add52b443d3a0d99ebb20dd5d9dd596b86658851c27860387a7b55ae45",
"0xc64ff3143ecf9a4fad01432e0510a9999a045c213a8068b4748e8efa911cf016",
"0xd9dd5ea8bbddf17a586604a3180b6b2c08f8abb084980706f34bfe6e1105df80",
"0x38f81c4eb02361c7240cca29470b99cf16774a290fe6f0f8aa09deac76e86dcf",
"0xfb1e7abe881ed1181cc1893203ad340caa7681e71877f4b9b885b992040c335a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
