---
title: "Seguridad Web3"
slug: seguridad
sidebar_position: 4
---

# Learning Path 4: Seguridad Web3

> De entender vulnerabilidades a auditar contratos.

---

## Tabla resumen

| Nivel | # | Tema | Proyecto practico |
|---|---|---|---|
| **Basico** | S.1 | Top 10 vulnerabilidades | Resolver Ethernaut niveles 1-5 |
| | S.2 | Patrones defensivos | Refactorizar contrato vulnerable |
| | S.3 | Herramientas de analisis | Correr Slither en proyecto propio |
| **Intermedio** | S.4 | Fuzzing con Foundry | Test suite con fuzzing para protocolo DeFi |
| | S.5 | Flash loan attacks | Resolver 3 challenges de Damn Vulnerable DeFi |
| | S.6 | Governance attacks | Resolver challenges de governance en DV DeFi |
| **Avanzado** | S.7 | Metodologia de auditoria | Auditoria mock con reporte completo |
| | S.8 | EVM a bajo nivel | Resolver puzzles de assembly |
| | S.9 | Formal verification | Verificar formalmente un contrato ERC20 |

---

## Basico — "Mente de atacante"

> Antes de defender, necesitas pensar como atacante. Las 10 vulnerabilidades mas comunes en smart contracts.

**Para quien es este nivel:**
- Developers con conocimiento intermedio de Solidity (Path 1 Intermedio completado)
- Interes en seguridad y auditoria

**Que encontraras aqui:**
Reentrancy, overflow, tx.origin, delegatecall, selfdestruct — las vulnerabilidades clasicas. Las aprendes rompiendolas en Ethernaut. Luego aprendes los patrones defensivos: checks-effects-interactions, ReentrancyGuard, AccessControl.

**Al terminar este nivel podras:**
- Identificar las 10 vulnerabilidades mas comunes
- Aplicar patrones defensivos de OpenZeppelin
- Usar herramientas de analisis estatico (Slither, Mythril)

**Tiempo estimado:** 2-3 semanas

### Detalle por tema

| # | Tema | Que aprende | Recurso de apoyo |
|---|---|---|---|
| S.1 | Top 10 vulnerabilidades | Reentrancy, overflow, tx.origin, delegatecall, selfdestruct | [Ethernaut](https://ethernaut.openzeppelin.com/) |
| S.2 | Patrones defensivos | Checks-effects-interactions, ReentrancyGuard, AccessControl | [OpenZeppelin Docs](https://docs.openzeppelin.com/contracts/5.x/) |
| S.3 | Herramientas de analisis | Slither, Mythril, Aderyn — analisis estatico | [Slither GitHub](https://github.com/crytic/slither) |

---

## Intermedio — "Testing ofensivo"

> Fuzzing, flash loan attacks, governance attacks. Testing que rompe cosas a proposito.

**Para quien es este nivel:**
- Completaste el nivel Basico de este path
- Sabes usar Foundry para testing

**Que encontraras aqui:**
Fuzz testing con Foundry, invariant testing, flash loan attacks, arbitraje, manipulacion de precios, y governance attacks. Todo a traves de challenges de Damn Vulnerable DeFi.

**Al terminar este nivel podras:**
- Escribir test suites con fuzzing e invariant testing
- Entender y ejecutar flash loan attacks
- Identificar vulnerabilidades de gobernanza

**Tiempo estimado:** 3-4 semanas

### Detalle por tema

| # | Tema | Que aprende | Recurso de apoyo |
|---|---|---|---|
| S.4 | Fuzzing con Foundry | Fuzz testing, bound inputs, invariant testing | [Foundry Book — Fuzz Testing](https://book.getfoundry.sh/forge/fuzz-testing) |
| S.5 | Flash loan attacks | Flash loans, arbitraje, manipulacion de precio | [Damn Vulnerable DeFi](https://www.damnvulnerabledefi.xyz/) |
| S.6 | Governance attacks | Vote manipulation, proposal hijacking, timelock bypass | [Damn Vulnerable DeFi](https://www.damnvulnerabledefi.xyz/) |

---

## Avanzado — "Auditor"

> Metodologia profesional de auditoria, EVM a bajo nivel, formal verification.

**Para quien es este nivel:**
- Completaste el nivel Intermedio de este path
- Quieres hacer auditorias profesionalmente

**Que encontraras aqui:**
Proceso completo de auditoria (reporting, severity classification), EVM a bajo nivel (opcodes, bytecode, Yul, storage layout), y formal verification con Certora.

**Al terminar este nivel podras:**
- Realizar auditorias mock completas con reporte profesional
- Leer y escribir assembly (Yul)
- Verificar formalmente invariantes de un contrato

**Tiempo estimado:** 6-8 semanas

### Detalle por tema

| # | Tema | Que aprende | Recurso de apoyo |
|---|---|---|---|
| S.7 | Metodologia de auditoria | Proceso, reporting, severity classification, checklist | [Cyfrin — SC Security](https://www.cyfrin.io/updraft) |
| S.8 | EVM a bajo nivel | Opcodes, bytecode, Yul, storage layout, calldata encoding | [RareSkills Puzzles](https://www.rareskills.io/) |
| S.9 | Formal verification | Especificaciones, Certora, verificacion matematica de invariantes | [Cyfrin — Formal Verification](https://www.cyfrin.io/updraft) |

---

## CTFs y Wargames recomendados

| Plataforma | URL | Nivel | Challenges |
|---|---|---|---|
| Ethernaut | https://ethernaut.openzeppelin.com/ | Basico → Avanzado | 25+ niveles |
| Damn Vulnerable DeFi | https://www.damnvulnerabledefi.xyz/ | Intermedio → Avanzado | 18 challenges |
| Capture The Ether | https://capturetheether.com/ | Intermedio → Avanzado | Varios |
| RareSkills Puzzles | https://www.rareskills.io/ | Intermedio → Avanzado | Gas, Yul, Huff, Uniswap V2 |
