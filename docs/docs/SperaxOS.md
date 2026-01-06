
---
## Page 1

1
SperaxOS


---
## Page 2

2
SperaxOS
Smart Agent Infrastructure for Decentralized Finance.
The End of Middlemen. The Birth of Financial Autonomy.
Imagine a world where you never need a banker, broker, or financial advisor again.
Where your finances run on logic, not paperwork.
Where you are in full control.
SperaxOS is that world.
It’s not just another crypto app. It’s an AI-powered financial operating system that
replaces middlemen with autonomous agents. Built on smart contracts and real-
time logic, it empowers users to earn, invest, and manage capital without
intermediaries.
No friction.
No gatekeepers.
No hidden fees.
Just smart contracts working for you—24/7.
SperaxOS empowers you to:
Why SperaxOS?


---
## Page 3

3
• Earn passive income with yield-bearing stablecoins
• Send money globally in seconds
• Invest, lend, and manage assets without intermediaries
• Access tools previously reserved for institutions
• Automate your finances—from wills to complex trades
All powered by AI agents and transparent code.
No approvals needed. No trust required.
• No gatekeepers — Full financial control
• Always earning — Idle capital deployed automatically
• Global-ready — Cross-chain, borderless, and instant
• AI-driven — Smarter decisions, faster execution
• Institutional tools for everyone — No-code, plug-and-play agents
Key Benefits
What Agents Can Do


---
## Page 4

4
Founded in 2019, Sperax has weathered every market cycle—and come out
stronger.
We’ve built reliable products and earned the trust of top-tier investors and
exchanges.
A fully on-chain, yield-generating stablecoin—launched before many of today’s
leading models.
A no-code toolkit that helps DAOs deploy liquidity farms across major DEXs, with
zero developer effort.
Feature
Description
Programmable Logic
Set goals like “maintain 5% yield” or
“automate monthly payments”
Autonomous Yield Farming
Agents find and rebalance into best
opportunities in DeFi and RWA markets
Automated Payments
Scheduled, conditional, and metered
payments — all in $USDs
Token Sniping Engine
Detect, evaluate, and act on new token
listings in real time
Idle Capital Deployment
Auto-invest idle funds; maintain custom
liquidity buffers
Risk Control Layer
Built-in limits, safety scores, depeg alerts,
and bridge risk protections
Built on Experience
🛡️ 2021: USDs
🧰 2022: Demeter


---
## Page 5

5
Partnered with regulated fintech app Streetbeat to bring decentralized finance to
traditional users.
• Users: Hands-free, high-yield finance with full transparency
• Developers: Build plug-ins and custom agents using open SDK
• Protocols: Tap into intelligent, autonomous capital to boost liquidity
No approvals. No middlemen. Just programmable, intelligent capital.
🌉 Ongoing: Bridging Web2 + Web3
Who It’s For
Join the Autonomous Finance Movement


---
## Page 6

6
USDs (Sperax USD)
A stablecoin yield aggregator on the Arbitrum network
USDs is a stablecoin
 yield aggregator which generates auto-yield natively.
Currently, USDs is live on Arbitrum, the largest Layer-2 Ecosystem of Ethereum.
Eventually, Sperax will build a system of interoperability so that USDs will be
natively deployed to all major blockchain platforms.
The highlights of this protocol:
1. Auto-yield - Users holding USDs in their wallets automatically earn organic
yield. No staking is required by the end user. Users do not need to spend gas
calling the smart contract to claim their yield.
2. Layer 2 native — Cheaper transaction fees on Arbitrum make this protocol retail
investor-friendly.
3. Fully Backed Model - USDs is 100% backed by a diversified basket of
whitelisted crypto assets (stablecoins).
The rise of decentralized finance (DeFi) has led to a huge increase in the use of
stablecoins—cryptocurrencies designed to keep a steady value, usually around $1.
They generally fall into three categories. Fiat-backed stablecoins like USDC, etc.
are pegged to traditional currencies and backed by reserves held by centralized
issuers. They’re widely used but raise concerns around transparency and control.
Crypto-collateralized stablecoins like DAI are backed by on-chain assets. They aim
for decentralization but can face scaling limits. Algorithmic stablecoins rely on
smart contracts and supply adjustments to maintain their peg without direct
collateral. They remain sensitive to market shifts and are still evolving.
Each type balances trade-offs between decentralization, stability, and scalability as
the stablecoin ecosystem matures.
USDs has combined the best of existing designs by featuring a 100% backed model
like the CDP stablecoins but adds the scalability benefits of fiat backed stablecoins.
An on-chain, redemption-based design makes USDs highly scalable, trustless and
decentralized.


---
## Page 7

7
USDs automates the process of earning yield on stablecoins. Yield is generated
organically by sending collateral to audited decentralized finance protocols. 70% of
yield generated on collateral is used to pay USDs holders auto-yield. Please refer to
SIP-66
 for more details.
USDs auto-yield rate is adjustable and depends on the actual yield generated by
the collaterals. Any yield generated beyond the max auto-yield rate will be stored in
auto-yield reserves. This novel passive income strategy does not require any action
from the user. Users can just hold USDs and see wallet balance grow, auto-
compounding the yield in the process.
SPA is the value accrual token of the Sperax ecosystem. SPA holders can stake SPA
tokens to receive veSPA. veSPA holders are decision makers of the protocol. They
will earn staking rewards and manage the protocol revenue via voting power in
Sperax governance. Off-chain governance is live on Snapshot
, and community
(veSPA holders) can control parameters of USDs protocol, yield strategies, eligible
collateral, new product features, etc. On-chain governance will be launched soon
making veSPA holders the true owners of the Sperax ecosystem.
How Sperax USD (USDs) Works


![Image 1](images/page7_img1.png)


---
## Page 8

8
Minting and Redeeming
To mint new USDs, minters only need eligible collateral. Currently, the protocol is
accepting USDC.e, USDC and USDT as collateral and more tokens might be added
to this list in the future. However, USDs tokens are fungible and redeemable in the
same way, independent of their underlying minting collateral. It acts as an IOU on
the pooled collateral.
The protocol will mint 1 USDs by collecting 1 USD worth of collateral.
Collateral tokens required = No. of USDs tokens minted/Min (Price of collateral in
USD, 1 USD)
When a collateral token is worth less than 1 dollar, it will be treated with its actual
market price. However, when it is worth more than 1 dollar, it will be treated as 1
dollar. Hence, USDs will always be fully collateralized or over-collateralized.
Mint fees are subject to Sperax DAO approval.
Minting USDs


![Image 1](images/page8_img1.png)


---
## Page 9

9
Redeeming 1 USDs at the protocol level gives the user back any one unit of
collateral (maximum 1 unit of collateral) after deducting the redemption fee.
Redeemers can choose from the list of eligible collaterals that they want to receive.
A portion of USDs redeemed is collected as a redemption fee by the protocol.
The protocol will redeem 1 USDs following this simple equation:
Fee = x% of USDs amount redeemed. 'x' depends on the selected collateral. 
Collateral tokens redeemed = (1-x)% * (No. of USDs redeemed) 
When a collateral token is worth more than 1 dollar, it will be treated with its actual
market price. However, when it is worth less than 1 dollar, it will be treated as 1
dollar. Hence, USDs will always be fully collateralized or over-collateralized.
The aggregate collateral ratio (or CR = Total Value Locked/USDs Circulating Supply)
should be close to 100% as USDs are backed by stablecoins and collateral is
expected to hold their price even in situations of market volatility. However, in an
extreme situation if the value of locked collateral changes and the collateral ratio
drops by more than 10%, the protocol will be paused manually. Redemptions will
begin based on governance or if the collateral ratio increases. To cover any gaps in
collateralization SPA reserves from Treasury may be used by the protocol.  
Redemption fees are subject to Sperax DAO approval. 
Collateral = USDs −Fee
Redeeming USDs


---
## Page 10

10
While minting USDs, if the price of the collateral token is more than 1 USD, then
USDs will treat the price of the collateral as 1 USD and will only mint 1 USDs per
collateral token deposited. But if the price of the collateral is less than 1 USD then
more units of the collateral will be required to mint a unit of USDs. In that case
minters would need to provide 1 USD worth of collateral to mint 1 USDs. If the price
of the collateral has dropped below 0.97 cents then users would not be able to use
that collateral to mint USDs. While redeeming users would always receive one unit
of any collateral token of their choice for one unit of USDs. 
Caps
Fees


![Image 1](images/page10_img1.png)


---
## Page 11

11
Fees will be calculated and configurable based on the current state of the
protocol’s collateral composition. Anyone would be able to call a function that
updates the fee parameters. When a collateral would exceed the desired collateral
composition the fee for that collateral would increase and its redemption fee would
decrease. Similarly when the amount of collateral in the protocol is less than the
desired amount, the mint fee for that collateral will decrease and the redemption fee
would increase. Initially all collaterals except for USDC will be set to have a desired
collateral composition of 20% and the base fee will be set to 0.05%. Any collateral
having a composition of greater than the desired collateral composition cap will
have a mint fee of greater than the base fee. The exact applicable fee on a
collateral will vary and can be queried via a view function in the contract.  
x: Current collateral value in number of tokens 
Ca:  (Desired collateral composition in % x Total Collateral in the Vault)
Total collateral in vault = Total USDs supply
Base mint and redeem fee (f base): Base fee for mint and redemption which will be
discounted/increased dynamically based on the collaterals composition.
Now users can redeem their choice of collateral from any yield strategy, instead of
relying on a preset default mechanism. Strategies are a set of smart contracts that
control the depositing and withdrawal of collaterals from various other DeFi
protocols like Aave, Compound, Fluid etc. The slippage that occurs is still
transferred back to the redeemers but since redeemers have a choice, they could
calculate and manage their own slippage.
Redeeming from Strategies


![Image 1](images/page11_img1.png)


![Image 2](images/page11_img2.png)


---
## Page 12

12
Auto-yield is distributed after a user redeems and before a user mints. So, minters
and redeemers should check if there’s an eligible auto-yield. 


---
## Page 13

13
Auto Yield
USDs earns organic yield for holders, and the yield is paid out in USDs using a
public rebase function that can be executed using a button every 24 hours if the
yield is more than 3%.
USDs stands out, thanks to its inflation fighting auto-yield feature. USDs is novel in
the stablecoin ecosystem, because it requires no action by the user. Users do not
need to stake USDs nor spend gas to claim their yield. One simply holds USDs, and
their wallet balance will grow.
The collateral received for minting USDs is deployed in other audited DeFi projects
to generate organic yield. USDs collateral earns yield in the form of reward tokens
and swapping fees from the pools. This yield is shared between USDs holders and
SPA stakers (The split is 70% for auto-yield and 30% for SPA buyback and burns.
This share can be changed through governance).
Gas free yield: 70% of yield generated on USDs collateral is used to mint USDs.
This USDs is distributed to anyone who holds USDs in their wallet.
The actual yield generated depends on the yield rate of the strategies where
collateral is deployed. The yield cap has been set to 25%. Any yield generated over
25% is stored in the protocol to help fund the APY for lean periods when actual
yield generated is less than 25%.
Different yield generation strategies are proposed by the community/team and
evaluated by the community based on their yield generation potential, risk profile
etc. Community then votes to choose pools/farms where collateral will be deployed.
Following strategies are being used for yield generation. We will keep updating this
list to include newer strategies approved by the community.
Yield Strategies


---
## Page 14

14
• USDC:
◦Compound (USDC)
◦Aave (USDC)
◦Fluid (USDC)
Maximum cap of 75% of total USDC collateral for each strategy.
• USDC.e:
◦Compound (USDC.e)
◦Stargate (Stargate-LP USDC.e)
◦Aave (USDC.e)
◦Curve (FRAX-USDC.E)
◦Fluid (USDC.e)
Maximum cap of 50% of total USDC.e collateral for each strategy.
• USDT:
◦Aave (USDT)
◦Stargate (Stargate-LP USDT)
◦Fluid (USDT)
Maximum cap of 75% of total USDT collateral for each strategy.
Old strategies that are not in use / deprecated:
• Curve | Curve-LP USDC/USDT [Not in use]
• Saddle | Saddle-LP FRAX/USDC [Saddle sunset]
• Frax | Curve-LP FRAX/VST [Vesta sunset]
USDs held in EOA wallets, i.e. non-contract addresses, will receive auto-yield on a
regular basis. For now, USDs that are deployed by users to yield-earning strategies
within the Sperax suite of yield farms will not receive auto-yield.
By default, smart contracts can opt for auto-yield via a public Rebase Function.
Eligibility


---
## Page 15

15
USDs follows the ERC20 token standard. A wallet holding USDs should expect its
USDs balance to increase automatically over time. This increase is triggered by a
distribution event that can be triggered whenever the yield is greater than 3%. On
average, the event gets triggered approximately every 24 hours. The earned USDs
are not explicitly transferred into the user’s wallet, instead a global parameter is
changed to update the holder's balance.
Unlike most ERC20, where the token contract directly stores the amount of tokens
each wallet holds, USDs’ token contract has a shared state variable creditPerToken,
and the contract stores each wallet’s credit. A wallet’s balance = credit /
creditPerToken.
When yield is generated:
1. The yield is swapped for USDs in the open market
2. The USDs from step (1) is burned
3. The value of creditPerToken  is *decreased globally and therefore every
wallet’s balance increases (since every wallet’s credit is unchanged during this
process)
* creditPerToken  is decreased according to the number of USDs burnt in step (2)
such that total supply of USDs remains unchanged after steps (2) and (3)
The circulating supply of USDs remains unchanged through this process as the
USDs that are bought from the market are burnt and then the USDs balance of the
holders increase proportionally. As a result, a user can expect its USDs balance to
increase automatically over time without any additional USDs explicitly being
transferred to the user’s wallet.
Auto-yield distribution mechanism 
Yield distribution frequency 


---
## Page 16

16
Yield is distributed approximately every 24 hours. The admin 
page has a rebase
button, which can be triggered at a time gap of 24 hours, whenever the yield is
greater than 3%.


---
## Page 17

17
Smart Contracts can opt in for
the rebase feature (Auto-yield).
Externally owned accounts (EOAs) holding USDs were always eligible for the Auto-
yield feature, but smart contract / smart wallets were not.
Sperax has introduced a new function: now smart accounts (or smart wallets) can
call to opt in for auto rebase in USDs contract and to get Auto-yield.
An owners of a smart contract / smart wallet  can opt in for rebase in USDs
contract. The users will not need  to claim (or send out any transactions to claim)
the interest earned.
This is how to opt in your smart contract / smart wallet for rebase in USDs:
1. Go to Arbiscan and search for USDs. Verify the correct USDs contract address:
0xD74f5255D557944cf7Dd0E45FF521520002D5748
2. Go to the Token contract. ensure it is Sperax USD (USDs) deployed by Sperax
Deployer 0x42d2f9f84EeB86574aA4E9FCccfD74066d809600
3. Click on the contract and make sure your account is connected (Metamask,
Gnosis Safe, or any other smart account).
4. Go to “Write as Proxy”.
5. Connect your wallet (choose WalletConnect, Coinbase Wallet, or any other
wallet).
6. Once connected, you will see two functions with the same name: rebaseOptIn
You don’t have to call the first function because it’s an owner-only function (can
be called only by the USDs owner).
Instead, click the second function rebaseOptIn . This allows you to opt in for
rebase for your own account (your smart contract account).
7. Confirm the transaction, and your smart account will be opted in for auto
rebase.
That’s it. Your smart account / smart wallet is eligible for auto-yield!


---
## Page 18

18
How smart accounts can opt in for auto rebase functionality in USDs
How smart accounts can opt in for auto rebase functionality in USDs


---
## Page 19

19
Stability Mechanism
How does USDs keep the peg?
Minting 1 USDs - If a collateral token is worth less than $1, it will be treated with its
actual market price. However, if it is worth more than 1 dollar, it will be treated as $1.
Redeeming 1 USDs - If a collateral token is worth more than $1, it will be treated
with its actual market price. However, if it is worth less than 1 dollar, it will be treated
as 1 units of collateral at its market price.
Hence, USDs will always be fully collateralized or over-collateralized. For more
information on how mint and redeem functions work check outMinting and
Redeeming
The protocol collects a redemption fee whenever USDs is redeemed. This fee is
passed on to the SPA stakers. Redemption fee is levied so that protocol does not
work like a free token swap instrument. The fee is static for each collateral token
but can be upgraded through governance by the community. It is a percentage of
the transaction value.
1. Mint Fee = 0
2. Redemption Fee = x% of the amount of USDs redeemed. 
x depends on the selected collateral.  Check the current redemption fee for the
USDs in app.sperax.io
1. Cap/Floor collateral value to $1 while
minting/redeeming 1 USDs
2. Redemption Fee
3. Pause minting USDs with de-pegged collateral 


---
## Page 20

20
If the collateral being used to mint USDs has de-pegged by 3% or more to the
downside, then the protocol will stop minting USDs using that collateral.
As more people use USDs, the yield rate will serve as a second-layer protection
from a high selling pressure, further empowering a mass adoption in various use
cases including payment, derivatives, and portfolio construction. For more
information on how auto-yield works check out Auto Yield
When sufficient collateral is not available, USDs redeemers would get $1 worth of
collateral in the form of SPA tokens from the treasury. This would be the collateral
of last resort.
4. Auto-yield for USDs holders 
5. SPA is given on Redemption when sufficient collateral
is not available 


---
## Page 21

21
Key parameters and functions
• Collateral types to mint/ redeem USDs.
• Desired collateral composition, oracle used for price feed of the collateral, base
Mint Fee, base Redemption Fee and price floor for each collateral type.
Updating the price floor for collateral used to mint USDs. Setting the price floors
for each collateral will allow the protocol to remain solvent when collaterals
depeg. The protocol will not mint USDs with the collateral when the price of the
collateral falls below the price floor.
• Yield generation strategies for each collateral type. For example, adding new
delta-neutral yield farming strategies based on other decentralized exchanges.
• Harvesting incentive.
• The USDs dripping rate from the dripper contract.
• Minimum and maximum APR for distribution of Auto-Yield.
• Harvesting or claiming all kinds of yield tokens from the yield generation
strategies. The harvester will be incentivized with a portion of the yield-farmed
tokens.
• Purchase harvested yield tokens for market price. We will use the respective
oracles for the yield tokens to determine the market price. This experience will
be similar to the currently implemented buyback contract. 
• Distributing the auto-yield to all addresses eligible to collect it. Rebase will also
be triggered when someone Mints or Redeems.
Key parameters upgradeable via
governance
Key functions available to the public


---
## Page 22

22
Technical documents
This technical document is about the upgrade to USDs-v2. It details the changes
made to enhance the protocol's decentralization, transparency, security, and
scalability. The document covers new features and functionalities.


![Image 1](images/page22_img1.png)


---
## Page 23

23
Sequence diagrams
Mint Flow
USDs Mint Flow
External Contracts
User
User
Vault
Vault
CollateralManager
CollateralManager
Oracle
Oracle
FeeCalculator
FeeCalculator
USDs
USDs
FeeVault
FeeVault
Collateral
Collateral
approve(vault, amount)
mint(collateral, amount, minAmtToRecv, deadline)
Validate the transaction
is within deadline
getMintParams
Validates if token
collateral is registered
Collateral's mint conﬁg
getPrice(collateral)
Validate the price
feed for the collateral
Collateral Price
Validate conditions
1. Mint is allowed
2. Price of collateral is
above a `downsidePeg`
getMintFee(collateral)
Calculates fee based
on the composition of
collateral in USDs
Fee amount
Perform a slippage check
Rebase()
Perform a rebase if
preset conditions match
safeTransferFrom(user, vault, amount)
Collateral
mint(user, toMinterAmt)
Mint USDs for User
mint(feeVault, feeAmt)
Mint USDs as fee to feeVault


---
## Page 24

24
USDs Redeem Flow
USDs Redeem Flow
External Contracts
User
User
Vault
Vault
CollateralManager
CollateralManager
Oracle
Oracle
FeeCalculator
FeeCalculator
USDs
USDs
FeeVault
FeeVault
Collateral
Collateral
approve(vault, usdsAmt)
redeem(collateral, usdsAmt, minCollAmt, deadline)
Validate the transaction
is within the deadline
getRedeemParams(collateral)
Validates if token
collateral is registered
Collateral's redeem params
Validate if redemption
is not paused for the collateral
getPrice(collateral)
Validate the price
feed for the collateral
Collateral Price
getRedeemFee(collateral)
Calculates fee based
on the composition of
collateral in USDs
Fee amount
Verify enough collateral in
Vault; if absent, withdraw from
the strategy
Perform a slippage check
safeTransferFrom(user, vault, usdsAmt)
usdsAmt to burn
burn(vault, usdsAmt)
safeTransfer(feeVault, feeAmt)
USDs feeAmt
safeTransfer(user, collateralAmt)
collateralAmt
Rebase()
Perform a rebase if
preset-conditions match


---
## Page 25

25
Yield generation
USDs Yield Generation Flow
External Contracts
User
User
Vault
Vault
CollateralManager
CollateralManager
Strategy
Strategy
YieldReserve
YieldReserve
Dripper
Dripper
Collateral
Collateral
Yield Earning Strategies
Yield Earning Strategies
Allocate
allocate(collateral, strategy, amount)
validate allocation
validateAllocation(collateral, strategy, amount)
Boolean (true/false)
forceApprove(strategy, amount)
deposit(collateral, amount)
Validate support for collateral
safeTransferFrom(vault, strategy, amount)
Collateral amount
Deposit collateral for earning yield
H a r v e s t
collectReward() / checkRewardEarned()
Harvest Incentive
Harvest Amount
Yield purchase using USDs
swap(srcToken, dstToken, amountIn, minAmountOut)
dstToken
addUSDs(rebaseAmt)
USDs for rebase


---
## Page 26

26
Rebase Flow
USDs Rebase Flow
User
User
Vault
Vault
RebaseManager
RebaseManager
Dripper
Dripper
USDs
USDs
rebase()
fetchRebaseAmt()
getCollectableAmt()
Dripped USDs
Calculate rebase amount based on
1. Available USDs
2. Min/Max rebase amount
Validate time gap since the last rebase
collect()
safeTransfer(vault, collectableAmt)
collectableAmt always >= rebaseAmt
rebaseAmt
rebase(rebaseAmt)
_burn(vault, rebaseAmt)
Update rebasingCreditsPerToken
resulting in an updated rebasing account balance


---
## Page 27

27
Smart contracts
High level documentation of smart contracts


---
## Page 28

28
Vault
• Responsible for following actions on USDs:
◦Mint USDs token
◦Redeem USDs token
◦Carry out rebase for USDs token
◦Allocate collateral to strategies
◦Withdraw collateral from strategies
Git Source
Inherits: Initializable, OwnableUpgradeable, ReentrancyGuardUpgradeable
Author: Sperax Foundation
This contract enables users to mint and redeem USDs with allowed collaterals.
It also allocates collateral to strategies based on the Collateral Manager contract.
address public feeVault;
Vault
Contract documentation
State Variables
feeVault
yieldReceiver


---
## Page 29

29
address public yieldReceiver;
address public collateralManager;
address public feeCalculator;
address public oracle;
address public rebaseManager;
constructor();
function initialize() external initializer;
collateralManager
feeCalculator
oracle
rebaseManager
Functions
constructor
initialize
updateFeeVault


---
## Page 30

30
Updates the address receiving fee.
Parameters
Updates the address receiving yields from strategies.
Parameters
Updates the address having the configuration for collaterals.
Parameters
function updateFeeVault(address _feeVault) external onlyOwner;
Name
Type
Description
_feeVault
address
New desired SPABuyback
address.
function updateYieldReceiver(address _yieldReceiver) external 
onlyOwner;
Name
Type
Description
_yieldReceiver
address
New desired yield receiver
address.
function updateCollateralManager(address _collateralManager) external 
onlyOwner;
updateYieldReceiver
updateCollateralManager


---
## Page 31

31
Updates the address having the configuration for rebases.
Parameters
Updates the fee calculator library.
Parameters
Updates the price oracle address.
Name
Type
Description
_collateralManager
address
New desired collateral
manager address.
function updateRebaseManager(address _rebaseManager) external 
onlyOwner;
Name
Type
Description
_rebaseManager
address
New desired rebase
manager address.
function updateFeeCalculator(address _feeCalculator) external 
onlyOwner;
Name
Type
Description
_feeCalculator
address
New desired fee calculator
address.
updateRebaseManager
updateFeeCalculator
updateOracle


---
## Page 32

