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
      4: [ctc0, ctc5, ctc1, ctc1, ctc1, ctc1, ctc1]
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
  const ctc7 = stdlib.T_Null;
  
  
  const v126 = stdlib.protect(ctc0, interact.goal, 'for Artist\'s interact field goal');
  const v127 = stdlib.protect(ctc4, interact.perks, 'for Artist\'s interact field perks');
  
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
      
      
      const {data: [], secs: v130, time: v129, didSend: v24, from: v128 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v130, time: v129, didSend: v24, from: v128 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v128, v129, v127, v126],
    evt_cnt: 2,
    funcNum: 1,
    lct: v129,
    onlyIf: true,
    out_tys: [ctc4, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:31:5:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v134, v135], secs: v137, time: v136, didSend: v34, from: v133 } = txn2;
      
      ;
      const v138 = stdlib.addressEq(v128, v133);
      ;
      const v140 = stdlib.add(v129, stdlib.checkedBigNumberify('./index.rsh:5:29:decimal', stdlib.UInt_max, 4));
      const v141 = stdlib.checkedBigNumberify('./index.rsh:36:19:decimal', stdlib.UInt_max, 0);
      const v142 = v136;
      const v143 = v129;
      const v149 = stdlib.checkedBigNumberify('./index.rsh:20:9:after expr stmt semicolon', stdlib.UInt_max, 0);
      
      if (await (async () => {
        const v153 = stdlib.lt(v143, v140);
        
        return v153;})()) {
        const v160 = stdlib.add(v142, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, 5));
        sim_r.isHalt = false;
        }
      else {
        
        const v193 = stdlib.sub(v149, v149);
        sim_r.txns.push({
          amt: v149,
          kind: 'from',
          to: v128,
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
  const {data: [v134, v135], secs: v137, time: v136, didSend: v34, from: v133 } = txn2;
  ;
  const v138 = stdlib.addressEq(v128, v133);
  stdlib.assert(v138, {
    at: './index.rsh:31:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Artist'
    });
  const v140 = stdlib.add(v129, stdlib.checkedBigNumberify('./index.rsh:5:29:decimal', stdlib.UInt_max, 4));
  let v141 = stdlib.checkedBigNumberify('./index.rsh:36:19:decimal', stdlib.UInt_max, 0);
  let v142 = v136;
  let v143 = v129;
  let v149 = stdlib.checkedBigNumberify('./index.rsh:20:9:after expr stmt semicolon', stdlib.UInt_max, 0);
  
  while (await (async () => {
    const v153 = stdlib.lt(v143, v140);
    
    return v153;})()) {
    const v160 = stdlib.add(v142, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, 5));
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc5],
      timeoutAt: ['time', v160],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v128, v134, v140, v141, v142, v149, v160],
        evt_cnt: 0,
        funcNum: 4,
        lct: v142,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:51:15:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v185, time: v184, didSend: v87, from: v183 } = txn4;
          
          ;
          const v186 = stdlib.addressEq(v128, v183);
          ;
          const cv141 = v141;
          const cv142 = v184;
          const cv143 = v142;
          const cv149 = v149;
          
          await (async () => {
            const v141 = cv141;
            const v142 = cv142;
            const v143 = cv143;
            const v149 = cv149;
            
            if (await (async () => {
              const v153 = stdlib.lt(v143, v140);
              
              return v153;})()) {
              const v160 = stdlib.add(v142, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, 5));
              sim_r.isHalt = false;
              }
            else {
              
              const v193 = stdlib.sub(v149, v149);
              sim_r.txns.push({
                amt: v149,
                kind: 'from',
                to: v128,
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
        tys: [ctc6, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v185, time: v184, didSend: v87, from: v183 } = txn4;
      ;
      const v186 = stdlib.addressEq(v128, v183);
      stdlib.assert(v186, {
        at: './index.rsh:51:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Artist'
        });
      const cv141 = v141;
      const cv142 = v184;
      const cv143 = v142;
      const cv149 = v149;
      
      v141 = cv141;
      v142 = cv142;
      v143 = cv143;
      v149 = cv149;
      
      continue;
      }
    else {
      const {data: [v169], secs: v171, time: v170, didSend: v61, from: v168 } = txn3;
      undefined /* setApiDetails */;
      const v172 = v169[stdlib.checkedBigNumberify('./index.rsh:41:7:spread', stdlib.UInt_max, 0)];
      const v173 = v172[stdlib.checkedBigNumberify('./index.rsh:42:27:array ref', stdlib.UInt_max, 2)];
      const v175 = stdlib.add(v149, v173);
      ;
      await txn3.getOutput('Fan_pickPerk', 'v134', ctc4, v134);
      const v182 = stdlib.add(v141, v173);
      const cv141 = v182;
      const cv142 = v170;
      const cv143 = v142;
      const cv149 = v175;
      
      v141 = cv141;
      v142 = cv142;
      v143 = cv143;
      v149 = cv149;
      
      continue;}
    
    }
  stdlib.protect(ctc7, await interact.logAmount(v149), {
    at: './index.rsh:55:23:application',
    fs: ['at ./index.rsh:55:23:application call to [unknown function] (defined at: ./index.rsh:55:23:function exp)', 'at ./index.rsh:55:23:application call to "liftedInteract" (defined at: ./index.rsh:55:23:application)'],
    msg: 'logAmount',
    who: 'Artist'
    });
  
  const v193 = stdlib.sub(v149, v149);
  ;
  stdlib.protect(ctc7, await interact.logAmount(v193), {
    at: './index.rsh:60:23:application',
    fs: ['at ./index.rsh:60:23:application call to [unknown function] (defined at: ./index.rsh:60:23:function exp)', 'at ./index.rsh:60:23:application call to "liftedInteract" (defined at: ./index.rsh:60:23:application)'],
    msg: 'logAmount',
    who: 'Artist'
    });
  
  stdlib.protect(ctc7, await interact.logAmount(v141), {
    at: './index.rsh:61:23:application',
    fs: ['at ./index.rsh:61:23:application call to [unknown function] (defined at: ./index.rsh:61:23:function exp)', 'at ./index.rsh:61:23:application call to "liftedInteract" (defined at: ./index.rsh:61:23:application)'],
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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 64));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 12));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4));
  const ctc6 = stdlib.T_Tuple([ctc4]);
  const ctc7 = stdlib.T_Null;
  
  
  const [v128, v134, v140, v141, v142, v149, v160] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4), [ctc0, ctc5, ctc3, ctc3, ctc3, ctc3, ctc3]);
  const v165 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:41:7:application',
    fs: ['at ./index.rsh:41:7:application call to [unknown function] (defined at: ./index.rsh:41:7:function exp)'],
    msg: 'in',
    who: 'Fan_pickPerk'
    });
  
  const v166 = v165[stdlib.checkedBigNumberify('./index.rsh:41:7:spread', stdlib.UInt_max, 0)];
  const v167 = v166[stdlib.checkedBigNumberify('./index.rsh:42:27:array ref', stdlib.UInt_max, 2)];
  
  const txn1 = await (ctc.sendrecv({
    args: [v128, v134, v140, v141, v142, v149, v160, v165],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [v167, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v169], secs: v171, time: v170, didSend: v61, from: v168 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Fan_pickPerk"
        });
      const v172 = v169[stdlib.checkedBigNumberify('./index.rsh:41:7:spread', stdlib.UInt_max, 0)];
      const v173 = v172[stdlib.checkedBigNumberify('./index.rsh:42:27:array ref', stdlib.UInt_max, 2)];
      const v175 = stdlib.add(v149, v173);
      sim_r.txns.push({
        amt: v173,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v176 = await txn1.getOutput('Fan_pickPerk', 'v134', ctc5, v134);
      
      const v182 = stdlib.add(v141, v173);
      const v283 = v182;
      const v284 = v170;
      const v286 = v175;
      const v287 = stdlib.lt(v142, v140);
      if (v287) {
        const v288 = stdlib.add(v170, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, 5));
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          amt: v175,
          kind: 'from',
          to: v128,
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
    tys: [ctc0, ctc5, ctc3, ctc3, ctc3, ctc3, ctc3, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v169], secs: v171, time: v170, didSend: v61, from: v168 } = txn1;
  undefined /* setApiDetails */;
  const v172 = v169[stdlib.checkedBigNumberify('./index.rsh:41:7:spread', stdlib.UInt_max, 0)];
  const v173 = v172[stdlib.checkedBigNumberify('./index.rsh:42:27:array ref', stdlib.UInt_max, 2)];
  const v175 = stdlib.add(v149, v173);
  ;
  const v176 = await txn1.getOutput('Fan_pickPerk', 'v134', ctc5, v134);
  stdlib.protect(ctc7, await interact.out(v169, v176), {
    at: './index.rsh:41:7:application',
    fs: ['at ./index.rsh:41:7:application call to [unknown function] (defined at: ./index.rsh:41:7:function exp)', 'at ./index.rsh:45:21:application call to "setPerksParams" (defined at: ./index.rsh:41:7:function exp)'],
    msg: 'out',
    who: 'Fan_pickPerk'
    });
  
  const v182 = stdlib.add(v141, v173);
  const v283 = v182;
  const v284 = v170;
  const v286 = v175;
  const v287 = stdlib.lt(v142, v140);
  if (v287) {
    const v288 = stdlib.add(v170, stdlib.checkedBigNumberify('./index.rsh:6:18:decimal', stdlib.UInt_max, 5));
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
  appApproval: `BiALAAEE0AIgkAPwAvgCgAOIAwUmBQEAAQEBAgEDACI1ADEYQQJ9JwRkSSJbNQGBCFs1AjYaABdJQQAUIjUEIzUGgajYrqsEEkQ2GgFCAH82GgIXNQQ2GgM2GgEXSYECDEAA7EmBAwxAAORJJAxAAF0kEkQkNAESRDQESSISTDQCEhFEKGQpZFAqZFArZFBJNQNXACA1/4AEkSc087AyBjQDIQVbD0Q0/zEAEkQ0/zQDIQQlWDQDIQZbNAMhB1syBjQDIQhbNAMhCVtCARJIJDQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQK2RQSTUDIQQlWDX/STUFNf6ABL/el3o0/lCwMgY0AyEFWwxENP6BTFs1/TT9iAGWgAgAAAAAAAAAhjT/ULA0/zUHNANXACA0/zQDIQZbNAMhB1s0/QgyBjQDIQhbNAMhCVs0/QhCAJFISSMMQABTSCM0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEEWzX+STUFSSIlWDX9JVs1/IAEvs+oBjT9UDT8FlCwNP8xABJENP80/TT+JAgiMgY0/iJCADdIIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rCBoI0GiADlMQAyBhZQKEsBVwAoZ0gjNQEyBjUCQgCPNf81/jX9Nfw1+zX6Nfk0/jT7DEEASjT9IQoINfg0+TT6UDT7FlA0/BZQNP0WUDT/FlA0+BZQKEsBVwB/ZylLAVd/f2cqSwFX/n9nK0sBgf0CgRtYZ0gkNQEyBjUCQgAvsSKyATT/sggjshA0+bIHs0IAADEZIQoSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCcENAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 4,
  stateSize: 408,
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
                "name": "v134",
                "type": "tuple[4]"
              },
              {
                "internalType": "uint256",
                "name": "v135",
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
                "name": "v169",
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
    "name": "_reach_oe_v134",
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
                "name": "v134",
                "type": "tuple[4]"
              },
              {
                "internalType": "uint256",
                "name": "v135",
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
                "name": "v169",
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
  Bytecode: `0x60806040526040516200147f3803806200147f8339810160408190526200002691620001ab565b600080554360035560408051825181526020808401511515908201527ff6b2f582026eaf8fd1fe583a836da56a1b30b8bd595170ad494773aa9148b06e910160405180910390a16200007b34156007620000db565b604080518082018252338082524360208084018281526001600081905592909255845180820193909352905182850152835180830385018152606090920190935280519192620000d2926002929091019062000105565b50505062000253565b81620001015760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001139062000216565b90600052602060002090601f01602090048101928262000137576000855562000182565b82601f106200015257805160ff191683800117855562000182565b8280016001018555821562000182579182015b828111156200018257825182559160200191906001019062000165565b506200019092915062000194565b5090565b5b8082111562000190576000815560010162000195565b600060408284031215620001be57600080fd5b604080519081016001600160401b0381118282101715620001ef57634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200020a57600080fd5b60208201529392505050565b600181811c908216806200022b57607f821691505b602082108114156200024d57634e487b7160e01b600052602260045260246000fd5b50919050565b61121c80620002636000396000f3fe60806040526004361061006e5760003560e01c806388affd991161004b57806388affd99146100c3578063a7661d54146100d6578063ab53f2c6146100e9578063ec521d921461010c57005b80631e93b0f1146100775780631f4056131461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610b52565b61012c565b3480156100ba57600080fd5b50600154610088565b6100756100d1366004610b6a565b610150565b6100756100e4366004610b7d565b610170565b3480156100f557600080fd5b506100fe610190565b604051610092929190610b8f565b61011f61011a366004610d50565b61022d565b6040516100929190610da4565b610134610909565b61014c61014636849003840184610de1565b8261026e565b5050565b610158610909565b61014c61016a36849003840184610e44565b82610476565b610178610909565b61014c61018a36849003840184610ee7565b82610610565b6000606060005460028080546101a590610f24565b80601f01602080910402602001604051908101604052809291908181526020018280546101d190610f24565b801561021e5780601f106101f35761010080835404028352916020019161021e565b820191906000526020600020905b81548152906001019060200180831161020157829003601f168201915b50505050509050915091509091565b610235610921565b61023d610909565b61024561094e565b6040805180820190915260208082018681528252820152610266818361026e565b505192915050565b61027e600460005414600d6107bc565b815161029990158061029257508251600154145b600e6107bc565b6000808055600280546102ab90610f24565b80601f01602080910402602001604051908101604052809291908181526020018280546102d790610f24565b80156103245780601f106102f957610100808354040283529160200191610324565b820191906000526020600020905b81548152906001019060200180831161030757829003601f168201915b505050505080602001905181019061033c9190610f75565b905061034f8160c001514310600f6107bc565b7fcd26135badbb27457c603e82040fc7af68238388b9c63fe35379cfe434340f068360405161037e919061109e565b60405180910390a1602083015151516040015161039e903414600c6107bc565b7fe2846384075c63c48e56ecfe2b174eaaba215dfbac7131b43aadc94247e3bab881602001516040516103d19190610da4565b60405180910390a1602081015182526103e8610968565b815181516001600160a01b039091169052602080830151825182015260408084015183518201529085015151510151606083015161042691906110c5565b602080830180519290925281514390820152608084015191516040908101929092528501515151015160a083015161045e91906110c5565b602082015160600152610470816107e1565b50505050565b610486600160005414600a6107bc565b81516104a190158061049a57508251600154145b600b6107bc565b6000808055600280546104b390610f24565b80601f01602080910402602001604051908101604052809291908181526020018280546104df90610f24565b801561052c5780601f106105015761010080835404028352916020019161052c565b820191906000526020600020905b81548152906001019060200180831161050f57829003601f168201915b505050505080602001905181019061054491906110eb565b90507f4358bb8627f715c6754eb80b44cf04a5b2150894dc7e42f48873a375e44b957b836040516105759190611152565b60405180910390a1610589341560086107bc565b80516105a1906001600160a01b0316331460096107bc565b6105a9610968565b815181516001600160a01b0390911690526020808501515182518201528201516105d5906004906110c5565b8151604090810191909152602080830180516000908190528151439084015291850151815190930192909252905160600152610470816107e1565b61062060046000541460126107bc565b815161063b90158061063457508251600154145b60136107bc565b60008080556002805461064d90610f24565b80601f016020809104026020016040519081016040528092919081815260200182805461067990610f24565b80156106c65780601f1061069b576101008083540402835291602001916106c6565b820191906000526020600020905b8154815290600101906020018083116106a957829003601f168201915b50505050508060200190518101906106de9190610f75565b90506106f28160c0015143101560146107bc565b60408051845181526020808601511515908201527fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d1910160405180910390a161073d341560106107bc565b8051610755906001600160a01b0316331460116107bc565b61075d610968565b815181516001600160a01b03909116905260208083015182518201526040808401518351820152606080850151838501805191909152805143940193909352608085015183519092019190915260a084015191510152610470816107e1565b8161014c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602081019091526000815281600001516040015182602001516040015110156108b057600582602001516020015161081d91906110c5565b81526108276109ab565b8251516001600160a01b03168152825160209081015181830152835160409081015181840152818501805151606080860191909152815184015160808601529051015160a0840152835160c08401526004600055436001555161088c91839101611184565b604051602081830303815290604052600290805190602001906104709291906109f7565b8151516020830151606001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108f2573d6000803e3d6000fd5b506000808055600181905561014c90600290610a7b565b604051806020016040528061091c610921565b905290565b60405180608001604052806004905b610938610ab8565b8152602001906001900390816109305790505090565b60405180604001604052806000815260200161091c610af4565b604051806040016040528061097b610b07565b815260200161091c6040518060800160405280600081526020016000815260200160008152602001600081525090565b6040518060e0016040528060006001600160a01b031681526020016109ce610921565b815260200160008152602001600081526020016000815260200160008152602001600081525090565b828054610a0390610f24565b90600052602060002090601f016020900481019282610a255760008555610a6b565b82601f10610a3e57805160ff1916838001178555610a6b565b82800160010185558215610a6b579182015b82811115610a6b578251825591602001919060010190610a50565b50610a77929150610b2a565b5090565b508054610a8790610f24565b6000825580601f10610a97575050565b601f016020900490600052602060002090810190610ab59190610b2a565b50565b6040805160a0810182526000606082018181526080830182905282528251602080820190945290815290918201905b8152602001600081525090565b604051806020016040528061091c610b3f565b604051806060016040528060006001600160a01b03168152602001610ae7610921565b5b80821115610a775760008155600101610b2b565b604051806020016040528061091c610ab8565b600060a08284031215610b6457600080fd5b50919050565b60006102408284031215610b6457600080fd5b600060408284031215610b6457600080fd5b82815260006020604081840152835180604085015260005b81811015610bc357858101830151858201606001528201610ba7565b81811115610bd5576000606083870101525b50601f01601f191692909201606001949350505050565b634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610c2557610c25610bec565b60405290565b6040805190810167ffffffffffffffff81118282101715610c2557610c25610bec565b6040516020810167ffffffffffffffff81118282101715610c2557610c25610bec565b60405160e0810167ffffffffffffffff81118282101715610c2557610c25610bec565b6040516080810167ffffffffffffffff81118282101715610c2557610c25610bec565b6001600160a01b031981168114610ab557600080fd5b60008183036080811215610ce057600080fd5b610ce8610c02565b91506040811215610cf857600080fd5b610d00610c2b565b8335815260208085013581830152908352603f1982011215610d2157600080fd5b50610d2a610c4e565b6040830135610d3881610cb7565b81526020820152606091909101356040820152919050565b600060808284031215610d6257600080fd5b610d6c8383610ccd565b9392505050565b80518051835260209081015181840152810151516001600160a01b0319166040808401919091520151606090910152565b6102008101818360005b6004811015610dd857610dc2838351610d73565b6080929092019160209190910190600101610dae565b50505092915050565b600081830360a0811215610df457600080fd5b610dfc610c2b565b833581526080601f1983011215610e1257600080fd5b610e1a610c4e565b9150610e24610c4e565b610e318660208701610ccd565b8152825260208101919091529392505050565b6000818303610240811215610e5857600080fd5b610e60610c2b565b83358152602061022080601f1985011215610e7a57600080fd5b610e82610c2b565b935086603f870112610e9357600080fd5b610e9b610c94565b908601908088831115610ead57600080fd5b8388015b83811015610ed157610ec38a82610ccd565b835291840191608001610eb1565b5085525035818401528101919091529392505050565b600060408284031215610ef957600080fd5b610f01610c2b565b8235815260208301358015158114610f1857600080fd5b60208201529392505050565b600181811c90821680610f3857607f821691505b60208210811415610b6457634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610f7057600080fd5b919050565b60006102c08284031215610f8857600080fd5b610f90610c71565b610f9983610f59565b8152602084603f850112610fac57600080fd5b610fb4610c94565b80610220860187811115610fc757600080fd5b8387015b8181101561105f578089036080811215610fe55760008081fd5b610fed610c02565b604080831215610ffd5760008081fd5b611005610c2b565b8451815288850151898201528252603f1983018813156110255760008081fd5b61102d610c4e565b92508084015161103c81610cb7565b835281880192909252606083015191810191909152845292840192608001610fcb565b5092840152505160408201526102408301516060820152610260830151608082015261028083015160a08201526102a09092015160c083015250919050565b600060a0820190508251825260208301516110be60208401825151610d73565b5092915050565b600082198211156110e657634e487b7160e01b600052601160045260246000fd5b500190565b6000604082840312156110fd57600080fd5b611105610c2b565b61110e83610f59565b8152602083015160208201528091505092915050565b8060005b60048110156104705761113c848351610d73565b6080939093019260209190910190600101611128565b600061024082019050825182526020830151611172602084018251611124565b60208101516102208401525092915050565b81516001600160a01b031681526020808301516102c08301916111a990840182611124565b5060408301516102208301526060830151610240830152608083015161026083015260a083015161028083015260c0909201516102a0909101529056fea264697066735822122057cb00afb942da2faad911e48ea7b23aa6b10fb677ddce0781f393ccdbc4561764736f6c634300080c0033`,
  BytecodeLen: 5247,
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
    at: './index.rsh:58:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:39:13:after expr stmt semicolon',
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
