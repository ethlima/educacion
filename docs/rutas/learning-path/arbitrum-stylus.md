---
title: "Arbitrum & Stylus (Rust)"
slug: arbitrum-stylus
sidebar_position: 2
---

# Learning Path 2: Arbitrum & Stylus (Rust)

> Especializacion en el ecosistema Arbitrum con Stylus/Rust.

---

## Tabla resumen

| Nivel | # | Tema | Proyecto practico |
|---|---|---|---|
| **Basico** | A.1 | Arquitectura Arbitrum | Comparar gas L1 vs L2 con txs reales |
| | A.2 | Desarrollo en Arbitrum con Solidity | Deploy de contrato en Arbitrum Sepolia |
| | A.3 | Arbitrum SDK | Enviar mensaje de L1 a L2 |
| | A.4 | Ecosistema Arbitrum | Explorar y documentar 5 dApps en Arbitrum |
| **Intermedio** | A.5 | Rust fundamentals I | Programa CLI en Rust (calculadora, to-do) |
| | A.6 | Rust fundamentals II | Refactorizar proyecto con structs/enums |
| | A.7 | Que es Stylus? | Comparar gas Solidity vs Stylus |
| | A.8 | Primer contrato Stylus | "Hello World" en Stylus → Arbitrum Sepolia |
| **Avanzado** | A.9 | Stylus SDK deep dive | Contrato de registro con storage complejo |
| | A.10 | ERC20/ERC721 en Rust | Token ERC20 en Rust en Sepolia |
| | A.11 | Scaffold-Stylus | dApp full-stack con contrato Stylus |
| | A.12 | Interop Solidity <-> Stylus | dApp hibrida: logica en Rust, interfaz en Solidity |
| | A.13 | Testing y debugging Stylus | Test suite completa para contrato Stylus |
| | A.14 | Proyecto final Stylus | Protocolo funcional en Stylus con UI |

---

## Basico — "Entendiendo Arbitrum"

> Conoce el ecosistema donde vas a construir: Arbitrum, el Layer 2 mas grande de Ethereum.

**Para quien es este nivel:**
- Developers con conocimiento basico de Solidity (nivel Basico del Path 1 completado)
- Personas que quieren entender Arbitrum antes de construir en el
- No necesitas saber Rust todavia

**Que encontraras aqui:**
Empezamos con la arquitectura: que es un rollup optimista, como funciona el sequencer, que son las fraud proofs, y las diferencias entre Arbitrum One, Nova y Sepolia.

Luego pasas a deployar contratos que ya conoces (Solidity) directamente en Arbitrum, aprendes a usar el Arbitrum SDK para comunicacion cross-chain, y exploras el ecosistema real de dApps en produccion.

**Al terminar este nivel podras:**
- Explicar como funciona Arbitrum tecnicamente
- Deployar contratos en Arbitrum Sepolia
- Usar el Arbitrum SDK para mensajes L1-L2
- Navegar el ecosistema de dApps en Arbitrum

**Tiempo estimado:** 2-3 semanas (dedicando ~4h/semana)

### Detalle por tema

