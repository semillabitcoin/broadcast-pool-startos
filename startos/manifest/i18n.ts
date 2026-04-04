export const short = 'Schedule Bitcoin transaction broadcasts'

export const long = `Electrum proxy that intercepts signed transactions from Sparrow, Liana or manual import, retains them, and broadcasts at the target block or date you configure. Ideal for wallet migrations and UTXO cycling with temporal separation.

Compatible with Electrs and Fulcrum. Supports mainnet, testnet and signet. NIP-44 encrypted vault (Nostr) for confirmed transaction history.

Inspired by Craig Raw's Broadcast Pool proposal (bitcoin/bitcoin#30471).`
