# Decentralized Crowdfunding Smart Contract #

## How it works

This crowdfunding smart contract consists of two actors: `Artist` (single) and `Fan` (multiple)

The `Artist` user deploys the contract to raise funds for their project. Multiple `Fan` users can connect to the contract and add funds to the crowdfunding campaing by choosing different perks from a list. All the funds are stored in the contract until the end of the campaign, at which moment the Artist gets the funds transfered to them.


### How to run
On the home directory do `$ reach run` or `$ ./reach run`, depending on where reach is installed on your environment.

Follow the command line prompts for `Artist` ot `Fan` user.

### Future develoment
1. Allow fan to select between all-or-nothing mode (Kickstarter) or all-or-something campaign modes. In All-or-nothing crowdfunding mode, the Artist gets the funds in the contract only if the original goal was reached. In a All-or-something mode, the Artist gets all the crowdsourced funds, regardless if the goal is reached.

2. Allow users to recollect / harvesrt the funds from a All-or-nothing campaign if the goal wasn't met.

3. Allow Artist user to dynamically set the crowdfunding perks outside the contract, by referencing a data repository.

