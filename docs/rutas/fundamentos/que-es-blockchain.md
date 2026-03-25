---
title: ¿Qué es Blockchain?
slug: que-es-blockchain
sidebar_position: 2
authors:
  - name: Javier Arteaga Gonzales
    url: https://github.com/javierarteagagonzales
---

# ¿Qué es Blockchain?

Blockchain es una **base de datos compartida** (distribuida) donde muchas computadoras mantienen el mismo historial de información, y donde cambiar el pasado es **difícil** porque el sistema está diseñado para **verificar** y **encadenar** los datos.

## Objetivos de aprendizaje

- Entender qué problema resuelve blockchain y qué no.
- Diferenciar **cadena de bloques** vs **criptomoneda**.
- Reconocer los componentes: bloques, hashes, red P2P, consenso.

## Prerrequisitos

Ninguno.

## Conceptos clave

- **Bloque:** paquete de datos (transacciones u otros registros).
- **Hash:** “huella digital” del bloque (cambia si cambian los datos).
- **Cadena:** cada bloque referencia al anterior → historial encadenado.
- **Red P2P:** no hay un “servidor único”; hay muchos nodos.
- **Consenso:** reglas para decidir qué versión del historial es válida.

## ¿Qué problema resuelve?

- Coordinación de un historial compartido **sin confiar** en un solo actor.
- Auditoría y trazabilidad: “qué pasó y en qué orden”.

## Qué NO resuelve (mitos comunes)

- No hace que todo sea “más rápido”.
- No garantiza “privacidad” por defecto.
- No es sinónimo de “gratis” (hay costos).

## Lab 1: Entendiendo hashes (sin código)

1. Cambia una letra en un texto corto.
2. Imagina que el hash cambia completamente.
3. Conclusión: si un bloque cambia, rompe la referencia del siguiente.

**Resultado esperado:** comprendes por qué alterar el pasado exige rehacer el resto.

## Lab 2: Historia encadenada (ejercicio mental)

Tienes 3 bloques:

- B1: “A paga a B”
- B2: “B paga a C”
- B3: “C paga a D”

Pregunta: ¿Qué pasa si alguien cambia B1 a “A paga a X”?

**Respuesta guía:** B2 y B3 quedan invalidos porque ya no encajan con la referencia.

## Checklist

- [ ] Puedo explicar blockchain sin mencionar “Bitcoin”.
- [ ] Puedo explicar qué es un hash y por qué importa.
- [ ] Sé decir cuándo blockchain no es la solución.

## Mini evaluación

1. ¿Por qué se dice que blockchain es “difícil de modificar”?
2. ¿Qué rol cumple el consenso?
3. ¿Qué diferencia hay entre base de datos tradicional vs blockchain?

## Recursos recomendados

- Documentación: Ethereum.org (sección “Learn”)
- Videos intro (conceptos generales)
- Lecturas: “distributed systems basics” (idea general, no para memorizar)

## Siguiente paso

Continúa con: **¿Qué es Ethereum?**