32
Parameters
Allocates _amount  of _collateral  to _strategy .
Parameters
Mint USDs by depositing collateral.
function updateOracle(address _oracle) external onlyOwner;
Name
Type
Description
_oracle
address
New desired oracle
address.
function allocate(address _collateral, address _strategy, uint256 
_amount) external nonReentrant;
Name
Type
Description
_collateral
address
Address of the desired
collateral.
_strategy
address
Address of the desired
strategy.
_amount
uint256
Amount of collateral to be
allocated.
function mint(address _collateral, uint256 _collateralAmt, uint256 
_minUSDSAmt, uint256 _deadline)
    external
    nonReentrant;
allocate
mint


---
## Page 33

33
Parameters
Mint USDs by depositing collateral (backward compatibility).
This function is for backward compatibility.
Parameters
Name
Type
Description
_collateral
address
Address of the collateral.
_collateralAmt
uint256
Amount of collateral to mint
USDs with.
_minUSDSAmt
uint256
Minimum expected amount
of USDs to be minted.
_deadline
uint256
Expiry time of the
transaction.
function mintBySpecifyingCollateralAmt(
    address _collateral,
    uint256 _collateralAmt,
    uint256 _minUSDSAmt,
    uint256,
    uint256 _deadline
) external nonReentrant;
mintBySpecifyingCollateralAmt


---
## Page 34

34
Redeem USDs for _collateral .
In case where there is not sufficient collateral available in the vault, the collateral is
withdrawn from the default strategy configured for the collateral.
Parameters
Name
Type
Description
_collateral
address
Address of the collateral.
_collateralAmt
uint256
Amount of collateral to mint
USDs with.
_minUSDSAmt
uint256
Minimum expected amount
of USDs to be minted.
uint256
_deadline
uint256
Expiry time of the
transaction.
function redeem(address _collateral, uint256 _usdsAmt, uint256 
_minCollAmt, uint256 _deadline) external nonReentrant;
Name
Type
Description
_collateral
address
Address of the collateral.
_usdsAmt
uint256
Amount of USDs to be
redeemed.
_minCollAmt
uint256
Minimum expected amount
of collateral to be received.
_deadline
uint256
Expiry time of the
transaction.
redeem
redeem


---
## Page 35

35
Redeem USDs for _collateral  from a specific strategy.
Parameters
Get the expected redeem result.
function redeem(address _collateral, uint256 _usdsAmt, uint256 
_minCollAmt, uint256 _deadline, address _strategy)
    external
    nonReentrant;
Name
Type
Description
_collateral
address
Address of the collateral.
_usdsAmt
uint256
Amount of USDs to be
redeemed.
_minCollAmt
uint256
Minimum expected amount
of collateral to be received.
_deadline
uint256
Expiry time of the
transaction.
_strategy
address
Address of the strategy to
withdraw excess collateral
from.
function redeemView(address _collateral, uint256 _usdsAmt)
    external
    view
    returns (
        uint256 calculatedCollateralAmt,
        uint256 usdsBurnAmt,
        uint256 feeAmt,
        uint256 vaultAmt,
        uint256 strategyAmt
    );
redeemView


---
## Page 36

36
Parameters
Returns
Get the expected redeem result from a specific strategy.
Name
Type
Description
_collateral
address
Desired collateral address.
_usdsAmt
uint256
Amount of USDs to be
redeemed.
Name
Type
Description
calculatedCollateralAmt
uint256
Expected amount of
collateral to be released
based on the price
calculation.
usdsBurnAmt
uint256
Expected amount of USDs
to be burnt in the process.
feeAmt
uint256
Amount of USDs collected
as fee for redemption.
vaultAmt
uint256
Amount of collateral
released from Vault.
strategyAmt
uint256
Amount of collateral to
withdraw from the strategy.
redeemView


---
## Page 37

37
Parameters
Returns
function redeemView(address _collateral, uint256 _usdsAmt, address 
_strategyAddr)
    external
    view
    returns (
        uint256 calculatedCollateralAmt,
        uint256 usdsBurnAmt,
        uint256 feeAmt,
        uint256 vaultAmt,
        uint256 strategyAmt
    );
Name
Type
Description
_collateral
address
Desired collateral address.
_usdsAmt
uint256
Amount of USDs to be
redeemed.
_strategyAddr
address
Address of strategy to
redeem from.


---
## Page 38

38
Rebase USDs to share earned yield with the USDs holders.
If Rebase manager returns a non-zero value, it calls the rebase function on the
USDs contract.
Get the expected mint result (USDs amount, fee).
Parameters
Name
Type
Description
calculatedCollateralAmt
uint256
Expected amount of
collateral to be released
based on the price
calculation.
usdsBurnAmt
uint256
Expected amount of USDs
to be burnt in the process.
feeAmt
uint256
Amount of USDs collected
as fee for redemption.
vaultAmt
uint256
Amount of collateral
released from Vault.
strategyAmt
uint256
Amount of collateral to
withdraw from the strategy.
function rebase() public;
function mintView(address _collateral, uint256 _collateralAmt) public 
view returns (uint256, uint256);
rebase
mintView


---
## Page 39

39
Returns
Mint USDs by depositing collateral.
Mints USDs by locking collateral based on user input, ensuring a minimum
expected minted amount is met.
If the minimum expected amount is not met, the transaction will revert.
Fee is collected, and collateral is transferred accordingly.
A rebase operation is triggered after minting.
Parameters
Name
Type
Description
_collateral
address
Address of collateral.
_collateralAmt
uint256
Amount of collateral.
Name
Type
Description
uint256
Returns the expected USDs
mint amount and fee for
minting.
uint256
function _mint(address _collateral, uint256 _collateralAmt, uint256 
_minUSDSAmt, uint256 _deadline) private;
_mint


---
## Page 40

40
Redeem USDs for collateral.
Redeems USDs for collateral, ensuring a minimum expected collateral amount is
met.
If the minimum expected collateral amount is not met, the transaction will revert.
Fee is collected, collateral is transferred, and a rebase operation is triggered.
Parameters
Name
Type
Description
_collateral
address
Address of the collateral.
_collateralAmt
uint256
Amount of collateral to
deposit.
_minUSDSAmt
uint256
Minimum expected amount
of USDs to be minted.
_deadline
uint256
Deadline timestamp for
executing mint.
function _redeem(
    address _collateral,
    uint256 _usdsAmt,
    uint256 _minCollateralAmt,
    uint256 _deadline,
    address _strategyAddr
) private;
_redeem


---
## Page 41

41
Get the expected redeem result.
Calculates the expected results of a redemption, including collateral amount, fees,
and strategy-specific details.
Ensures that the redemption is allowed for the specified collateral.
Calculates fees, burn amounts, and collateral amounts based on prices and
conversion factors.
Determines if collateral needs to be withdrawn from a strategy, and if so, checks
the availability of collateral in the strategy.
Name
Type
Description
_collateral
address
Address of the collateral to
receive.
_usdsAmt
uint256
Amount of USDs to redeem.
_minCollateralAmt
uint256
Minimum expected
collateral amount to be
received.
_deadline
uint256
Deadline timestamp for
executing the redemption.
_strategyAddr
address
Address of the strategy to
withdraw from.
_redeemView


---
## Page 42

42
Parameters
Returns
function _redeemView(address _collateral, uint256 _usdsAmt, address 
_strategyAddr)
    private
    view
    returns (
        uint256 calculatedCollateralAmt,
        uint256 usdsBurnAmt,
        uint256 feeAmt,
        uint256 vaultAmt,
        uint256 strategyAmt,
        IStrategy strategy
    );
Name
Type
Description
_collateral
address
Desired collateral address.
_usdsAmt
uint256
Amount of USDs to be
redeemed.
_strategyAddr
address
Address of the strategy to
redeem from.


---
## Page 43

43
Name
Type
Description
calculatedCollateralAmt
uint256
Expected amount of
collateral to be released
based on the price
calculation.
usdsBurnAmt
uint256
Expected amount of USDs
to be burnt in the process.
feeAmt
uint256
Amount of USDs collected
as a fee for redemption.
vaultAmt
uint256
Amount of collateral
released from Vault.
strategyAmt
uint256
Amount of collateral to
withdraw from the strategy.
strategy
IStrategy
Strategy contract to
withdraw collateral from.
event FeeVaultUpdated(address newFeeVault);
event YieldReceiverUpdated(address newYieldReceiver);
event CollateralManagerUpdated(address newCollateralManager);
Events
FeeVaultUpdated
YieldReceiverUpdated
CollateralManagerUpdated
FeeCalculatorUpdated


---
## Page 44

44
event FeeCalculatorUpdated(address newFeeCalculator);
event RebaseManagerUpdated(address newRebaseManager);
event OracleUpdated(address newOracle);
event Minted(
    address indexed wallet, address indexed collateralAddr, uint256 
usdsAmt, uint256 collateralAmt, uint256 feeAmt
);
event Redeemed(
    address indexed wallet, address indexed collateralAddr, uint256 
usdsAmt, uint256 collateralAmt, uint256 feeAmt
);
event RebasedUSDs(uint256 rebaseAmt);
event Allocated(address indexed collateral, address indexed strategy, 
uint256 amount);
RebaseManagerUpdated
OracleUpdated
Minted
Redeemed
RebasedUSDs
Allocated


---
## Page 45

45
error AllocationNotAllowed(address collateral, address strategy, 
uint256 amount);
error RedemptionPausedForCollateral(address collateral);
error InsufficientCollateral(address collateral, address strategy, 
uint256 amount, uint256 availableAmount);
error InvalidStrategy(address _collateral, address _strategyAddr);
error MintFailed();
Errors
AllocationNotAllowed
RedemptionPausedForCollateral
InsufficientCollateral
InvalidStrategy
MintFailed


---
## Page 46

46
USDs
USDs


---
## Page 47

47
• ERC20 contract
• USDs is a stablecoin yield aggregator that provides auto-yield natively.
• USDs is a rebasing token with two modes of accounting for users:
◦Rebasing wallets
▪Users holding tokens in their EOA are by default in this category and are
eligible for auto-yield via a rebasing mechanism.
▪Any contract opted-in for rebase also comes in this category.
▪Balance for this category is tracked via a credit system, as described
below :
▪creditsPerToken is tracked at a global level and is updated when doing a
rebase.
▪creditBalance is tracked at an account level and is updated via token
transfer, mint, redemption of USDs
◦Non-Rebasing wallets
▪For Non-Rebasing wallets this token acts as a normal ERC20 token and
tracks the balance of the wallet as usual.
• Rebasing Mechanism
◦Users mint USDs using approved list of collaterals
◦These collaterals accumulated in the USDs vault are then deployed to
various yield on-chain earning opportunities.
◦Yield is harvested periodically and is used to buyback USDs from the market
of which 70% goes for USDs auto yield, and rest is used for SPA buyback
and burn.
◦While doing a rebase the x amount of USDs is partially burnt (without
changing the overall total supply) and the creditsPerToken  value is
adjusted such that the burnt amount is proportionally distributed across all
rebasing wallets.
creditsPerToken = C
​t
creditBalance = C
​b
userBalance = C
​/C
​
b
t


---
## Page 48

48
Inherits: ERC20PermitUpgradeable, OwnableUpgradeable,
ReentrancyGuardUpgradeable, IUSDs
Author: Sperax Foundation
ERC20 compatible contract for USDs supporting the rebase feature. This ERC20
token represents USDs on the Arbitrum (L2) network. Note that the invariant holds
that the sum of balanceOf(x) for all x is not greater than totalSupply(). This is a
consequence of the rebasing design. Integrations with USDs should be aware of
this feature. 
Inspired by OUSD: 
https://github.com/OriginProtocol/origindollar/blob/master/contracts/contracts/toke
n/OUSD.sol
uint256 private constant MAX_SUPPLY = ~uint128(0);
uint256 internal _totalSupply;
uint256[4] private _deprecated_vars;
Contract Documentation
State Variables
MAX_SUPPLY
_totalSupply
_deprecated_vars


---
## Page 49

49
mapping(address => mapping(address => uint256)) private _allowances;
address public vault;
mapping(address => uint256) private _creditBalances;
uint256 private _deprecated_rebasingCredits;
uint256 public rebasingCreditsPerToken;
uint256 public nonRebasingSupply;
mapping(address => uint256) public nonRebasingCreditsPerToken;
_allowances
vault
_creditBalances
_deprecated_rebasingCredits
rebasingCreditsPerToken
nonRebasingSupply
nonRebasingCreditsPerToken
rebaseState


---
## Page 50

50
Verifies that the caller is the Savings Manager contract.
Initializes the contract with the provided name, symbol, and vault address.
mapping(address => RebaseOptions) public rebaseState;
address[2] private _deprecated_gatewayAddr;
mapping(address => bool) private _deprecated_isUpgraded;
bool public paused;
modifier onlyVault();
constructor();
_deprecated_gatewayAddr
_deprecated_isUpgraded
paused
Functions
onlyVault
constructor
initialize


---
## Page 51

51
Parameters
Mints new USDs tokens, increasing totalSupply.
Parameters
function initialize(string memory _nameArg, string memory _symbolArg, 
address _vaultAddress) external initializer;
Name
Type
Description
_nameArg
string
The name of the USDs
token.
_symbolArg
string
The symbol of the USDs
token.
_vaultAddress
address
The address where
collaterals of USDs protocol
reside, and major actions
like USDs minting are
initiated.
function mint(address _account, uint256 _amount) external override 
onlyVault nonReentrant;
Name
Type
Description
_account
address
The account address to
which the newly minted
USDs will be attributed.
_amount
uint256
The amount of USDs to be
minted.
mint
burn


---
## Page 52

52
Burns tokens, decreasing totalSupply.
Parameters
Voluntary opt-in for rebase.
Useful for smart-contract wallets.
Voluntary opt-out from rebase.
Adds _account  to the rebasing account list.
Parameters
function burn(uint256 _amount) external override nonReentrant;
Name
Type
Description
_amount
uint256
The amount to burn.
function rebaseOptIn() external;
function rebaseOptOut() external;
function rebaseOptIn(address _account) external onlyOwner;
rebaseOptIn
rebaseOptOut
rebaseOptIn


---
## Page 53

53
Adds _account  to the non-rebasing account list.
Parameters
The rebase function. Modifies the supply without minting new tokens. This uses a
change in the exchange rate between "credits" and USDs tokens to change
balances.
Parameters
Name
Type
Description
_account
address
Address of the desired
account.
function rebaseOptOut(address _account) external onlyOwner;
Name
Type
Description
_account
address
Address of the desired
account.
function rebase(uint256 _rebaseAmt) external override onlyVault 
nonReentrant;
Name
Type
Description
_rebaseAmt
uint256
The amount of USDs to
rebase with.
rebaseOptOut
rebase
updateVault


---
## Page 54

54
Change the vault address.
Parameters
Called by the owner to pause or unpause the contract.
Parameters
Transfer tokens to a specified address.
Parameters
function updateVault(address _newVault) external onlyOwner;
Name
Type
Description
_newVault
address
The new vault address.
function pauseSwitch(bool _pause) external onlyOwner;
Name
Type
Description
_pause
bool
The state of the pause
switch.
function transfer(address _to, uint256 _value) public override returns 
(bool);
pauseSwitch
transfer


---
## Page 55

55
Returns
Transfer tokens from one address to another.
Parameters
Returns
Name
Type
Description
_to
address
The address to transfer to.
_value
uint256
The amount to be
transferred.
Name
Type
Description
bool
True on success.
function transferFrom(address _from, address _to, uint256 _value) 
public override returns (bool);
Name
Type
Description
_from
address
The address from which
you want to send tokens.
_to
address
The address to which the
tokens will be transferred.
_value
uint256
The amount of tokens to be
transferred.
Name
Type
Description
bool
true on success.
transferFrom


---
## Page 56

56
Approve the passed address to spend the specified amount of tokens on behalf of
msg.sender. This method is included for ERC20 compatibility.
increaseAllowance and decreaseAllowance should be used instead. Changing an
allowance with this method brings the risk that someone may transfer both the old
and the new allowance - if they are both greater than zero - if a transfer transaction
is mined before the later approve() call is mined.
Parameters
Returns
Increase the amount of tokens that an owner has allowed a _spender  to spend.
This method should be used instead of approve() to avoid the double approval
vulnerability described above.
function approve(address _spender, uint256 _value) public override 
returns (bool);
Name
Type
Description
_spender
address
The address that will spend
the funds.
_value
uint256
The amount of tokens to be
spent.
Name
Type
Description
bool
true on success.
function increaseAllowance(address _spender, uint256 _addedValue) 
public override returns (bool);
approve
increaseAllowance


---
## Page 57

57
Parameters
Returns
Decrease the amount of tokens that an owner has allowed a _spender  to spend.
Parameters
Returns
Name
Type
Description
_spender
address
The address that will spend
the funds.
_addedValue
uint256
The amount of tokens to
increase the allowance by.
Name
Type
Description
bool
true on success.
function decreaseAllowance(address _spender, uint256 _subtractedValue) 
public override returns (bool);
Name
Type
Description
_spender
address
The address that will spend
the funds.
_subtractedValue
uint256
The amount of tokens to
decrease the allowance by.
Name
Type
Description
bool
true on success.
decreaseAllowance


---
## Page 58

58
Check the current total supply of USDs.
Returns
Gets the USDs balance of the specified address.
Parameters
Returns
function totalSupply() public view override(ERC20Upgradeable, IUSDs) 
returns (uint256);
Name
Type
Description
uint256
The total supply of USDs.
function balanceOf(address _account) public view override returns 
(uint256);
Name
Type
Description
_account
address
The address to query the
balance of.
Name
Type
Description
uint256
A uint256 representing the
amount of base units
owned by the specified
address.
totalSupply
balanceOf


---
## Page 59

59
Gets the credits balance of the specified address.
Parameters
Returns
Function to check the amount of tokens that an owner has allowed a spender.
Parameters
function creditsBalanceOf(address _account) public view returns 
(uint256, uint256);
Name
Type
Description
_account
address
The address to query the
balance of.
Name
Type
Description
uint256
(uint256, uint256) Credit
balance and credits per
token of the address.
uint256
function allowance(address _owner, address _spender) public view 
override returns (uint256);
creditsBalanceOf
allowance


---
## Page 60

60
Returns
Creates _amount  tokens and assigns them to _account , increasing the total
supply.
Emits a {Transfer} event with from  set to the zero address.
Requirements - to  cannot be the zero address.
Parameters
Name
Type
Description
_owner
address
The address that owns the
funds.
_spender
address
The address that will spend
the funds.
Name
Type
Description
uint256
The number of tokens still
available for the spender.
function _mint(address _account, uint256 _amount) internal override;
Name
Type
Description
_account
address
The account address to
which the newly minted
USDs will be attributed.
_amount
uint256
The amount of USDs that
will be minted.
_mint
_burn


---
## Page 61

61
Destroys _amount  tokens from _account , reducing the total supply.
Emits a {Transfer} event with to  set to the zero address.
• Requirements:
•
_account  cannot be the zero address.
•
_account  must have at least _amount  tokens.*
Parameters
For non-rebasing accounts credit amount = _amount
Update the count of non-rebasing credits in response to a transfer
Parameters
function _burn(address _account, uint256 _amount) internal override;
Name
Type
Description
_account
address
The account address from
which the USDs will be
burnt.
_amount
uint256
The amount of USDs that
will be burnt.
function _executeTransfer(address _from, address _to, uint256 _value) 
private;
_executeTransfer


---
## Page 62

62
Add a contract address to the non-rebasing exception list. I.e., the address's
balance will be part of rebases so the account will be exposed to upside and
downside.
Parameters
Remove a contract address from the non-rebasing exception list.
Is an account using rebasing accounting or non-rebasing accounting? Also, ensure
contracts are non-rebasing if they have not opted in.
Name
Type
Description
_from
address
The address from which
you want to send tokens.
_to
address
The address to which the
tokens will be transferred.
_value
uint256
Amount of USDs to transfer
function _rebaseOptIn(address _account) private;
Name
Type
Description
_account
address
address of the account
opting in for rebase.
function _rebaseOptOut(address _account) private;
_rebaseOptIn
_rebaseOptOut
_isNonRebasingAccount


---
## Page 63

63
Parameters
Ensures internal account for rebasing and non-rebasing credits and supply is
updated following the deployment of frozen yield change.
Parameters
Calculates the balance of the account.
Function assumes the _account is already upgraded.
Parameters
function _isNonRebasingAccount(address _account) private returns 
(bool);
Name
Type
Description
_account
address
Address of the account.
function _ensureNonRebasingMigration(address _account) private;
Name
Type
Description
_account
address
Address of the account.
function _balanceOf(address _account) private view returns (uint256);
Name
Type
Description
_account
address
Address of the account.
_ensureNonRebasingMigration
_balanceOf


---
## Page 64

64
Get the credits per token for an account. Returns a fixed amount if the account is
non-rebasing.
Parameters
Validates if the contract is not paused.
function _creditsPerToken(address _account) private view returns 
(uint256);
Name
Type
Description
_account
address
Address of the account.
function _isNotPaused() private view;
event TotalSupplyUpdated(uint256 totalSupply, uint256 rebasingCredits, 
uint256 rebasingCreditsPerToken);
event Paused(bool isPaused);
_creditsPerToken
_isNotPaused
Events
TotalSupplyUpdated
Paused
VaultUpdated


---
## Page 65

65
event VaultUpdated(address newVault);
event RebaseOptIn(address indexed account);
event RebaseOptOut(address indexed account);
error CallerNotVault(address caller);
error ContractPaused();
error IsAlreadyRebasingAccount(address account);
error IsAlreadyNonRebasingAccount(address account);
RebaseOptIn
RebaseOptOut
Errors
CallerNotVault
ContractPaused
IsAlreadyRebasingAccount
IsAlreadyNonRebasingAccount
CannotIncreaseZeroSupply


---
## Page 66

66
error CannotIncreaseZeroSupply();
error InvalidRebase();
error TransferToZeroAddr();
error TransferGreaterThanBal(uint256 val, uint256 bal);
error MintToZeroAddr();
error MaxSupplyReached(uint256 totalSupply);
InvalidRebase
TransferToZeroAddr
TransferGreaterThanBal
MintToZeroAddr
MaxSupplyReached
Enums
RebaseOptions


---
## Page 67

67
enum RebaseOptions {
    NotSet,
    OptOut,
    OptIn
}


---
## Page 68

68
CollateralManager
Git Source
Inherits: ICollateralManager, Ownable
Author: Sperax Foundation
This contract manages the addition and removal of collateral, configuration of
collateral strategies, and allocation percentages.
Collateral Manager interacts with the Vault and various strategies for collateral
management.
uint16 public collateralCompositionUsed;
address public immutable VAULT;
address[] private collaterals;
State Variables
collateralCompositionUsed
VAULT
collaterals
collateralInfo


---
## Page 69

69
Constructor to initialize the Collateral Manager
Parameters
Register a collateral for mint & redeem in USDs
mapping(address => CollateralData) public collateralInfo;
mapping(address => mapping(address => StrategyData)) private 
collateralStrategyInfo;
mapping(address => address[]) private collateralStrategies;
constructor(address _vault);
Name
Type
Description
_vault
address
Address of the Vault
contract
collateralStrategyInfo
collateralStrategies
Functions
constructor
addCollateral


---
## Page 70

70
Parameters
Update existing collateral configuration
Parameters
Un-list a collateral
Parameters
function addCollateral(address _collateral, CollateralBaseData memory 
_data) external onlyOwner;
Name
Type
Description
_collateral
address
Address of the collateral
_data
CollateralBaseData
Collateral configuration data
function updateCollateralData(address _collateral, CollateralBaseData 
memory _updateData) external onlyOwner;
Name
Type
Description
_collateral
address
Address of the collateral
_updateData
CollateralBaseData
Updated configuration for
the collateral
function removeCollateral(address _collateral) external onlyOwner;
updateCollateralData
removeCollateral


---
## Page 71

71
Add a new strategy to collateral
Parameters
Update existing strategy for collateral
Parameters
Name
Type
Description
_collateral
address
Address of the collateral
function addCollateralStrategy(address _collateral, address _strategy, 
uint16 _allocationCap) external onlyOwner;
Name
Type
Description
_collateral
address
Address of the collateral
_strategy
address
Address of the strategy
_allocationCap
uint16
Allocation capacity
function updateCollateralStrategy(address _collateral, address 
_strategy, uint16 _allocationCap) external onlyOwner;
Name
Type
Description
_collateral
address
Address of the collateral
_strategy
address
Address of the strategy
_allocationCap
uint16
Allocation capacity
addCollateralStrategy
updateCollateralStrategy


---
## Page 72

