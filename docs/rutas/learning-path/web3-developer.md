---
title: "Web3 Developer (Solidity)"
slug: web3-developer
sidebar_position: 1
---

# Learning Path 1: Web3 Developer (Solidity)

> De cero a builder full-stack en Ethereum/Arbitrum.

---

## Tabla resumen

| Nivel | # | Tema | Proyecto practico |
|---|---|---|---|
| **Basico** | 1.1 | Que es blockchain? | Explorar txs en Etherscan |
| | 1.2 | Wallets y criptografia basica | Crear wallet, enviar ETH en testnet |
| | 1.3 | Ethereum y la EVM | Leer un contrato en Etherscan |
| | 1.4 | Solidity: variables y tipos | Contrato "Hello World" en Remix |
| | 1.5 | Solidity: funciones y control de flujo | Contrato de votacion simple |
| | 1.6 | Solidity: structs, mappings y storage | Registro de estudiantes on-chain |
| | 1.7 | Tu primer deploy | Deploy "Hello World" en Sepolia |
| | 1.8 | Que son las Layer 2? | Configurar MetaMask con Arbitrum Sepolia |
| **Intermedio** | 2.1 | Estandares de tokens: ERC20 | Crear tu propio token |
| | 2.2 | Estandares de tokens: ERC721 y ERC1155 | Mintear una coleccion NFT |
| | 2.3 | Patrones de seguridad | Identificar vulnerabilidades en contratos |
| | 2.4 | Tooling: Hardhat o Foundry | Migrar contrato de Remix a Hardhat/Foundry |
| | 2.5 | Testing de smart contracts | Test suite completa para un ERC20 |
| | 2.6 | Frontend Web3: stack moderno | UI que lee balance de un token |
| | 2.7 | Wallet connection y UX | dApp con connect wallet + enviar tx |
| | 2.8 | Scaffold-ETH 2 | Clonar y personalizar Scaffold-ETH 2 |
| | 2.9 | Deploy en Arbitrum | Desplegar contrato en Arbitrum Sepolia |
| | 2.10 | Proyecto integrador | dApp completa en Arbitrum Sepolia |
| **Avanzado** | 3.1 | DeFi: AMMs y liquidez | Construir un DEX simple |
| | 3.2 | DeFi: lending y oraculos | Protocolo de lending basico |
| | 3.3 | DeFi: stablecoins y mecanismos | Disenar un stablecoin simple |
| | 3.4 | Gobernanza y DAOs | DAO con votacion y ejecucion |
| | 3.5 | Upgradeable contracts | Contrato upgradeable con proxy |
| | 3.6 | Gas optimization | Optimizar contrato existente (-30% gas) |
| | 3.7 | Seguridad avanzada | Auditar contrato con vulnerabilidades |
| | 3.8 | Indexing y subgraphs | Subgraph para tu dApp |
| | 3.9 | Account Abstraction | Wallet con social recovery |
| | 3.10 | Proyecto avanzado | Protocolo DeFi o social en Arbitrum |

---

## Basico — "Entendiendo Web3"

> Tu primer paso en el mundo de blockchain. Aqui vas a entender como funciona todo desde cero y escribir tu primer smart contract.

**Para quien es este nivel:**
- Personas con conocimientos basicos de programacion (cualquier lenguaje)
- Curiosos de blockchain que nunca han tocado Solidity ni Web3
- No necesitas experiencia previa en blockchain ni criptografia

**Que encontraras aqui:**
Empezamos desde lo mas fundamental: que es un bloque, como funciona una transaccion, que son las wallets y por que la criptografia importa. No asumimos que sabes nada de blockchain.

Luego entramos directo a Solidity: variables, funciones, structs, mappings — todo lo que necesitas para escribir contratos basicos. Cada tema tiene un proyecto practico para que no sea solo teoria.

Terminamos con tu primer deploy en testnet y una introduccion a Layer 2, que es donde vas a construir en los niveles siguientes.

**Al terminar este nivel podras:**
- Leer y escribir contratos simples en Solidity
- Hacer deploy en testnet (Sepolia)
- Usar MetaMask y entender transacciones
- Explicar que es Ethereum, la EVM y las Layer 2

**Tiempo estimado:** 3-4 semanas (dedicando ~4h/semana)

**Por que este nivel es necesario:**
Sin estos fundamentos, las sesiones del bootcamp "La Siembra" (semanas 1-2) serian incomprensibles. Este nivel asegura que todos los participantes arranquen con una base solida.

