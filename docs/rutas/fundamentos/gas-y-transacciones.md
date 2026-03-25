---
title: Gas y transacciones
slug: gas-y-transacciones
sidebar_position: 5
---

# Gas y transacciones

El gas es el “peaje” por usar la red: pagar por **computación y almacenamiento** para que los nodos procesen tu operación.

## Objetivos

- Entender por qué existe el gas.
- Diferenciar gas limit vs gas price / max fee.
- Comprender el flujo de una transacción.

## Prerrequisitos

- Ethereum y wallets.

## Conceptos clave

- **Gas limit:** máximo que estás dispuesto a usar.
- **Fee:** costo final según uso real y condiciones de la red.
- **EIP-1559:** base fee + tip (prioridad).
- **Nonce:** número de transacción por cuenta.

## Flujo de una transacción (simplificado)

1. Preparas la tx en la wallet
2. La firmas (sin revelar tu clave)
3. Se transmite a la red
4. Entra a mempool
5. Se incluye en un bloque
6. Se finaliza/confirmaciones

## Lab: “costos y decisiones”

Caso:

- Tx A: simple transfer
- Tx B: interacción con contrato (swap)

Pregunta: ¿Cuál costará más gas y por qué?

## Checklist

- [ ] Puedo explicar mempool.
- [ ] Entiendo gas limit vs fee.
- [ ] Sé por qué algunas tx “fallan” (out of gas / revert).

## Mini evaluación

1. ¿Qué es gas limit?
2. ¿Qué es base fee?
3. ¿Qué significa que una tx “revirtió”?

## Recursos

- EIP-1559 explicado (ethereum.org / blogs)
- Exploradores (Etherscan) para revisar txs

## Siguiente paso

**Introducción a smart contracts**
