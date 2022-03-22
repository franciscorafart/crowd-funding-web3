import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import  {ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';

const stdlib = loadStdlib(process.env);

(async () => {
  console.log('Crowdfunding platform');
  console.log('Launching...');

  const isArtist = await ask('Are you using the app as an artist?', yesno);
  const acc = stdlib.newTestAccount(stdlib.parseCurrency(isArtist? 10 : 100));
  let ctc = null;

  if (isArtist) {
    ctc = acc.contract(backend);
    ctc.getInfo().then(info => {
      console.log(`The contract is at ${JSON.stringify(info)}`);
    })
  } else {
    const info  = ask('Paste contract info', JSON.parse);
    ctc = acc.contract(backend, info);
  }

  const ftm = x => stdlib.formatCurrency(x, 4);
  const getBalance = async () => ftm(await stdlib.balanceOf(acc));

  const interact = { ...stdlib.hadRandom };

  // TODO: Define functions for participants

});