72
Remove an existing strategy from collateral
Ensure all the collateral is removed from the strategy before calling this Otherwise it
will create error in collateral accounting
Parameters
Validate allocation for a collateral
Parameters
function removeCollateralStrategy(address _collateral, address 
_strategy) external onlyOwner;
Name
Type
Description
_collateral
address
Address of the collateral
_strategy
address
Address of the strategy
function updateCollateralDefaultStrategy(address _collateral, address 
_strategy) external onlyOwner;
function validateAllocation(address _collateral, address _strategy, 
uint256 _amount) external view returns (bool);
removeCollateralStrategy
updateCollateralDefaultStrategy
validateAllocation


---
## Page 73

73
Returns
Get the required data for mint
Parameters
Returns
Name
Type
Description
_collateral
address
Address of the collateral
_strategy
address
Address of the desired
strategy
_amount
uint256
Amount to be allocated.
Name
Type
Description
bool
True for valid allocation
request.
function getFeeCalibrationData(address _collateral) external view 
returns (uint16, uint16, uint16, uint256);
Name
Type
Description
_collateral
address
Address of the collateral
getFeeCalibrationData


---
## Page 74

74
Get the required data for mint
Parameters
Returns
Get the required data for USDs redemption
Name
Type
Description
uint16
Base fee config for
collateral (baseMintFee,
baseRedeemFee,
composition, totalCollateral)
uint16
uint16
uint256
function getMintParams(address _collateral) external view returns 
(CollateralMintData memory mintData);
Name
Type
Description
_collateral
address
Address of the collateral
Name
Type
Description
mintData
CollateralMintData
mintData
getMintParams
getRedeemParams


---
## Page 75

75
Parameters
Returns
Gets a list of all listed collaterals
Returns
Gets a list of all strategies linked to a collateral
function getRedeemParams(address _collateral) external view returns 
(CollateralRedeemData memory redeemData);
Name
Type
Description
_collateral
address
Address of the collateral
Name
Type
Description
redeemData
CollateralRedeemData
redeemData
function getAllCollaterals() external view returns (address[] memory);
Name
Type
Description
address[]
List of addresses
representing all listed
collaterals
getAllCollaterals
getCollateralStrategies


---
## Page 76

76
Parameters
Returns
Verifies if a strategy is linked to a collateral
Parameters
Returns
function getCollateralStrategies(address _collateral) external view 
returns (address[] memory);
Name
Type
Description
_collateral
address
Address of the collateral
Name
Type
Description
address[]
List of addresses
representing available
strategies for the collateral
function isValidStrategy(address _collateral, address _strategy) 
external view returns (bool);
Name
Type
Description
_collateral
address
Address of the collateral
_strategy
address
Address of the strategy
isValidStrategy


---
## Page 77

77
Get the amount of collateral in all Strategies
Parameters
Returns
Get the amount of collateral in vault
Parameters
Name
Type
Description
bool
True if the strategy is linked
to the collateral, otherwise
False
function getCollateralInStrategies(address _collateral) public view 
returns (uint256 amountInStrategies);
Name
Type
Description
_collateral
address
Address of the collateral
Name
Type
Description
amountInStrategies
uint256
amountInStrategies
function getCollateralInVault(address _collateral) public view returns 
(uint256 amountInVault);
getCollateralInStrategies
getCollateralInVault


---
## Page 78

78
Returns
Get the amount of collateral allocated in a strategy
Parameters
Returns
Name
Type
Description
_collateral
address
Address of the collateral
Name
Type
Description
amountInVault
uint256
amountInVault
function getCollateralInAStrategy(address _collateral, address 
_strategy) public view returns (uint256 allocatedAmt);
Name
Type
Description
_collateral
address
Address of the collateral
_strategy
address
Address of the strategy
Name
Type
Description
allocatedAmt
uint256
Allocated amount
getCollateralInAStrategy
Events
CollateralAdded


---
## Page 79

79
event CollateralAdded(address collateral, CollateralBaseData data);
event CollateralRemoved(address collateral);
event CollateralInfoUpdated(address collateral, CollateralBaseData 
data);
event CollateralStrategyAdded(address collateral, address strategy);
event CollateralStrategyUpdated(address collateral, address strategy);
event CollateralStrategyRemoved(address collateral, address strategy);
CollateralRemoved
CollateralInfoUpdated
CollateralStrategyAdded
CollateralStrategyUpdated
CollateralStrategyRemoved
Errors
CollateralExists


---
## Page 80

80
error CollateralExists();
error CollateralDoesNotExist();
error CollateralStrategyExists();
error CollateralStrategyMapped();
error CollateralStrategyNotMapped();
error CollateralNotSupportedByStrategy();
error CollateralAllocationPaused();
CollateralDoesNotExist
CollateralStrategyExists
CollateralStrategyMapped
CollateralStrategyNotMapped
CollateralNotSupportedByStrategy
CollateralAllocationPaused


---
## Page 81

81
error CollateralStrategyInUse();
error AllocationPercentageLowerThanAllocatedAmt();
error IsDefaultStrategy();
struct CollateralData {
    bool mintAllowed;
    bool redeemAllowed;
    bool allocationAllowed;
    bool exists;
    address defaultStrategy;
    uint16 baseMintFee;
    uint16 baseRedeemFee;
    uint16 downsidePeg;
    uint16 desiredCollateralComposition;
    uint16 collateralCapacityUsed;
    uint256 conversionFactor;
}
CollateralStrategyInUse
AllocationPercentageLowerThanAllocatedAmt
IsDefaultStrategy
Structs
CollateralData
StrategyData


---
## Page 82

82
struct StrategyData {
    uint16 allocationCap;
    bool exists;
}


---
## Page 83

83
SPA Buyback
Git Source
Inherits: Initializable, OwnableUpgradeable, ReentrancyGuardUpgradeable
Author: Sperax Foundation
This contract allows users to exchange SPA tokens for USDs tokens.
Users can provide SPA tokens and receive USDs tokens in return based on the
current exchange rate.
A percentage of the provided SPA tokens are distributed as rewards, and the rest
are burned.
address public veSpaRewarder;
uint256 public rewardPercentage;
address public oracle;
State Variables
veSpaRewarder
rewardPercentage
oracle


---
## Page 84

84
Contract initializer
Parameters
Emergency withdrawal function for unexpected situations
Can only be called by the owner
Parameters
constructor();
function initialize(address _veSpaRewarder, uint256 _rewardPercentage) 
external initializer;
Name
Type
Description
_veSpaRewarder
address
Rewarder's address
_rewardPercentage
uint256
Percentage of SPA to be
rewarded
function withdraw(address _token, address _receiver, uint256 _amount) 
external onlyOwner;
Functions
constructor
initialize
withdraw


---
## Page 85

85
Changes the reward percentage
Example value for _newRewardPercentage = 5000 for 50%
Parameters
Update veSpaRewarder address
Parameters
Name
Type
Description
_token
address
Address of the asset to be
withdrawn
_receiver
address
Address of the receiver of
tokens
_amount
uint256
Amount of tokens to be
withdrawn
function updateRewardPercentage(uint256 _newRewardPercentage) external 
onlyOwner;
Name
Type
Description
_newRewardPercentage
uint256
New Reward Percentage
function updateVeSpaRewarder(address _newVeSpaRewarder) external 
onlyOwner;
updateRewardPercentage
updateVeSpaRewarder


---
## Page 86

86
Update oracle address
Parameters
Function to buy USDs for SPA for frontend
Parameters
Name
Type
Description
_newVeSpaRewarder
address
is the address of desired
veSpaRewarder
function updateOracle(address _newOracle) external onlyOwner;
Name
Type
Description
_newOracle
address
is the address of desired
oracle
function buyUSDs(uint256 _spaIn, uint256 _minUSDsOut) external;
Name
Type
Description
_spaIn
uint256
Amount of SPA tokens
_minUSDsOut
uint256
Minimum amount out in
USDs
updateOracle
buyUSDs
getSPAReqdForUSDs


---
## Page 87

87
Calculates and returns SPA amount required for _usdsAmount
Parameters
Returns
Buy USDs for SPA if you want a different receiver
Parameters
function getSPAReqdForUSDs(uint256 _usdsAmount) external view returns 
(uint256);
Name
Type
Description
_usdsAmount
uint256
USDs amount the user
wants
Name
Type
Description
uint256
Amount of SPA required
function buyUSDs(address _receiver, uint256 _spaIn, uint256 
_minUSDsOut) public nonReentrant;
Name
Type
Description
_receiver
address
Receiver of USDs
_spaIn
uint256
Amount of SPA tokens
_minUSDsOut
uint256
Minimum amount out in
USDs
buyUSDs


---
## Page 88

88
Sends available SPA in this contract to rewarder based on rewardPercentage and
burns the rest
Returns the amount of USDS for SPA amount in
Parameters
Returns
Returns the amount of USDS for SPA amount in
function distributeAndBurnSPA() public;
function getUsdsOutForSpa(uint256 _spaIn) public view returns 
(uint256);
Name
Type
Description
_spaIn
uint256
Amount of SPA tokens
Name
Type
Description
uint256
Amount of USDs user will
get
function _getUsdsOutForSpa(uint256 _spaIn) private view returns 
(uint256, uint256);
distributeAndBurnSPA
getUsdsOutForSpa
_getUsdsOutForSpa


---
## Page 89

89
Parameters
Returns
Retrieves price data from the oracle contract for SPA and USDS tokens.
Returns
Name
Type
Description
_spaIn
uint256
Amount of SPA tokens
Name
Type
Description
uint256
Amount of USDs user will
get
uint256
function _getOracleData() private view returns (uint256, uint256, 
uint256, uint256);
Name
Type
Description
uint256
The price of USDS in SPA,
the price of SPA in USDS,
and their respective
precisions.
uint256
uint256
uint256
_getOracleData
_isValidRewardPercentage


---
## Page 90

90
Checks if the provided reward percentage is valid.
The reward percentage must be a non-zero value and should not exceed the
maximum percentage value.
Parameters
function _isValidRewardPercentage(uint256 _rewardPercentage) private 
pure;
Name
Type
Description
_rewardPercentage
uint256
The reward percentage to
validate.
event BoughtBack(
    address indexed receiverOfUSDs, address indexed senderOfSPA, 
uint256 spaPrice, uint256 spaAmount, uint256 usdsAmount
);
event Withdrawn(address indexed token, address indexed receiver, 
uint256 amount);
event SPARewarded(uint256 spaAmount);
Events
BoughtBack
Withdrawn
SPARewarded


---
## Page 91

91
event SPABurned(uint256 spaAmount);
event RewardPercentageUpdated(uint256 newRewardPercentage);
event VeSpaRewarderUpdated(address newVeSpaRewarder);
event OracleUpdated(address newOracle);
error CannotWithdrawSPA();
error InsufficientUSDsBalance(uint256 toSend, uint256 bal);
SPABurned
RewardPercentageUpdated
VeSpaRewarderUpdated
OracleUpdated
Errors
CannotWithdrawSPA
InsufficientUSDsBalance


---
## Page 92

92
MasterPriceOracle
Git Source
Inherits: Ownable, IOracle
Author: Sperax Foundation
Communicates with different price feeds to get the price
Store price feed data for tokens.
Add/Update price feed for _token
Have to be extra cautious while updating the price feed.
Parameters
mapping(address => PriceFeedData) public tokenPriceFeed;
function updateTokenPriceFeed(address _token, address _source, bytes 
memory _data) external onlyOwner;
State Variables
tokenPriceFeed
Functions
updateTokenPriceFeed


---
## Page 93

93
Remove an existing price feed for _token .
Parameters
Gets the price feed for _token .
Function reverts if the price feed does not exists.
Parameters
Name
Type
Description
_token
address
address of the desired
token.
_source
address
price feed source.
_data
bytes
call data for fetching the
price feed.
function removeTokenPriceFeed(address _token) external onlyOwner;
Name
Type
Description
_token
address
address of the token.
function getPrice(address _token) external view returns (PriceData 
memory);
removeTokenPriceFeed
getPrice


---
## Page 94

94
Returns
Validates if price feed exists for a _token
Function reverts if price feed not set.
Parameters
Returns
Name
Type
Description
_token
address
address of the desired
token.
Name
Type
Description
PriceData
(uint256 price, uint256
precision).
function priceFeedExists(address _token) external view returns (bool);
Name
Type
Description
_token
address
address of the desired
token.
Name
Type
Description
bool
bool if price feed exists.
priceFeedExists
_getPriceFeed


---
## Page 95

95
Gets the price feed for a _token  given the feed data.
Parameters
Returns
function _getPriceFeed(address _token, address _source, bytes memory 
_msgData)
    private
    view
    returns (PriceData memory priceData);
Name
Type
Description
_token
address
address of the desired
token.
_source
address
price feed source.
_msgData
bytes
call data for fetching feed.
Name
Type
Description
priceData
PriceData
(uint256 price, uint256
precision).
event PriceFeedUpdated(address indexed token, address indexed source, 
bytes msgData);
Events
PriceFeedUpdated
PriceFeedRemoved


---
## Page 96

96
event PriceFeedRemoved(address indexed token);
error InvalidAddress();
error UnableToFetchPriceFeed(address token);
error InvalidPriceFeed(address token);
error PriceFeedNotFound(address token);
Errors
InvalidAddress
UnableToFetchPriceFeed
InvalidPriceFeed
PriceFeedNotFound


---
## Page 97

97
Yield Reserve
Git Source
Inherits: ReentrancyGuard, Ownable
Author: Sperax Foundation
This contract allows users to swap supported stable-coins for yield earned by the
USDs protocol. It sends USDs to the Dripper contract for rebase and to the Buyback
Contract for buyback.
address public vault;
address public oracle;
address public buyback;
address public dripper;
State Variables
vault
oracle
buyback
dripper


---
## Page 98

98
Constructor of the YieldReserve contract.
Parameters
uint256 public buybackPercentage;
mapping(address => TokenData) public tokenData;
constructor(address _buyback, address _vault, address _oracle, address 
_dripper);
Name
Type
Description
_buyback
address
Address of the Buyback
contract.
_vault
address
Address of the Vault.
_oracle
address
Address of the Oracle.
_dripper
address
Address of the Dripper
contract.
buybackPercentage
tokenData
Functions
constructor
swap


---
## Page 99

99
Swap function to be called by frontend users.
Parameters
Allow or disallow a specific token  for use as a source/input token.
Parameters
function swap(address _srcToken, address _dstToken, uint256 _amountIn, 
uint256 _minAmountOut) external;
Name
Type
Description
_srcToken
address
Source/Input token.
_dstToken
address
Destination/Output token.
_amountIn
uint256
Input token amount.
_minAmountOut
uint256
Minimum output tokens
expected.
function toggleSrcTokenPermission(address _token, bool _isAllowed) 
external onlyOwner;
Name
Type
Description
_token
address
Address of the token to be
allowed or disallowed.
_isAllowed
bool
If set to true, the token will
be allowed as a
source/input token;
otherwise, it will be
disallowed.
toggleSrcTokenPermission


---
## Page 100

100
Allow or disallow a specific token  for use as a destination/output token.
Reverts if caller is not owner.
Parameters
Emergency withdrawal function for unexpected situations.
Parameters
function toggleDstTokenPermission(address _token, bool _isAllowed) 
external onlyOwner;
Name
Type
Description
_token
address
Address of the token to be
allowed or disallowed.
_isAllowed
bool
If set to true, the token will
be allowed as a
destination/output token;
otherwise, it will be
disallowed.
function withdraw(address _token, address _receiver, uint256 _amount) 
external onlyOwner;
toggleDstTokenPermission
withdraw


---
## Page 101

101
Set the percentage of newly minted USDs to be sent to the Buyback contract.
Reverts if caller is not owner.
The remaining USDs are sent to VaultCore for rebase.
Parameters
Update the address of the Buyback contract.
Reverts if caller is not owner.
Name
Type
Description
_token
address
Address of the asset to be
withdrawn.
_receiver
address
Address of the receiver of
tokens.
_amount
uint256
Amount of tokens to be
withdrawn.
function updateBuybackPercentage(uint256 _toBuyback) public onlyOwner;
Name
Type
Description
_toBuyback
uint256
The percentage of USDs
sent to Buyback (e.g., 3000
for 30%).
function updateBuyback(address _newBuyBack) public onlyOwner;
updateBuybackPercentage
updateBuyback


---
## Page 102

102
Parameters
Update the address of the Oracle contract.
Reverts if caller is not owner.
Parameters
Update the address of the Dripper contract.
Reverts if caller is not owner.
Parameters
Name
Type
Description
_newBuyBack
address
New address of the
Buyback contract.
function updateOracle(address _newOracle) public onlyOwner;
Name
Type
Description
_newOracle
address
New address of the Oracle
contract.
function updateDripper(address _newDripper) public onlyOwner;
updateOracle
updateDripper


---
## Page 103

103
Update the address of the VaultCore contract.
Reverts if caller is not owner.
Parameters
Swap allowed source token for allowed destination token.
Parameters
Name
Type
Description
_newDripper
address
New address of the Dripper
contract.
function updateVault(address _newVault) public onlyOwner;
Name
Type
Description
_newVault
address
New address of the
VaultCore contract.
function swap(address _srcToken, address _dstToken, uint256 _amountIn, 
uint256 _minAmountOut, address _receiver)
    public
    nonReentrant;
updateVault
swap


---
## Page 104

104
Mints USDs directly with the allowed collaterals for USDs.
Only collaterals configured in USDs vault are allowed to be used for minting.
Parameters
Get an estimate of the output token amount for a given input token amount.
Parameters
Name
Type
Description
_srcToken
address
Source/Input token.
_dstToken
address
Destination/Output token.
_amountIn
uint256
Input token amount.
_minAmountOut
uint256
Minimum output tokens
expected.
_receiver
address
Receiver of the tokens.
function mintUSDs(address _token) public nonReentrant;
Name
Type
Description
_token
address
Address of token to mint
USDs with
function getTokenBForTokenA(address _srcToken, address _dstToken, 
uint256 _amountIn) public view returns (uint256);
mintUSDs
getTokenBForTokenA


---
## Page 105

105
Returns
Distributes USDs to the Buyback and Dripper contracts based on
buybackPercentage.
Sends a portion of the USDs balance to the Buyback contract and the remaining to
the Dripper contract for rebase.
Name
Type
Description
_srcToken
address
Input token address.
_dstToken
address
Output token address.
_amountIn
uint256
Input amount of _srcToken.
Name
Type
Description
uint256
Estimated output token
amount.
function _sendUSDs() private;
event Swapped(
    address indexed srcToken, address indexed dstToken, address indexed 
dstReceiver, uint256 amountIn, uint256 amountOut
);
_sendUSDs
Events
Swapped


---
## Page 106

106
event USDsMintedViaSwapper(address indexed collateralAddr, uint256 
usdsMinted);
event Withdrawn(address indexed token, address indexed receiver, 
uint256 amount);
event BuybackPercentageUpdated(uint256 toBuyback);
event BuybackUpdated(address newBuyback);
event OracleUpdated(address newOracle);
event VaultUpdated(address newVault);
USDsMintedViaSwapper
Withdrawn
BuybackPercentageUpdated
BuybackUpdated
OracleUpdated
VaultUpdated
DripperUpdated


---
## Page 107

107
event DripperUpdated(address newDripper);
event USDsSent(uint256 toBuyback, uint256 toDripper);
event SrcTokenPermissionUpdated(address indexed token, bool isAllowed);
event DstTokenPermissionUpdated(address indexed token, bool isAllowed);
error InvalidSourceToken();
error InvalidDestinationToken();
USDsSent
SrcTokenPermissionUpdated
DstTokenPermissionUpdated
Errors
InvalidSourceToken
InvalidDestinationToken
AlreadyInDesiredState


---
## Page 108

108
error AlreadyInDesiredState();
error TokenPriceFeedMissing();
struct TokenData {
    bool srcAllowed;
    bool dstAllowed;
    uint160 conversionFactor;
}
TokenPriceFeedMissing
Structs
TokenData


---
## Page 109

109
Fee Calculator
Git Source
Inherits: IFeeCalculator
Author: Sperax Foundation
A contract that calculates fees for minting and redeeming USDs.
uint16 private constant LOWER_THRESHOLD = 5000;
uint16 private constant UPPER_THRESHOLD = 15000;
uint16 private constant DISCOUNT_FACTOR = 2;
uint16 private constant PENALTY_MULTIPLIER = 2;
State Variables
LOWER_THRESHOLD
UPPER_THRESHOLD
DISCOUNT_FACTOR
PENALTY_MULTIPLIER


---
## Page 110

110
Calibrates fee for a particular collateral
Parameters
uint32 private constant CALIBRATION_GAP = 1 days;
ICollateralManager public immutable COLLATERAL_MANAGER;
mapping(address => FeeData) public collateralFee;
constructor(address _collateralManager);
function calibrateFee(address _collateral) external;
CALIBRATION_GAP
COLLATERAL_MANAGER
collateralFee
Functions
constructor
calibrateFee


---
## Page 111

111
Calculates fee to be collected for minting
Parameters
Returns
Calculates fee to be collected for redeeming
Parameters
Name
Type
Description
_collateral
address
Address of the desired
collateral
function getMintFee(address _collateral) external view returns 
(uint256);
Name
Type
Description
_collateral
address
Name
Type
Description
uint256
(uint256) baseFeeIn
function getRedeemFee(address _collateral) external view returns 
(uint256);
getMintFee
getRedeemFee


---
## Page 112

112
Returns
Calibrates fee for all the collaterals registered
Helper function for calibrating fee for a collateral
Parameters
Name
Type
Description
_collateral
address
Name
Type
Description
uint256
(uint256) baseFeeOut
function calibrateFeeForAll() public;
function _calibrateFee(address _collateral) private;
Name
Type
Description
_collateral
address
Address of the desired
collateral
calibrateFeeForAll
_calibrateFee
Events
FeeCalibrated


---
## Page 113

113
event FeeCalibrated(address indexed collateral, uint16 mintFee, uint16 
redeemFee);
error InvalidCalibration();
struct FeeData {
    uint32 nextUpdate;
    uint16 mintFee;
    uint16 redeemFee;
}
Errors
InvalidCalibration
Structs
FeeData


---
## Page 114

114
RebaseManager
Git Source
Inherits: IRebaseManager, Ownable
Author: Sperax Foundation
This contract handles the configuration and execution of the rebasing mechanism
for the USDs stablecoin. It ensures that rebases occur only when certain
prerequisites are fulfilled, such as the time gap between rebases and acceptable
APR (Annual Percentage Rate) ranges.
The Rebase Manager coordinates with the Vault and Dripper contracts to manage
the rebase process.
uint256 private constant ONE_YEAR = 365 days;
address public vault;
address public dripper;
State Variables
ONE_YEAR
vault
dripper


---
## Page 115

115
Constructor to initialize the Rebase Manager
uint256 public gap;
uint256 public aprCap;
uint256 public aprBottom;
uint256 public lastRebaseTS;
modifier onlyVault();
gap
aprCap
aprBottom
lastRebaseTS
Functions
onlyVault
constructor


---
## Page 116

116
Parameters
Get the current amount valid for rebase
Function is called by the vault while rebasing
Returns
constructor(address _vault, address _dripper, uint256 _gap, uint256 
_aprCap, uint256 _aprBottom);
Name
Type
Description
_vault
address
Address of the vault
contract
_dripper
address
Address of the dripper
contract for collecting USDs
_gap
uint256
Minimum time gap required
between two consecutive
rebases
_aprCap
uint256
Maximum allowed APR for a
rebase
_aprBottom
uint256
Minimum allowed APR for a
rebase
function fetchRebaseAmt() external onlyVault returns (uint256);
Name
Type
Description
uint256
The available amount for
rebasing USDs
fetchRebaseAmt


---
## Page 117

117
Updates the vault address
Parameters
Updates the dripper contract for USDs vault
Parameters
Update the minimum time gap required between two rebases
Parameters
function updateVault(address _newVault) public onlyOwner;
Name
Type
Description
_newVault
address
Address of the new vault
contract
function updateDripper(address _dripper) public onlyOwner;
Name
Type
Description
_dripper
address
Address of the new dripper
contract
function updateGap(uint256 _gap) public onlyOwner;
updateVault
updateDripper
updateGap


---
## Page 118

118
Update the APR requirements for each rebase
Parameters
Gets the current available rebase fund
Returns
Name
Type
Description
_gap
uint256
Updated gap time
function updateAPR(uint256 _aprBottom, uint256 _aprCap) public 
onlyOwner;
Name
Type
Description
_aprBottom
uint256
New minimum APR for a
rebase
_aprCap
uint256
New maximum APR for a
rebase
function getAvailableRebaseAmt() public view returns (uint256);
Name
Type
Description
uint256
Current balance in the vault
plus collectable dripped
USDs amount
updateAPR
getAvailableRebaseAmt