### Detalle por tema

| # | Tema | Que aprende | Recurso de apoyo |
|---|---|---|---|
| 1.1 | Que es blockchain? | Bloques, hashes, consenso, nodos, redes | [Cyfrin — Blockchain Basics](https://www.cyfrin.io/updraft) |
| 1.2 | Wallets y criptografia basica | Claves publicas/privadas, firmas, seed phrases, MetaMask | [Ethereum.org/es — Wallets](https://ethereum.org/es/wallets/) |
| 1.3 | Ethereum y la EVM | Cuentas, gas, transacciones, estado global, EVM | [Ethereum.org/es — Intro](https://ethereum.org/es/developers/docs/intro-to-ethereum/) |
| 1.4 | Solidity: variables y tipos | uint, address, bool, string, arrays, mappings | [CryptoZombies Leccion 1](https://cryptozombies.io/) |
| 1.5 | Solidity: funciones y control de flujo | Functions, visibility, modifiers, require, events | [Solidity by Example](https://solidity-by-example.org/) |
| 1.6 | Solidity: structs, mappings y storage | Structs, mappings anidados, storage vs memory | [CryptoZombies Leccion 2](https://cryptozombies.io/) |
| 1.7 | Tu primer deploy | Remix → compilar → deploy en testnet, verificar en Etherscan | [Remix IDE](https://remix.ethereum.org/) |
| 1.8 | Que son las Layer 2? | Rollups, sidechains, L2 vs L1, por que importan | [Arbitrum — Gentle Intro](https://docs.arbitrum.io/get-started/arbitrum-introduction) |

---

## Intermedio — "Construyendo dApps"

> Ya sabes Solidity basico. Ahora vas a construir aplicaciones completas: contratos + frontend + deploy en Arbitrum.

**Para quien es este nivel:**
- Developers que ya escribieron al menos un smart contract
- Personas que completaron el nivel Basico o tienen experiencia equivalente
- Prerrequisito: saber deployar un contrato en testnet con Remix

**Que encontraras aqui:**
Pasamos de contratos simples a estandares reales: ERC20 (tokens), ERC721 (NFTs), y como usar OpenZeppelin para no reinventar la rueda. Aprendes patrones de seguridad que todo developer Web3 debe conocer.

Luego conectamos el backend (contratos) con el frontend: Wagmi, Viem, RainbowKit, Scaffold-ETH 2. Al final de este nivel tienes una dApp funcional de punta a punta.

Todo esto lo despliegas en Arbitrum Sepolia, no en mainnet Ethereum, porque es donde vamos a construir en el bootcamp y hackathon.

**Al terminar este nivel podras:**
- Crear tokens ERC20 y colecciones NFT
- Construir una dApp full-stack (contrato + frontend)
- Usar Hardhat o Foundry para testing y deploy
- Deployar en Arbitrum Sepolia
- Entender vulnerabilidades basicas de seguridad

**Tiempo estimado:** 4-6 semanas (dedicando ~5h/semana)

**Por que este nivel es necesario:**
Este es el nivel que te prepara para las semanas 2-3 del bootcamp "La Siembra". Sin saber conectar un frontend a un contrato, no podras construir el proyecto que se presenta en el Demo Day.

### Detalle por tema

| # | Tema | Que aprende | Recurso de apoyo |
|---|---|---|---|
| 2.1 | Estandares de tokens: ERC20 | Estandar ERC20, OpenZeppelin, approve/transferFrom | [OpenZeppelin Wizard](https://wizard.openzeppelin.com/) |
| 2.2 | Estandares de tokens: ERC721 y ERC1155 | NFTs, metadata, IPFS, estandares multi-token | [SpeedRunEthereum #0](https://speedrunethereum.com/) |
| 2.3 | Patrones de seguridad | Reentrancy, access control, overflow, checks-effects-interactions | [Solidity by Example — Hacks](https://solidity-by-example.org/hacks/) |
| 2.4 | Tooling: Hardhat o Foundry | Setup proyecto, compilar, testear, deploy con scripts | [Foundry Book](https://book.getfoundry.sh/) |
| 2.5 | Testing de smart contracts | Unit tests, fuzzing basico, cobertura, assertions | [Cyfrin — Foundry Fundamentals](https://www.cyfrin.io/updraft) |
| 2.6 | Frontend Web3: stack moderno | Viem, Wagmi, React hooks, providers, signers | [Wagmi Docs](https://wagmi.sh/) |
| 2.7 | Wallet connection y UX | RainbowKit/ConnectKit, manejo de estados de tx, errores | [RainbowKit](https://www.rainbowkit.com/) |
| 2.8 | Scaffold-ETH 2 | Full-stack starter, custom hooks, hot reload | [Scaffold-ETH 2](https://scaffoldeth.io/) |
| 2.9 | Deploy en Arbitrum | Configuracion de Arbitrum en Hardhat/Foundry, diferencias de gas | [Arbitrum Tutorials](https://github.com/OffchainLabs/arbitrum-tutorials) |
| 2.10 | Proyecto integrador | Combinar todo: contrato + tests + frontend + deploy en L2 | [SpeedRunEthereum #1-2](https://speedrunethereum.com/) |

---

## Avanzado — "Builder profesional"

> Aqui se construyen protocolos. DeFi, DAOs, seguridad avanzada, optimizacion — el nivel de un developer Web3 profesional.

**Para quien es este nivel:**
- Developers que ya construyeron al menos una dApp completa
- Personas que completaron el nivel Intermedio
- Prerrequisito: tener un proyecto desplegado en Arbitrum Sepolia con frontend funcional

**Que encontraras aqui:**
Entramos al mundo de DeFi: AMMs, lending, stablecoins, oraculos. Aprendes como funcionan los protocolos que mueven miles de millones de dolares y construyes versiones simplificadas.

Luego profundizamos en gobernanza (DAOs), contratos upgradeables, optimizacion de gas, y seguridad avanzada (fuzzing, invariant testing, formal verification). Tambien cubres indexing con The Graph y Account Abstraction.

Este nivel te prepara no solo para el hackathon sino para contribuir profesionalmente al ecosistema.

**Al terminar este nivel podras:**
- Disenar protocolos DeFi (AMM, lending, stablecoins)
- Auditar smart contracts con herramientas profesionales
- Construir DAOs con gobernanza on-chain
- Optimizar gas y usar patrones avanzados de Solidity
- Indexar datos on-chain con subgraphs

**Tiempo estimado:** 6-8 semanas (dedicando ~6h/semana)

**Por que este nivel es necesario:**
Este nivel te diferencia en el hackathon "La Cosecha". Los equipos con conocimiento avanzado construyen proyectos mas solidos, mas seguros, y con mayor potencial de escalar.

### Detalle por tema

| # | Tema | Que aprende | Recurso de apoyo |
|---|---|---|---|
| 3.1 | DeFi: AMMs y liquidez | Constant product formula, pools, slippage, impermanent loss | [SpeedRunEthereum #4](https://speedrunethereum.com/) |
| 3.2 | DeFi: lending y oraculos | Colateralizacion, liquidaciones, price feeds, Chainlink | [SpeedRunEthereum #5-6](https://speedrunethereum.com/) |
| 3.3 | DeFi: stablecoins y mecanismos | Tipos de stablecoins, peg, colateral, gobernanza | [SpeedRunEthereum #7](https://speedrunethereum.com/) |
| 3.4 | Gobernanza y DAOs | Governor, timelock, votacion on-chain, proposals | [OpenZeppelin Governor](https://docs.openzeppelin.com/contracts/5.x/governance) |
| 3.5 | Upgradeable contracts | Proxy patterns, UUPS, Transparent Proxy, storage collisions | [OpenZeppelin Upgrades](https://docs.openzeppelin.com/upgrades/) |
| 3.6 | Gas optimization | Storage packing, calldata vs memory, assembly tricks | [RareSkills — Gas Puzzles](https://www.rareskills.io/) |
| 3.7 | Seguridad avanzada | Fuzzing con Foundry, invariant testing, formal verification | [Cyfrin — Smart Contract Security](https://www.cyfrin.io/updraft) |
| 3.8 | Indexing y subgraphs | The Graph, subgraphs, queries GraphQL, indexing events | [The Graph Docs](https://thegraph.com/docs/) |
| 3.9 | Account Abstraction | ERC-4337, bundlers, paymasters, smart accounts | [LearnWeb3 — AA Course](https://learnweb3.io/) |
| 3.10 | Proyecto avanzado | Arquitectura completa: contratos + frontend + indexing + seguridad | — |
