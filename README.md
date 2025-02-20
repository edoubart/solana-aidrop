# Solana Airdrop

## Wallet

### Public/Private (Secret) Key Pair

#### Examples

#### Public Key (non human-readable format)

```js
const publicKey = wallet._keypair.publicKey;

console.log('publicKey: ', publicKey);
```

Returns:

```
publicKey:  Uint8Array(32) [
   39,  35, 206, 115,  11,   9,  59, 138,
   78,  25, 191, 137, 185, 109, 129, 183,
    3, 115,  48, 224, 227,  56, 223, 232,
  177, 200, 101, 254,  25, 212, 184, 225
]
```

#### Private (Secret) Key (non human-readable format)

```js
const secretKey = wallet._keypair.secretKey;

console.log('secretKey: ', secretKey);
```

```
secretKey:  Uint8Array(64) [
  154, 223,  58, 125, 193, 253, 238, 234, 242,  25,  99,
  159,  96, 240,  57,  87,  64, 154, 167, 227, 216,   3,
   18, 227, 133,  13, 198, 177,  60, 225, 105, 130,  39,
   35, 206, 115,  11,   9,  59, 138,  78,  25, 191, 137,
  185, 109, 129, 183,   3, 115,  48, 224, 227,  56, 223,
  232, 177, 200, 101, 254,  25, 212, 184, 225
]
```

**Warning: Never share your Secret/Private Key like that. This is just an
 example for you to see.**

#### Public Key (human-readable format)

In order to get the Public Key in a human-readable format, do:

```js
const publicKey = new PublicKey(wallet._keypair.publicKey);

console.log('publicKey: ', publicKey);
```

```
publicKey:  PublicKey [PublicKey(EnFaCjqifdJM6EMiiDU2mKpcrxKLRTnybMBDs5aQQvKr)] {
  _bn: <BN: ccbf8b27f37edfac4b736f07484675b67c4f0576a11730ece609757a29512261>
}
```