---
## Page 119

119
Gets the minimum and maximum rebase USDs amount based on the APR config
Returns
function getMinAndMaxRebaseAmt() public view returns (uint256, 
uint256);
Name
Type
Description
uint256
Minimum and maximum
rebase amounts
uint256
event VaultUpdated(address vault);
event DripperUpdated(address dripper);
event GapUpdated(uint256 gap);
getMinAndMaxRebaseAmt
Events
VaultUpdated
DripperUpdated
GapUpdated


---
## Page 120

120
event APRUpdated(uint256 aprBottom, uint256 aprCap);
error CallerNotVault(address caller);
error InvalidAPRConfig(uint256 aprBottom, uint256 aprCap);
APRUpdated
Errors
CallerNotVault
InvalidAPRConfig


---
## Page 121

121
Dripper
Git Source
Inherits: IDripper, Ownable
Author: Sperax Foundation
This contract releases tokens at a steady rate to the Vault contract, for rebasing the
USDs stablecoin.
The Dripper contract ensures that tokens are released gradually over time, allowing
for consistent and controlled distribution.
address public vault;
uint256 public dripRate;
uint256 public dripDuration;
State Variables
vault
dripRate
dripDuration
lastCollectTS


---
## Page 122

122
Constructor to initialize the Dripper.
Parameters
Emergency fund recovery function.
Transfers the asset to the owner of the contract.
Parameters
uint256 public lastCollectTS;
constructor(address _vault, uint256 _dripDuration);
Name
Type
Description
_vault
address
Address of the contract that
receives the dripped
tokens.
_dripDuration
uint256
The duration over which
tokens are dripped.
function recoverTokens(address _asset) external onlyOwner;
Functions
constructor
recoverTokens


---
## Page 123

123
Function to be used to send USDs to dripper and update dripRate .
Parameters
Transfers the dripped tokens to the vault.
This function also updates the dripRate based on the fund state.
Returns
Name
Type
Description
_asset
address
Address of the asset to
recover.
function addUSDs(uint256 _amount) external;
Name
Type
Description
_amount
uint256
Amount of USDs to be sent
form caller to this contract.
function collect() public returns (uint256);
Name
Type
Description
uint256
The amount of tokens
collected and transferred to
the vault.
addUSDs
collect


---
## Page 124

124
Update the vault address.
Parameters
Updates the dripDuration.
Parameters
Gets the collectible amount of tokens at the current time.
Returns
function updateVault(address _vault) public onlyOwner;
Name
Type
Description
_vault
address
Address of the new vault
contract.
function updateDripDuration(uint256 _dripDuration) public onlyOwner;
Name
Type
Description
_dripDuration
uint256
The desired drip duration to
be set.
function getCollectableAmt() public view returns (uint256);
updateVault
updateDripDuration
getCollectableAmt


---
## Page 125

125
Name
Type
Description
uint256
The amount of tokens that
can be collected.
event Collected(uint256 amount);
event Recovered(address owner, uint256 amount);
event VaultUpdated(address vault);
event DripDurationUpdated(uint256 dripDuration);
event USDsAdded(uint256 _amount);
Events
Collected
Recovered
VaultUpdated
DripDurationUpdated
USDsAdded


---
## Page 126

126
error NothingToRecover();
Errors
NothingToRecover


---
## Page 127

127
BaseStrategy
Git Source
Inherits: Initializable, OwnableUpgradeable, ReentrancyGuardUpgradeable
Author: Sperax Foundation
Contract acts as a single interface for implementing specific yield-earning
strategies.
address public vault;
uint16 public withdrawSlippage;
uint16 public depositSlippage;
uint16 public harvestIncentiveRate;
State Variables
vault
withdrawSlippage
depositSlippage
harvestIncentiveRate


---
## Page 128

128
address[] internal assetsMapped;
address[] public rewardTokenAddress;
mapping(address => address) public assetToPToken;
uint256[40] private __gap__;
modifier onlyVault();
modifier onlyVaultOrOwner();
assetsMapped
rewardTokenAddress
assetToPToken
gap
Functions
onlyVault
onlyVaultOrOwner


---
## Page 129

129
Update the linked vault contract.
Parameters
Updates the HarvestIncentive rate for the user.
Parameters
A function to recover any erc20 token sent to this strategy mistakenly.
constructor();
function updateVault(address _newVault) external onlyOwner;
Name
Type
Description
_newVault
address
Address of the new Vault.
function updateHarvestIncentiveRate(uint16 _newRate) external 
onlyOwner;
Name
Type
Description
_newRate
uint16
new Desired rate.
constructor
updateVault
updateHarvestIncentiveRate
recoverERC20


---
## Page 130

130
Only callable by owner.
reverts if amount > balance.
Parameters
Deposit an amount of asset into the platform.
Parameters
Withdraw an amount of asset from the platform.
function recoverERC20(address token, address receiver, uint256 amount) 
external onlyOwner;
Name
Type
Description
token
address
Address of the token.
receiver
address
Receiver of the token.
amount
uint256
Amount to be recovered.
function deposit(address _asset, uint256 _amount) external virtual;
Name
Type
Description
_asset
address
Address for the asset.
_amount
uint256
Units of asset to deposit.
deposit
withdraw


---
## Page 131

131
Parameters
Returns
Withdraw an amount of asset from the platform to vault.
Parameters
function withdraw(address _recipient, address _asset, uint256 _amount)
    external
    virtual
    returns (uint256 amountReceived);
Name
Type
Description
_recipient
address
Address to which the asset
should be sent.
_asset
address
Address of the asset.
_amount
uint256
Units of asset to withdraw.
Name
Type
Description
amountReceived
uint256
The actual amount
received.
function withdrawToVault(address _asset, uint256 _amount) external 
virtual returns (uint256 amount);
Name
Type
Description
_asset
address
Address of the asset.
_amount
uint256
Units of asset to withdraw.
withdrawToVault


---
## Page 132

132
Withdraw the interest earned of asset from the platform.
Parameters
Collect accumulated reward token and send to Vault.
Get the amount of a specific asset held in the strategy, excluding the interest.
Curve: assuming balanced withdrawal.
Parameters
function collectInterest(address _asset) external virtual;
Name
Type
Description
_asset
address
Address of the asset.
function collectReward() external virtual;
function checkBalance(address _asset) external view virtual returns 
(uint256);
Name
Type
Description
_asset
address
Address of the asset.
collectInterest
collectReward
checkBalance


---
## Page 133

133
Returns
Get the amount of a specific asset held in the strategy, excluding the interest and
any locked liquidity that is not available for instant withdrawal.
Curve: assuming balanced withdrawal.
Parameters
Returns
AAVE: Get the interest earned on a specific asset. Curve: Get the total interest
earned.
Name
Type
Description
uint256
uint256 Balance of _asset in
the strategy.
function checkAvailableBalance(address _asset) external view virtual 
returns (uint256);
Name
Type
Description
_asset
address
Address of the asset.
Name
Type
Description
uint256
uint256 Available balance
inside the strategy for
_asset.
checkAvailableBalance
checkInterestEarned


---
## Page 134

134
Curve: to avoid double-counting, _asset has to be of index 'entryTokenIndex'.
Parameters
Returns
Get the amount of claimable reward.
Returns
function checkInterestEarned(address _asset) external view virtual 
returns (uint256);
Name
Type
Description
_asset
address
Address of the asset.
Name
Type
Description
uint256
uint256 Amount of interest
earned.
function checkRewardEarned() external view virtual returns 
(RewardData[] memory);
Name
Type
Description
RewardData[]
struct array of type
RewardData (address token,
uint256 amount).
checkRewardEarned
checkLPTokenBalance


---
## Page 135

135
Get the total LP token balance for a asset.
Parameters
Check if an asset/collateral is supported.
Parameters
Returns
Change to a new depositSlippage & withdrawSlippage.
function checkLPTokenBalance(address _asset) external view virtual 
returns (uint256);
Name
Type
Description
_asset
address
Address of the asset.
function supportsCollateral(address _asset) external view virtual 
returns (bool);
Name
Type
Description
_asset
address
Address of the asset.
Name
Type
Description
bool
bool Whether asset is
supported.
supportsCollateral
updateSlippage


---
## Page 136

136
Parameters
Initialize the base properties of the strategy.
Parameters
Provide support for asset by passing its pToken address. Add to internal mappings
and execute the platform specific, abstract method _abstractSetPToken .
function updateSlippage(uint16 _depositSlippage, uint16 
_withdrawSlippage) public onlyOwner;
Name
Type
Description
_depositSlippage
uint16
Slippage tolerance for
allocation.
_withdrawSlippage
uint16
Slippage tolerance for
withdrawal.
function _initialize(address _vault, uint16 _depositSlippage, uint16 
_withdrawSlippage) internal;
Name
Type
Description
_vault
address
Address of the USDs Vault.
_depositSlippage
uint16
Allowed max slippage for
Deposit.
_withdrawSlippage
uint16
Allowed max slippage for
withdraw.
_initialize
_setPTokenAddress


---
## Page 137

137
Parameters
Remove a supported asset by passing its index. This method can only be called by
the system owner.
Parameters
Returns
function _setPTokenAddress(address _asset, address _pToken) internal;
Name
Type
Description
_asset
address
Address for the asset.
_pToken
address
Address for the
corresponding platform
token.
function _removePTokenAddress(uint256 _assetIndex) internal returns 
(address asset);
Name
Type
Description
_assetIndex
uint256
Index of the asset to be
removed.
Name
Type
Description
asset
address
address which is removed.
_removePTokenAddress
_splitAndSendReward


---
## Page 138

138
Splits and sends the accumulated rewards to harvestor and yield receiver.
Sends the amount to harvestor as per harvestIncentiveRate  and sends the rest to
yield receiver.
Parameters
Returns
Call the necessary approvals for the underlying strategy.
function _splitAndSendReward(address _token, address _yieldReceiver, 
address _harvestor, uint256 _amount)
    internal
    returns (uint256);
Name
Type
Description
_token
address
Address of the reward
token.
_yieldReceiver
address
Address of the yield
receiver.
_harvestor
address
Address of the harvestor.
_amount
uint256
to be split and sent.
Name
Type
Description
uint256
uint256 Harvested amount
sent to yield receiver.
function _abstractSetPToken(address _asset, address _pToken) internal 
virtual;
_abstractSetPToken


---
## Page 139

139
Parameters
Name
Type
Description
_asset
address
Address of the asset.
_pToken
address
Address of the
corresponding receipt
token.
event VaultUpdated(address newVaultAddr);
event YieldReceiverUpdated(address newYieldReceiver);
event PTokenAdded(address indexed asset, address pToken);
event PTokenRemoved(address indexed asset, address pToken);
Events
VaultUpdated
YieldReceiverUpdated
PTokenAdded
PTokenRemoved
Deposit


---
## Page 140

140
event Deposit(address indexed asset, uint256 amount);
event Withdrawal(address indexed asset, uint256 amount);
event SlippageUpdated(uint16 depositSlippage, uint16 withdrawSlippage);
event HarvestIncentiveCollected(address indexed token, address indexed 
harvestor, uint256 amount);
event HarvestIncentiveRateUpdated(uint16 newRate);
event InterestCollected(address indexed asset, address indexed 
recipient, uint256 amount);
event RewardTokenCollected(address indexed rwdToken, address indexed 
recipient, uint256 amount);
Withdrawal
SlippageUpdated
HarvestIncentiveCollected
HarvestIncentiveRateUpdated
InterestCollected
RewardTokenCollected


---
## Page 141

141
error CallerNotVault(address caller);
error CallerNotVaultOrOwner(address caller);
error PTokenAlreadySet(address collateral, address pToken);
error InvalidIndex();
error CollateralNotSupported(address asset);
error InvalidAssetLpPair(address asset, address lpToken);
Errors
CallerNotVault
CallerNotVaultOrOwner
PTokenAlreadySet
InvalidIndex
CollateralNotSupported
InvalidAssetLpPair


---
## Page 142

142
error CollateralAllocated(address asset);
struct RewardData {
    address token;
    uint256 amount;
}
CollateralAllocated
Structs
RewardData


---
## Page 143

143
Deployed contracts
Name
Explorer link
USDs
https://arbiscan.io/address/0xD74f5255D55
7944cf7Dd0E45FF521520002D5748
Vault
https://arbiscan.io/address/0x6Bbc476Ee3
5CBA9e9c3A59fc5b10d7a0BC6f74Ca
CollateralManager
https://arbiscan.io/address/0xdA423BFa1E1
96598190deEfbAFC28aDb36FaeDF0
FeeCalculator
https://arbiscan.io/address/0xd122840Fa5b
48B2ddB723cCC5928f88dcb558AFC
MasterPrice Oracle
https://arbiscan.io/address/0x14D99412dAB
1878dC01Fe7a1664cdE85896e8E50
SPABuyback
https://arbiscan.io/address/0xFbc0d3cA777
722d234FE01dba94DeDeDb277AFe3
YieldReserve
https://arbiscan.io/address/0xfD14C8ef099
3fd9409f7820BA8BA80370529d861
Dripper
https://arbiscan.io/address/0xd50193e8fFb
00beA274bD2b11d0a7Ea08dA044c1
RebaseManager
https://arbiscan.io/address/0x297331A0155
B1e30bBFA85CF3609eC0fF037BEEC
AaveStrategy
https://arbiscan.io/address/0x974993ee8df
7f5c4f3f9aa4eb5b4534f359f3388
StargateStrategy 
https://arbiscan.io/address/0xb9c9100720d
8c6e35eb8dd0f9c1abef320daa136
CompoundStrategy
https://arbiscan.io/address/0xBCeb486257
71E35420076f79Ec6921E783a82442


---
## Page 144

144
Buyback Contract
Buyback contract is designed to decentralize the SPA buyback process while
adding a boosting mechanism to continuously grow USDs TVL with protocol
revenue (Yield + Fee). This contract allows users to directly purchase USDs with
SPA. The available-for-purchase USDs comes from two sources - USDs
mint/redeem fees and USDs yield. The contract distributes 70% of the yield to
USDs holders and the rest 30% goes to SPA buyback and burn.
1. Protocol Yield - The yield is collected in multiple tokens through pool fee
(USDC, etc.) and farm rewards. This yield is converted to USDs. A portion is
sent to buyback contract and remaining to auto-yield reserve.
• Swap yield tokens to eligible collateral tokens (for minting USDs) using
DEXes based on the path of lowest slippage
• Mint USDs using the collateral tokens
• Deposit 30% of the yield (USDs received in previous step) that will be used
to buyback SPA into the buyback contract and the rest of the USDs is
transferred back to the USDs vault’s auto-yield reserve. Yield share
percentage is set to 30% currently and can be changed in future through
governance.
2. Protocol Fee - Mint and redemption fee from the USDs protocol is collected in
the form of USDs. This component is directly deposited to the Buyback
contract.
3. Buyback SPA - Any users or external wallet can view the USDs balance in the
Buyback contract and sell their SPA tokens for USDs.
4. Burn 2.0 - 30% of the SPA received in step 3 is burnt and remaining 70% is
sent to USDs holding wallets. The burn percentage can be changed through
governance.
Sperax protocol deposits USDC.e to Stargate strategy (Stargate-LP USDC.e) and
stakes LP tokens. Protocol earns STG token.
Example flow of the buyback contract: 


---
## Page 145

145
1. Sell STG tokens for USDC.e
2. Mint USDs from USDC.e
3. Transfer USDs to the Buyback contract
4. Deposit USDs Mint and Redemption Fees directly into the Buyback contract as
and when they are collected
5. Users can view the amount of USDs left in the contract.
6. USDs is bought by the users using their SPA and contract receives SPA against
the USDs.
Technical Specification
Buyback Architecture
View Functions


![Image 1](images/page145_img1.png)


---
## Page 146

146
1. getSPAReqdForUSDs - Input the target USDs amount to receive and get an
estimate of how many SPA tokens are needed. 
a. Function: getSPAReqdForUSDs(uint256 _usdsAmount) external view returns
(uint256)
b. Input : _usdsAmount is the amount of USDs to purchase 
c. Output: Estimated amount of SPA required 
d. Example: Suppose getSPAReqdForUSDs(1e18) returns 100*1e18. It means
the contract estimates that one will need to speed 100 SPA to purchase 1
USDs at this moment.
2. getUsdsOutForSpa - Input the amount of SPA to be sold and get an estimate of
how many USDs can be purchased. 
a. Function: getUsdsOutForSpa(uint256 _spaIn) external view returns (uint256)
b. Input : _spaIn is the amount of SPA to be sold 
c. Output: Estimated amount of USDs to be received 
d. Example: Suppose getSPAReqdForUSDs(100*1e18) returns 1e18. It means
the contract estimates that one will receive 1 USDs after spending 100 SPA.
User End Write Functions


---
## Page 147

147
1. buyUSDs - Purchase USDs with SPA 
a. Function: buyUSDs(uint256 _spaIn, uint256 _minUSDsOut) external 
b. Input : _spaIn is the amount of SPA to be sold _minUSDsOut is the minimum
amount of USDs to be received 
c. Output : The contract will extract _spaIn amount of SPA from the wallet
executing the transaction, exchange it to USDs, and send USDs back to the
wallet 
d. Example : Suppose wallet A triggers buyUSDs(100*1e18, 1e18) (after he has
already approved the Buyback contract to spend its SPA). The contract will
extract 100 SPA from A, exchange it to USDs, and send USDs back to A.
2. buyUSDs - Purchase USDs with SPA (arbitrary USDs receipt) 
a. Function: buyUSDs(address _receiver, uint256 _spaIn, uint256
_minUSDsOut) external
b. Input : _receiver is the receiver of the purchased USDs _spaIn is the amount
of SPA to be sold _minUSDsOut is the minimum amount of USDs to be
received 
c. Output : The contract will extract _spaIn amount of SPA from the wallet
executing the transaction, exchange it to USDs, and send USDs to the
_receiver wallet 
d. Example : Suppose wallet A triggers buyUSDs(B, 100*1e18, 1e18) (after he
has already approved the Buyback contract to spend its SPA). The contract
will extract 100 SPA from A, exchange it to USDs, and send USDs to B.


---
## Page 148

148
Staking Protocol
Stake SPA to earn rewards from fees and yield
SPA holders can stake SPA tokens and receive veSPA tokens which are non-
transferable. veSPA balance is proportional to the lockup period, meaning if user
locks up for higher duration they receive proportionally more veSPA tokens. veSPA
balance determines the share of staking reward and voting power
1. Staking rewards: Rewards will be distributed proportionally to the user's veSPA
balance. Users who lock SPA for longer periods are eligible for proportionally
more rewards (accrued on a weekly base) than users who locked the same
amount of SPA for shorter periods. Rewards are accumulated through:
• As per SIP-66
, the emission of xSPA for veSPA holders has been
increased to 420,000 xSPA tokens per week from the treasury to account
for the decrement in APR due to cutting the allocation from bought-back
SPA.
• Fee Rewards - 100% of the Fee income from USDs mints and redemptions.
The yield and fee income are originally generated in USDs. It is then swapped
for SPA tokens before distribution. This makes the reward claiming process
simple for stakers and maintains a constant buying pressure on the SPA token.
2. Voting power: once governance protocol is launched, voting power will depend
on users' veSPA balance. Users who are committed to longer lockups will own
more votes, whatever they are voting for.
veSPA balance at the moment of staking will not stay the same all the time - it will
decay/reduce linearly. User's rewards per week and voting power will also
decrease over time, together with the veSPA balance. Stakers can increase their
veSPA balance and thereby their staking rewards and voting power by either
extending the locking period or locking more SPA or re-staking SPA rewards.
At the end of the lockup period, veSPA balance will reduce depending on the pre-
selected withdrawal option:


---
## Page 149

149
1. For Auto-cooldown option - to zero.
2. For the "Staying Staked" option (manual cooldown) - to [0.01917*staked SPA
tokens]. Please note that for new stakers the "Staying Staked option" is not
available.
To stake SPA through our dApp, checkout Staking SPA


---
## Page 150

150
Locking SPA
veSPA is SPA locked with the "vote escrow" mechanism (ve-). This is the
mechanism of locking tokens for relatively long pre-defined time periods. On
staking SPA, the staker receives non-tranferrable tokens veSPA.
The veSPA balance will depend on the amount of SPA tokens locked and the user's
chosen lockup period. Stakers can lock their tokens for a maximum of 4 years or a
minimum of 7 days. A higher lockup period means a higher veSPA balance for the
same amount of SPA staked.
veSPA value = SPA tokens staked * (Lockup Period in days / 365)
Below table shows how veSPA value will be determined
veSPA balance will decay linearly with time. At the end of lockup period, veSPA
balance will reduce to 0 or (0.01917*staked SPA tokens) based on the withdrawal
method user chooses while staking the SPA. Two withdrawal methods were
available to the early stakers, they will work till the end of their lockup period. For all
the new stakers method 1 (Auto-cooldown) stays the only available method.
Lock-up Period
SPA Tokens staked
veSPA value
4 year
1
4
3 year
1
3
2 year
1
2
1 year
1
1
6 months
1
0.5


---
## Page 151

151
1. Auto-cooldown - veSPA balance reduces to 0 at the end of lockup period and
staker is able to withdraw locked SPA balance immediately after expiry date
2. Stay Staked at Residual Value - Stakers can opt to remain staked at the end of
the unlock date at a residual veSPA balance (0.01917*staked SPA tokens). They
can initiate cooldown when 7 days are left in the staking period or anytime after.
After the cooldown period of 7 days is over, they can withdraw the staked SPA
tokens. Check outStay Staked at Residual Valuefor more details.
User stakes 1000 SPA for 4 years 
• At Day 0 user will have 4000 veSPA
• At day 365 user will have 3000 veSPA 
• At day 365*2 user will have 2000 veSPA
• At day 365*3 user will have 1000 veSPA
• At Day 365*4 user will have 0 veSPA or 19.17 veSPA depending on
withdrawal method chosen
Some important points to consider before locking your SPA tokens: 
1. Staking is an irreversible process, once locked the tokens cannot be unlocked
before the unlock date. Users cannot prepone the expiry date or reduce the
amount of locked SPA.
2. Due to precision issues it may not always be possible to choose an exact unlock
date. Users can select the lockup period but the exact unlock date is rounded
down to nearest Thursday UTC. Stakers will be able to choose these eligible
unlock dates in our dapp
.
3. Users rewards per week and voting power will also decrease over time,
together with the veSPA balance. The users who are committed to long-term
staking can increase their rewards per week and voting power by:
• Extending the locking period
• Locking more SPA
• Claiming SPA staking rewards and restaking them into veSPA
(compounding)
Example of veSPA balance decay over time


---
## Page 152

152
Stakers can extend their lockup such that the lockup expiry date is <= 4 years from
the current date. At no point, lockup period can be more than 4 years. 
The lockup period cannot be extended in the following scenarios: 
1. When a staker’s lockup period has expired and they only have residual veSPA
balance 
2. When a staker has already initiated cooldown period Example: If a user has 100
veSPA tokens which expire in 3 years, the user can increase the lockup by a
maximum of 1 year.
Users can also increase their veSPA balance by staking any additional amount of
SPA tokens for the same lockup as their existing veSPA balance. 
Example: if a user has 100 veSPA tokens which are expiring in 34 days, they can
stake any amount of additional SPA for 34 days. The increase in veSPA balance will
be calculated based on the same lockup period as the previously staked tokens.
Extension of Lockup
Increasing Staked Balance


---
## Page 153

153
Withdrawing SPA
Users who initiate staking will get the auto-cooldown feature.  Users who initiated
staking in the past were able select one of two cooldown options that will stay
active till the end of the staking period:
1. Auto-cooldown: the protocol will automatically initiate a cooldown 7 days
before expiry. In this case, the assets will be available immediately after the lock
period, but they will not bring any more rewards post-expiry.
2. Stay staked at residual value (or manual cooldown): After the lock expires, the
assets remain locked with the residual value of [0.01917*staked SPA tokens],
and will continue to bring rewards to the user. If one day the user decides to
take their assets out - they need to initiate the cooldown manually. After a one-
week cooldown, the assets will become available.
Withdrawing from the protocol does not automatically claim all the SPA rewards.
The users would be required to claim the rewards separately. In case the staking
rewards are not distributed till that point of time, users can still claim the rewards
and fee earnings accrued to them after they have withdrawn their staked SPA
tokens.
When new users start staking, the auto-cooldown feature is applied. Auto-
cooldown means that the veSPA balance decays to zero linearly and the stakers are
able to withdraw their staked SPA balance at the end of their lockup period.
Currently, this option is not available. If a user has chosen this option while staking
in the past, their final veSPA balance was set at the residual veSPA balance. They
would continue to earn all the staking rewards at this veSPA balance for as long as
the protocol keeps distributing rewards. The residual veSPA balance is equivalent to
the veSPA balance of a staking position that unlocks in 7 days. 
Auto-Cooldown
Stay Staked at Residual Value


