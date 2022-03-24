import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import  { ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';

const stdlib = loadStdlib(process.env);

// TODO: This should be taken dynamically from the Artist participant
const perksArtist = [
  ['Digital download', 'digitalDownload', 10],
  ['Digital download + CD', 'downloadCd', 20],
  ['Digital download, CD, and personal thank you note on CD', 'cdThanks', 50],
  ['Digital download, CD, thank you note, and private performance', 'privateShow', 200],
];

const urls = [
  'https://crowdfunding.com/download-1',
  'https://crowdfunding.com/download-2',
  'https://crowdfunding.com/download-3',
  'https://crowdfunding.com/download-1',
];

(async () => {
  console.log('Crowdfunding platform');
  const fmt = x => stdlib.formatCurrency(x, 4);

  const isArtist = await ask('Are you using the app as an artist?', yesno);
  const acc = await stdlib.newTestAccount(stdlib.parseCurrency(isArtist? 10 : 100));
  let ctc = null;

  if (isArtist) {
    ctc = acc.contract(backend);
    ctc.getInfo().then((info) => {
      console.log(`The contract is at ${JSON.stringify(info)}`);
    })
  } else {
    const info  = ask('Paste contract info', JSON.parse);
    ctc = acc.contract(backend, info);
  }


  // const getBalance = async () => fmt(await stdlib.balanceOf(acc));

  const interact = { ...stdlib.hasRandom };

  if (isArtist) {
    interact.perks = perksArtist;
    interact.goal = await ask('How much is your goal?', stdlib.parseCurrency);
  
    interact.getUrls = async () => urls;

    interact.getPickedPerk = async perkId => {
        const url = urls[perkId]
        if (url) {
          return url;
        }
        process.exit(1);
    }
  } else {
    interact.pickPerk = async perksFan => {
      const pickedIdx = ask(`Pick your perks ${perksFan.map((p, idx) => `${idx + 1} - ${p[0]}, `)}`, x => {
        if(isNaN(Number(x))){
          throw Error(`${x} is not a number!`)
        }

        return x - 1;
      });

      return perksFan[pickedIdx];
    }

    interact.confirmPrice = async totalPrice => ask(`Do you accept to pay the total price of ${fmt(totalPrice)}`, yesno);
  } 
  
  const part = isArtist ? ctc.p.Artist : ctc.apis.Fan;
  await part(interact);
  done();
})();
