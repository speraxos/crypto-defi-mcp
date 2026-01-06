# Sperax Ecosystem Technical Reference - Index

This documentation suite provides **complete technical specifications** for the Sperax DeFi protocol ecosystem, extracted from ~300 pages of official documentation and all Sperax GitHub repositories.

**Last Updated**: January 2026  
**Primary Chain**: Arbitrum One (Chain ID: 42161)

---

## 📚 Documentation Structure

| File | Contents |
|------|----------|
| [overview.md](./overview.md) | Protocol overview, architecture, yield flow |
| [usds-token.md](./usds-token.md) | USDs token contract, rebase mechanics |
| [vault-core.md](./vault-core.md) | VaultCore mint/redeem API |
| [collateral-manager.md](./collateral-manager.md) | Collateral configuration & fees |
| [strategies.md](./strategies.md) | Aave, Compound, Stargate strategies |
| [rebase-dripper.md](./rebase-dripper.md) | RebaseManager & Dripper contracts |
| [oracles.md](./oracles.md) | MasterPriceOracle, Chainlink, DIA, Uniswap TWAP |
| [spa-buyback.md](./spa-buyback.md) | SPABuyback & YieldReserve |
| [spa-staking.md](./spa-staking.md) | SPA, veSPA, xSPA tokenomics |
| [demeter-farms.md](./demeter-farms.md) | Farm base contract, registry, deployers |
| [rewarder.md](./rewarder.md) | APR-based reward distribution |
| [addresses.md](./addresses.md) | All deployed contract addresses |
| [errors-events.md](./errors-events.md) | Complete error & event reference |

---

## 🔗 Quick Links

### Official Resources
- **Website**: https://sperax.io
- **dApp**: https://app.sperax.io
- **Docs**: https://docs.sperax.io
- **GitHub**: https://github.com/Sperax

### Source Repositories
- [Sperax/USDs-v2](https://github.com/Sperax/USDs-v2) - Core USDs Protocol
- [Sperax/Demeter-Protocol-Contracts](https://github.com/Sperax/Demeter-Protocol-Contracts) - Yield Farming

---

## 🎯 Key Contract Addresses (Arbitrum)

| Contract | Address |
|----------|---------|
| USDs | `0xD74f5255D557944cf7Dd0E45FF521520002D5748` |
| SPA | `0x5575552988A3A80504bBaeB1311674fCFd40aD4B` |
| veSPA | `0x2e2071180682Ce6C247B1eF93d382D509F5F6A17` |
| xSPA | `0x0966E72256d6055145902F72F9D3B6a194B9cCc3` |
| Vault | `0x6Bbc476Ee35CBA9e9c3A59fc5b10d7a0BC6f74Ca` |
| SPABuyback | `0xFbc0d3cA777722d234FE01dba94DeDeDb277AFe3` |
| Farm Registry | `0x45bC6B44107837E7aBB21E2CaCbe7612Fce222e0` |
| MasterPriceOracle | `0x14D99412dAB1878dC01Fe7a1664cdE85896e8E50` |

---

## 📐 Key Formulas

```solidity
// veSPA calculation
veSPA = SPA_staked × (lockup_days / 365)
// Lock range: 7 days to 4 years (1461 days)

// xSPA redemption (15-180 day vesting)
SPA_received = xSPA_amount × (vesting_days + 150) / 330
// 15 days = 50%, 180 days = 100%

// USDs auto-yield
yield_to_holders = collateral_yield × 0.70
yield_to_buyback = collateral_yield × 0.30
// Capped at 25% APR to holders

// Rebase formula
new_balance = credit_balance / credits_per_token
// credits_per_token decreases as yield accrues
```

---

## 🏗️ Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER LAYER                               │
├─────────────────────────────────────────────────────────────────┤
│  Mint USDs    Redeem USDs    Stake SPA    Create Farm           │
└──────┬──────────────┬─────────────┬────────────┬────────────────┘
       │              │             │            │
       ▼              ▼             ▼            ▼
┌──────────────────────────────────────────────────────────────────┐
│                       CORE CONTRACTS                              │
├──────────────┬──────────────┬──────────────┬─────────────────────┤
│   VaultCore  │    USDs      │   veSPA      │   FarmRegistry      │
│   (Mint/     │   (Rebase    │   (Vote      │   (Deploy           │
│   Redeem)    │   Token)     │   Escrow)    │   Farms)            │
└──────┬───────┴──────┬───────┴──────┬───────┴─────────┬───────────┘
       │              │              │                 │
       ▼              ▼              ▼                 ▼
┌──────────────────────────────────────────────────────────────────┐
│                      INFRASTRUCTURE                               │
├──────────────┬──────────────┬──────────────┬─────────────────────┤
│ Collateral   │   Rebase     │   SPA        │   Rewarder          │
│ Manager      │   Manager    │   Buyback    │   Factory           │
├──────────────┼──────────────┼──────────────┼─────────────────────┤
│ Fee          │   Dripper    │   Yield      │   Farm              │
│ Calculator   │              │   Reserve    │   Deployers         │
└──────┬───────┴──────────────┴──────┬───────┴─────────────────────┘
       │                             │
       ▼                             ▼
┌──────────────────────────────────────────────────────────────────┐
│                      YIELD STRATEGIES                             │
├──────────────┬──────────────┬──────────────┬─────────────────────┤
│    Aave      │   Compound   │   Stargate   │   Fluid             │
│   Strategy   │   Strategy   │   Strategy   │   Strategy          │
└──────────────┴──────────────┴──────────────┴─────────────────────┘
```