---
## Page 154

154
Residual veSPA balance = (7/365)*Staked SPA tokens = 0.01917*Staked SPA
tokens
Stakers can initiate cooldown when 7 days are left in lockup expiry or anytime after
that. When the staker’s veSPA balance is set to the residual veSPA balance or when
only 7 days are left in the lockup period, the staker can initiate a transaction to start
a cooldown period. When the cooldown period is initiated the lockup expiry date is
updated to a new date which would be 7 days from the date on which the cooldown
was initiated. 
Staker’s veSPA balance decays from the residual veSPA balance to zero during the
cooldown period. At the end of the cooldown period, the staker can withdraw the
SPA they had deposited. Stakers receive rewards during the cooldown period in
proportion to their veSPA balance. 
At the end of the cooldown period, the veSPA balance remains zero and the user
doesn’t get any rewards. The users can unstake at any point in time after the
cooldown period has ended. 
Initiate Cooldown


---
## Page 155

155
On Day 0, user staked 1000 SPA for 365 days. Their veSPA balance will
be 1000 veSPA 
On the 358th day the user’s veSPA balance will be ~ 19.17
(1000x(7/365)). At this point of time, the user can initiate a cooldown
period. 
On the 365th day, if the user hasn’t yet initiated a cooldown period the
user’s veSPA balance will be ~ 19.17. At this point the lockup has expired
and the user can initiate a cooldown period. 
On the 400th day, if the user hasn’t yet initiated a cooldown period the
user’s veSPA balance will be ~ 19.17 and they can initiate a cooldown
period. After the end of the cooldown period the user can unstake the
1000 SPA tokens. 
Let’s say on the 400th day the user initiates a cooldown, they would be
able to withdraw the tokens on the 407th day.
Example


---
## Page 156

156
Staking Rewards
veSPA holders or stakers get SPA token rewards in proportion to their veSPA
balance. Users have an option to stake their SPA rewards directly into the staking
protocol instead of claiming, thereby compounding their veSPA balances.
veSPA holders or stakers will receive 2 kinds of rewards. Both kinds of rewards are
distributed with the same mechanism and in the form of SPA tokens:
1. 100% of the USDs Fees generated by USDs protocol.
2. Incentives sponsored by Treasury to bootstrap the Staking protocol - This
emission has been set to 0 through governance.
The USDs protocol fees collected will be distributed across all veSPA holders on a
pro rata basis. With the fees collected by the USDs protocol the Staking protocol
will purchase SPA tokens from the market and distribute the SPA tokens amongst all
veSPA holders.
A separate SPA reward budget was set aside from Treasury to bootstrap staking
protocol. Incentive rewards for staking were initially set at a fixed daily distribution
number of 54.794 K SPA. This number was later changed through governance and
set to 0 to reduce SPA inflation, and xSPA rewards have been increased to 420,000
per week as per SIP-66
.
The yield and fee income are swapped for SPA tokens before distribution. The SPA
that is bought back from the open markets using 30% (SIP-66) of the auto-yield
and 100% of the fees is stored in: 
0xA61a0719e9714c95345e89a2f1C83Fae6f5745ef
 (Arbitrum One).
1. USDs Fee Rewards
2. Incentive Rewards
Distribution of Staking Rewards


---
## Page 157

157
Staking reward distribution happens on a weekly basis. New weeks start on
Thursdays at 00:00:00 UTC. Rewards are distributed at the end of each week.
‘Stake-Reward-Claim-Repeat’ is a four-step cycle:
1. Stake SPA - In Week 1, you stake SPA and obtain veSPA. Reward accumulation
starts from Week 2.
2. Reward distribution for Week 2 occurs at the end of the Week 2
• Total staking reward available for distribution in Week 2 is based on USDs
fee income that was collected, the yield that was generated by the USDs
protocol and the daily distribution rate of the SPA staking incentives for
Week 2
• User’s share of staking rewards for Week 2 is calculated based on their
veSPA balance at the starting of Week 2 relative to the total veSPA supply at
the starting of week 2
3. Rewards for Week 2 can be claimed by users from Week 3 onwards. Users can
also stake their SPA rewards and increase their veSPA balance and future
rewards.
4. Step 2 and 3 repeat every week till expiry
• Reward distribution for Week X occurs at the end of the Week X
• Rewards for Week X can be claimed by users from Week X+1 onwards.
Total SPA Rewards for the week = Staking Incentive Rewards + USDs Fees
Rewards + USDs Yield Share Rewards
where Staking Incentive Rewards = Daily Incentive Rewards*7
USDs Fees Rewards =  USDs Fee earned*USDs Price / SPA price  
USDs Yield Share Rewards = 50%*USDs yield earned in the week * USDs
price/ SPA price 
Calculation of Staking Rewards


---
## Page 158

158
The above formula is an assumption, actual SPA rewards from USDs fees and yield
would differ based on the asset prices in the open market
Total SPA Rewards for the week = R
Total veSPA balance of the protocol at the start of the week = V
User’s veSPA balance at the start of the week = v
User’s SPA staked at the start of the week = s
User's staking duration in years = d = v/s
Weekly Reward Earned by a user = r = (R/V)*v
Staking APR 
= (Weekly Reward Earned by a user /SPA staked by user)*(365/7)*100%
= (r/s)*(365/7)*100%
= (R/V)*(v/s)*(365/7)*100%
= (R/V)*d *(365/7)*100%
Staking APY 
= [{1+ (Weekly Reward Earned by a user /SPA staked by user)}^(365/7) -1] *
100% 
= [{1+ (r/s)}^(365/7) -1] * 100% 
= [{1+ (R/V)*(v/s)}^(365/7) -1] * 100%
= [{1+ (R/V)*d}^(365/7) -1] * 100%
Calculation of APY assumes that the weekly rewards are re-staked in the protocol.


---
## Page 159

159
Sperax Farms Protocol
Works on Arbitrum Uniswap V2, Uniswap V3, Camelot V2, Camelot V3 and
Balancer V2.
Sperax Farms
 protocol is a protocol for DAOs to launch and manage decentralized
exchange liquidity - without needing to know how to code. Sperax Farms give users
the power to launch incentivized liquidity pools on Uniswap V3 and Camelot V2.
Future versions will support custom liquidity shapes on major DEXs such as
Balancer, Sushiswap or anything veSPA holders prefer. Sperax Farms is launched
on Arbitrum and will be expanded to Optimism, Polygon and Ethereum soon.
Additional blockchains will be added in future versions.
Sperax Farms automates the fundamental aspects of launching and managing
decentralized exchange liquidity for the DAOs native token:
• Engineering support to launch and manage the farm - The Audited Farm
Factory contract will generate the pool and farm contracts for the Sperax Farms
user.
• Marketing support to make the community aware of the new farm - Protocols
that launch their farm through Sperax Farms benefit from being whitelisted on
the Sperax Farms active farms dashboard. This exclusive list features all of the
farms that are actively distributing rewards that were deployed with Sperax
Farms. Farmers will regularly look to this dashboard for new projects and
become users of these protocols.
On Arbitrum, Uniswap has less liquidity than Balancer and Sushiswap. This is
because Sushiswap uses the simple Uniswap V2, x*y=k approach. This is simple
because all LP tokens are the same but penalizes the LP because they are forced to
provide liquidity from 0 to infinity. Incentivized liquidity pools on Uniswap V3 lets
DAOs benefit from concentrated liquidity - the same TVL offers less slippage
compared to diluted liquidity. This directly translates to a lower emissions budget
for other protocols and much more fees for LPs.


---
## Page 160

160
To launch a Uniswap V3 or Camelot V3 farm, DAOs are currently expected to write
complicated V3 farm contracts, get the contracts audited, incentivize LP deposits
with only their native token, then promote this new pool. With Sperax Farms, DAOs
can launch these farms without knowing how to code and get marketing and
technical support from Sperax.
DAOs can also launch their farms on Camelot V2, their farms can get rewards both
in SPA and Camelot tokens (xGRAIL/GRAIL) that decrease DAO's token spend and
decrease sale pressure on it.
In Sperax Farms Protocol V2, we have focused more on the protocol's multichain
vision and to support that, we have discontinued incentives on pairing with SPA and
USDs as these tokens are not available on all the chains. Now the fee params are
configurable in the farm registry contract. More details are shared in the next
section.
Sperax Farms V2


---
## Page 161

161
How does Sperax Farms work?
Overview
Sperax Farms is a protocol that enables DAOs to launch and manage decentralized
exchange (DEX) liquidity pools and farms on platforms like Uniswap V2, Uniswap
V3, Camelot V2, Camelot V3 and Balancer V2. The protocol simplifies the process
of incentivizing liquidity for the DAOs' native tokens without requiring coding
expertise. Sperax Farms automates the creation, management, and reward
distribution for liquidity pools, providing support in engineering, marketing, and
financial incentives.
Launching Farm on Sperax Farms (For Farm Admins)
Steps to Launch a Farm


![Image 1](images/page161_img1.png)


---
## Page 162

162
1. Approve Fees Spend: Users must first approve the spending of the fee token
for the farm creation fee. The fee is 100 USDs on Arbitrum. On any chain not
supporting USDs, it can be any other stable coin supported on that chain.
2. Input Pool and Farm Parameters: Users must provide necessary parameters for
the pool and farm.
3. Execute Transaction: A transaction is executed to create the farm and pay the
farm creation fee.
• Reversion Conditions:
◦If the pool does not exist, the transaction reverts.
◦If the user does not have enough fee tokens to pay the fee, the
transaction reverts.
1. Token address
• Token A
• Token B
2. Fee Tier (for Uniswap V3 Pools)
3. Liquidity Parameter L - An LP token parameter which is set based on the user’s
liquidity inside the pool. Updating this parameter will allow the farm users to add
or remove liquidity. When the LP token is updated, the LP token should start
receiving rewards based on the new L parameter. This will allow users to add or
remove liquidity without having to unstake their entire LP position.
4. Active Liquidity Time Check - (a Boolean value of true or false which
determines whether the position is in the current price range) - To check if the
position is in the current price range, as only that liquidity will be rewarded
which is in range. However, users will be allowed to remove any locked liquidity
during the period when the liquidity is not in the current price range.
Pool Parameters
Base Farm Parameters


---
## Page 163

163
1. Farm admin: It is the address that will have admin control on the farm. It can be
the same as the deployer’s address or any other desired address which will be
used to manage the farm.
2. Price range for the LP
3. Reward tokens
• Token addresses
• Token address managers: Each token will have its own token manager.
• Reward tokens have to be added at the time of farm creation and can't be
added or removed after the farm is created. Maximum 4 reward tokens are
possible for a farm.
• For reward tokens emitting fixed APR, Token manager will be the Rewarder
contract deployed through the Rewarder factory.
4. Cooldown Period for Locked Liquidity - It is the number of days users have to
wait after initiating cooldown before they can unstake from a locked position.
Only whole numbers are allowed for this parameter.
• If Cooldown Period = 0, then the farm only allows creation of unlocked
positions. Unlocked positions can be unstaked anytime.
• If Cooldown Period > =1, the farm will allow creation of both locked and
unlocked positions. For unstaking a locked position, users have to initiate
cooldown and wait for cooldown period before unstaking.
5. Start date time stamp - Reward emission starts from this date. This date can be
changed by the farm admin using admin functions (updateFarmStartTime).
However, date change is not allowed after the farm starts.
• The farms start accepting liquidity immediately after the creation of the farm
contract. However, the reward accrual starts from the farm start date time
stamp.
6. Annual Percentage Return APR - The farm admin can set a fixed APR which
will guarantee a reward to the LPs based on the current price of the reward
tokens. The farm admin will also have to choose one or more base tokens out of
the tokens present in the farm for calculation of the daily number of reward
tokens emitted.


---
## Page 164

164
• Let’s say APR set = APR%.
• Total value of Base Tokens in USD = Σ (Number of Base tokens in farm x
USD value of Base Token)
• No. of Reward tokens per day = [(APR x Total value of Base Tokens in USD)
/ (100 x 365)] / (Price of 1 reward token based on the oracle)]
7. Maximum number of Rewards Tokens Emitted Per Day - The farm admin
would be able to add the maximum number of reward tokens per day that the
farm can distribute, to prevent any deficiency in the farm’s reward tokens in
cases when many LPs deposit on the same day since then all the withdrawals
may also happen on the same day.
• It will override the reward tokens value calculated using the formula
mentioned above in point no 6. The rewards emitted per day will be the
minimum of the amount calculated above or the max reward rate set by the
reward manager.
This is a new feature which has all the above parameters along with the expiry date
feature:
Expirable Farm Parameters


---
## Page 165

165
1. Expiry Date - Farms will have an expiry date associated with them. Users can
specify the expiry date while creating the farms. The initial launch fee of 100
USDs (or some other stable coin if USDs is not present on that chain) will add
100 days to the farm expiry. After that users have the option to extend the farm
expiry date. Post that users will have to extend the farm in the multiple of 1
USDs/day with minimum of 100 days at a time and a maximum of 300 days.
• Farm admins will not be able to update any farm parameters once the farm
has expired. However, they can remove any unclaimed reward tokens from
the contract.
• Farm users can still claim any accrued rewards from the farm or remove
liquidity from them once that farm has expired.
• Farms that have expired will be available on the Dashboard for removing
liquidity up to 30 days beyond expiry. After that the farms will only appear
on the expired farm list and admins cannot make the expired farms active
again. Users or admins will be able to apply all actions through the smart
contract.
• Expired farms shall be removed from the Sperax Gauge and would not be
eligible for SPA rewards.
• Farm does not accrue rewards after the expiration so users can call
updateFarmRewardData function on the farm to accrue rewards before
farmEndTime to avoid any loss of rewards.
• Sperax Farms will charge a flat $100 fee to launch the farm, which will add 100
days to the expiry date set while the creation of the farm.
• After that users have the option to extend the farm expiry date. They can do so
in the multiple of 1 USDs/day with minimum of 100 days at a time and a
maximum of 300 days. The fees can be paid in either USDs or in any other
stable coin provided USDs is not present in that chain.
• The fee collected belongs to the SPA stakers and can be transferred directly to
the wallet address where all Sperax protocol fees are collected. Fee amount can
be changed in future through governance.
• The Fee details can be fetched from getFeeParams function on the Farm
registry contract.
Fee


---
## Page 166

166
No one can make changes to the farm contract once deployed. Farm admins can
do the following:
1. Transfer farm ownership to another address
2. Change start date of the farm - Farm will emit rewards from this date. The date
can be changed after farm creation. However, date change is not allowed after
the farm starts.
3. Update cooldown period of the locked positions
4. Pause or Unpause the farm
• Pause the farm - All reward distributions are paused, LPs do not earn any
rewards during this period. Withdrawals are allowed (including lockup LPs)
and users can also claim previously accrued rewards. Admin/managers can
make changes to the distribution rates and the other parameters when the
farm is paused.
• Unpause the farm - Resume the reward distribution. The reward distribution
rate remains the same as set by the reward managers.
5. Update Expiry Date of the Farm by paying Subscription Fees
• Farm admins can choose and update the expiry date of farms as mentioned
in the Farm Parameters.
6. Close the farm - The farms can be closed before the expiry date and will
automatically get closed once the expiry date is reached. Once the farm is
closed, all liquidity providers including lockup users can now unstake their
liquidity pool tokens and claim the accrued rewards from the farm.
Each reward token will be assigned a reward token manager. Farm admin cannot
update the reward token manager once the farms are deployed. Reward token
managers can do the following:
Farm Management
Reward Management


---
## Page 167

167
1. Add reward token balance
2. Update reward distribution rate per second for each token. Only future
distribution rates can be affected through this. Reward distribution can be
paused by setting the rate to 0. These actions can be done:
a. For all liquidity providers.
b. For lockup liquidity providers (If cooldown period is greater than 0)
3. Changing the maximum number of token rewards per day - Farm admins can
increase or decrease the reward tokens limit in the fixed APR model as per their
choice.
4. Withdraw reward tokens (Any rewards already accrued to LPs cannot be
removed).
5. Transfer reward token management to another address.
1. Select the farm: LPs need to choose the required farm from the whitelisted
farms which are present on the dashboard, based on their choice of tokens and
price range.
2. Enter the number of farm tokens: Post that, they can enter the number of one
of the tokens for the position, the other tokens are automatically calculated.
3. Execute Transaction: The user then needs to approve the wallet transactions
for the spending of tokens and creation of a farm position.
• Reversion Conditions:
◦If the user does not have the required tokens in their wallet, the
transaction reverts.
4. LP Token: On successful execution of the transaction, the Liquidity Provider will
receive the LP token(s) in their wallet.
5. Depositing the LP Token: Users then need to deposit the lp tokens inside the
farm to create a position.
Setting up a Farm Position (For Liquidity Providers/Retail Users)
Adding a Farm Position:
Updating Liquidity in the LP Tokens:


---
## Page 168

168
1. Updating the Liquidity Balance - This will allow LPs to add to or remove
liquidity from the LP Token without having to unstake their entire LP position.
When the LP token is updated, the LP token should start receiving rewards
based on the new L parameter.
1. Fixed APR Rewards - The LPs will receive fixed APR rewards (this fixed APR will
be set by the farm admin) generated from their invested farms. Each farm will
have some base reward tokens which will be the base for calculating the
number of reward tokens to be emitted per day. The LP will receive the reward
tokens (selected by the farm admin) in their wallet, which will be calculated as:
• Let’s say APR set = APR%.
• Total value of Base Tokens in USD = Σ (Number of Base tokens in farm x
USD value of Base Token)
• No. of Reward tokens per day = [(APR x Total value of Base Tokens in USD)
/ (100 x 365)] / (Price of 1 reward token based on the oracle)]
2. Maximum number of Rewards Tokens Emitted Per Day - However, the number
of reward tokens to be emitted by the farm has been capped. The farm admin
would be able to add the maximum number of reward tokens per day that the
farm can distribute, to prevent any deficiency in the farm’s reward tokens in
cases when many LPs deposit on the same day since then all the withdrawals
may also happen on the same day.
Rewards Emission:


---
## Page 169

169
Technical documents
This technical document is about the upgrade to Sperax Farms v2. It details the
changes made to enhance the protocol's multi chain vision, transparency, security,
and scalability. The document covers new features and functionalities.
Sperax Farms protocol farm admin and user interaction diagram
FIxed APR rewarder flow


![Image 1](images/page169_img1.png)


![Image 2](images/page169_img2.png)


---
## Page 170

170


---
## Page 171

171
Smart contracts
High level documentation of smart contracts


---
## Page 172

172
E721 Farms
E721 farms include all the farms built for pools in which the liquidity provider has an
NFT (ERC721) position.


---
## Page 173

173
E721Farm
Git Source
Inherits: Farm, IERC721Receiver
Author: Sperax Foundation.
This contract contains the core logic for E721 farms.
Function is called when user transfers the NFT to this farm.
address public nftContract;
mapping(uint256 => uint256) public depositToTokenId;
State Variables
nftContract
depositToTokenId
Functions
onERC721Received


---
## Page 174

174
Parameters
Returns
Function to withdraw a deposit from the farm.
Parameters
function onERC721Received(address, address _from, uint256 _tokenId, 
bytes calldata _data)
    external
    override
    returns (bytes4);
Name
Type
Description
<none>
address
_from
address
The address of the owner.
_tokenId
uint256
NFT Id generated by other
protocol (e.g. Camelot or
Uniswap).
_data
bytes
The data should be the
lockup flag (bool).
Name
Type
Description
<none>
bytes4
bytes4 The
onERC721Received
selector.
function withdraw(uint256 _depositId) external override nonReentrant;
withdraw


---
## Page 175

175
Function to get the liquidity. Must be defined by the farm.
This function should be overridden to add the respective logic.
Parameters
Returns
Name
Type
Description
_depositId
uint256
The id of the deposit to be
withdrawn.
function _getLiquidity(uint256 _tokenId) internal view virtual returns 
(uint256);
Name
Type
Description
_tokenId
uint256
The nft tokenId.
Name
Type
Description
<none>
uint256
The liquidity of the nft
position.
error UnauthorisedNFTContract();
_getLiquidity
Errors
UnauthorisedNFTContract


---
## Page 176

176
error NoData();
NoData


---
## Page 177

177
Camelot V3
Pools in camelot V3 are very similar to Uniswap V3. When a liquidity provider
supplies assets to the pool, the LP receives an NFT position in return.
Next, you can see the specification for Camelot V3 farm and Camelot V3 farm
deployer.


---
## Page 178

178
CamelotV3FarmDeployer
Git Source
Inherits: FarmDeployer
Author: Sperax Foundation.
This contract allows anyone to calculate fees, pay fees and create farms.
address public immutable CAMELOT_V3_FACTORY;
address public immutable NFPM;
address public immutable CAMELOT_UTILS;
address public immutable CAMELOT_NFPM_UTILS;
State Variables
CAMELOT_V3_FACTORY
NFPM
CAMELOT_UTILS
CAMELOT_NFPM_UTILS


---
## Page 179

179
Constructor of the contract.
Parameters
constructor(
    address _farmRegistry,
    string memory _farmId,
    address _camelotV3Factory,
    address _nfpm,
    address _camelotUtils,
    address _nfpmUtils
) FarmDeployer(_farmRegistry, _farmId);
Name
Type
Description
_farmRegistry
address
Address of the Farm
Registry.
_farmId
string
Id of the farm.
_camelotV3Factory
address
Address of CamelotV3
factory.
_nfpm
address
Address of Camelot
NonfungiblePositionManage
r contract.
_camelotUtils
address
Address of CamelotUtils
(Camelot helper) contract.
_nfpmUtils
address
Address of Camelot
INonfungiblePositionManag
erUtils
(NonfungiblePositionManag
er helper) contract.
Functions
constructor


---
## Page 180

180
Deploys a new CamelotV3 farm.
The caller of this function should approve feeAmount to this contract before calling
this function.
Parameters
Returns
function createFarm(FarmData memory _data) external nonReentrant 
returns (address);
Name
Type
Description
_data
FarmData
Data for deployment.
Name
Type
Description
<none>
address
Address of the deployed
farm.
struct FarmData {
    address farmAdmin;
    uint256 farmStartTime;
    uint256 cooldownPeriod;
    CamelotPoolData camelotPoolData;
    RewardTokenData[] rewardData;
}
createFarm
Structs
FarmData


---
## Page 181

181
CamelotV3Farm
Git Source
Inherits: E721Farm, OperableDeposit, ClaimableFee
Author: Sperax Foundation.
This contract is the implementation of the Camelot V3 farm.
int24 public tickLowerAllowed;
int24 public tickUpperAllowed;
address public camelotPool;
address public camelotV3Factory;
State Variables
tickLowerAllowed
tickUpperAllowed
camelotPool
camelotV3Factory


---
## Page 182

182
Initializer function of this farm.
Parameters
address public camelotUtils;
address public nfpmUtils;
int256 internal constant MIN_TICK = -887272;
int256 internal constant MAX_TICK = 887272;
function initialize(InitializeInput calldata _input) external;
camelotUtils
nfpmUtils
MIN_TICK
MAX_TICK
Functions
initialize


---
## Page 183

183
Allow user to increase liquidity for a deposit.
Parameters
Withdraw liquidity partially from an existing deposit.
Parameters
Name
Type
Description
_input
InitializeInput
A struct having all the input
params.
function increaseDeposit(uint256 _depositId, uint256[2] calldata 
_amounts, uint256[2] calldata _minAmounts)
    external
    nonReentrant;
Name
Type
Description
_depositId
uint256
The id of the deposit to be
increased.
_amounts
uint256[2]
Desired amount of tokens to
be increased.
_minAmounts
uint256[2]
Minimum amount of tokens
to be added as liquidity.
function decreaseDeposit(uint256 _depositId, uint128 
_liquidityToWithdraw, uint256[2] calldata _minAmounts)
    external
    nonReentrant;
increaseDeposit
decreaseDeposit


---
## Page 184

