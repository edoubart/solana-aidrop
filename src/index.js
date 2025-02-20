// NPM Packages
const {
  clusterApiUrl,
  Connection,
  PublicKey,
  Keypair,
  LAMPORTS_PER_SOL,
} = require('@solana/web3.js');

const wallet = new Keypair();

const publicKey = new PublicKey(wallet._keypair.publicKey);
const secretKey = wallet._keypair.secretKey;

//console.log('publicKey: ', publicKey);
//console.log('secretKey: ', secretKey);

async function getWalletBalance() {
  try {
    let connection = new Connection(clusterApiUrl('devnet', 'confirmed'));

    let walletBalance = await connection.getBalance(publicKey);

    console.log('walletBalance: ', walletBalance);
  }
  catch(err) {
    console.error("Something went wrong getting wallet balance: ", err);
  }
}

async function main() {
  await getWalletBalance();
}

main();
