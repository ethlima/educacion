---
title: Introducción a Smart Contracts
slug: intro-smart-contracts
sidebar_position: 6
---

# Introducción a Smart Contracts

Un smart contract es código desplegado en Ethereum que puede **mantener estado** y ejecutar reglas **de forma determinista**.

## Objetivos

- Entender qué hace y qué no hace un contrato.
- Diferenciar “inmutable” vs “actualizable”.
- Entender eventos, estado y funciones.

## Prerrequisitos

- Ethereum + gas.

## Conceptos clave

- **Estado:** variables almacenadas.
- **Funciones:** lectura (view) vs escritura (state-changing).
- **Eventos:** logs para frontends/analítica.
- **Revert:** cancelar ejecución si una condición no se cumple.

## Lab: “Piensa como contrato”

Diseña un contrato mental:

- Guardar un contador
- Incrementar contador
- Emitir evento “Incremented”

Define:

- Estado: `count`
- Función: `increment()`
- Evento: `Incremented(newCount)`

## Checklist

- [ ] Sé diferenciar lectura vs escritura.
- [ ] Entiendo por qué el contrato cuesta gas.
- [ ] Entiendo qué es un evento.

## Mini evaluación

1. ¿Por qué una escritura cuesta gas?
2. ¿Qué es un evento y por qué existe?
3. ¿Qué es revert?

## Siguiente paso

Ir a **Desarrollo → Introducción a Solidity**