184
Function to be called by Rewarder to get tokens and amounts associated with the
farm's liquidity.
Returns
Claim pool fee implementation from ClaimableFee  feature.
Parameters
Name
Type
Description
_depositId
uint256
Deposit index for the user.
_liquidityToWithdraw
uint128
Amount to be withdrawn.
_minAmounts
uint256[2]
Minimum amount of tokens
to be received.
function getTokenAmounts() external view override returns (address[] 
memory, uint256[] memory);
Name
Type
Description
<none>
address[]
tokens An array of token
addresses.
<none>
uint256[]
amounts An array of token
amounts.
function _claimPoolFee(uint256 _depositId)
    internal
    override
    returns (uint256 tokenId, uint256 amt0Recv, uint256 amt1Recv);
getTokenAmounts
_claimPoolFee


---
## Page 185

185
Validate the position for the pool and get Liquidity.
The position must adhere to the price ranges.
Only allow specific pool token to be staked.
Parameters
Returns
Validate the ticks (upper and lower).
Get the info of the required token.
Check if the token belongs to correct pool.
Name
Type
Description
_depositId
uint256
Deposit ID of the deposit in
the farm.
function _getLiquidity(uint256 _tokenId) internal view override returns 
(uint256);
Name
Type
Description
_tokenId
uint256
The tokenId of the position.
Name
Type
Description
<none>
uint256
The liquidity of the position.
_getLiquidity
_validateTickRange


---
## Page 186

186
Check if the token adheres to the tick range.
The ticks must be within the max range and must be multiple of tickSpacing.
Parameters
function _validateTickRange(int24 _tickLower, int24 _tickUpper) private 
view;
Name
Type
Description
_tickLower
int24
The lower tick of the range.
_tickUpper
int24
The upper tick of the range.
error InvalidCamelotPoolConfig();
error IncorrectPoolToken();
error IncorrectTickRange();
Errors
InvalidCamelotPoolConfig
IncorrectPoolToken
IncorrectTickRange
InvalidTickRange


---
## Page 187

187
error InvalidTickRange();
error InvalidAmount();
InvalidAmount


---
## Page 188

188
Base contracts
These contracts are base for all the other contracts and they have the common
logic for functionalities like deposit, withdraw, createFarm, etc.


---
## Page 189

189
Farm
Git Source
Inherits: FarmStorage, OwnableUpgradeable, ReentrancyGuardUpgradeable,
MulticallUpgradeable
Author: Sperax Foundation.
This contract contains the core logic for the Sperax farms.
Function to be called to withdraw deposit.
Parameters
constructor();
function withdraw(uint256 _depositId) external virtual;
Name
Type
Description
_depositId
uint256
The id of the deposit.
Functions
constructor
withdraw
claimRewards


---
## Page 190

190
A function to be called by the depositor to claim rewards.
Parameters
Function to be called to initiate cooldown for a staked deposit.
_depositId is corresponding to the user's deposit.
Parameters
Add rewards to the farm.
Parameters
function claimRewards(uint256 _depositId) external;
Name
Type
Description
_depositId
uint256
The id of the deposit.
function initiateCooldown(uint256 _depositId) external nonReentrant;
Name
Type
Description
_depositId
uint256
The id of the deposit to be
locked.
function addRewards(address _rwdToken, uint256 _amount) external 
nonReentrant;
initiateCooldown
addRewards


---
## Page 191

191
Update the cooldown period.
Parameters
Pause / UnPause the farm.
Parameters
Name
Type
Description
_rwdToken
address
The reward token's
address.
_amount
uint256
The amount of reward
tokens to add.
function updateCooldownPeriod(uint256 _newCooldownPeriod) external 
onlyOwner;
Name
Type
Description
_newCooldownPeriod
uint256
The new cooldown period
(in days). E.g: 7 means 7
days.
function farmPauseSwitch(bool _isPaused) external onlyOwner;
Name
Type
Description
_isPaused
bool
Desired state of the farm
(true to pause the farm).
updateCooldownPeriod
farmPauseSwitch


---
## Page 192

192
A function to explicitly close the farm.
Recovers remaining non accrued rewards.
Recover erc20 tokens other than the reward tokens.
Parameters
Get the remaining reward balance out of the farm.
Function recovers minOf(_amount, rewardsLeft).
Parameters
function closeFarm() external onlyOwner nonReentrant;
function recoverERC20(address _token) external onlyOwner nonReentrant;
Name
Type
Description
_token
address
Address of token to be
recovered.
function recoverRewardFunds(address _rwdToken, uint256 _amount) 
external nonReentrant;
closeFarm
recoverERC20
recoverRewardFunds


---
## Page 193

193
Function to update reward params for a fund.
Parameters
Transfer the tokenManagerRole to other user.
Only the existing tokenManager for a reward can call this function.
Parameters
Name
Type
Description
_rwdToken
address
The reward token's
address.
_amount
uint256
The amount of the reward
tokens to be withdrawn.
function setRewardRate(address _rwdToken, uint128[] memory 
_newRewardRates) external;
Name
Type
Description
_rwdToken
address
The reward token's
address.
_newRewardRates
uint128[]
The new reward rate for the
fund (includes the
precision).
function updateRewardData(address _rwdToken, address _newTknManager) 
external;
setRewardRate
updateRewardData


---
## Page 194

194
Function to compute the total accrued rewards for a deposit for each subscription.
Parameters
Returns
Get the reward fund details.
Name
Type
Description
_rwdToken
address
The reward token's
address.
_newTknManager
address
Address of the new token
manager.
function computeRewards(address _account, uint256 _depositId)
    external
    view
    virtual
    returns (uint256[][] memory rewards);
Name
Type
Description
_account
address
The user's address.
_depositId
uint256
The id of the deposit.
Name
Type
Description
rewards
uint256[][]
The total accrued rewards
for the deposit for each
subscription (uint256[][]).
computeRewards
getRewardFunds


---
## Page 195

195
Returns
Get the reward details for specified reward token.
Parameters
Returns
Get deposit info for a deposit id.
function getRewardFunds() external view returns (RewardFund[] memory);
Name
Type
Description
<none>
RewardFund[]
The available reward funds'
details for all the reward
funds.
function getRewardData(address _rwdToken) external view returns 
(RewardData memory);
Name
Type
Description
_rwdToken
address
The address of the reward
token.
Name
Type
Description
<none>
RewardData
The available reward details
for the specified reward
token.
getRewardData
getDepositInfo


---
## Page 196

196
Parameters
Returns
Get number of subscriptions for an account.
Parameters
Returns
function getDepositInfo(uint256 _depositId) external view returns 
(Deposit memory);
Name
Type
Description
_depositId
uint256
The id of the deposit.
Name
Type
Description
<none>
Deposit
The deposit info (Deposit).
function getNumSubscriptions(uint256 _depositId) external view returns 
(uint256);
Name
Type
Description
_depositId
uint256
The deposit id.
Name
Type
Description
<none>
uint256
The number of
subscriptions for the
deposit.
getNumSubscriptions


---
## Page 197

197
Get subscription stats for a deposit.
Parameters
Returns
Get reward rates for a rewardToken.
Parameters
function getSubscriptionInfo(uint256 _depositId, uint256 
_subscriptionId) external view returns (Subscription memory);
Name
Type
Description
_depositId
uint256
The deposit id.
_subscriptionId
uint256
The subscription's id.
Name
Type
Description
<none>
Subscription
The subscription info
(Subscription).
function getRewardRates(address _rwdToken) external view returns 
(uint256[] memory);
Name
Type
Description
_rwdToken
address
The reward token's
address.
getSubscriptionInfo
getRewardRates


---
## Page 198

198
Returns
Get farm reward fund info.
Parameters
Returns
Function to get the reward tokens added in the farm.
Returns
Name
Type
Description
<none>
uint256[]
The reward rates for the
reward token (uint256[]).
function getRewardFundInfo(uint8 _fundId) external view returns 
(RewardFund memory);
Name
Type
Description
_fundId
uint8
The fund's id.
Name
Type
Description
<none>
RewardFund
The reward fund info
(RewardFund).
function getRewardTokens() external view returns (address[] memory);
getRewardFundInfo
getRewardTokens


---
## Page 199

199
Function to be called by Rewarder to get tokens and amounts associated with the
farm's liquidity.
This function should be overridden to add the respective logic.
Returns
Function to update the FarmRewardData for all funds.
Claim rewards and send it to another account.
Name
Type
Description
<none>
address[]
The reward tokens added in
the farm.
function getTokenAmounts() external view virtual returns (address[] 
memory, uint256[] memory);
Name
Type
Description
<none>
address[]
Tokens associated with the
farm's pool.
<none>
uint256[]
Amounts associated with
the farm's liquidity.
function updateFarmRewardData() public virtual;
getTokenAmounts
updateFarmRewardData
claimRewardsTo


---
## Page 200

200
Only the depositor can call this function.
Parameters
Update the farm start time.
Can be updated only before the farm start. New start time should be in future.
Parameters
Returns if farm is open. Farm is open if it is not closed.
This function can be overridden to add any new/additional logic.
function claimRewardsTo(address _account, uint256 _depositId) public 
nonReentrant;
Name
Type
Description
_account
address
To receive the rewards.
_depositId
uint256
The id of the deposit.
function updateFarmStartTime(uint256 _newStartTime) public virtual 
onlyOwner;
Name
Type
Description
_newStartTime
uint256
The new farm start time.
function isFarmOpen() public view virtual returns (bool);
updateFarmStartTime
isFarmOpen


---
## Page 201

201
Returns
Returns if farm is active. Farm is active if it is not paused and not closed.
This function can be overridden to add any new/additional logic.
Returns
Get the reward balance for specified reward token.
This function calculates the available reward balance by considering the accrued
rewards and the token supply.
Parameters
Name
Type
Description
<none>
bool
bool True if farm is open.
function isFarmActive() public view virtual returns (bool);
Name
Type
Description
<none>
bool
bool True if farm is active.
function getRewardBalance(address _rwdToken) public view returns 
(uint256);
isFarmActive
getRewardBalance


---
## Page 202

202
Returns
Common logic for deposit in the farm.
Parameters
Name
Type
Description
_rwdToken
address
The address of the reward
token.
Name
Type
Description
<none>
uint256
The available reward
balance for the specified
reward token.
function _recoverERC20(address _token) internal virtual;
function _deposit(address _account, bool _lockup, uint256 _liquidity) 
internal returns (uint256);
Name
Type
Description
_account
address
Address of the depositor.
_lockup
bool
Lockup option for the
deposit.
_liquidity
uint256
Liquidity amount to be
added to the pool.
_recoverERC20
_deposit


---
## Page 203

203
Returns
Common logic for initiating cooldown.
Parameters
Common logic for withdraw.
Parameters
Claim rewards for the user.
Name
Type
Description
<none>
uint256
The deposit id.
function _initiateCooldown(uint256 _depositId) internal;
Name
Type
Description
_depositId
uint256
User's deposit Id.
function _withdraw(uint256 _depositId) internal;
Name
Type
Description
_depositId
uint256
User's deposit id.
_initiateCooldown
_withdraw
_updateAndClaimFarmRewards


---
## Page 204

204
NOTE: any function calling this private function should be marked as non-reentrant.
Parameters
Claim rewards for the user and send it to another account.
NOTE: any function calling this private function should be marked as non-reentrant.
Parameters
Get the remaining reward balance out of the farm.
Function recovers minOf(_amount, rewardsLeft).
function _updateAndClaimFarmRewards(uint256 _depositId) internal;
Name
Type
Description
_depositId
uint256
The id of the deposit.
function _updateAndClaimFarmRewardsTo(uint256 _depositId, address 
_receiver) internal;
Name
Type
Description
_depositId
uint256
The id of the deposit.
_receiver
address
The receiver of the rewards
(Could be different from
depositor)
_updateAndClaimFarmRewardsTo
_recoverRewardFunds


---
## Page 205

205
In case of partial withdraw of funds, the reward rate has to be set manually again.
Parameters
Function to update reward params for a fund.
Parameters
Function to setup the reward funds and initialize the farm global params during
construction.
function _recoverRewardFunds(address _rwdToken, uint256 _amount) 
internal;
Name
Type
Description
_rwdToken
address
The reward token's
address.
_amount
uint256
The amount of the reward
token to be withdrawn.
function _setRewardRate(address _rwdToken, uint128[] memory 
_newRewardRates) internal;
Name
Type
Description
_rwdToken
address
The reward token's
address.
_newRewardRates
uint128[]
The new reward rate for the
fund (includes the
precision).
_setRewardRate
_setupFarm


---
## Page 206

206
Parameters
Adds new reward token to the farm.
Parameters
function _setupFarm(
    string calldata _farmId,
    uint256 _farmStartTime,
    uint256 _cooldownPeriod,
    RewardTokenData[] memory _rwdTokenData
) internal initializer;
Name
Type
Description
_farmId
string
ID of the farm. E.g: 
Demeter_Camelot_V2 .
_farmStartTime
uint256
- Farm start time.
_cooldownPeriod
uint256
- Cooldown period in days
for locked deposits. E.g: 7
means 7 days.
_rwdTokenData
RewardTokenData[]
- Reward data for each
reward token.
function _addRewardData(address _token, address _tknManager) internal;
Name
Type
Description
_token
address
Address of the reward
token to be added.
_tknManager
address
Address of the reward
token Manager.
_addRewardData


---
## Page 207

207
Update the last reward accrual time.
Computes the accrued reward for a given fund id and time interval.
_alreadyAccRewardBal  is useful when this function called from computeRewards
function. As computeReward  is a view function and it doesn't update the 
accRewardBal  in the rewardData .
Parameters
Returns
function _updateLastRewardAccrualTime() internal virtual;
function _getAccRewards(uint8 _rwdId, uint8 _fundId, uint256 _time, 
uint256 _alreadyAccRewardBal)
    internal
    view
    returns (uint256);
Name
Type
Description
_rwdId
uint8
Id of the reward token.
_fundId
uint8
Id of the reward fund.
_time
uint256
Time interval for the reward
computation.
_alreadyAccRewardBal
uint256
Already accrued reward
balance.
_updateLastRewardAccrualTime
_getAccRewards


---
## Page 208

208
Validate the deposit for account.
Parameters
A function to validate deposit ts to prevent flash loan vulnerabilities
Reverts when deposit made in the same transaction.
Parameters
Name
Type
Description
<none>
uint256
accRewards Accrued
rewards for the given 
_rwdId , _fundId  and 
_time .
function _validateDeposit(address _account, uint256 _depositId) 
internal view;
Name
Type
Description
_account
address
Address of the caller to be
checked against depositor.
_depositId
uint256
Id of the deposit.
function _validateNotRecentDeposit(uint256 _depositTs) internal view;
_validateDeposit
_validateNotRecentDeposit


---
## Page 209

209
Validate if farm is open. Revert otherwise.
This function can be overridden to add any new/additional logic.
Validate if farm is active. Revert otherwise. Farm is active if it is not paused and not
closed.
This function can be overridden to add any new/additional logic.
Validate the caller is the token Manager. Revert otherwise.
Parameters
Name
Type
Description
_depositTs
uint256
depositTs of user's deposit.
(It represents deposit ts or
increaseDeposit ts)
function _validateFarmOpen() internal view;
function _validateFarmActive() internal view;
function _validateTokenManager(address _rwdToken) internal view;
_validateFarmOpen
_validateFarmActive
_validateTokenManager


---
## Page 210

210
Validate the reward token is valid.
Parameters
Get the time elapsed since the last reward accrual.
Returns
An internal function to validate cooldown period.
Name
Type
Description
_rwdToken
address
Address of reward token.
function _validateRewardToken(address _rwdToken) internal view;
Name
Type
Description
_rwdToken
address
Address of reward token.
function _getRewardAccrualTimeElapsed() internal view virtual returns 
(uint256);
Name
Type
Description
<none>
uint256
time The time elapsed since
the last reward accrual.
_validateRewardToken
_getRewardAccrualTimeElapsed
_validateCooldownPeriod


---
## Page 211

211
Parameters
Validate address.
Parameters
Add subscription to the reward fund for a deposit.
Parameters
function _validateCooldownPeriod(uint256 _cooldownPeriod) internal 
pure;
Name
Type
Description
_cooldownPeriod
uint256
Period to be validated.
function _validateNonZeroAddr(address _addr) internal pure;
Name
Type
Description
_addr
address
Address to be validated.
function _subscribeRewardFund(uint8 _fundId, uint256 _depositId, 
uint256 _liquidity) private;
_validateNonZeroAddr
_subscribeRewardFund


---
## Page 212

212
Unsubscribe a reward fund from a deposit.
The rewards claimed from the reward fund is persisted in the event.
Parameters
Name
Type
Description
_fundId
uint8
The reward fund id.
_depositId
uint256
The unique ID of the
deposit.
_liquidity
uint256
The liquidity of the deposit.
function _unsubscribeRewardFund(uint8 _fundId, uint256 _depositId) 
private;
Name
Type
Description
_fundId
uint8
The reward fund id.
_depositId
uint256
The deposit id
corresponding to the user.
_unsubscribeRewardFund


---
## Page 213

213
FarmStorage
Git Source
Inherits: IFarm
Author: Sperax Foundation.
This contract contains the base storage variables for farms.
uint8 public constant COMMON_FUND_ID = 0;
uint8 public constant LOCKUP_FUND_ID = 1;
uint256 public constant PRECISION = 1e18;
uint256 public constant MAX_COOLDOWN_PERIOD = 30;
State Variables
COMMON_FUND_ID
LOCKUP_FUND_ID
PRECISION
MAX_COOLDOWN_PERIOD


---
## Page 214

214
uint256 public constant MAX_NUM_REWARDS = 4;
string public farmId;
bool internal isPaused;
bool internal isClosed;
uint256 public cooldownPeriod;
uint256 public lastFundUpdateTime;
MAX_NUM_REWARDS
farmId
isPaused
isClosed
cooldownPeriod
lastFundUpdateTime
farmStartTime


---
## Page 215

215
uint256 public farmStartTime;
uint256 public totalDeposits;
RewardFund[] internal rewardFunds;
address[] internal rewardTokens;
mapping(address => RewardData) internal rewardData;
mapping(uint256 => Deposit) internal deposits;
mapping(uint256 => Subscription[]) internal subscriptions;
totalDeposits
rewardFunds
rewardTokens
rewardData
deposits
subscriptions


---
## Page 216

216
FarmRegistry
Git Source
Inherits: IFarmRegistry, OwnableUpgradeable
Author: Sperax Foundation.
This contract tracks fee details, privileged users, deployed farms and farm
deployers.
address[] internal farms;
address[] internal deployerList;
address public feeReceiver;
address public feeToken;
State Variables
farms
deployerList
feeReceiver
feeToken


---
## Page 217

217
uint256 public feeAmount;
uint256 public extensionFeePerDay;
mapping(address => bool) public farmRegistered;
mapping(address => bool) public deployerRegistered;
mapping(address => bool) public isPrivilegedUser;
constructor();
feeAmount
extensionFeePerDay
farmRegistered
deployerRegistered
isPrivilegedUser
Functions
constructor


---
## Page 218

218
constructor
Parameters
Register a farm created by registered Deployer.
Only registered deployer can register a farm.
Parameters
function initialize(address _feeReceiver, address _feeToken, uint256 
_feeAmount, uint256 _extensionFeePerDay)
    external
    initializer;
Name
Type
Description
_feeReceiver
address
Receiver of the fees.
_feeToken
address
The fee token for farm
creation.
_feeAmount
uint256
The fee amount to be paid
by the creator.
_extensionFeePerDay
uint256
Extension fee per day.
function registerFarm(address _farm, address _creator) external;
initialize
registerFarm


---
## Page 219

219
Register a new farm deployer.
Only owner can call this function.
Parameters
Remove an existing deployer from registry.
Only owner can call this function.
Parameters
Name
Type
Description
_farm
address
Address of the created farm
contract
_creator
address
Address of the farm creator.
function registerFarmDeployer(address _deployer) external onlyOwner;
Name
Type
Description
_deployer
address
Address of deployer to be
registered.
function removeDeployer(uint16 _id) external onlyOwner;
registerFarmDeployer
removeDeployer


---
## Page 220

220
Function to add/remove privileged User.
Only callable by the owner.
Parameters
Get list of registered deployer.
Returns
Name
Type
Description
_id
uint16
ID of the deployer to be
removed (0 index based).
function updatePrivilege(address _user, bool _privilege) external 
onlyOwner;
Name
Type
Description
_user
address
User Address for which
privilege is to be updated.
_privilege
bool
Privilege(bool) whether true
or false.
function getFarmDeployerList() external view returns (address[] 
memory);
updatePrivilege
getFarmDeployerList


---
## Page 221

221
Get list of farms created via registered deployer.
Returns
Get all the fee parameters for creating farm.
It returns fee amount and extension fee as 0 if _user is privileged.
Parameters
Returns
Name
Type
Description
<none>
address[]
Returns array of registered
deployer addresses.
function getFarmList() external view returns (address[] memory);
Name
Type
Description
<none>
address[]
Returns array of farm
addresses.
function getFeeParams(address _user) external view returns (address, 
address, uint256, uint256);
Name
Type
Description
_user
address
The account creating the
farm.
getFarmList
getFeeParams


---
## Page 222

222
Update the fee params for registry.
Parameters
Validate address.
Name
Type
Description
<none>
address
Receiver of the fees.
<none>
address
Token in which fee is to be
paid.
<none>
uint256
Amount of fees to be paid
for creation of farm.
<none>
uint256
Extension fee per day in
case of extending a farm.
function updateFeeParams(address _receiver, address _feeToken, uint256 
_amount, uint256 _extensionFeePerDay)
    public
    onlyOwner;
Name
Type
Description
_receiver
address
FeeReceiver address.
_feeToken
address
Token address for fee.
_amount
uint256
Amount of token to be
collected.
_extensionFeePerDay
uint256
Extension fee per day.
updateFeeParams
_validateNonZeroAddr


---
## Page 223

223
function _validateNonZeroAddr(address _addr) private pure;


---
## Page 224

224
FarmDeployer
Git Source
Inherits: Ownable, ReentrancyGuard
Author: Sperax Foundation.
Exposes base functionalities which will be useful in every deployer.
address public immutable FARM_REGISTRY;
address public farmImplementation;
string public farmId;
State Variables
FARM_REGISTRY
farmImplementation
farmId
Functions
constructor


---
## Page 225

225
Constructor.
Parameters
Update farm implementation's address.
Only callable by the owner.
Ensure that _newFarmId  is correct for the new farm implementation.
Parameters
constructor(address _farmRegistry, string memory _farmId) 
Ownable(msg.sender);
Name
Type
Description
_farmRegistry
address
Address of the Farm
Registry.
_farmId
string
Id of the farm.
function updateFarmImplementation(address _newFarmImplementation, 
string calldata _newFarmId) external onlyOwner;
Name
Type
Description
_newFarmImplementation
address
New farm implementation's
address.
_newFarmId
string
ID of the new farm.
updateFarmImplementation
_collectFee


---
## Page 226

226
Collect fee and transfer it to feeReceiver.
Function fetches all the fee params from farmRegistry.
Validate address.
function _collectFee() internal virtual;
function _validateNonZeroAddr(address _addr) internal pure;
event FarmCreated(address indexed farm, address indexed creator, 
address indexed admin);
event FeeCollected(address indexed creator, address indexed token, 
uint256 amount);
event FarmImplementationUpdated(address indexed newFarmImplementation, 
string newFarmId);
_validateNonZeroAddr
Events
FarmCreated
FeeCollected
FarmImplementationUpdated


---
## Page 227

227
error InvalidAddress();
error NewFarmImplementationSameAsOld();
Errors
InvalidAddress
NewFarmImplementationSameAsOld


---
## Page 228

228
Features
Features contracts can be considered as plugins, which are used in farms only
where they are needed.


---
## Page 229

229
ClaimableFee
Git Source
Inherits: Farm
Author: Sperax Foundation.
Farms build for pairs/ pools in which fee can be claimed can extend and override
_claimPoolFee function of this contract.
A function to claim the pool fee earned by lp.
Only the deposit owner can call this function.
Parameters
Claim pool fee internal logic to be implemented by child farm contract.
Just override this function and write the logic to claim fee, validation and other
checks are handled in claimPoolFee .
function claimPoolFee(uint256 _depositId) external nonReentrant;
Name
Type
Description
_depositId
uint256
ID of the deposit.
Functions
claimPoolFee
_claimPoolFee


---
## Page 230

230
Parameters
Returns
function _claimPoolFee(uint256 _depositId)
    internal
    virtual
    returns (uint256 tokenId, uint256 amt0Recv, uint256 amt1Recv);