| # | Tema | Que aprende | Recurso de apoyo |
|---|---|---|---|
| A.1 | Arquitectura Arbitrum | Rollups optimistas, sequencer, fraud proofs, One vs Nova | [Arbitrum Intro](https://docs.arbitrum.io/get-started/arbitrum-introduction) |
| A.2 | Desarrollo en Arbitrum con Solidity | Diferencias con mainnet, config Hardhat/Foundry para Arbitrum | [Arbitrum Dev Frameworks](https://docs.arbitrum.io/build-decentralized-apps/reference/development-frameworks) |
| A.3 | Arbitrum SDK | Bridge, cross-chain messaging, L1-L2 communication | [Arbitrum SDK](https://docs.arbitrum.io/sdk) |
| A.4 | Ecosistema Arbitrum | DApps, DeFi, gaming, NFTs en Arbitrum, Arbitrum DAO | [Arbitrum Portal](https://portal.arbitrum.io/) |

---

## Intermedio — "Intro a Rust y Stylus"

> Aprendes Rust desde cero y escribes tu primer smart contract con Stylus — la tecnologia que diferencia a Arbitrum.

**Para quien es este nivel:**
- Developers que completaron el nivel Basico de este path
- No necesitas experiencia previa en Rust
- Prerrequisito: saber deployar en Arbitrum Sepolia

**Que encontraras aqui:**
Rust es un lenguaje diferente: ownership, borrowing, tipos estrictos. Dedicamos tiempo a entender estos conceptos porque son la base de Stylus.

Luego pasamos a Stylus: que es, por que importa (contratos mas rapidos y baratos que Solidity), como se compila a WASM, y escribes tu primer contrato en Rust desplegado en Arbitrum.

**Al terminar este nivel podras:**
- Escribir programas basicos en Rust
- Entender ownership y borrowing
- Deployar un contrato Stylus en Arbitrum Sepolia
- Explicar las ventajas de Stylus vs Solidity

**Tiempo estimado:** 3-4 semanas (dedicando ~5h/semana)

### Detalle por tema

| # | Tema | Que aprende | Recurso de apoyo |
|---|---|---|---|
| A.5 | Rust fundamentals I | Variables, tipos, funciones, ownership, borrowing | [Rust Book caps 1-4](https://doc.rust-lang.org/book/) |
| A.6 | Rust fundamentals II | Structs, enums, pattern matching, error handling, traits | [Rust by Example](https://doc.rust-lang.org/rust-by-example/) |
| A.7 | Que es Stylus? | WASM en Arbitrum, por que Rust, ventajas sobre Solidity, costos | [Stylus Gentle Intro](https://docs.arbitrum.io/stylus/gentle-introduction) |
| A.8 | Primer contrato Stylus | Setup cargo-stylus, estructura de contrato, compilar, deploy | [Stylus Quickstart](https://docs.arbitrum.io/stylus/quickstart) |

---

## Avanzado — "Builder Stylus"

> Construyes dApps completas con Stylus: tokens en Rust, Scaffold-Stylus, interop con Solidity, testing profesional.

**Para quien es este nivel:**
- Developers que ya deployaron un contrato Stylus basico
- Prerrequisito: nivel Intermedio de este path completado

**Que encontraras aqui:**
Deep dive en el Stylus SDK: storage complejo, entrypoints, ABI export. Implementas ERC20 y ERC721 en Rust usando los contratos de OpenZeppelin para Stylus.

Luego aprendes Scaffold-Stylus (Rust + Next.js + RainbowKit), interoperabilidad entre contratos Solidity y Stylus, y testing/debugging profesional.

**Al terminar este nivel podras:**
- Escribir smart contracts complejos en Rust con Stylus
- Construir dApps full-stack con Scaffold-Stylus
- Combinar Solidity y Stylus en una misma arquitectura
- Testear y debuggear contratos Stylus profesionalmente

**Tiempo estimado:** 4-6 semanas (dedicando ~6h/semana)

**Por que este nivel importa para el grant:**
Arbitrum Stylus + Rust es prioridad estrategica de Season 3. SEEDGov lo menciono explicitamente. Tener builders que dominen Stylus es un diferenciador clave para el reporte a Questbook.

### Detalle por tema

| # | Tema | Que aprende | Recurso de apoyo |
|---|---|---|---|
| A.9 | Stylus SDK deep dive | Storage, entrypoints, ABI export, types, Stylus SDK API | [Stylus SDK Guide](https://docs.arbitrum.io/stylus/reference/rust-sdk-guide) |
| A.10 | ERC20/ERC721 en Rust | OpenZeppelin Stylus contracts, implementacion de estandares | [OZ rust-contracts-stylus](https://github.com/OpenZeppelin/rust-contracts-stylus) |
| A.11 | Scaffold-Stylus | Stack completo: Rust + Next.js + RainbowKit + Wagmi | [Scaffold-Stylus](https://github.com/Arb-Stylus/scaffold-stylus) |
| A.12 | Interop Solidity <-> Stylus | Llamar Solidity desde Rust y viceversa, arquitectura mixta | [Stylus SDK Guide — Interop](https://docs.arbitrum.io/stylus/reference/rust-sdk-guide) |
| A.13 | Testing y debugging Stylus | Tests unitarios en Rust, debugging, Nitro dev node local | [cargo-stylus CLI](https://docs.arbitrum.io/stylus/using-cli) |
| A.14 | Proyecto final Stylus | Combinar todo: contrato Stylus + frontend + deploy + tests | [Speedrun Stylus](https://www.speedrunstylus.com/) |

---

## Comunidades aliadas para este path

| Comunidad | Pais | Web | Por que importa |
|---|---|---|---|
| Rust Peru | Peru | [rust.pe](https://www.rust.pe/) | Developers peruanos que ya saben Rust → onboarding rapido a Stylus. TG: t.me/rustperu |
| Rust Argentina | Argentina | [rust-lang.ar](https://rust-lang.ar/) | Meetups mensuales, canal TG hispanohablante (t.me/rust_lang_es). Cubren WASM, testing, async. |
