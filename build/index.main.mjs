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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc0, ctc1, ctc1, ctc1, ctc1]
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
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 12));
  const ctc3 = stdlib.T_Tuple([ctc1, ctc2, ctc0]);
  const ctc4 = stdlib.T_Tuple([ctc3]);
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Address;
  
  
  const v122 = stdlib.protect(ctc0, interact.goal, 'for Artist\'s interact field goal');
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:20:5:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:20:5:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v125, time: v124, didSend: v23, from: v123 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v125, time: v124, didSend: v23, from: v123 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v123, v124, v122],
    evt_cnt: 1,
    funcNum: 1,
    lct: v124,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:5:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v129], secs: v131, time: v130, didSend: v32, from: v128 } = txn2;
      
      ;
      const v132 = stdlib.addressEq(v123, v128);
      ;
      const v134 = stdlib.add(v124, stdlib.checkedBigNumberify('./index.rsh:5:29:decimal', stdlib.UInt_max, 5));
      const v135 = stdlib.checkedBigNumberify('./index.rsh:33:19:decimal', stdlib.UInt_max, 0);
      const v136 = v130;
      const v137 = v124;
      const v143 = stdlib.checkedBigNumberify('./index.rsh:18:9:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        const v147 = stdlib.gt(v134, v137);
        
        return v147;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v183 = stdlib.sub(v143, v143);
        sim_r.txns.push({
          amt: v143,
          kind: 'from',
          to: v123,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v129], secs: v131, time: v130, didSend: v32, from: v128 } = txn2;
  ;
  const v132 = stdlib.addressEq(v123, v128);
  stdlib.assert(v132, {
    at: './index.rsh:28:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Artist'
    });
  const v134 = stdlib.add(v124, stdlib.checkedBigNumberify('./index.rsh:5:29:decimal', stdlib.UInt_max, 5));
  let v135 = stdlib.checkedBigNumberify('./index.rsh:33:19:decimal', stdlib.UInt_max, 0);
  let v136 = v130;
  let v137 = v124;
  let v143 = stdlib.checkedBigNumberify('./index.rsh:18:9:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    const v147 = stdlib.gt(v134, v137);
    
    return v147;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: ['time', v134],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v123, v134, v135, v136, v143],
        evt_cnt: 0,
        funcNum: 4,
        lct: v136,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:46:15:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v177, time: v176, didSend: v88, from: v175 } = txn4;
          
          ;
          const v178 = stdlib.addressEq(v123, v175);
          ;
          const cv135 = v135;
          const cv136 = v176;
          const cv137 = v136;
          const cv143 = v143;
          
          await (async () => {
            const v135 = cv135;
            const v136 = cv136;
            const v137 = cv137;
            const v143 = cv143;
            
            if (await (async () => {
              const v147 = stdlib.gt(v134, v137);
              
              return v147;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v183 = stdlib.sub(v143, v143);
              sim_r.txns.push({
                amt: v143,
                kind: 'from',
                to: v123,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc6, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v177, time: v176, didSend: v88, from: v175 } = txn4;
      ;
      const v178 = stdlib.addressEq(v123, v175);
      stdlib.assert(v178, {
        at: './index.rsh:46:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Artist'
        });
      const cv135 = v135;
      const cv136 = v176;
      const cv137 = v136;
      const cv143 = v143;
      
      v135 = cv135;
      v136 = cv136;
      v137 = cv137;
      v143 = cv143;
      
      continue;
      }
    else {
      const {data: [v160], secs: v162, time: v161, didSend: v61, from: v159 } = txn3;
      undefined /* setApiDetails */;
      const v163 = v160[stdlib.checkedBigNumberify('./index.rsh:38:7:spread', stdlib.UInt_max, 0)];
      const v164 = v163[stdlib.checkedBigNumberify('./index.rsh:39:27:array ref', stdlib.UInt_max, 2)];
      const v166 = stdlib.add(v143, v164);
      ;
      const v167 = null;
      await txn3.getOutput('Fan_pickPerk', 'v167', ctc5, v167);
      const v174 = stdlib.add(v135, v164);
      const cv135 = v174;
      const cv136 = v161;
      const cv137 = v136;
      const cv143 = v166;
      
      v135 = cv135;
      v136 = cv136;
      v137 = cv137;
      v143 = cv143;
      
      continue;}
    
    }
  const v183 = stdlib.sub(v143, v143);
  ;
  stdlib.protect(ctc5, await interact.logAmount(v183), {
    at: './index.rsh:54:23:application',
    fs: ['at ./index.rsh:54:23:application call to [unknown function] (defined at: ./index.rsh:54:23:function exp)', 'at ./index.rsh:54:23:application call to "liftedInteract" (defined at: ./index.rsh:54:23:application)'],
    msg: 'logAmount',
    who: 'Artist'
    });
  
  stdlib.protect(ctc5, await interact.logAmount(v135), {
    at: './index.rsh:55:23:application',
    fs: ['at ./index.rsh:55:23:application call to [unknown function] (defined at: ./index.rsh:55:23:function exp)', 'at ./index.rsh:55:23:application call to "liftedInteract" (defined at: ./index.rsh:55:23:application)'],
    msg: 'logAmount',
    who: 'Artist'
    });
  
  return;
  
  
  
  
  };
export async function Fan_pickPerk(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Fan_pickPerk expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Fan_pickPerk expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 12));
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3, ctc1]);
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Null;
  
  
  const [v123, v134, v135, v136, v143] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc1, ctc1, ctc1, ctc1]);
  const v156 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:38:7:application',
    fs: ['at ./index.rsh:38:7:application call to [unknown function] (defined at: ./index.rsh:38:7:function exp)'],
    msg: 'in',
    who: 'Fan_pickPerk'
    });
  
  const v157 = v156[stdlib.checkedBigNumberify('./index.rsh:38:7:spread', stdlib.UInt_max, 0)];
  const v158 = v157[stdlib.checkedBigNumberify('./index.rsh:39:27:array ref', stdlib.UInt_max, 2)];
  
  const txn1 = await (ctc.sendrecv({
    args: [v123, v134, v135, v136, v143, v156],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [v158, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v160], secs: v162, time: v161, didSend: v61, from: v159 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Fan_pickPerk"
        });
      const v163 = v160[stdlib.checkedBigNumberify('./index.rsh:38:7:spread', stdlib.UInt_max, 0)];
      const v164 = v163[stdlib.checkedBigNumberify('./index.rsh:39:27:array ref', stdlib.UInt_max, 2)];
      const v166 = stdlib.add(v143, v164);
      sim_r.txns.push({
        amt: v164,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v167 = null;
      const v168 = await txn1.getOutput('Fan_pickPerk', 'v167', ctc6, v167);
      
      const v174 = stdlib.add(v135, v164);
      const v273 = v174;
      const v274 = v161;
      const v276 = v166;
      const v277 = stdlib.gt(v134, v136);
      if (v277) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: v166,
          kind: 'from',
          to: v123,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v160], secs: v162, time: v161, didSend: v61, from: v159 } = txn1;
  undefined /* setApiDetails */;
  const v163 = v160[stdlib.checkedBigNumberify('./index.rsh:38:7:spread', stdlib.UInt_max, 0)];
  const v164 = v163[stdlib.checkedBigNumberify('./index.rsh:39:27:array ref', stdlib.UInt_max, 2)];
  const v166 = stdlib.add(v143, v164);
  ;
  const v167 = null;
  const v168 = await txn1.getOutput('Fan_pickPerk', 'v167', ctc6, v167);
  stdlib.protect(ctc6, await interact.out(v160, v168), {
    at: './index.rsh:38:7:application',
    fs: ['at ./index.rsh:38:7:application call to [unknown function] (defined at: ./index.rsh:38:7:function exp)', 'at ./index.rsh:41:21:application call to "setPerksParams" (defined at: ./index.rsh:38:7:function exp)'],
    msg: 'out',
    who: 'Fan_pickPerk'
    });
  
  const v174 = stdlib.add(v135, v164);
  const v273 = v174;
  const v274 = v161;
  const v276 = v166;
  const v277 = stdlib.gt(v134, v136);
  if (v277) {
    return;
    }
  else {
    ;
    return;
    }
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Fan_pickPerk((byte[64],byte[12],uint64))byte[0]`],
    pure: [],
    sigs: [`Fan_pickPerk((byte[64],byte[12],uint64))byte[0]`]
    },
  appApproval: `BiAIAAEEICgwOAUmAgEAACI1ADEYQQIgKWRJIls1AYEIWzUCNhoAF0lBABQiNQQjNQaBp8DX8ggSRDYaAUIAbzYaAhc1BDYaAzYaARdJgQIMQADFSYEDDEAAvUkkDEAATSQSRCQ0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yVbNf6ABJEnNPOwMgY0/g9ENP8xABJENP80/jQDIQRbMgY0AyEFWzQDIQZbQgDvSCQ0ARJENARJIhJMNAISEUQoZEk1AyVbNf9JNQU1/oAEv96XejT+ULAyBjT/DEQ0/oFMWzX9NP2IAViACAAAAAAAAACnsCk1BzQDVwAgNP80AyEEWzT9CDIGNAMhBVs0AyEGWzT9CEIAhUhJIwxAAEdIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/kk1BRc1/YAE1RUZFDT9FlCwNP8xABJENP80/iEHCCIyBjT+IkIAN0giNAESRDQESSISTDQCEhFEgARfDav6sIGgjQaIALwxADIGFlAoSwFXAChnSCM1ATIGNQJCAGc1/zX+Nf01/DX7Nfo0+zT+DUEAJDT6NPsWUDT8FlA0/RZQNP8WUChLAVcAQGdIJDUBMgY1AkIAL7EisgE0/7III7IQNPqyB7NCAAAxGSEHEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 64,
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
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
                "internalType": "uint256",
                "name": "v129",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
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
                        "internalType": "struct T9",
                        "name": "elem0",
                        "type": "tuple"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes12",
                            "name": "elem0",
                            "type": "bytes12"
                          }
                        ],
                        "internalType": "struct T10",
                        "name": "elem1",
                        "type": "tuple"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "elem0",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T12",
                "name": "v160",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v167",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
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
            "internalType": "struct T9",
            "name": "elem0",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes12",
                "name": "elem0",
                "type": "bytes12"
              }
            ],
            "internalType": "struct T10",
            "name": "elem1",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "internalType": "struct T11",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "Fan_pickPerk",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
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
                "internalType": "uint256",
                "name": "v129",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
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
                        "internalType": "struct T9",
                        "name": "elem0",
                        "type": "tuple"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes12",
                            "name": "elem0",
                            "type": "bytes12"
                          }
                        ],
                        "internalType": "struct T10",
                        "name": "elem1",
                        "type": "tuple"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "elem0",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T12",
                "name": "v160",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001180380380620011808339810160408190526200002691620001ab565b600080554360035560408051825181526020808401511515908201527ff6b2f582026eaf8fd1fe583a836da56a1b30b8bd595170ad494773aa9148b06e910160405180910390a16200007b34156007620000db565b604080518082018252338082524360208084018281526001600081905592909255845180820193909352905182850152835180830385018152606090920190935280519192620000d2926002929091019062000105565b50505062000253565b81620001015760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001139062000216565b90600052602060002090601f01602090048101928262000137576000855562000182565b82601f106200015257805160ff191683800117855562000182565b8280016001018555821562000182579182015b828111156200018257825182559160200191906001019062000165565b506200019092915062000194565b5090565b5b8082111562000190576000815560010162000195565b600060408284031215620001be57600080fd5b604080519081016001600160401b0381118282101715620001ef57634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200020a57600080fd5b60208201529392505050565b600181811c908216806200022b57607f821691505b602082108114156200024d57634e487b7160e01b600052602260045260246000fd5b50919050565b610f1d80620002636000396000f3fe60806040526004361061006e5760003560e01c8063873779a11161004b578063873779a1146100c3578063a7661d54146100d6578063ab53f2c6146100e9578063ec521d921461010c57005b80631e93b0f1146100775780631f4056131461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610ad2565b61012f565b3480156100ba57600080fd5b50600154610088565b6100756100d1366004610afc565b61015a565b6100756100e4366004610afc565b610181565b3480156100f557600080fd5b506100fe6101a8565b604051610092929190610b1f565b61011f61011a366004610ca8565b610245565b6040519015158152602001610092565b60408051602081019091526000815261015661015036849003840184610cc4565b82610287565b5050565b60408051602081019091526000815261015661017b36849003840184610d27565b826104ac565b6040805160208101909152600081526101566101a236849003840184610d77565b8261063e565b6000606060005460028080546101bd90610db4565b80601f01602080910402602001604051908101604052809291908181526020018280546101e990610db4565b80156102365780601f1061020b57610100808354040283529160200191610236565b820191906000526020600020905b81548152906001019060200180831161021957829003601f168201915b50505050509050915091509091565b604080516020810190915260008082529061025e610958565b604080518082019091526020808201868152825282015261027f8183610287565b505192915050565b610297600460005414600d6107e0565b81516102b29015806102ab57508251600154145b600e6107e0565b6000808055600280546102c490610db4565b80601f01602080910402602001604051908101604052809291908181526020018280546102f090610db4565b801561033d5780601f106103125761010080835404028352916020019161033d565b820191906000526020600020905b81548152906001019060200180831161032057829003601f168201915b50505050508060200190518101906103559190610e05565b905061036881602001514310600f6107e0565b6040805184518152602080860151515180518051838501528201518385015290810151516001600160a01b0319166060830152820151608082015290517fcd26135badbb27457c603e82040fc7af68238388b9c63fe35379cfe434340f069181900360a00190a160208301515151604001516103e7903414600c6107e0565b604051600081527f7a51c099e5888ff3c1b6c414fef58fba7112fff3688a908c91e5bdee165d9e5f9060200160405180910390a1600082526104276109b6565b815181516001600160a01b039091169052602080830151825182015284015151516040908101519083015161045c9190610e88565b602080830180519290925281514390820152606084015191516040908101929092528501515151015160808301516104949190610e88565b6020820151606001526104a681610805565b50505050565b6104bc600160005414600a6107e0565b81516104d79015806104d057508251600154145b600b6107e0565b6000808055600280546104e990610db4565b80601f016020809104026020016040519081016040528092919081815260200182805461051590610db4565b80156105625780601f1061053757610100808354040283529160200191610562565b820191906000526020600020905b81548152906001019060200180831161054557829003601f168201915b505050505080602001905181019061057a9190610eae565b604080518551815260208087015151908201529192507f7df13b968ce0c210e3dcbfe64599eb5a3348cfa173e4eb2d8ee13c767a060b02910160405180910390a16105c7341560086107e0565b80516105df906001600160a01b0316331460096107e0565b6105e76109b6565b815181516001600160a01b039091169052602082015161060990600590610e88565b81516020908101919091528082018051600090819052815143908401529184015181516040015251606001526104a681610805565b61064e60046000541460126107e0565b815161066990158061066257508251600154145b60136107e0565b60008080556002805461067b90610db4565b80601f01602080910402602001604051908101604052809291908181526020018280546106a790610db4565b80156106f45780601f106106c9576101008083540402835291602001916106f4565b820191906000526020600020905b8154815290600101906020018083116106d757829003601f168201915b505050505080602001905181019061070c9190610e05565b9050610720816020015143101560146107e0565b60408051845181526020808601511515908201527fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d1910160405180910390a161076b341560106107e0565b8051610783906001600160a01b0316331460116107e0565b61078b6109b6565b815181516001600160a01b03909116905260208083015182518201526040808401518284018051919091528051439301929092526060808501518351909201919091526080840151915101526104a681610805565b816101565760405163100960cb60e01b81526004810182905260240160405180910390fd5b80602001516040015181600001516020015111156108fc576108586040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b0316808252825160209081015181840190815281850180515160408087019182528251850151606080890191825293518401516080808a019182526004600055436001558351978801989098529451918601919091529051918401919091525192820192909252905160a082015260c001604051602081830303815290604052600290805190602001906108f7929190610a03565b505050565b8051516020820151606001516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561093e573d6000803e3d6000fd5b506000808055600181905561095590600290610a87565b50565b6040518060400160405280600081526020016109b16040805160e081018252600060a0820181815260c0830182905282840190815283516020818101909552828152606084015260808301919091529181019182529081905b905290565b604080516080810182526000918101828152606082019290925290819081526020016109b16040518060800160405280600081526020016000815260200160008152602001600081525090565b828054610a0f90610db4565b90600052602060002090601f016020900481019282610a315760008555610a77565b82601f10610a4a57805160ff1916838001178555610a77565b82800160010185558215610a77579182015b82811115610a77578251825591602001919060010190610a5c565b50610a83929150610abd565b5090565b508054610a9390610db4565b6000825580601f10610aa3575050565b601f01602090049060005260206000209081019061095591905b5b80821115610a835760008155600101610abe565b600060a08284031215610ae457600080fd5b50919050565b600060408284031215610ae457600080fd5b600060408284031215610b0e57600080fd5b610b188383610aea565b9392505050565b82815260006020604081840152835180604085015260005b81811015610b5357858101830151858201606001528201610b37565b81811115610b65576000606083870101525b50601f01601f191692909201606001949350505050565b6040805190810167ffffffffffffffff81118282101715610bad57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff81118282101715610bad57634e487b7160e01b600052604160045260246000fd5b60008183036080811215610bf757600080fd5b6040516060810181811067ffffffffffffffff82111715610c2857634e487b7160e01b600052604160045260246000fd5b80604052508092506040821215610c3e57600080fd5b610c46610b7c565b8435815260208086013581830152908252603f1983011215610c6757600080fd5b610c6f610bb3565b915060408401356001600160a01b031981168114610c8c57600080fd5b8083525081602082015260608401356040820152505092915050565b600060808284031215610cba57600080fd5b610b188383610be4565b600081830360a0811215610cd757600080fd5b610cdf610b7c565b833581526080601f1983011215610cf557600080fd5b610cfd610bb3565b9150610d07610bb3565b610d148660208701610be4565b8152825260208101919091529392505050565b60008183036040811215610d3a57600080fd5b610d42610b7c565b833581526020601f1983011215610d5857600080fd5b610d60610bb3565b602094850135815293810193909352509092915050565b600060408284031215610d8957600080fd5b610d91610b7c565b8235815260208301358015158114610da857600080fd5b60208201529392505050565b600181811c90821680610dc857607f821691505b60208210811415610ae457634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610e0057600080fd5b919050565b600060a08284031215610e1757600080fd5b60405160a0810181811067ffffffffffffffff82111715610e4857634e487b7160e01b600052604160045260246000fd5b604052610e5483610de9565b8152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b60008219821115610ea957634e487b7160e01b600052601160045260246000fd5b500190565b600060408284031215610ec057600080fd5b610ec8610b7c565b610ed183610de9565b815260208301516020820152809150509291505056fea26469706673582212205d1ead505b3984ea77c9dc259d90fa4b0e2a6789048573b97336b693828c6ed564736f6c634300080c0033`,
  BytecodeLen: 4480,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:21:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:52:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:36:13:after expr stmt semicolon',
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
  "Artist": Artist,
  "Fan_pickPerk": Fan_pickPerk
  };
export const _APIs = {
  Fan: {
    pickPerk: Fan_pickPerk
    }
  };