Name
Type
Description
_depositId
uint256
Deposit ID of the deposit in
the farm.
Name
Type
Description
tokenId
uint256
Token ID of the deposit for
E721 farms, for other farms
return depositId.
amt0Recv
uint256
Amount 0 received as fee.
amt1Recv
uint256
Amount 1 received as fee.
event PoolFeeCollected(address indexed recipient, uint256 tokenId, 
uint256 amt0Recv, uint256 amt1Recv);
Events
PoolFeeCollected
Errors


---
## Page 231

231
error NoFeeToClaim();
NoFeeToClaim


---
## Page 232

232
ExpirableFarm
Git Source
Inherits: Farm
Author: Sperax Foundation.
This contract helps in creating farms with expiry feature.
uint256 public constant MIN_EXTENSION = 100;
uint256 public constant MAX_EXTENSION = 300;
uint256 public farmEndTime;
address public farmRegistry;
State Variables
MIN_EXTENSION
MAX_EXTENSION
farmEndTime
farmRegistry


---
## Page 233

233
Update the farm end time.
Can be updated only before the farm expired or closed. Extension should be
incremented in multiples of 1 USDs/day with minimum of 100 days at a time and a
maximum of 300 days. Extension is possible only after farm started.
Parameters
Update the farm start time.
Can be updated only before the farm start. New start time should be in future.
Adjusts the farm end time accordingly.
Parameters
function extendFarmDuration(uint256 _extensionDays) external onlyOwner 
nonReentrant;
Name
Type
Description
_extensionDays
uint256
The number of days to
extend the farm. Example:
150 means 150 days.
function updateFarmStartTime(uint256 _newStartTime) public virtual 
override;
Functions
extendFarmDuration
updateFarmStartTime


---
## Page 234

234
Returns bool status if farm is open. Farm is open if it is not closed and not expired.
Returns
Setup the farm data for farm expiry.
Parameters
Name
Type
Description
_newStartTime
uint256
The new farm start time.
function isFarmOpen() public view virtual override returns (bool);
Name
Type
Description
<none>
bool
bool True if farm is open.
function _setupFarmExpiry(uint256 _farmStartTime, address 
_farmRegistry) internal;
Name
Type
Description
_farmStartTime
uint256
Start time of the farm.
_farmRegistry
address
Address of the farm
registry.
isFarmOpen
_setupFarmExpiry
_collectExtensionFee


---
## Page 235

235
Collects farm extension fee and transfers it to feeReceiver.
Function fetches all the fee params from farmRegistry.
Parameters
function _collectExtensionFee(uint256 _extensionDays) private;
Name
Type
Description
_extensionDays
uint256
The number of days to
extend the farm. Example:
150 means 150 days.
event FarmEndTimeUpdated(uint256 newEndTime);
event ExtensionFeeCollected(address indexed token, uint256 
extensionFee);
Events
FarmEndTimeUpdated
ExtensionFeeCollected
Errors
InvalidExtension


---
## Page 236

236
error InvalidExtension();
error DurationExceeded();
error FarmNotYetStarted();
DurationExceeded
FarmNotYetStarted


---
## Page 237

237
OperableDeposit
Git Source
Inherits: Farm
Author: Sperax Foundation.
This contract helps in creating farms with increase/decrease deposit functionality.
Update subscription data of a deposit for increase in liquidity.
Parameters
Update subscription data of a deposit after decrease in liquidity.
function _updateSubscriptionForIncrease(uint256 _depositId, uint256 
_amount) internal;
Name
Type
Description
_depositId
uint256
Unique deposit id for the
deposit.
_amount
uint256
_amount to be increased.
Functions
_updateSubscriptionForIncrease
_updateSubscriptionForDecrease


---
## Page 238

238
Parameters
Common logic for increasing a deposit.
Parameters
Common logic for decreasing a deposit.
Parameters
function _updateSubscriptionForDecrease(uint256 _depositId, uint256 
_amount) internal;
Name
Type
Description
_depositId
uint256
Unique deposit id for the
deposit
_amount
uint256
_amount to be decreased.
function _increaseDeposit(uint256 _depositId, uint256 _amount) 
internal;
Name
Type
Description
_depositId
uint256
Unique deposit id for the
deposit
_amount
uint256
_amount to be decreased.
function _decreaseDeposit(uint256 _depositId, uint256 _amount) 
internal;
_increaseDeposit
_decreaseDeposit


---
## Page 239

239
Name
Type
Description
_depositId
uint256
Unique deposit id for the
deposit
_amount
uint256
_amount to be decreased.
event DepositIncreased(uint256 indexed depositId, uint256 liquidity);
event DepositDecreased(uint256 indexed depositId, uint256 liquidity);
error DecreaseDepositNotPermitted();
error InsufficientLiquidity();
Events
DepositIncreased
DepositDecreased
Errors
DecreaseDepositNotPermitted
InsufficientLiquidity


---
## Page 240

240
Rewarder
Rewarder is a contract which can be used by farm admins when they want to emit
rewards in fixed APR instead of fixed token amounts (by setting reward rate).


---
## Page 241

241
Rewarder
Git Source
Inherits: IRewarder, OwnableUpgradeable, ReentrancyGuardUpgradeable
Author: Sperax Foundation.
This contract tracks farms, their APR and other data for a specific reward token.
Farms for UniV3 pools using Rewarder contract must have a minimum
observationCardinality of 20. It can be updated by calling
increaseObservationCardinalityNext function on the pool.
uint256 public constant MAX_PERCENTAGE = 1e4;
uint256 public constant APR_PRECISION = 1e8;
uint256 public constant REWARD_PERIOD = 1 weeks;
State Variables
MAX_PERCENTAGE
APR_PRECISION
REWARD_PERIOD
DENOMINATOR


---
## Page 242

242
uint256 public constant DENOMINATOR = 100;
uint256 public constant ONE_YEAR = 365 days;
address public REWARD_TOKEN;
uint8 public REWARD_TOKEN_DECIMALS;
uint256 public totalRewardRate;
address public rewarderFactory;
mapping(address => bool) public calibrationRestricted;
ONE_YEAR
REWARD_TOKEN
REWARD_TOKEN_DECIMALS
totalRewardRate
rewarderFactory
calibrationRestricted


---
## Page 243

243
Initializer function of this contract.
Parameters
mapping(address => FarmRewardConfig) internal farmRewardConfigs;
mapping(address => uint8) private _decimals;
constructor();
function initialize(address _rwdToken, address _oracle, address _admin) 
external initializer;
farmRewardConfigs
_decimals
Functions
constructor
initialize


---
## Page 244

244
Function to calibrate rewards for this rewarder's reward token for a farm.
Calculates based on APR, caps based on maxRewardPerSec or balance rewards,
sends and sets the rewardRate in the farm.
Parameters
Returns
Name
Type
Description
_rwdToken
address
Address of the reward
token.
_oracle
address
Address of the USDs
Master Price Oracle.
_admin
address
Admin/ deployer of this
contract.
function calibrateReward(address _farm) external nonReentrant returns 
(uint256 rewardsToSend);
Name
Type
Description
_farm
address
Address of the farm for
which the rewards are to be
calibrated.
Name
Type
Description
rewardsToSend
uint256
Rewards which are sent to
the farm.
calibrateReward
updateTokenManagerOfFarm


---
## Page 245

245
Function to update the token manager's address in the farm.
Parameters
Function to recover reward funds from the farm.
Parameters
Function to update APR.
function updateTokenManagerOfFarm(address _farm, address _newManager) 
external onlyOwner;
Name
Type
Description
_farm
address
Farm's address in which the
token manager is to be
updated.
_newManager
address
Address of the new token
manager.
function recoverRewardFundsOfFarm(address _farm, uint256 _amount) 
external onlyOwner;
Name
Type
Description
_farm
address
Farm's address from which
reward funds is to be
recovered.
_amount
uint256
Amount which is to be
recovered.
recoverRewardFundsOfFarm
updateAPR


---
## Page 246

246
Parameters
Function to toggle calibration restriction.
Parameters
Function to recover ERC20 tokens from this contract.
Parameters
function updateAPR(address _farm, uint256 _apr) external onlyOwner 
nonReentrant;
Name
Type
Description
_farm
address
Address of the farm.
_apr
uint256
APR in 1e8 precision.
function toggleCalibrationRestriction(address _farm) external 
onlyOwner;
Name
Type
Description
_farm
address
Address of farm for which
calibration restriction is to
be toggled.
function recoverERC20(address _token, uint256 _amount) external 
onlyOwner;
toggleCalibrationRestriction
recoverERC20


---
## Page 247

247
Function to get token amounts value of underlying pool of the farm.
Parameters
Returns
Function to get reward config for a farm.
Parameters
Name
Type
Description
_token
address
Address of the token.
_amount
uint256
Amount of the tokens.
function getTokenAmounts(address _farm) external view returns 
(address[] memory, uint256[] memory);
Name
Type
Description
_farm
address
Address of the farm.
Name
Type
Description
<none>
address[]
Array of token addresses.
<none>
uint256[]
function getFarmRewardConfig(address _farm) external view returns 
(FarmRewardConfig memory);
getTokenAmounts
getFarmRewardConfig


---
## Page 248

248
Returns
Function to calculate the time till which rewards are there for an LP.
Parameters
Returns
Name
Type
Description
_farm
address
Address of the farm.
Name
Type
Description
<none>
FarmRewardConfig
FarmRewardConfig Farm
reward config.
function rewardsEndTime(address _farm) external view returns (uint256 
rewardsEndingOn);
Name
Type
Description
_farm
address
Address of the farm for
which the end time is to be
calculated.
Name
Type
Description
rewardsEndingOn
uint256
Timestamp in seconds till
which the rewards are there
in farm and in rewarder.
rewardsEndTime
updateRewardConfig


---
## Page 249

249
Function to update the REWARD_TOKEN configuration. This function calibrates
reward so token manager must be updated to address of this contract in the farm.
Parameters
Internal initialize function.
Parameters
function updateRewardConfig(address _farm, FarmRewardConfigInput memory 
_rewardConfig) public onlyOwner nonReentrant;
Name
Type
Description
_farm
address
Address of the farm for
which the config is to be
updated.
_rewardConfig
FarmRewardConfigInput
The config which is to be
set.
function _initialize(address _rwdToken, address _oracle, address 
_admin, address _rewarderFactory) internal;
Name
Type
Description
_rwdToken
address
Address of the reward
token.
_oracle
address
Address of the USDs
Master Price Oracle.
_admin
address
Admin/ deployer of this
contract.
_rewarderFactory
address
Address of Rewarder
factory contract.
_initialize


---
## Page 250

250
Function to check if the farm's reward is configured.
Parameters
An internal function to get token amounts for the farm.
Parameters
Returns
function _isConfigured(address _farm) internal view;
Name
Type
Description
_farm
address
Address of the farm.
function _getTokenAmounts(address _farm) internal view virtual returns 
(address[] memory, uint256[] memory);
Name
Type
Description
_farm
address
Address of the farm.
Name
Type
Description
<none>
address[]
Array of token addresses.
<none>
uint256[]
Array of token amounts.
_isConfigured
_getTokenAmounts
_hasRewardToken


---
## Page 251

251
Function to check if the reward token of this contract is one of farm's reward token.
Parameters
Returns
Validate address.
Parameters
function _hasRewardToken(address _farm) internal view virtual returns 
(bool);
Name
Type
Description
_farm
address
Address of the farm.
Name
Type
Description
<none>
bool
If farm has one of the
reward token as reward
token of this contract.
function _validateNonZeroAddr(address _addr) internal pure;
Name
Type
Description
_addr
address
Address to be validated.
_validateNonZeroAddr
_calibrateReward


---
## Page 252

252
Function to set reward rate in the farm.
Parameters
Function to adjust global rewards per second emitted for a reward token.
Parameters
function _calibrateReward(address _farm) private returns (uint256 
rewardsToSend);
function _setRewardRate(address _farm, uint128 _rwdRate, uint256 
_nonLockupRewardPer) private;
Name
Type
Description
_farm
address
Address of the farm.
_rwdRate
uint128
Reward per second to be
emitted.
_nonLockupRewardPer
uint256
Reward percentage to be
allocated to no lockup fund.
function _adjustGlobalRewardRate(uint256 _oldRewardRate, uint256 
_newRewardRate) private;
Name
Type
Description
_oldRewardRate
uint256
Old emission rate.
_newRewardRate
uint256
New emission rate.
_setRewardRate
_adjustGlobalRewardRate


---
## Page 253

253
Function to validate farm.
It checks that the farm should implement getTokenAmounts and have
REWARD_TOKEN. as one of the reward tokens.
Parameters
Returns
Function to check whether the base tokens are a subset of farm's assets.
It handles repeated base tokens as well and pushes indexed in farmRewardConfigs.
Parameters
function _isValidFarm(address _farm, address[] memory _baseTokens) 
private returns (bool);
Name
Type
Description
_farm
address
Address of the farm to be
validated.
_baseTokens
address[]
Array of base tokens.
Name
Type
Description
<none>
bool
bool True if farm is valid.
function _hasBaseTokens(address _farm, address[] memory _baseTokens) 
private returns (bool);
_isValidFarm
_hasBaseTokens


---
## Page 254

254
Returns
Function to normalize asset amounts to be of precision
REWARD_TOKEN_DECIMALS.
Parameters
Returns
Name
Type
Description
_farm
address
Address of the farm.
_baseTokens
address[]
Array of base token
addresses to be considered
for value calculation.
Name
Type
Description
<none>
bool
hasBaseTokens True if
baseTokens are non
redundant and are a subset
of assets.
function _normalizeAmount(address _token, uint256 _amount) private view 
returns (uint256);
Name
Type
Description
_token
address
Address of the asset token.
_amount
uint256
Amount of the token.
_normalizeAmount


---
## Page 255

255
Function to fetch and get the price of a token.
Parameters
Returns
Function to validate price feed.
Parameters
Name
Type
Description
<none>
uint256
Normalized amount of the
token in _desiredPrecision.
function _getPrice(address _token, address _oracle) private view 
returns (IOracle.PriceData memory priceData);
Name
Type
Description
_token
address
Token for which the the
price is to be fetched.
_oracle
address
Address of the oracle
contract.
Name
Type
Description
priceData
IOracle.PriceData
Price data of the token.
function _validatePriceFeed(address _token, address _oracle) private 
view;
_getPrice
_validatePriceFeed


---
## Page 256

256
Function to validate the no lockup fund's reward percentage.
Parameters
Name
Type
Description
_token
address
Token to be validated.
_oracle
address
Address of the oracle.
function _validateRewardPer(uint256 _percentage) private pure;
Name
Type
Description
_percentage
uint256
No lockup fund's reward
percentage to be validated.
_validateRewardPer


---
## Page 257

257
RewarderFactory
Git Source
Inherits: IRewarderFactory, Ownable
Author: Sperax Foundation.
This contract deploys new rewarders and keeps track of them.
Constructor.
Parameters
address public oracle;
address public rewarderImplementation;
constructor(address _oracle) Ownable(msg.sender);
State Variables
oracle
rewarderImplementation
Functions
constructor


---
## Page 258

258
Function to deploy new rewarder.
Parameters
Returns
Update rewarder implementation's address
Parameters
Name
Type
Description
_oracle
address
Address of the master price
oracle of USDs.
function deployRewarder(address _rwdToken) external returns (address 
rewarder);
Name
Type
Description
_rwdToken
address
Address of the reward
token for which the
rewarder is to be deployed.
Name
Type
Description
rewarder
address
Rewarder's address.
function updateRewarderImplementation(address 
_newRewarderImplementation) external onlyOwner;
deployRewarder
updateRewarderImplementation


---
## Page 259

259
Function to update the oracle's address.
Parameters
Validate address.
Parameters
Name
Type
Description
_newRewarderImplementati
on
address
New Rewarder
Implementation
function updateOracle(address _newOracle) public onlyOwner;
Name
Type
Description
_newOracle
address
Address of the new oracle.
function _validateNonZeroAddr(address _addr) private pure;
Name
Type
Description
_addr
address
Address to be validated.
updateOracle
_validateNonZeroAddr


---
## Page 260

260
Deployed contracts
Name
Explorer link
FarmRegistry
https://arbiscan.io/address/0x45bC6B4410
7837E7aBB21E2CaCbe7612Fce222e0
RewarderFactory
https://arbiscan.io/address/0x926477bAF6
0C25857419CC9Bf52E914881E1bDD3
CamelotV3Deployer
https://arbiscan.io/address/0x212208daF12
D7612e65fb39eE9a07172b08226B8


---
## Page 261

261
Getting Started on Our DApp
Visit our dApp
 to Mint, Redeem and Farm.
Go through this YouTube Playlist
 for step-by-step tutorials on how to use and
navigate the Sperax ecosystem.


---
## Page 262

262
Minting & Redeeming USDs
Users can mint USDs from their collateral (USDC.e, USDC or USDT). The Mint page
will automatically reflect the amount of collateral and SPA required to mint USDs
(Currently, no SPA required). Users can redeem USDs for a collateral of their
choice.
• Make sure your wallet holds eligible collateral (USDC, USDT or USDC.e).
• Go to the dApp
 homepage and connect your wallet. 
• Select the collateral and enter the amount of collateral that you want to deposit.
• View the Latest Auto-Yield APY before proceeding.
• The app will automatically show how much USDs you can mint. Then click on
‘Mint USDs’ and review ‘Max Slippage’.
• Then, you have to approve 2 transactions on your wallet - Approve and Sell
USDC - after clicking ‘Confirm’.
• You can now view your USDs balance in your wallet.
🚀 How to Mint USDs with Stablecoins (USDC, USDT & USDC.e)
🚀 How to Mint USDs with Stablecoins (USDC, USDT & USDC.e)
Minting USDs


---
## Page 263

263
1. Go to the dApp
 homepage and connect your wallet. 
2. Select the Redeem tab and enter the amount of USDs you would like to redeem.
3. You can also select the maximum slippage for the transaction and then select
the token in which you want to redeem.  You can view the redemption fee and
redemption amount as well.
4. Now, click on 'Redeem USDs' to redeem.
5. Click on 'Confirm' and unlock USDs transfer by providing required consent.
6. Then approve the transaction and your USDs will be redeemed succesfully.
🎥 How to Redeem USDs on Sperax dApp | Step-by-Step Guide
🎥 How to Redeem USDs on Sperax dApp | Step-by-Step Guide
Redeeming USDs


---
## Page 264

264
Staking SPA
1. Visit the stake page
.
2. Choose amount of SPA you want to stake, lockup period and you can check
veSPA balance corresponding to that.
3. Click on Stake to stake your SPA.
4. Once the transaction is processed, you can see your 
• veSPA balance
• SPA staked 
• Expiry date
• Button to extend lockup period
Stake | Sperax USD - 1 April 2022
2 min
2 min
299 views
299 views
0
1.2×
1 min 49 sec ⚡️1 min 30 sec
Powered by
Stake SPA
Extend Lockup for staked SPA


![Image 1](images/page264_img1.png)


---
## Page 265

265
1. Click on the 'Extend Lockup' button.
2. Select how much you want to extend your lockup period. You can see the
updated expiry date and veSPA balance.
3. Click on Extend Lockup.
1. Select additional amount of SPA tokens you want to stake.
2. You can see veSPA balance corresponding the same lockup as your existing
veSPA balance. 
3. Click on Stake to stake additional amount of SPA. The new veSPA balance will
also expire at the same time as the previous balance. 
Increase Staked Balance


---
## Page 266

266
Governance
veSPA holders will deliberate on protocol governance
Sperax has launched its off-chain governance process. On-chain governance
protocol will be launched next. Through governance, community can make
changes to the USDs protocol parameters, bring in new partnerships, new yield
opportunities etc. 
The Sperax DAO governance process primarily utilizes the Sperax DAO Governance
Forum
. In order for a proposal to be accepted, it must go through the following
phases:
If you have an idea you’d like to share, please feel free to post it in #DAO-
discussion
 channel on Sperax Discord, or, if you prefer to submit a proposal, you
can use the SIP Template
 and submit your concept in the Proposal (Active
Discussion)
 channel.
Ideation Flow:
1. Start a conversation in the official governance channel in Discord.
2. Gather feedback from the community.
3. (Optional) Create a poll on discord to gauge community sentiment.
4. (Optional) If you’d like to talk about your idea on a Sperax Community Call, feel
free to contact a team member via Discord to coordinate.
Sperax Off-Chain Governance Process:
Phase 0: Casual Ideation (Discord):
Phase 1: Governance Proposal (On Forum)


---
## Page 267

267
If you are ready to submit a formal proposal, you may do so on the Proposal (Active
Discussion)
 channel using the SIP Template
. Here you’ll begin to receive
constructive feedback from the community as well as the Sperax team. Discussion
will continue for a minimum of 48 hours.
Make sure to add the correct tag to the proposal(see below for definitions):
1. USDs parameter: Proposals related to adjusting/modifying USDs components.
2. New Assets and Yield Strategies: Proposals related to adding new forms of
collateral and yield strategy schemes/methodologies.
3. Liquidity Mining: Proposals related to the improvement of Sperax farming &
liquidity mining mechanisms.
4. Product Feature: Proposals related to the improvement, addition, or modification
of new & existing Sperax products.
5. Partnership(s): Proposals related to inquiring & establishing potential
partnerships with the Sperax Protocol.
6. Other: Miscellaneous proposals that have yet to be assigned a defined
tag/category.
Tutorial for using Sperax Forum
How to Vote on Sperax DAO Proposals using veSPA!
How to Vote on Sperax DAO Proposals using veSPA!
Phase 2: Snapshot vote:


---
## Page 268

268
Once a proposal has gained traction, a snapshot poll will be created for voting. A
Moderator will proceed to create the snapshot poll, link it to the corresponding
forum post, and submit it on the Snapshot Voting
 channel on Forum. Votes can be
cast directly through Sperax Snapshot Space
.
All snapshot polls will last 3 days upon initiation. Votes will be weighed by the
voters' veSPA balance. A snapshot poll will include 2 vote options (Yes/ No) by
default. If proposal creator wants 3 vote options (Yes/ No/ Yes with modification)
then they can inform that to the moderators while snapshot poll is created. If 'Yes
with modification' option gets max votes, then the proposal is not subject to
cooldown period. 
Proposal Passing Criteria:
1. Acceptance Threshold: Proposal must receive more than 50% in "Yes" votes 
2. Minimum Quorum: At least 200 Million veSPA should vote in the snapshot poll
Possible outcomes at this stage:
1. Both the proposal passing criteria are met: the proposal passes and escalates
to a Sperax Improvement Plan (SIP).
2. Quorum is not met: The proposal does not meet minimum quorum and is
marked “Defeated” by the moderators. The proposal undergoes a 7-day
cooldown period. At the conclusion of this period, the proposer can resubmit
the proposal and proceed with the governance process.
3. Quorum is met but does not receive more than 50% in 'Yes' votes: The post is
marked as ‘Defeated’ by the moderators. 
• If “No” votes > “Yes with modification” votes - The proposal must then
undergo a 7-day cooldown period. Afterward, the proposer must then
resubmit the proposal, along with any necessary modifications, and proceed
with the governance process.
• If “Yes with modification” votes >= “No” votes - The proposal can be
returned to the deliberation phase for modifications and is not subject to the
7-day cooldown period. Once modifications are made to the proposal it can
be elevated to a Snapshot vote once again.


---
## Page 269

269
When a governance proposal passes the snapshot vote in the previous stage, the
proposal moves to Sperax Improvement Plan. This will have the list of all accepted
proposals. The Sperax engineering team will pick up proposals from SIP for
implementation based on their priorities and bandwidth. Community can also help
write the code for implementing proposals from SIP. All codes will have to be
audited before implementation. Sperax Foundation will help in facilitating the audits.
Check the repository of all the winning proposals
Track the implementation of these proposals 
Approved SIPs
Sperax DAO
Sperax Improvement Plan – Asana
Asana
Phase 3: Sperax Improvement Plan (SIP):


![Image 1](images/page269_img1.png)


![Image 2](images/page269_img2.png)


---
## Page 270

