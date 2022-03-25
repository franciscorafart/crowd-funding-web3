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
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 12));
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3, ctc1]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4));
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc0, ctc5, ctc1, ctc1, ctc1, ctc1]
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
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4));
  const ctc5 = stdlib.T_Tuple([ctc3]);
  const ctc6 = stdlib.T_Address;
  
  
  const v111 = stdlib.protect(ctc0, interact.goal, 'for Artist\'s interact field goal');
  const v112 = stdlib.protect(ctc4, interact.perks, 'for Artist\'s interact field perks');
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:22:5:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:22:5:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v115, time: v114, didSend: v24, from: v113 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v115, time: v114, didSend: v24, from: v113 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v113, v114, v112, v111],
    evt_cnt: 2,
    funcNum: 1,
    lct: v114,
    onlyIf: true,
    out_tys: [ctc4, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:31:5:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v119, v120], secs: v122, time: v121, didSend: v34, from: v118 } = txn2;
      
      ;
      const v123 = stdlib.addressEq(v113, v118);
      ;
      const v125 = stdlib.add(v114, stdlib.checkedBigNumberify('./index.rsh:5:29:decimal', stdlib.UInt_max, 10));
      const v126 = stdlib.checkedBigNumberify('./index.rsh:37:19:decimal', stdlib.UInt_max, 0);
      const v127 = v121;
      const v128 = v114;
      
      if (await (async () => {
        const v138 = stdlib.lt(v128, v125);
        
        return v138;})()) {
        const v145 = stdlib.add(v127, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, 5));
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: v126,
          kind: 'from',
          to: v113,
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
    tys: [ctc6, ctc0, ctc4, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v119, v120], secs: v122, time: v121, didSend: v34, from: v118 } = txn2;
  ;
  const v123 = stdlib.addressEq(v113, v118);
  stdlib.assert(v123, {
    at: './index.rsh:31:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Artist'
    });
  const v125 = stdlib.add(v114, stdlib.checkedBigNumberify('./index.rsh:5:29:decimal', stdlib.UInt_max, 10));
  let v126 = stdlib.checkedBigNumberify('./index.rsh:37:19:decimal', stdlib.UInt_max, 0);
  let v127 = v121;
  let v128 = v114;
  
  while (await (async () => {
    const v138 = stdlib.lt(v128, v125);
    
    return v138;})()) {
    const v145 = stdlib.add(v127, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, 5));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc5],
      timeoutAt: ['time', v145],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v113, v119, v125, v126, v127, v145],
        evt_cnt: 0,
        funcNum: 4,
        lct: v127,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:49:15:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v170, time: v169, didSend: v87, from: v168 } = txn4;
          
          ;
          const v171 = stdlib.addressEq(v113, v168);
          ;
          const cv126 = v126;
          const cv127 = v169;
          const cv128 = v127;
          
          await (async () => {
            const v126 = cv126;
            const v127 = cv127;
            const v128 = cv128;
            
            if (await (async () => {
              const v138 = stdlib.lt(v128, v125);
              
              return v138;})()) {
              const v145 = stdlib.add(v127, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, 5));
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                amt: v126,
                kind: 'from',
                to: v113,
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
        tys: [ctc6, ctc4, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v170, time: v169, didSend: v87, from: v168 } = txn4;
      ;
      const v171 = stdlib.addressEq(v113, v168);
      stdlib.assert(v171, {
        at: './index.rsh:49:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Artist'
        });
      const cv126 = v126;
      const cv127 = v169;
      const cv128 = v127;
      
      v126 = cv126;
      v127 = cv127;
      v128 = cv128;
      
      continue;
      }
    else {
      const {data: [v154], secs: v156, time: v155, didSend: v61, from: v153 } = txn3;
      undefined /* setApiDetails */;
      const v157 = v154[stdlib.checkedBigNumberify('./index.rsh:42:7:spread', stdlib.UInt_max, 0)];
      const v158 = v157[stdlib.checkedBigNumberify('./index.rsh:43:27:array ref', stdlib.UInt_max, 2)];
      ;
      await txn3.getOutput('Fan_pickPerk', 'v119', ctc4, v119);
      const v167 = stdlib.add(v126, v158);
      const cv126 = v167;
      const cv127 = v155;
      const cv128 = v127;
      
      v126 = cv126;
      v127 = cv127;
      v128 = cv128;
      
      continue;}
    
    }
  ;
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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 12));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4));
  const ctc6 = stdlib.T_Tuple([ctc4]);
  const ctc7 = stdlib.T_Null;
  
  
  const [v113, v119, v125, v126, v127, v145] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc5, ctc3, ctc3, ctc3, ctc3]);
  const v150 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:42:7:application',
    fs: ['at ./index.rsh:42:7:application call to [unknown function] (defined at: ./index.rsh:42:7:function exp)'],
    msg: 'in',
    who: 'Fan_pickPerk'
    });
  
  const v151 = v150[stdlib.checkedBigNumberify('./index.rsh:42:7:spread', stdlib.UInt_max, 0)];
  const v152 = v151[stdlib.checkedBigNumberify('./index.rsh:43:27:array ref', stdlib.UInt_max, 2)];
  
  const txn1 = await (ctc.sendrecv({
    args: [v113, v119, v125, v126, v127, v145, v150],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v152, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v154], secs: v156, time: v155, didSend: v61, from: v153 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Fan_pickPerk"
        });
      const v157 = v154[stdlib.checkedBigNumberify('./index.rsh:42:7:spread', stdlib.UInt_max, 0)];
      const v158 = v157[stdlib.checkedBigNumberify('./index.rsh:43:27:array ref', stdlib.UInt_max, 2)];
      sim_r.txns.push({
        amt: v158,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v161 = await txn1.getOutput('Fan_pickPerk', 'v119', ctc5, v119);
      
      const v167 = stdlib.add(v126, v158);
      const v262 = v167;
      const v263 = v155;
      const v265 = stdlib.lt(v127, v125);
      if (v265) {
        const v266 = stdlib.add(v155, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, 5));
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: v167,
          kind: 'from',
          to: v113,
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
    tys: [ctc0, ctc5, ctc3, ctc3, ctc3, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v154], secs: v156, time: v155, didSend: v61, from: v153 } = txn1;
  undefined /* setApiDetails */;
  const v157 = v154[stdlib.checkedBigNumberify('./index.rsh:42:7:spread', stdlib.UInt_max, 0)];
  const v158 = v157[stdlib.checkedBigNumberify('./index.rsh:43:27:array ref', stdlib.UInt_max, 2)];
  ;
  const v161 = await txn1.getOutput('Fan_pickPerk', 'v119', ctc5, v119);
  stdlib.protect(ctc7, await interact.out(v154, v161), {
    at: './index.rsh:42:7:application',
    fs: ['at ./index.rsh:42:7:application call to [unknown function] (defined at: ./index.rsh:42:7:function exp)', 'at ./index.rsh:45:25:application call to "setPerksParams" (defined at: ./index.rsh:42:7:function exp)'],
    msg: 'out',
    who: 'Fan_pickPerk'
    });
  
  const v167 = stdlib.add(v126, v158);
  const v262 = v167;
  const v263 = v155;
  const v265 = stdlib.lt(v127, v125);
  if (v265) {
    const v266 = stdlib.add(v155, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, 5));
    return;
    }
  else {
    ;
    return;
    }
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`Fan_pickPerk((byte[64],byte[12],uint64))(byte[64],byte[12],uint64)[4]`],
    pure: [],
    sigs: [`Fan_pickPerk((byte[64],byte[12],uint64))(byte[64],byte[12],uint64)[4]`]
    },
  appApproval: `BiAKAAEE0AIgiAPwAvgCgAMFJgUBAAEBAQIBAwAiNQAxGEECaicEZEkiWzUBgQhbNQI2GgAXSUEAFCI1BCM1BoGo2K6rBBJENhoBQgB6NhoCFzUENhoDNhoBF0mBAgxAAN9JgQMMQADXSSQMQABYJBJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQK2RQSTUDVwAgNf+ABJEnNPOwMgY0AyEFWw9ENP8xABJENP80AyEEJVg0AyEGWzQDIQdbMgY0AyEIW0IBCkgkNAESRDQESSISTDQCEhFEKGQpZFAqZFArZFBJNQMhBCVYNf9JNQU1/oAEv96XejT+ULAyBjQDIQVbDEQ0/oFMWzX9NP2IAYiACAAAAAAAAAB3NP9QsDT/NQc0A1cAIDT/NAMhBls0AyEHWzT9CDIGNAMhCFtCAJFISSMMQABTSCM0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEEWzX+STUFSSIlWDX9JVs1/IAEvs+oBjT9UDT8FlCwNP8xABJENP80/TT+gQoIIjIGNP5CADdIIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rCBoI0GiADfMQAyBhZQKEsBVwAoZ0gjNQEyBjUCQgCJNf81/jX9Nfw1+zX6NP80/AxBAEY0/iEJCDX5NPo0+1A0/BZQNP0WUDT+FlA0+RZQKEsBVwB/ZylLAVd/f2cqSwFX/n9nK0sBgf0CgRNYZ0gkNQEyBjUCQgAvsSKyATT9sggjshA0+rIHs0IAADEZIQkSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCcENAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 4,
  stateSize: 400,
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
                    "internalType": "struct T3",
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
                    "internalType": "struct T4",
                    "name": "elem1",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem2",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T5[4]",
                "name": "v119",
                "type": "tuple[4]"
              },
              {
                "internalType": "uint256",
                "name": "v120",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
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
                        "internalType": "struct T3",
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
                        "internalType": "struct T4",
                        "name": "elem1",
                        "type": "tuple"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T5",
                    "name": "elem0",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T13",
                "name": "v154",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
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
            "internalType": "struct T3",
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
            "internalType": "struct T4",
            "name": "elem1",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T5[4]",
        "name": "v0",
        "type": "tuple[4]"
      }
    ],
    "name": "_reach_oe_v119",
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
            "internalType": "struct T3",
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
            "internalType": "struct T4",
            "name": "elem1",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "internalType": "struct T5",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "Fan_pickPerk",
    "outputs": [
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
            "internalType": "struct T3",
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
            "internalType": "struct T4",
            "name": "elem1",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "elem2",
            "type": "uint256"
          }
        ],
        "internalType": "struct T5[4]",
        "name": "",
        "type": "tuple[4]"
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
                    "internalType": "struct T3",
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
                    "internalType": "struct T4",
                    "name": "elem1",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem2",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T5[4]",
                "name": "v119",
                "type": "tuple[4]"
              },
              {
                "internalType": "uint256",
                "name": "v120",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
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
                        "internalType": "struct T3",
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
                        "internalType": "struct T4",
                        "name": "elem1",
                        "type": "tuple"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T5",
                    "name": "elem0",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T13",
                "name": "v154",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
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
  Bytecode: `0x60806040526040516200140b3803806200140b8339810160408190526200002691620001ab565b600080554360035560408051825181526020808401511515908201527ff6b2f582026eaf8fd1fe583a836da56a1b30b8bd595170ad494773aa9148b06e910160405180910390a16200007b34156007620000db565b604080518082018252338082524360208084018281526001600081905592909255845180820193909352905182850152835180830385018152606090920190935280519192620000d2926002929091019062000105565b50505062000253565b81620001015760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001139062000216565b90600052602060002090601f01602090048101928262000137576000855562000182565b82601f106200015257805160ff191683800117855562000182565b8280016001018555821562000182579182015b828111156200018257825182559160200191906001019062000165565b506200019092915062000194565b5090565b5b8082111562000190576000815560010162000195565b600060408284031215620001be57600080fd5b604080519081016001600160401b0381118282101715620001ef57634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200020a57600080fd5b60208201529392505050565b600181811c908216806200022b57607f821691505b602082108114156200024d57634e487b7160e01b600052602260045260246000fd5b50919050565b6111a880620002636000396000f3fe60806040526004361061006e5760003560e01c806388affd991161004b57806388affd99146100c3578063a7661d54146100d6578063ab53f2c6146100e9578063ec521d921461010c57005b80631e93b0f1146100775780631f4056131461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610af4565b61012c565b3480156100ba57600080fd5b50600154610088565b6100756100d1366004610b0c565b610150565b6100756100e4366004610b1f565b610170565b3480156100f557600080fd5b506100fe610190565b604051610092929190610b31565b61011f61011a366004610cf2565b61022d565b6040516100929190610d46565b6101346108b9565b61014c61014636849003840184610d83565b8261026e565b5050565b6101586108b9565b61014c61016a36849003840184610de6565b82610451565b6101786108b9565b61014c61018a36849003840184610e89565b826105e0565b6000606060005460028080546101a590610ec6565b80601f01602080910402602001604051908101604052809291908181526020018280546101d190610ec6565b801561021e5780601f106101f35761010080835404028352916020019161021e565b820191906000526020600020905b81548152906001019060200180831161020157829003601f168201915b50505050509050915091509091565b6102356108d1565b61023d6108b9565b6102456108fe565b6040805180820190915260208082018681528252820152610266818361026e565b505192915050565b61027e600460005414600d61077d565b815161029990158061029257508251600154145b600e61077d565b6000808055600280546102ab90610ec6565b80601f01602080910402602001604051908101604052809291908181526020018280546102d790610ec6565b80156103245780601f106102f957610100808354040283529160200191610324565b820191906000526020600020905b81548152906001019060200180831161030757829003601f168201915b505050505080602001905181019061033c9190610f17565b905061034f8160a001514310600f61077d565b7fcd26135badbb27457c603e82040fc7af68238388b9c63fe35379cfe434340f068360405161037e9190611035565b60405180910390a1602083015151516040015161039e903414600c61077d565b7f0510216ccd85fa0fb3c7fee6d493952c4944e80948e8f96cdedbbc1a98274ad881602001516040516103d19190610d46565b60405180910390a1602081015182526103e8610918565b815181516001600160a01b0390911690526020808301518251820152604080840151835182015290850151515101516060830151610426919061105c565b6020808301805192909252815143910152608083015190516040015261044b816107a2565b50505050565b610461600160005414600a61077d565b815161047c90158061047557508251600154145b600b61077d565b60008080556002805461048e90610ec6565b80601f01602080910402602001604051908101604052809291908181526020018280546104ba90610ec6565b80156105075780601f106104dc57610100808354040283529160200191610507565b820191906000526020600020905b8154815290600101906020018083116104ea57829003601f168201915b505050505080602001905181019061051f9190611082565b90507f4358bb8627f715c6754eb80b44cf04a5b2150894dc7e42f48873a375e44b957b8360405161055091906110e9565b60405180910390a16105643415600861077d565b805161057c906001600160a01b03163314600961077d565b610584610918565b815181516001600160a01b0390911690526020808501515182518201528201516105b090600a9061105c565b81516040908101919091526020808301805160009052805143908301529084015190519091015261044b816107a2565b6105f0600460005414601261077d565b815161060b90158061060457508251600154145b601361077d565b60008080556002805461061d90610ec6565b80601f016020809104026020016040519081016040528092919081815260200182805461064990610ec6565b80156106965780601f1061066b57610100808354040283529160200191610696565b820191906000526020600020905b81548152906001019060200180831161067957829003601f168201915b50505050508060200190518101906106ae9190610f17565b90506106c28160a00151431015601461077d565b60408051845181526020808601511515908201527fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d1910160405180910390a161070d3415601061077d565b8051610725906001600160a01b03163314601161077d565b61072d610918565b815181516001600160a01b03909116905260208083015182518201526040808401518351820152606084015182840180519190915280514393019290925260808401519151015261044b816107a2565b8161014c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602081019091526000815281600001516040015182602001516040015110156108635760058260200151602001516107de919061105c565b81526107e8610954565b8251516001600160a01b031681528251602090810151818301528351604090810151818401528185018051516060850152518201516080840152835160a08401526004600055436001555161083f9183910161111b565b6040516020818303038152906040526002908051906020019061044b929190610999565b8151516020830151516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108a2573d6000803e3d6000fd5b506000808055600181905561014c90600290610a1d565b60405180602001604052806108cc6108d1565b905290565b60405180608001604052806004905b6108e8610a5a565b8152602001906001900390816108e05790505090565b6040518060400160405280600081526020016108cc610a96565b604051806040016040528061092b610aa9565b81526020016108cc60405180606001604052806000815260200160008152602001600081525090565b6040518060c0016040528060006001600160a01b031681526020016109776108d1565b8152602001600081526020016000815260200160008152602001600081525090565b8280546109a590610ec6565b90600052602060002090601f0160209004810192826109c75760008555610a0d565b82601f106109e057805160ff1916838001178555610a0d565b82800160010185558215610a0d579182015b82811115610a0d5782518255916020019190600101906109f2565b50610a19929150610acc565b5090565b508054610a2990610ec6565b6000825580601f10610a39575050565b601f016020900490600052602060002090810190610a579190610acc565b50565b6040805160a0810182526000606082018181526080830182905282528251602080820190945290815290918201905b8152602001600081525090565b60405180602001604052806108cc610ae1565b604051806060016040528060006001600160a01b03168152602001610a896108d1565b5b80821115610a195760008155600101610acd565b60405180602001604052806108cc610a5a565b600060a08284031215610b0657600080fd5b50919050565b60006102408284031215610b0657600080fd5b600060408284031215610b0657600080fd5b82815260006020604081840152835180604085015260005b81811015610b6557858101830151858201606001528201610b49565b81811115610b77576000606083870101525b50601f01601f191692909201606001949350505050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610bc757610bc7610b8e565b60405290565b6040805190810167ffffffffffffffff81118282101715610bc757610bc7610b8e565b6040516020810167ffffffffffffffff81118282101715610bc757610bc7610b8e565b60405160c0810167ffffffffffffffff81118282101715610bc757610bc7610b8e565b6040516080810167ffffffffffffffff81118282101715610bc757610bc7610b8e565b6001600160a01b031981168114610a5757600080fd5b60008183036080811215610c8257600080fd5b610c8a610ba4565b91506040811215610c9a57600080fd5b610ca2610bcd565b8335815260208085013581830152908352603f1982011215610cc357600080fd5b50610ccc610bf0565b6040830135610cda81610c59565b81526020820152606091909101356040820152919050565b600060808284031215610d0457600080fd5b610d0e8383610c6f565b9392505050565b80518051835260209081015181840152810151516001600160a01b0319166040808401919091520151606090910152565b6102008101818360005b6004811015610d7a57610d64838351610d15565b6080929092019160209190910190600101610d50565b50505092915050565b600081830360a0811215610d9657600080fd5b610d9e610bcd565b833581526080601f1983011215610db457600080fd5b610dbc610bf0565b9150610dc6610bf0565b610dd38660208701610c6f565b8152825260208101919091529392505050565b6000818303610240811215610dfa57600080fd5b610e02610bcd565b83358152602061022080601f1985011215610e1c57600080fd5b610e24610bcd565b935086603f870112610e3557600080fd5b610e3d610c36565b908601908088831115610e4f57600080fd5b8388015b83811015610e7357610e658a82610c6f565b835291840191608001610e53565b5085525035818401528101919091529392505050565b600060408284031215610e9b57600080fd5b610ea3610bcd565b8235815260208301358015158114610eba57600080fd5b60208201529392505050565b600181811c90821680610eda57607f821691505b60208210811415610b0657634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610f1257600080fd5b919050565b60006102a08284031215610f2a57600080fd5b610f32610c13565b610f3b83610efb565b8152602084603f850112610f4e57600080fd5b610f56610c36565b80610220860187811115610f6957600080fd5b8387015b81811015611001578089036080811215610f875760008081fd5b610f8f610ba4565b604080831215610f9f5760008081fd5b610fa7610bcd565b8451815288850151898201528252603f198301881315610fc75760008081fd5b610fcf610bf0565b925080840151610fde81610c59565b835281880192909252606083015191810191909152845292840192608001610f6d565b509284015250516040820152610240830151606082015261026083015160808201526102809092015160a083015250919050565b600060a08201905082518252602083015161105560208401825151610d15565b5092915050565b6000821982111561107d57634e487b7160e01b600052601160045260246000fd5b500190565b60006040828403121561109457600080fd5b61109c610bcd565b6110a583610efb565b8152602083015160208201528091505092915050565b8060005b600481101561044b576110d3848351610d15565b60809390930192602091909101906001016110bf565b6000610240820190508251825260208301516111096020840182516110bb565b60208101516102208401525092915050565b81516001600160a01b031681526020808301516102a0830191611140908401826110bb565b5060408301516102208301526060830151610240830152608083015161026083015260a090920151610280909101529056fea2646970667358221220f1e8b44b7a80d683ef6321411bbba107077b1cd43fbbebe853b3467bf0c9271864736f6c634300080c0033`,
  BytecodeLen: 5131,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:23:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:55:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:40:13:after expr stmt semicolon',
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
