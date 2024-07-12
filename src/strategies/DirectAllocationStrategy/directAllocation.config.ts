export const abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_allo",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "ALLOCATION_ACTIVE",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ALLOCATION_NOT_ACTIVE",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ALLOCATION_NOT_ENDED",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ALREADY_INITIALIZED",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "AMOUNT_MISMATCH",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ANCHOR_ERROR",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ARRAY_MISMATCH",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "INVALID",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "INVALID_ADDRESS",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "INVALID_FEE",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "INVALID_METADATA",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "INVALID_REGISTRATION",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "IS_APPROVED_STRATEGY",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MISMATCH",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NONCE_NOT_AVAILABLE",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NON_ZERO_VALUE",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NOT_APPROVED_STRATEGY",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NOT_ENOUGH_FUNDS",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NOT_IMPLEMENTED",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NOT_INITIALIZED",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NOT_PENDING_OWNER",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "POOL_ACTIVE",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "POOL_INACTIVE",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "RECIPIENT_ALREADY_ACCEPTED",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipientId",
        "type": "address"
      }
    ],
    "name": "RECIPIENT_ERROR",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "RECIPIENT_NOT_ACCEPTED",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "REGISTRATION_ACTIVE",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "REGISTRATION_NOT_ACTIVE",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "UNAUTHORIZED",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ZERO_ADDRESS",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipientId",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "Allocated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "profileId",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "profileOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "DirectAllocated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipientId",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "recipientAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "Distributed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "poolId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "active",
        "type": "bool"
      }
    ],
    "name": "PoolActive",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipientId",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "Registered",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "NATIVE",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      },
      {
        "internalType": "address",
        "name": "_sender",
        "type": "address"
      }
    ],
    "name": "allocate",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_recipientIds",
        "type": "address[]"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      },
      {
        "internalType": "address",
        "name": "_sender",
        "type": "address"
      }
    ],
    "name": "distribute",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllo",
    "outputs": [
      {
        "internalType": "contract IAllo",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_recipientIds",
        "type": "address[]"
      },
      {
        "internalType": "bytes[]",
        "name": "_data",
        "type": "bytes[]"
      }
    ],
    "name": "getPayouts",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "recipientAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "internalType": "struct IStrategy.PayoutSummary[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getPoolAmount",
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
    "name": "getPoolId",
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
        "internalType": "address",
        "name": "_recipientId",
        "type": "address"
      }
    ],
    "name": "getRecipientStatus",
    "outputs": [
      {
        "internalType": "enum IStrategy.Status",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getStrategyId",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "increasePoolAmount",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_poolId",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isPoolActive",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_allocator",
        "type": "address"
      }
    ],
    "name": "isValidAllocator",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes"
      },
      {
        "internalType": "address",
        "name": "_sender",
        "type": "address"
      }
    ],
    "name": "registerRecipient",
    "outputs": [
      {
        "internalType": "address",
        "name": "recipientId",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_recipient",
        "type": "address"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
];

export const bytecode = "0x60c06040523480156200001157600080fd5b5060405162001154380380620011548339810160408190526200003491620000ba565b6001600160a01b038216608052604051829082906200005890829060200162000195565b60408051601f19818403018152919052805160209091012060a05250620001ca92505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620000b157818101518382015260200162000097565b50506000910152565b60008060408385031215620000ce57600080fd5b82516001600160a01b0381168114620000e657600080fd5b60208401519092506001600160401b03808211156200010457600080fd5b818501915085601f8301126200011957600080fd5b8151818111156200012e576200012e6200007e565b604051601f8201601f19908116603f011681019083821181831017156200015957620001596200007e565b816040528281528860208487010111156200017357600080fd5b6200018683602083016020880162000094565b80955050505050509250929050565b6020815260008251806020840152620001b681604085016020870162000094565b601f01601f19169190910160400192915050565b60805160a051610f56620001fe60003960006101be01526000818161014001528181610544015261076c0152610f566000f3fe6080604052600436106100ec5760003560e01c8063a0cf0aea1161008a578063edd146cc11610059578063edd146cc146102c1578063ef2920fc146102e1578063f5b0dfb7146102f4578063f940e3851461031457600080fd5b8063a0cf0aea14610227578063b2b878d01461024f578063df868ed31461027c578063eb11af931461029457600080fd5b806338fff2d0116100c657806338fff2d01461019057806342fda9c7146101af5780634ab4ba42146101e25780634d31d087146101f757600080fd5b80630a6f0ee91461010f57806315cc481e146101315780632bbe0cae1461017d57600080fd5b3661010a576040516343f6e4ab60e01b815260040160405180910390fd5b600080fd5b34801561011b57600080fd5b5061012f61012a366004610b57565b610334565b005b34801561013d57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b0390911681526020015b60405180910390f35b61016061018b366004610bcf565b610354565b34801561019c57600080fd5b506001545b604051908152602001610174565b3480156101bb57600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006101a1565b3480156101ee57600080fd5b506002546101a1565b34801561020357600080fd5b50610217610212366004610c21565b610370565b6040519015158152602001610174565b34801561023357600080fd5b5061016073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561025b57600080fd5b5061026f61026a366004610c45565b610378565b6040516101749190610d1a565b34801561028857600080fd5b5060005460ff16610217565b3480156102a057600080fd5b506102b46102af366004610c21565b610477565b6040516101749190610d72565b3480156102cd57600080fd5b5061012f6102dc366004610d9a565b610482565b61012f6102ef366004610bcf565b6104c8565b34801561030057600080fd5b5061012f61030f366004610de1565b6104e6565b34801561032057600080fd5b5061012f61032f366004610dfa565b610510565b61033c610539565b610344610584565b61034f8383836105a7565b505050565b600061035e610539565b610366610584565b5060005b92915050565b60008061036a565b8151815160609190811461039f57604051633da4c02b60e11b815260040160405180910390fd5b60008167ffffffffffffffff8111156103ba576103ba6109f3565b6040519080825280602002602001820160405280156103ff57816020015b60408051808201909152600080825260208201528152602001906001900390816103d85790505b50905060005b8281101561046e5761044986828151811061042257610422610e28565b602002602001015186838151811061043c5761043c610e28565b60200260200101516105c0565b82828151811061045b5761045b610e28565b6020908102919091010152600101610405565b50949350505050565b600061036a826105d9565b61048b826105f4565b7f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a82826040516104bc929190610e3e565b60405180910390a15050565b6104d0610539565b6104d8610584565b6104e28282610643565b5050565b6104ee610539565b80600260008282546105009190610e94565b9091555061050d90508181565b50565b3361051a81610742565b600061052684306107f4565b905061053384848361083d565b50505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105825760405163075fd2b160e01b815260040160405180910390fd5b565b60015460000361058257604051630f68fe6360e21b815260040160405180910390fd5b6040516343f6e4ab60e01b815260040160405180910390fd5b604080518082019091526000808252602082015261036a565b60006040516343f6e4ab60e01b815260040160405180910390fd5b6105fc610539565b6001541561061d5760405163439a74c960e01b815260040160405180910390fd5b8060000361063e57604051637fcce2a960e01b815260040160405180910390fd5b600155565b6000806000808580602001905181019061065d9190610eb5565b93509350935093506000818560405160200161069592919091825260601b6bffffffffffffffffffffffff1916602082015260340190565b6040516020818303038152906040528051906020012090506106e3836040518060600160405280896001600160a01b03168152602001886001600160a01b0316815260200187815250610877565b50604080516001600160a01b038781168252602082018790528581168284015288166060820152905182917f4a59cd118371350d2eef1493d866a53d23aa0e21b6df99c66dddaa3ed798019b919081900360800190a250505050505050565b6001546040516329e40d4b60e01b815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa1580156107b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107d79190610efe565b61050d5760405163075fd2b160e01b815260040160405180910390fd5b600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b0384160161082c57506001600160a01b0381163161036a565b61083683836108f6565b905061036a565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b0384160161086c5761034f828261092b565b61034f838383610947565b604081015160009073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b038516016108d857803410156108c5576040516374c5672b60e01b815260040160405180910390fd5b6108d383602001518261092b565b6108ec565b6108ec848460000151856020015184610996565b5060019392505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b60008060008084865af16104e25763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d15600160005114171661098c576390b8ec186000526004601cfd5b6000603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d1560016000511417166109e557637939f4246000526004601cfd5b600060605260405250505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610a3257610a326109f3565b604052919050565b600067ffffffffffffffff821115610a5457610a546109f3565b5060051b60200190565b6001600160a01b038116811461050d57600080fd5b600082601f830112610a8457600080fd5b81356020610a99610a9483610a3a565b610a09565b82815260059290921b84018101918181019086841115610ab857600080fd5b8286015b84811015610adc578035610acf81610a5e565b8352918301918301610abc565b509695505050505050565b600082601f830112610af857600080fd5b813567ffffffffffffffff811115610b1257610b126109f3565b610b25601f8201601f1916602001610a09565b818152846020838601011115610b3a57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600060608486031215610b6c57600080fd5b833567ffffffffffffffff80821115610b8457600080fd5b610b9087838801610a73565b94506020860135915080821115610ba657600080fd5b50610bb386828701610ae7565b9250506040840135610bc481610a5e565b809150509250925092565b60008060408385031215610be257600080fd5b823567ffffffffffffffff811115610bf957600080fd5b610c0585828601610ae7565b9250506020830135610c1681610a5e565b809150509250929050565b600060208284031215610c3357600080fd5b8135610c3e81610a5e565b9392505050565b60008060408385031215610c5857600080fd5b823567ffffffffffffffff80821115610c7057600080fd5b610c7c86838701610a73565b9350602091508185013581811115610c9357600080fd5b8501601f81018713610ca457600080fd5b8035610cb2610a9482610a3a565b81815260059190911b82018401908481019089831115610cd157600080fd5b8584015b83811015610d0957803586811115610ced5760008081fd5b610cfb8c8983890101610ae7565b845250918601918601610cd5565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b82811015610d6557815180516001600160a01b03168552860151868501529284019290850190600101610d37565b5091979650505050505050565b6020810160078310610d9457634e487b7160e01b600052602160045260246000fd5b91905290565b60008060408385031215610dad57600080fd5b82359150602083013567ffffffffffffffff811115610dcb57600080fd5b610dd785828601610ae7565b9150509250929050565b600060208284031215610df357600080fd5b5035919050565b60008060408385031215610e0d57600080fd5b8235610e1881610a5e565b91506020830135610c1681610a5e565b634e487b7160e01b600052603260045260246000fd5b82815260006020604081840152835180604085015260005b81811015610e7257858101830151858201606001528201610e56565b506000606082860101526060601f19601f830116850101925050509392505050565b8082018082111561036a57634e487b7160e01b600052601160045260246000fd5b60008060008060808587031215610ecb57600080fd5b8451610ed681610a5e565b602086015160408701519195509350610eee81610a5e565b6060959095015193969295505050565b600060208284031215610f1057600080fd5b81518015158114610c3e57600080fdfea26469706673582212204b4773e250909f075c7e87f1f0a2726cefdfa57f9c008a5366a0d98bb9f2d8af64736f6c63430008130033";