270
Bug Bounty Program
The Security of Sperax’s USDs and Demeter users is paramount. The engineering
team and our auditors have invested significant time and resources to ensure that
USDs and Demeter are secure and dependable. The USDs and Demeter smart
contracts are publicly verifiable. The details and statistics of circulating supply,
underlying collateral, collateral strategies, Farms etc are publicly available.
On 1st March 2024 we are launching our bug bounty program. Security
researchers, fulfilling the eligibility criteria as mentioned in this document, are
eligible for a bug bounty for reporting undiscovered vulnerabilities. The Program
aims to incentivize responsible disclosure and enhance the security of the USDs
protocol and Demeter.
Security is one of our core values. We value the input of hackers acting in good
faith to help us maintain the highest standard for the security and safety of the
Sperax ecosystem. The USDs protocol and Demeter, while it has gone through a
professional audit, depends on new technology that may contain undiscovered
vulnerabilities.
The Sperax team encourages the community to audit our contracts and security.
We also encourage the responsible disclosure of any issues. This program is
intended to recognize the value of working with the community of independent
security researchers. It sets out our definition of good faith in the context of finding
and reporting vulnerabilities, as well as, what you can expect from us in return.
Introduction
Bug Bounty Program
Scope


---
## Page 271

271
The Program includes the vulnerabilities and bugs in the USDs protocol core
repository (located in the GitHub repositories, primarily at: 
https://github.com/Sperax/USDs-v2/tree/main/contracts
 and 
https://github.com/Sperax/Demeter-Protocol-Contracts
. This list may change as
new contracts are deployed or existing contracts are removed from usage.
The following are not within the scope of the Program:
1. Bugs in any third-party contract or platform that interacts with USDs protocol;
2. Vulnerabilities related to domains, DNS, or servers of websites;
3. Vulnerabilities already reported or discovered in contracts built by third parties
on USDs;
4. Any already-reported bugs or other vulnerabilities.
5. Test contracts and staging servers unless the discovered vulnerability also
affects the USDs Protocol or could otherwise be exploited in a way that risks
user funds.
A researcher needs to submit all bug bounty disclosures to here
. The disclosure
must include clear and concise steps to reproduce the discovered vulnerability in
written or video format. The Sperax team will follow up promptly with
acknowledgment of the disclosure.
To be eligible for a reward under this Program, you must:
Disclosure
Terms and Conditions


---
## Page 272

272
• Discover a previously unreported, non-public vulnerability within the scope of
this Program. Vulnerabilities must be distinct from the issues covered in the
previously conducted publicly available audits.
• Include sufficient detail in your disclosure to enable our engineers to quickly
reproduce, understand, and fix the vulnerability.
• Be the first to disclose the unique vulnerability to the Team by the disclosure
requirements below. If similar vulnerabilities are reported, the first submission
shall be rewarded (if determined valid and otherwise in the scope of this
Program)
• Be reporting in an individual capacity, or if employed by a company, reporting
with the company’s written approval to submit a disclosure to Sperax
• Not be a current or former Sperax team member, vendor, contractor, or
employee of a SperaxDAO vendor or contractor.
• Not be subject to any international, national, or state-level sanctions.
• Be at least 18 years of age or, if younger, submit your vulnerability with the
consent of your parent or guardian.
• Not exploit the vulnerability in any way, including by making it public or
obtaining a profit (other than a reward under this Program). Any publicity in any
way, whether direct or indirect, relating to any bug or vulnerability will
automatically disqualify it and you from the Program.
To encourage vulnerability research and to avoid any confusion between good-faith
hacking and malicious attacks, we require that you:


---
## Page 273

273
• Play by the rules, including following the terms and conditions of this program
and any other relevant agreements. If there is any inconsistency between this
program and any other relevant agreements, the terms of this program will
prevail.
• Report any vulnerability you’ve discovered promptly.
• Make a good faith effort to avoid privacy violations, data destruction, harming
user experience, interruption, or degradation of the Sperax ecosystem and
services.
• Use only the google form to submit vulnerabilities with us.
• Keep the details of any discovered vulnerabilities confidential until they are
fixed.
• Perform testing only on in-scope systems, and respect systems and activities
which are out-of-scope.
• Not submit a separate vulnerability caused by an underlying issue that is the
same as an issue on which a reward has been paid under this Program.
• Only interact with accounts you own or with explicit permission from the
account holder.
• Not engage in any unlawful conduct when disclosing the bug, including through
threats, demands, or any other coercive tactics.
When working with us according to this program, you can expect us to:


---
## Page 274

274
• Pay generous rewards for eligible discoveries based on the severity and
exploitability of the discovery, at The Sperax team's sole discretion
• Extend Safe Harbor for your vulnerability research related to this program,
meaning we will not threaten or bring any legal action against anyone who
makes a good faith effort to comply with our bug bounty program.
• Work with you to understand and validate your report, including a timely initial
response to the submission.
• Work to remediate discovered vulnerabilities promptly.
• Recognize your contribution to improving our security if you are the first to
report a unique vulnerability, and your report triggers a code or configuration
change.
• All reward determinations, including eligibility and payment amount, are made at
Sperax’s sole discretion. The Sperax team reserves the right to reject
submissions and alter the terms and conditions of this program.
Sperax Treasury offers rewards for discoveries that can prevent the loss of assets,
the freezing of assets, or harm to a user, commensurate with the severity and
exploitability of the vulnerability. Sperax Treasury will pay a reward of $500 to
$15,000 for eligible discoveries according to the terms and conditions provided
below.
The Team evaluates all submissions on a case-by-case basis. Rewards are
allocated based on the severity of the issue, and other variables, including, but not
limited to a) the quality of the issue description, b) the instructions for
reproducibility, and c) the quality of the fix (if included). A detailed report of a
vulnerability increases the likelihood of a reward and may increase the reward
amount. Therefore, please provide as much information about the vulnerability as
possible.
The Program intends to follow a similar approach as the Ethereum Bug Bounty,
where the severity of the issues will be based according to the OWASP risk rating
model based on “Impact” and “Likelihood”. The evaluation of scoring is however at
the sole discretion of the Sperax Team.
Rewards


---
## Page 275

275
All rewards are paid in SPA and xSPA tokens with a 50-50 split (15-day TWAP) via a
transfer to the wallet address provided by the participant to the Team. As a
condition of participating in this Program, the participants give the Sperax Team
permission to share their wallet addresses and other information provided by them
to third parties to administer this Program and comply with applicable laws,
regulations, and rules.
The reward will be received in SPA token based on the following severity scheme:
• Note = Up to 100 US dollars
• Very low = Up to 500 US dollars
• Low = Up to 1,000 US dollars
• Medium = Up to 2,500 US dollars
• High = Up to 5,000 US dollars
• Very High = Up to 10,000 US dollars
• Critical = Up to 15,000 US dollars
The decisions made regarding rewards are final and binding.
Likelihood/
Severity
Very Low
Low
Moderate
High
Critical
Almost
certain
$1000
$2500
$5000
$10000
$15000
Likely
$500
$1000
$2500
$5000
$10000
Possible
$100
$500
$1000
$2500
$5000
Unlikely
$100
$100
$500
$1000
$2500
Almost
Possible
$100
$100
$100
$500
$1000
Other terms


---
## Page 276

276
By submitting your report, you grant the Company all rights, including without
limitation intellectual property rights, needed to validate, mitigate, and disclose the
vulnerability. All reward decisions, including eligibility for and amounts of the
rewards and how such rewards will be paid, are made at the Company's sole
discretion.
Terms and conditions of the Program may be altered at any time. The company may
change or cancel this Program at any time, for any reason.


---
## Page 277

277
FAQ


---
## Page 278

278
SPA Tokenomics
Token distribution schedule, details of tokens held by the foundation and
community treasury
Circulating Supply = Total Supply of SPA on Ethereum + Total Supply of SPA 
on Arbitrum + Total Supply of wSPA on Ethereum - wSPA locked on Arbitrum 
bridge - SPA balance held by major wallets - SPA locked in SPA Staking 
Protocol
SPA token address (Ethereum): 0xb4a3b0faf0ab53df58001804dda5bfc6a3d59008
SPA token address (Arbitrum):
0x5575552988A3A80504bBaeB1311674fCFd40aD4B
wSPA (wrapped SPA) token address (Ethereum):
0x2a95FE4c7e64e09856989F9eA0b57B9AB5f770CB
Arbitrum bridge where wSPA is locked (Ethereum):
0xcEe284F754E854890e311e3280b767F80797180d
SPA Circulating Supply Calculation Logic
Important contract addresses:
Major wallets with SPA tokens


---
## Page 279

279
Name
Address
Vesting &
Purpose
Initial
Allocation
% of Initial
Supply
Treasury
0x4a692fD139
259a5b94Cad
7753E3C9635
0b7F2B9f
0xBA6ca0B9e
7333f5e66781
6b85704c024
AB250C9D
0x8898A38Eb
8E3104f7c986
22b55260E014
B3a0217
This vests
linearly over a
4-year time-
lock, beginning
from the
launch date of
governance
protocol. The
DAO will
control this
fund and utilize
for future
partnerships,
marketing
incentives,
liquidity mining
rewards, etc.
1,250,000,000
25%


---
## Page 280

280
Foundation
0xD95791bcab
484C0552833
cB558d18d4D3
F198AF9
0xb56e5620A
79cfe59aF7c0
FcaE95aADbE
A8ac32A1
0xC6e00e0E3
544C93460cd
Fb53E85C452
8EF348265
Foundation
funds are
being used to
make initial
markets and
for protocol
development.
Since the
foundation
lends the
tokens to third
parties for
market making
activities, the
actual token
balance held in
the foundation
wallet will
fluctuate. 
Foundation
has burnt
375MM SPA in
2022 to
further
decentralise
the protocol -
250MM SPA in
May and
125MM SPA in
September. 
0xC6e00e0E3
544C93460cd
Fb53E85C452
8EF348265
is an operator
wallet which is
sometimes
used to move
tokens from
Layer 1 to
Layer 2. 
1,250,783,000
25.02%


---
## Page 281

281
Bootstrap
Liquidity
0x8B65CE3b4
Eaa89583460
96C3a9303b7
3f2012aCc
0xAF64e027D
42bAc1C14277
fd295De9Ae31
8eEF17E
This will be
used to
provide
rewards for
liquidity mining
during protocol
genesis. Future
liquidity mining
rewards will be
funded from
treasury funds
500,000,000
10%
Staking
Rewards
0xCD1B1ce6ce
877a9315E73E
2E4Ba3137228
068A59
0x3702E3e2D
B2b5d037c1db
B23Ab7A51d0
Cc90BD0e
This will be
used to reward
users who
stake $SPA in
the staking
protocol.
Stakers will
earn fees from
the minting
and redeeming
of $USDs, as
well as staking
rewards from
the allocated
rewards
budget.
500,000,000
10%
Team &
Advisor
0xE10b88d70b
01b956782Dc9
8d7D4f3a931F
F59Fc7
This vests
linearly over 4
years with a 6
month cliff.
Token unlock
schedule will
start from
4/1/2022 for
existing team
members. For
new members,
vesting would
start at least
three months
from the day
they join.
499,217,000
9.98%


---
## Page 282

282
Tokens from Bootstrap Liquidity have been moved to a lot of Farm rewarder
contracts and  deployer wallet addresses for operational reasons. Please find below
the list of those addresses. We will try our best to keep this list constantly updated. 
Private Sale
0x2Fc8d8BCf4
b2c0fc659447
5E44c473AC3
E844B6a
All SPA tokens
have been
vested under a
strict vesting
schedule of 1
year starting
from
9/18/2021.
750,000,000
15%
Title
Chain
Contract / Wallet Address
veSPA L1
Ethereum
0xbF82a3212e13b2d407D1
0f5107b5C8404dE7F403
veSPA L2
Arbitrum
0x2e2071180682Ce6C247B
1eF93d382D509F5F6A17
RewardDistributor L1
Ethereum
0xa61DD4480BE2582283Af
a54E461A1d3643b36040
RewardDistributor L2
Arbitrum
0x2c07bc934974BbF413a4
a4CeDA98713DCb8d9e16
Staking Reward 
Arbitrum
0x3702E3e2DB2b5d037c1d
bB23Ab7A51d0Cc90BD0e
Staking Protocol Related
Bootstrap Liquidity Related


---
## Page 283

283
Title
Chain
Contract / Wallet Address
Bootstrap Liquidity
Ethereum
0x8B65CE3b4Eaa8958346
096C3a9303b73f2012aCc
Bootstrap liquidity deployer
Ethereum  and Arbitrum
0xc28c6970D8A345988e8
335b1C229dEA3c802e0a6
USDs/USDC Farm Rewarder
(SPA)
Arbitrum
0x1733c5bc884090C73D89
303467461693c54Ba58B
SPA/USDs Farm Rewarder 1
(SPA)
Arbitrum
0x136C218Ff8E87eD68f851
433685960819F06b1fE
USDs/USDC Farm Vesting
(SPA)
Arbitrum
0x638d76763dE9492b609
b0d8830D8F626C5933A4D
SPA/USDs Farm Vesting
(SPA)
Arbitrum
0x03b35477cFD400dEdfAc
06f40422491500cbc663
SPA/USDs Farm Rewarder 2
(SPA)
Arbitrum
0x36033594EC23E0f0B187
f767889Eb4C539F4aE03
SPA/USDs Farm Vesting 2
(SPA)
Arbitrum
0xC0F0484a216AfF20E0ea
d1a1513cE40fe0AFe0fe
SPA-Reserve-L2 multi-sig
Arbitrum
0xb56e5620A79cfe59aF7c
0FcaE95aADbEA8ac32A1
SPA Farm
Arbitrum
0xc150cbdDC5932258fAc7
68bEB4d2352D127039fd
SPA Farm rewarder
Arbitrum
0x852afF031bb282C054B2
6628A799D7F3a896873e
Bootstrap liquidity Arbitrum
Arbitrum
0xAF64e027D42bAc1C1427
7fd295De9Ae318eEF17E
SPA Buyback


---
## Page 284

284
The SPA that is bought back from the open markets using 30% of the auto-yield
and 100% of the fees is stored in : 
0xA61a0719e9714c95345e89a2f1C83Fae6f5745ef
 (Arbitrum One)
SPA circulating supply sheet
 which is in Beta. It can be used to view the
circulating supply breakdown for the token. 


---
## Page 285

285
xSPA token
xSPA is a reward token of the Sperax ecosystem. xSPA can be either staked for
veSPA with a lockup of 180 days or more, or redeemed within 15 to 180 days giving
50% to 100% SPA upon redemption.
Earlier in 2023, SperaxDAO decided on the SPA budget for emission through Gauge
(SIP-32
) and redirecting veSPA emissions to bribes on Gauge (SIP-33
). Every
week, Gauge emits 2.9 M SPA and veSPA voters are bribed 383K SPA. This SPA
should be used more prominently and assertively to drive USDs growth and bring
new adoption.
Since the start of SPA Gauge, USDs total supply has decreased from $2M to
$1.78M. In the meantime, SPA Gauge has emitted about 80M SPA amounting to
$392K. The SPA circulating supply has increased from 1.593B to 1.658B.
Emitting SPA in a predetermined manner and without assessing the market
dynamics is improper utilization of resources. Since our target is to increase USDs
adoption which will help in growing the Sperax ecosystem and its participants, we
must rethink our overall strategy.
Apart from maintaining the target to make SPA deflationary, SperaxDAO should
ensure that the emission is invested back into the ecosystem and contributes
directly towards increasing the USDs adoption and supply.
Summary / Abstract
Motivation
Overview


---
## Page 286

286
All SPA emissions should have a looping effect such that a good portion of SPA
distributed should be invested back into the ecosystem in the form of veSPA and
increase the burning rate of SPA.
Since the emissions are not helping in increasing either USDs adoption or the
locked tokens. The recent increment in veSPA numbers is primarily driven by the
team token allocation in veSPA. The Sperax ecosystem is steadily moving towards
complete decentralization of protocols and hence should have more governance
participation.
The Sperax ecosystem should have a new reward token. A token which can be
staked as veSPA or redeemed for SPA. After drawing some inspiration from the
Camelot emission strategy, the core team proposes the launch of a new token
called xSPA. Users can either stake 1 xSPA for one veSPA or redeem 1 xSPA for 1
SPA.
Users can redeem 1 xSPA token for SPA by depositing their xSPA token through the
redemption contract. Users can stake 1 xSPA in veSPA to increase their staked SPA
balance. The relation between xSPA, SPA, and veSPA will be governed by the
following rules
Technical overview


---
## Page 287

287
• 1 xSPA will be equivalent to 1 SPA.
• Users can redeem 1 xSPA for 1 SPA if they lock the xSPA in the redemption
contract for 180 days, the maximum redemption period.
• Users can redeem 1 xSPA for 0.5 SPA if they lock the xSPA in the redemption
contract of 15 days, the minimum redemption period.
• If the redemption period is ‘x’, between 15 and 180 days, the amount of SPA a
user gets is governed by the following equation:
Receivable spaAmount = (_xSpaAmount * (_redeemDuration + 150 days)) / 
330 days
• A redemption request cannot be modified or canceled.
• The redemption contract will instantly burn any differential SPA
◦In case of the minimum locking period of 15 days, half the SPA tokens will be
burnt right away and users can claim their SPA tokens after 15 days.
◦In case of a maximum locking period of 180 days, no SPA will be burnt and
users can claim their SPA token after 180 days.
◦In case of a period between 15 and 180 days, SPA burnt is:
SpaBurnt = _xSpaAmount - Receivable spaAmount
Users can claim their SPA tokens after the locking period.
• Users can stake 1 xSPA token in the veSPA contract to increase their staked SPA
balance by 1 SPA token for the existing lockup period if the lockup period is
greater than 180 days.
◦If the user has 0 staked balance, the system will throw an error and will ask
the user to create a staked position with a minimum staking period of 180
days
◦If the user has staked balance but the lockup is less than 180 days, the
system will throw an error and ask the user to increase the locking period to
a minimum of 180 days
◦Users will be able to increase their staked position if the lockup period is
above 180 days.
• xSPA token is transferrable.
• The staking and redemption criteria can be updated/modified through
governance.


---
## Page 288

288
1. Allow xSPA token contract to transfer SPA from your account by calling approve
 function on SPA
 token contract by passing spender as 
0x0966E72256d6055145902F72F9D3B6a194B9cCc3  xSPA’s address and amount as
the desired amount of xSPA you would like to have. Note: To allow 1 SPA pass
1000000000000000000 i.e 1e18 as amount in the approve function.
2. Call this
 mint function on xSPA contract by passing the amount if you want to
receive xSPA on your account or this
 mint function by passing the address of
the receiver account and amount if you want to receive the xSPA on another
account.
3. Check your xSPA balance by calling balanceOf
 function on by passing in your
account’s address.
• The minimum redemption period is 15 days in which you will receive only 100/2
= 50 SPA after 15 days.
• The maximum redemption period is 180 days in which you will receive all your
100 SPA back for your 100 xSPA.
• If you select any period between 15 days to 180 days, the SPA amount
redeemed would be calculated on pro rata basis between 50% to 100% of SPA
for your xSPA. You can get this amount by calling getSpaforxSPA
 function on
the xSPA contract by passing the xSPA amount with precision and your
redeemDuration in seconds between 1296000 (15 days) to 15552000 (180
days) and it will return the SPA amount you will receive at the end of your
redemption period.
• To create a redemption request you can call createRedemptionRequest
 on the
xSPA contract by passing the xSPA amount with precision and the redeem
duration between the range specified above. It returns the redemption request
ID which will be used to track and claim later.
How to get, deposit and redeem xSPA token.
Getting xSPA from SPA:
Depositing xSPA for redeeming SPA:


---
## Page 289

289
• Once you have created a redemption request in the above step, you can see
and track your redemption request by calling redemptionRequests
 function on
the xSPA contract by passing your redemption request ID, it returns the
requester’s address, unlock time in unix epoch and spa amount which will be
unlocked.
• Once the current unix epoch time is more than the unlock time of the
redemption request, you can call the redeemSPA
 function by passing in your
redemption request ID if you want to receive the SPA tokens on your account
otherwise you can call this
 function by passing an address of another account
as receiver and your request ID to send the SPA to another account.
• For this redemption you must have an existing veSPA lock for at least 180 days
or more, if you do not have, you can call createLock
 function on the veSPA
contract by passing the amount, lock duration (minimum 180 days) and auto
cooldown preference.
• If you have an active veSPA lock for at least 180 days or more, you can call 
stakeXSpa
 function on the xSPA token contract and your veSPA balance
would be increased immediately.
Redeeming xSPA for SPA:
Redeeming xSPA for veSPA:


---
## Page 290

290
Smart Contract Addresses
USDs L2 (Arbitrum) address: 0xD74f5255D557944cf7Dd0E45FF521520002D5748
•
SPA L2 address: 0x5575552988A3A80504bBaeB1311674fCFd40aD4B
SPA L1 address: 0xB4A3B0Faf0Ab53df58001804DdA5Bfc6a3D59008
wSPA L1 address: 0x2a95FE4c7e64e09856989F9eA0b57B9AB5f770CB
Binance Smart Chain
SPA BSC address: 0x1A9Fd6eC3144Da3Dd6Ea13Ec1C25C58423a379b1
xSPA L2 address: 0x0966E72256d6055145902F72F9D3B6a194B9cCc3
USDs Token Address
USDs Contract Addresses:
SPA Token Addresses
Arbitrum One:
Ethereum
xSPA Contract Address
veSPA Contract Address


---
## Page 291

291
Proxy contract deployed at: 0x2e2071180682Ce6C247B1eF93d382D509F5F6A17 
Implementation contract deployed at:
0xD16f5343FDDD2DcF6A8791e302A204c13069D165 
Proxy contract deployed at: 0xbF82a3212e13b2d407D10f5107b5C8404dE7F403 
Implementation contract deployed at:
0xA3F8745548A98ee67545Abcb0Cc8ED3129b8fF8D
Arbitrum One: 
Ethereum: 


---
## Page 292

292
How to Transfer SPA from
Ethereum to Arbitrum
Though all the Sperax and SPA functionality lives on Arbitrum now - it might happen
that some early users still have SPA on the chain Sperax started with - Ethereum. 
From today's perspective, SPA held on Ethereum can be used only for transfers
between on-chain accounts or for depositing SPA to CEXs supporting SPA deposits
on Ethereum. SPA on Ethereum can't be used for staking, yield farming (Farms on
Sperax DApp), or for voting on Snapshot. 
If you still have SPA on Ethereum Mainnet, you need to bridge it from Ethereum to
Arbitrum in order to unlock SPA potential in DeFi.
The Arbitrum bridge accepts a wrapped form of SPA (wSPA), so first of all you must
wrap your SPA on Ethereum in order to bridge it. Don’t worry, the value of your
tokens will not change.
Below you can find instructions for transferring SPA to Arbitrum. Please make sure
you have some ETH in your wallet to manage gas fees when wrapping and bridging
SPA. 
Please remember: wSPA has no other function except being an intermediary token
for bridging. Please don't try to send wSPA to any CEX or sell it - the transaction
may fail or you can lose your tokens. Use wSPA only to bridge it to Arbitrum and get
your SPA on Arbitrum.
Additionally, if your tokens do not appear after swapping or bridging, make sure you
manually add SPA token addresses
 to your wallet.
Step 1: SPA (Ethereum Mainnet) → wSPA (Ethereum Mainnet)


---
## Page 293

293
1. Open this link
.
2. Connect to Ethereum mainnet using your wallet using the appropriate provider.
3. Import wSPA token
 into your wallet using this token address:
0x2a95FE4c7e64e09856989F9eA0b57B9AB5f770CB
4. Enter the amount of SPA you want to convert to wSPA. Note that 1 SPA = 1
wSPA.
5. Then click on 'Swap', provide consent and send the transaction.
6. You can now see the wSPA tokens in your wallet.
Step 2: wSPA (Ethereum Mainnet) → SPA (Arbitrum)
How to Convert SPA on Ethereum to wSPA
How to Convert SPA on Ethereum to wSPA


---
## Page 294

294
1. Navigate to Arbitrum Bridge
. (Make sure that you are bridging from Ethereum
to Arbitrum One.)
2. Connect your wallet using the appropriate provider.
3. Select wSPA token by pasting its token address:
(0x2a95FE4c7e64e09856989F9eA0b57B9AB5f770CB)
4. Enter the amount of wSPA that you want to bridge. You will receive the same
amount of SPA on Arbitrum. (Note that the website may show that you will
receive wSPA, but be assured that you will receive SPA on Arbitrum. You can
verify that using SPA Arbitrum's token address:
0x5575552988A3A80504bBaeB1311674fCFd40aD4B)
5. Click on 'Move funds to Arbitrum One' and then send the transaction to give
permission to transfer the capped amount of wSPA.
6. Send the transaction now to bridge and wait for some time for the transcation to
be completed successfully.
7. You can track the transaction status/history on the bridge page. In some time,
you should see the SPA tokens on Arbitrum in your wallet.
How to Convert wSPA to SPA on Arbitrum
How to Convert wSPA to SPA on Arbitrum


---
## Page 295

295
Quick Links
