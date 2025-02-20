// NPM Packages
const {
  clusterApiUrl,
  Connection,
  PublicKey,
  Keypair,
  // There are 1,000,000,000 (1 billion) Lamports in one SOL.
  LAMPORTS_PER_SOL,
} = require('@solana/web3.js');

// Constants
const SOLANA_ENVIRONMENT_ID = 'devnet';
const SOLANA_ENVIRONMENT_CONNECTION_CONFIRMATION = 'confirmed';

// Wallet
const wallet = new Keypair();

const publicKey = new PublicKey(wallet._keypair.publicKey);
const secretKey = wallet._keypair.secretKey;

//console.log('publicKey: ', publicKey);
//console.log('secretKey: ', secretKey);

async function requestAirdropSol(solCount) {
  try {
    let connection = new Connection(
      clusterApiUrl(
        SOLANA_ENVIRONMENT_ID,
        SOLANA_ENVIRONMENT_CONNECTION_CONFIRMATION
      )
    );

    let fromAirdropSignature = await connection
      .requestAirdrop(publicKey, solCount * LAMPORTS_PER_SOL);

    let latestBlockHash = await connection.getLatestBlockhash();

    await connection.confirmTransaction({
      blockhash: latestBlockHash.blockhash,
      lastValueBlockHeight: latestBlockHash.lastValueBlockHeight,
      signature: fromAirdropSignature,
    });
  }
  catch(err) {
    console.error(
      "Something went wrong requesting airdrop of SOL (Lamports): ",
      err
    );
  }
}

async function getWalletBalance() {
  try {
    let connection = new Connection(
      clusterApiUrl(
        SOLANA_ENVIRONMENT_ID,
        SOLANA_ENVIRONMENT_CONNECTION_CONFIRMATION
      )
    );

    let walletBalance = await connection.getBalance(publicKey);

    console.log('walletBalance: ', walletBalance);
  }
  catch(err) {
    console.error("Something went wrong getting wallet balance: ", err);
  }
}

async function main() {
  await getWalletBalance();

  // Request airdrop of 2 SOL or 2,000,000,000 Lamports.
  await requestAirdropSol(2);

  await getWalletBalance();
}

main();
