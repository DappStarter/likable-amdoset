require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note mad prosper hunt open fringe gauge'; 
let testAccounts = [
"0xff5b6be7f0d53cc999d4ac4aa636befcbcd02dc1a17ce0255dcc875df836d079",
"0xb2958c8ee2402e97f09b4c3b3f131572cbc956b9677faa617e850ac6b3496781",
"0xf80d59a6f76985a33b833f254d78e150303f05139c557d9b1856ec9bc4f4dc47",
"0x411ba934245572f3fe264c5a7c84f99a18e8ed74a9394d5e96b3a52476816ca0",
"0x39cd9263b77e170923f245bda1cfc425bd33a26d2061ddbb22024b9f2ee1c1d3",
"0xe02d2a7e045738036a8689300c1560804cab47a7915e841f1192bd1a8653d593",
"0x4394b22ce3814f56f5b7e9cbf37695d3a655e2a62ff3a0d1776ecda10617e8fc",
"0xe61921355032a4bedbb2f902a94fab94d12bb6da44c637397d1c346bb43d4e56",
"0x925d96663955a996dd96c87827de3f65851db7b4d04a3d9dfedacb589410b2ec",
"0x75501959ce3194891ffafead64ea8099fde33731f1580f5d225c320025b11df8"
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
