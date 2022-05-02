### Run local blockchain

```
$ npx hardhat node
```

### Connect local blockchain account to Metamask
Go to Metamask -> Add Network
- Network Name: Hardhat 
- RPC URL: http://127.0.0.1:8545
- Chain ID: 31337
- Currency Symbol: GO

Go to Metamask -> Import account
- Private key: Paste the private key of the first account.

### Deploy Smart Contracts to local blockchain

```
$ npx hardhat run src/backend/scripts/deploy.js --network localhost
```

### Run Smart Contracts Tests

```
$ npx hardhat test
```

### Run Frontend

```
$ npm run start
```
