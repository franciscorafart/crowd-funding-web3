// Automatically generated with Reach 0.1.9 (c449a2f7)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (c449a2f7)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Artist(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Artist expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Artist expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc2 = stdlib.T_Tuple([ctc1, ctc1, ctc0]);
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4));
  const ctc4 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4));
  const ctc5 = stdlib.T_Tuple([ctc0, ctc4]);
  const ctc6 = stdlib.T_Digest;
  
  
  const v46 = stdlib.protect(ctc0, interact.goal, 'for Artist\'s interact field goal');
  const v47 = stdlib.protect(ctc3, interact.perks, 'for Artist\'s interact field perks');
  
  const v50 = stdlib.protect(ctc4, await interact.getUrls(), {
    at: './index.rsh:30:35:application',
    fs: ['at ./index.rsh:27:9:application call to [unknown function] (defined at: ./index.rsh:27:13:function exp)'],
    msg: 'getUrls',
    who: 'Artist'
    });
  const v51 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:53:31:application',
    fs: ['at ./index.rsh:32:52:application call to "makeCommitment" (defined at: reach standard library:52:8:function exp)', 'at ./index.rsh:27:9:application call to [unknown function] (defined at: ./index.rsh:27:13:function exp)'],
    msg: 'random',
    who: 'Artist'
    });
  const v52 = stdlib.digest(ctc5, [v51, v50]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v47, v46, v52],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:38:5:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc3, ctc0, ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:5:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v55, v56, v57], secs: v59, time: v58, didSend: v35, from: v54 } = txn1;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v55, v56, v57], secs: v59, time: v58, didSend: v35, from: v54 } = txn1;
  ;
  return;
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiADAAGgBCYBACI1ADEYQQC8KGRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBFyISRCI0ARJENARJIhJMNAISEURJNQVJSSIkWDX/JFs1/oGoBIEgWDX9gATQ1zvtNP9QNP4WUDT9ULCBoI0GiABcQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "elem0",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "elem1",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem2",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T1[4]",
                "name": "v55",
                "type": "tuple[4]"
              },
              {
                "internalType": "uint256",
                "name": "v56",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v57",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "elem0",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T0",
                    "name": "elem1",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem2",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T1[4]",
                "name": "v55",
                "type": "tuple[4]"
              },
              {
                "internalType": "uint256",
                "name": "v56",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v57",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610580380380610580833981016040819052610022916101bb565b60008055436003556040517f599298f8077678cdce64cd3e5ae7396db0ad6e68d10ea3d50dba87c918edfcfa9061005a90839061029d565b60405180910390a161006e3415600761008a565b60008080556001819055610084906002906100b3565b5061036c565b816100af5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b5080546100bf90610331565b6000825580601f106100cf575050565b601f0160209004906000526020600020908101906100ed91906100f0565b50565b5b8082111561010557600081556001016100f1565b5090565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b038111828210171561014157610141610109565b60405290565b604051606081016001600160401b038111828210171561014157610141610109565b604051608081016001600160401b038111828210171561014157610141610109565b60006040828403121561019d57600080fd5b6101a561011f565b9050815181526020820151602082015292915050565b60008183036102e08112156101cf57600080fd5b6101d761011f565b8351815260206102c080601f19850112156101f157600080fd5b6101f9610147565b935086603f87011261020a57600080fd5b610212610169565b806102a088018981111561022557600080fd5b8489015b8181101561027f5760a0818c0312156102425760008081fd5b61024a610147565b6102548c8361018b565b815260406102648d82850161018b565b8289015260808301519082015284529285019260a001610229565b50908652518386015250949094015160408301529283015250919050565b8151815260208083015180516102e0840192919060008386015b60048210156103115782516102d782825180518252602090810151910152565b8581015160406102f38185018380518252602090810151910152565b9190910151608083015250918401916001919091019060a0016102b7565b505050818101516102a085015260408101516102c0850152505092915050565b600181811c9082168061034557607f821691505b6020821081141561036657634e487b7160e01b600052602260045260246000fd5b50919050565b6102058061037b6000396000f3fe6080604052600436106100355760003560e01c80631e93b0f11461003e5780638323075714610062578063ab53f2c61461007757005b3661003c57005b005b34801561004a57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561006e57600080fd5b5060015461004f565b34801561008357600080fd5b5061008c61009a565b604051610059929190610137565b6000606060005460028080546100af90610194565b80601f01602080910402602001604051908101604052809291908181526020018280546100db90610194565b80156101285780601f106100fd57610100808354040283529160200191610128565b820191906000526020600020905b81548152906001019060200180831161010b57829003601f168201915b50505050509050915091509091565b82815260006020604081840152835180604085015260005b8181101561016b5785810183015185820160600152820161014f565b8181111561017d576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806101a857607f821691505b602082108114156101c957634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220db868cf630faf756a06ffcfb0f87818ff1287c8fedbcf6e744e7df9fff8718fe64736f6c634300080c0033`,
  BytecodeLen: 1408,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:39:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Artist": Artist
  };
export const _APIs = {
  Fan: {
    }
  };
