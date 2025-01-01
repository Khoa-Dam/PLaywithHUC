// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import type { Address } from "viem";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";
import "@nomicfoundation/hardhat-viem/types";

export interface GamerProfileWithComments$Type {
  "_format": "hh-sol-artifact-1",
  "contractName": "GamerProfileWithComments",
  "sourceName": "contracts/ProfileWithCmt.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_profileId",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "_rating",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "_commentText",
          "type": "string"
        }
      ],
      "name": "addComment",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "comments",
      "outputs": [
        {
          "internalType": "address",
          "name": "commenter",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "rating",
          "type": "uint8"
        },
        {
          "internalType": "string",
          "name": "commentText",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "createdAt",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_hourlyRate",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_username",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_bio",
          "type": "string"
        }
      ],
      "name": "createProfile",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_profileId",
          "type": "uint256"
        }
      ],
      "name": "getComments",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "commenter",
              "type": "address"
            },
            {
              "internalType": "uint8",
              "name": "rating",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "commentText",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "createdAt",
              "type": "uint256"
            }
          ],
          "internalType": "struct GamerProfileWithComments.Comment[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_profileId",
          "type": "uint256"
        }
      ],
      "name": "getHires",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "hirer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "amountPaid",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "createdAt",
              "type": "uint256"
            }
          ],
          "internalType": "struct GamerProfileWithComments.Hire[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_profileId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_duration",
          "type": "uint256"
        }
      ],
      "name": "hirePlayer",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "hires",
      "outputs": [
        {
          "internalType": "address",
          "name": "hirer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "duration",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountPaid",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "createdAt",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "profileCount",
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
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "profiles",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "profileId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "hourlyRate",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "username",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "bio",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "createdAt",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50611c26806100206000396000f3fe6080604052600436106100865760003560e01c8063c32ab58d11610059578063c32ab58d14610161578063c36fe3d61461018a578063ef43acef146101cc578063fc6c776f146101f7578063fde89dad1461023757610086565b806321c55ca61461008b57806323edf697146100cb5780632e9b42301461010857806394693fe814610124575b600080fd5b34801561009757600080fd5b506100b260048036038101906100ad9190610ee6565b610260565b6040516100c29493929190610f76565b60405180910390f35b3480156100d757600080fd5b506100f260048036038101906100ed9190610fbb565b6102cd565b6040516100ff91906111d7565b60405180910390f35b610122600480360381019061011d9190610ee6565b610492565b005b34801561013057600080fd5b5061014b60048036038101906101469190610fbb565b610854565b60405161015891906112fd565b60405180910390f35b34801561016d57600080fd5b5061018860048036038101906101839190611480565b61097e565b005b34801561019657600080fd5b506101b160048036038101906101ac9190610fbb565b610b1e565b6040516101c396959493929190611539565b60405180910390f35b3480156101d857600080fd5b506101e1610c8a565b6040516101ee91906115a8565b60405180910390f35b34801561020357600080fd5b5061021e60048036038101906102199190610ee6565b610c90565b60405161022e94939291906115d2565b60405180910390f35b34801561024357600080fd5b5061025e6004803603810190610259919061161e565b610d92565b005b6002602052816000526040600020818154811061027c57600080fd5b9060005260206000209060040201600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154905084565b60606003548210610313576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030a906116f5565b60405180910390fd5b60016000838152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561048757838290600052602060002090600302016040518060800160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900460ff1660ff1660ff1681526020016001820180546103ec90611744565b80601f016020809104026020016040519081016040528092919081815260200182805461041890611744565b80156104655780601f1061043a57610100808354040283529160200191610465565b820191906000526020600020905b81548152906001019060200180831161044857829003601f168201915b5050505050815260200160028201548152505081526020019060010190610346565b505050509050919050565b60035482106104d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd906116f5565b60405180910390fd5b60008111610519576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610510906117c1565b60405180910390fd5b60008060008481526020019081526020016000206040518060c0016040529081600082015481526020016001820154815260200160028201805461055c90611744565b80601f016020809104026020016040519081016040528092919081815260200182805461058890611744565b80156105d55780601f106105aa576101008083540402835291602001916105d5565b820191906000526020600020905b8154815290600101906020018083116105b857829003601f168201915b505050505081526020016003820180546105ee90611744565b80601f016020809104026020016040519081016040528092919081815260200182805461061a90611744565b80156106675780601f1061063c57610100808354040283529160200191610667565b820191906000526020600020905b81548152906001019060200180831161064a57829003601f168201915b505050505081526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600582015481525050905060008282602001516106e49190611810565b905080341015610729576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107209061189e565b60405180910390fd5b6002600085815260200190815260200160002060405180608001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200185815260200134815260200142815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301555050816080015173ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561084d573d6000803e3d6000fd5b5050505050565b6060600354821061089a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610891906116f5565b60405180910390fd5b60026000838152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561097357838290600052602060002090600402016040518060800160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382015481525050815260200190600101906108cd565b505050509050919050565b60035483106109c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b9906116f5565b60405180910390fd5b60018260ff16101580156109da575060058260ff1611155b610a19576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a109061190a565b60405180910390fd5b6001600084815260200190815260200160002060405180608001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018460ff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff021916908360ff1602179055506040820151816001019081610b0c9190611ad6565b50606082015181600201555050505050565b6000602052806000526040600020600091509050806000015490806001015490806002018054610b4d90611744565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7990611744565b8015610bc65780601f10610b9b57610100808354040283529160200191610bc6565b820191906000526020600020905b815481529060010190602001808311610ba957829003601f168201915b505050505090806003018054610bdb90611744565b80601f0160208091040260200160405190810160405280929190818152602001828054610c0790611744565b8015610c545780601f10610c2957610100808354040283529160200191610c54565b820191906000526020600020905b815481529060010190602001808311610c3757829003601f168201915b5050505050908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050154905086565b60035481565b60016020528160005260406000208181548110610cac57600080fd5b9060005260206000209060030201600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a900460ff1690806001018054610d0990611744565b80601f0160208091040260200160405190810160405280929190818152602001828054610d3590611744565b8015610d825780601f10610d5757610100808354040283529160200191610d82565b820191906000526020600020905b815481529060010190602001808311610d6557829003601f168201915b5050505050908060020154905084565b6040518060c0016040528060035481526020018481526020018381526020018281526020013373ffffffffffffffffffffffffffffffffffffffff16815260200142815250600080600354815260200190815260200160002060008201518160000155602082015181600101556040820151816002019081610e149190611ad6565b506060820151816003019081610e2a9190611ad6565b5060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a0820151816005015590505060036000815480929190610e9290611ba8565b9190505550505050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610ec381610eb0565b8114610ece57600080fd5b50565b600081359050610ee081610eba565b92915050565b60008060408385031215610efd57610efc610ea6565b5b6000610f0b85828601610ed1565b9250506020610f1c85828601610ed1565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f5182610f26565b9050919050565b610f6181610f46565b82525050565b610f7081610eb0565b82525050565b6000608082019050610f8b6000830187610f58565b610f986020830186610f67565b610fa56040830185610f67565b610fb26060830184610f67565b95945050505050565b600060208284031215610fd157610fd0610ea6565b5b6000610fdf84828501610ed1565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61101d81610f46565b82525050565b600060ff82169050919050565b61103981611023565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561107957808201518184015260208101905061105e565b60008484015250505050565b6000601f19601f8301169050919050565b60006110a18261103f565b6110ab818561104a565b93506110bb81856020860161105b565b6110c481611085565b840191505092915050565b6110d881610eb0565b82525050565b60006080830160008301516110f66000860182611014565b5060208301516111096020860182611030565b50604083015184820360408601526111218282611096565b915050606083015161113660608601826110cf565b508091505092915050565b600061114d83836110de565b905092915050565b6000602082019050919050565b600061116d82610fe8565b6111778185610ff3565b93508360208202850161118985611004565b8060005b858110156111c557848403895281516111a68582611141565b94506111b183611155565b925060208a0199505060018101905061118d565b50829750879550505050505092915050565b600060208201905081810360008301526111f18184611162565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60808201600082015161123b6000850182611014565b50602082015161124e60208501826110cf565b50604082015161126160408501826110cf565b50606082015161127460608501826110cf565b50505050565b60006112868383611225565b60808301905092915050565b6000602082019050919050565b60006112aa826111f9565b6112b48185611204565b93506112bf83611215565b8060005b838110156112f05781516112d7888261127a565b97506112e283611292565b9250506001810190506112c3565b5085935050505092915050565b60006020820190508181036000830152611317818461129f565b905092915050565b61132881611023565b811461133357600080fd5b50565b6000813590506113458161131f565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61138d82611085565b810181811067ffffffffffffffff821117156113ac576113ab611355565b5b80604052505050565b60006113bf610e9c565b90506113cb8282611384565b919050565b600067ffffffffffffffff8211156113eb576113ea611355565b5b6113f482611085565b9050602081019050919050565b82818337600083830152505050565b600061142361141e846113d0565b6113b5565b90508281526020810184848401111561143f5761143e611350565b5b61144a848285611401565b509392505050565b600082601f8301126114675761146661134b565b5b8135611477848260208601611410565b91505092915050565b60008060006060848603121561149957611498610ea6565b5b60006114a786828701610ed1565b93505060206114b886828701611336565b925050604084013567ffffffffffffffff8111156114d9576114d8610eab565b5b6114e586828701611452565b9150509250925092565b600082825260208201905092915050565b600061150b8261103f565b61151581856114ef565b935061152581856020860161105b565b61152e81611085565b840191505092915050565b600060c08201905061154e6000830189610f67565b61155b6020830188610f67565b818103604083015261156d8187611500565b905081810360608301526115818186611500565b90506115906080830185610f58565b61159d60a0830184610f67565b979650505050505050565b60006020820190506115bd6000830184610f67565b92915050565b6115cc81611023565b82525050565b60006080820190506115e76000830187610f58565b6115f460208301866115c3565b81810360408301526116068185611500565b90506116156060830184610f67565b95945050505050565b60008060006060848603121561163757611636610ea6565b5b600061164586828701610ed1565b935050602084013567ffffffffffffffff81111561166657611665610eab565b5b61167286828701611452565b925050604084013567ffffffffffffffff81111561169357611692610eab565b5b61169f86828701611452565b9150509250925092565b7f50726f66696c6520646f6573206e6f7420657869737400000000000000000000600082015250565b60006116df6016836114ef565b91506116ea826116a9565b602082019050919050565b6000602082019050818103600083015261170e816116d2565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061175c57607f821691505b60208210810361176f5761176e611715565b5b50919050565b7f4475726174696f6e206d7573742062652067726561746572207468616e203000600082015250565b60006117ab601f836114ef565b91506117b682611775565b602082019050919050565b600060208201905081810360008301526117da8161179e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061181b82610eb0565b915061182683610eb0565b925082820261183481610eb0565b9150828204841483151761184b5761184a6117e1565b5b5092915050565b7f496e73756666696369656e74207061796d656e74000000000000000000000000600082015250565b60006118886014836114ef565b915061189382611852565b602082019050919050565b600060208201905081810360008301526118b78161187b565b9050919050565b7f526174696e67206d757374206265206265747765656e203120616e6420350000600082015250565b60006118f4601e836114ef565b91506118ff826118be565b602082019050919050565b60006020820190508181036000830152611923816118e7565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261198c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261194f565b611996868361194f565b95508019841693508086168417925050509392505050565b6000819050919050565b60006119d36119ce6119c984610eb0565b6119ae565b610eb0565b9050919050565b6000819050919050565b6119ed836119b8565b611a016119f9826119da565b84845461195c565b825550505050565b600090565b611a16611a09565b611a218184846119e4565b505050565b5b81811015611a4557611a3a600082611a0e565b600181019050611a27565b5050565b601f821115611a8a57611a5b8161192a565b611a648461193f565b81016020851015611a73578190505b611a87611a7f8561193f565b830182611a26565b50505b505050565b600082821c905092915050565b6000611aad60001984600802611a8f565b1980831691505092915050565b6000611ac68383611a9c565b9150826002028217905092915050565b611adf8261103f565b67ffffffffffffffff811115611af857611af7611355565b5b611b028254611744565b611b0d828285611a49565b600060209050601f831160018114611b405760008415611b2e578287015190505b611b388582611aba565b865550611ba0565b601f198416611b4e8661192a565b60005b82811015611b7657848901518255600182019150602085019450602081019050611b51565b86831015611b935784890151611b8f601f891682611a9c565b8355505b6001600288020188555050505b505050505050565b6000611bb382610eb0565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611be557611be46117e1565b5b60018201905091905056fea26469706673582212203ae76ccf87b329d9762b86ceee1c087ef5c2d314e606d0d7d0d14fd9198189bf64736f6c63430008140033",
  "deployedBytecode": "0x6080604052600436106100865760003560e01c8063c32ab58d11610059578063c32ab58d14610161578063c36fe3d61461018a578063ef43acef146101cc578063fc6c776f146101f7578063fde89dad1461023757610086565b806321c55ca61461008b57806323edf697146100cb5780632e9b42301461010857806394693fe814610124575b600080fd5b34801561009757600080fd5b506100b260048036038101906100ad9190610ee6565b610260565b6040516100c29493929190610f76565b60405180910390f35b3480156100d757600080fd5b506100f260048036038101906100ed9190610fbb565b6102cd565b6040516100ff91906111d7565b60405180910390f35b610122600480360381019061011d9190610ee6565b610492565b005b34801561013057600080fd5b5061014b60048036038101906101469190610fbb565b610854565b60405161015891906112fd565b60405180910390f35b34801561016d57600080fd5b5061018860048036038101906101839190611480565b61097e565b005b34801561019657600080fd5b506101b160048036038101906101ac9190610fbb565b610b1e565b6040516101c396959493929190611539565b60405180910390f35b3480156101d857600080fd5b506101e1610c8a565b6040516101ee91906115a8565b60405180910390f35b34801561020357600080fd5b5061021e60048036038101906102199190610ee6565b610c90565b60405161022e94939291906115d2565b60405180910390f35b34801561024357600080fd5b5061025e6004803603810190610259919061161e565b610d92565b005b6002602052816000526040600020818154811061027c57600080fd5b9060005260206000209060040201600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154905084565b60606003548210610313576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030a906116f5565b60405180910390fd5b60016000838152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561048757838290600052602060002090600302016040518060800160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016000820160149054906101000a900460ff1660ff1660ff1681526020016001820180546103ec90611744565b80601f016020809104026020016040519081016040528092919081815260200182805461041890611744565b80156104655780601f1061043a57610100808354040283529160200191610465565b820191906000526020600020905b81548152906001019060200180831161044857829003601f168201915b5050505050815260200160028201548152505081526020019060010190610346565b505050509050919050565b60035482106104d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd906116f5565b60405180910390fd5b60008111610519576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610510906117c1565b60405180910390fd5b60008060008481526020019081526020016000206040518060c0016040529081600082015481526020016001820154815260200160028201805461055c90611744565b80601f016020809104026020016040519081016040528092919081815260200182805461058890611744565b80156105d55780601f106105aa576101008083540402835291602001916105d5565b820191906000526020600020905b8154815290600101906020018083116105b857829003601f168201915b505050505081526020016003820180546105ee90611744565b80601f016020809104026020016040519081016040528092919081815260200182805461061a90611744565b80156106675780601f1061063c57610100808354040283529160200191610667565b820191906000526020600020905b81548152906001019060200180831161064a57829003601f168201915b505050505081526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600582015481525050905060008282602001516106e49190611810565b905080341015610729576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107209061189e565b60405180910390fd5b6002600085815260200190815260200160002060405180608001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200185815260200134815260200142815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301555050816080015173ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801561084d573d6000803e3d6000fd5b5050505050565b6060600354821061089a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610891906116f5565b60405180910390fd5b60026000838152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561097357838290600052602060002090600402016040518060800160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815260200160028201548152602001600382015481525050815260200190600101906108cd565b505050509050919050565b60035483106109c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b9906116f5565b60405180910390fd5b60018260ff16101580156109da575060058260ff1611155b610a19576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a109061190a565b60405180910390fd5b6001600084815260200190815260200160002060405180608001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018460ff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160000160146101000a81548160ff021916908360ff1602179055506040820151816001019081610b0c9190611ad6565b50606082015181600201555050505050565b6000602052806000526040600020600091509050806000015490806001015490806002018054610b4d90611744565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7990611744565b8015610bc65780601f10610b9b57610100808354040283529160200191610bc6565b820191906000526020600020905b815481529060010190602001808311610ba957829003601f168201915b505050505090806003018054610bdb90611744565b80601f0160208091040260200160405190810160405280929190818152602001828054610c0790611744565b8015610c545780601f10610c2957610100808354040283529160200191610c54565b820191906000526020600020905b815481529060010190602001808311610c3757829003601f168201915b5050505050908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060050154905086565b60035481565b60016020528160005260406000208181548110610cac57600080fd5b9060005260206000209060030201600091509150508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060000160149054906101000a900460ff1690806001018054610d0990611744565b80601f0160208091040260200160405190810160405280929190818152602001828054610d3590611744565b8015610d825780601f10610d5757610100808354040283529160200191610d82565b820191906000526020600020905b815481529060010190602001808311610d6557829003601f168201915b5050505050908060020154905084565b6040518060c0016040528060035481526020018481526020018381526020018281526020013373ffffffffffffffffffffffffffffffffffffffff16815260200142815250600080600354815260200190815260200160002060008201518160000155602082015181600101556040820151816002019081610e149190611ad6565b506060820151816003019081610e2a9190611ad6565b5060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a0820151816005015590505060036000815480929190610e9290611ba8565b9190505550505050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610ec381610eb0565b8114610ece57600080fd5b50565b600081359050610ee081610eba565b92915050565b60008060408385031215610efd57610efc610ea6565b5b6000610f0b85828601610ed1565b9250506020610f1c85828601610ed1565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f5182610f26565b9050919050565b610f6181610f46565b82525050565b610f7081610eb0565b82525050565b6000608082019050610f8b6000830187610f58565b610f986020830186610f67565b610fa56040830185610f67565b610fb26060830184610f67565b95945050505050565b600060208284031215610fd157610fd0610ea6565b5b6000610fdf84828501610ed1565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61101d81610f46565b82525050565b600060ff82169050919050565b61103981611023565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561107957808201518184015260208101905061105e565b60008484015250505050565b6000601f19601f8301169050919050565b60006110a18261103f565b6110ab818561104a565b93506110bb81856020860161105b565b6110c481611085565b840191505092915050565b6110d881610eb0565b82525050565b60006080830160008301516110f66000860182611014565b5060208301516111096020860182611030565b50604083015184820360408601526111218282611096565b915050606083015161113660608601826110cf565b508091505092915050565b600061114d83836110de565b905092915050565b6000602082019050919050565b600061116d82610fe8565b6111778185610ff3565b93508360208202850161118985611004565b8060005b858110156111c557848403895281516111a68582611141565b94506111b183611155565b925060208a0199505060018101905061118d565b50829750879550505050505092915050565b600060208201905081810360008301526111f18184611162565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60808201600082015161123b6000850182611014565b50602082015161124e60208501826110cf565b50604082015161126160408501826110cf565b50606082015161127460608501826110cf565b50505050565b60006112868383611225565b60808301905092915050565b6000602082019050919050565b60006112aa826111f9565b6112b48185611204565b93506112bf83611215565b8060005b838110156112f05781516112d7888261127a565b97506112e283611292565b9250506001810190506112c3565b5085935050505092915050565b60006020820190508181036000830152611317818461129f565b905092915050565b61132881611023565b811461133357600080fd5b50565b6000813590506113458161131f565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61138d82611085565b810181811067ffffffffffffffff821117156113ac576113ab611355565b5b80604052505050565b60006113bf610e9c565b90506113cb8282611384565b919050565b600067ffffffffffffffff8211156113eb576113ea611355565b5b6113f482611085565b9050602081019050919050565b82818337600083830152505050565b600061142361141e846113d0565b6113b5565b90508281526020810184848401111561143f5761143e611350565b5b61144a848285611401565b509392505050565b600082601f8301126114675761146661134b565b5b8135611477848260208601611410565b91505092915050565b60008060006060848603121561149957611498610ea6565b5b60006114a786828701610ed1565b93505060206114b886828701611336565b925050604084013567ffffffffffffffff8111156114d9576114d8610eab565b5b6114e586828701611452565b9150509250925092565b600082825260208201905092915050565b600061150b8261103f565b61151581856114ef565b935061152581856020860161105b565b61152e81611085565b840191505092915050565b600060c08201905061154e6000830189610f67565b61155b6020830188610f67565b818103604083015261156d8187611500565b905081810360608301526115818186611500565b90506115906080830185610f58565b61159d60a0830184610f67565b979650505050505050565b60006020820190506115bd6000830184610f67565b92915050565b6115cc81611023565b82525050565b60006080820190506115e76000830187610f58565b6115f460208301866115c3565b81810360408301526116068185611500565b90506116156060830184610f67565b95945050505050565b60008060006060848603121561163757611636610ea6565b5b600061164586828701610ed1565b935050602084013567ffffffffffffffff81111561166657611665610eab565b5b61167286828701611452565b925050604084013567ffffffffffffffff81111561169357611692610eab565b5b61169f86828701611452565b9150509250925092565b7f50726f66696c6520646f6573206e6f7420657869737400000000000000000000600082015250565b60006116df6016836114ef565b91506116ea826116a9565b602082019050919050565b6000602082019050818103600083015261170e816116d2565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061175c57607f821691505b60208210810361176f5761176e611715565b5b50919050565b7f4475726174696f6e206d7573742062652067726561746572207468616e203000600082015250565b60006117ab601f836114ef565b91506117b682611775565b602082019050919050565b600060208201905081810360008301526117da8161179e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061181b82610eb0565b915061182683610eb0565b925082820261183481610eb0565b9150828204841483151761184b5761184a6117e1565b5b5092915050565b7f496e73756666696369656e74207061796d656e74000000000000000000000000600082015250565b60006118886014836114ef565b915061189382611852565b602082019050919050565b600060208201905081810360008301526118b78161187b565b9050919050565b7f526174696e67206d757374206265206265747765656e203120616e6420350000600082015250565b60006118f4601e836114ef565b91506118ff826118be565b602082019050919050565b60006020820190508181036000830152611923816118e7565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261198c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261194f565b611996868361194f565b95508019841693508086168417925050509392505050565b6000819050919050565b60006119d36119ce6119c984610eb0565b6119ae565b610eb0565b9050919050565b6000819050919050565b6119ed836119b8565b611a016119f9826119da565b84845461195c565b825550505050565b600090565b611a16611a09565b611a218184846119e4565b505050565b5b81811015611a4557611a3a600082611a0e565b600181019050611a27565b5050565b601f821115611a8a57611a5b8161192a565b611a648461193f565b81016020851015611a73578190505b611a87611a7f8561193f565b830182611a26565b50505b505050565b600082821c905092915050565b6000611aad60001984600802611a8f565b1980831691505092915050565b6000611ac68383611a9c565b9150826002028217905092915050565b611adf8261103f565b67ffffffffffffffff811115611af857611af7611355565b5b611b028254611744565b611b0d828285611a49565b600060209050601f831160018114611b405760008415611b2e578287015190505b611b388582611aba565b865550611ba0565b601f198416611b4e8661192a565b60005b82811015611b7657848901518255600182019150602085019450602081019050611b51565b86831015611b935784890151611b8f601f891682611a9c565b8355505b6001600288020188555050505b505050505050565b6000611bb382610eb0565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611be557611be46117e1565b5b60018201905091905056fea26469706673582212203ae76ccf87b329d9762b86ceee1c087ef5c2d314e606d0d7d0d14fd9198189bf64736f6c63430008140033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}

declare module "@nomicfoundation/hardhat-viem/types" {
  export function deployContract(
    contractName: "GamerProfileWithComments",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<GamerProfileWithComments$Type["abi"]>>;
  export function deployContract(
    contractName: "contracts/ProfileWithCmt.sol:GamerProfileWithComments",
    constructorArgs?: [],
    config?: DeployContractConfig
  ): Promise<GetContractReturnType<GamerProfileWithComments$Type["abi"]>>;

  export function sendDeploymentTransaction(
    contractName: "GamerProfileWithComments",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<GamerProfileWithComments$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;
  export function sendDeploymentTransaction(
    contractName: "contracts/ProfileWithCmt.sol:GamerProfileWithComments",
    constructorArgs?: [],
    config?: SendDeploymentTransactionConfig
  ): Promise<{
    contract: GetContractReturnType<GamerProfileWithComments$Type["abi"]>;
    deploymentTransaction: GetTransactionReturnType;
  }>;

  export function getContractAt(
    contractName: "GamerProfileWithComments",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<GamerProfileWithComments$Type["abi"]>>;
  export function getContractAt(
    contractName: "contracts/ProfileWithCmt.sol:GamerProfileWithComments",
    address: Address,
    config?: GetContractAtConfig
  ): Promise<GetContractReturnType<GamerProfileWithComments$Type["abi"]>>;
}
