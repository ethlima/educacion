---
title: Estructura mínima
description: Plantilla y requisitos para crear documentos claros, prácticos y fáciles de mantener
sidebar_position: 3
---

# Estructura mínima (obligatoria)

Esta guía define el estándar mínimo para cualquier documento nuevo en **Ethereum Lima — Educación**.  
El objetivo es que todo contenido sea **claro**, **práctico** y **mantenible**.

> Si tu aporte es una corrección pequeña (typo, link), no necesitas aplicar todo esto.  
> Si estás creando una página nueva o reescribiendo una sección completa, sí.

---

## ¿Cuándo debo usar esta estructura?

Usa esta estructura cuando:

- Creas una página nueva (Fundamentos, Desarrollo, Escalabilidad, Especialización, Contribuir).
- Agregas un módulo o “ruta” de aprendizaje.
- Escribes un tutorial con pasos.
- Incorporas un lab o ejercicio nuevo.

---

## Requisitos mínimos de calidad

Todo documento debe cumplir:

- **Objetivos claros** (qué aprenderá el usuario).
- **Prerrequisitos** (qué debe saber/instalar).
- **Contenido con ejemplos** (no solo definiciones).
- **Lab o ejercicio práctico** con _resultado esperado_.
- **Checklist** de autoevaluación.
- **Recursos** (preferir fuentes oficiales).
- **Links sin romper el build** (`npm run build` debe pasar).

---

## Estructura obligatoria por secciones

### 1) Objetivos

Define 2–5 puntos concretos sobre lo que el usuario logrará.

Ejemplo:

- Entender qué es gas y por qué existe.
- Diferenciar `gas limit` vs `max fee`.
- Identificar causas comunes de transacciones fallidas.

**Buenas prácticas**

- Usa verbos de acción: _entender, identificar, desplegar, testear_.
- Evita objetivos vagos como “aprender sobre…”.

---

### 2) Prerrequisitos

Indica qué conocimientos o herramientas necesita.

Ejemplos:

- Conocer wallets (EOA) y firma de transacciones.
- Tener Node.js instalado.
- Saber lo básico de JavaScript o Solidity (si aplica).

**Si no hay prerrequisitos**, escríbelo explícitamente:

- “Ninguno.”

---

### 3) Contexto (opcional, recomendado)

Una breve sección para ubicar “por qué importa” este tema.

Ejemplo:

- ¿Qué problema resuelve?
- ¿En qué situaciones lo usarás como builder?

> Si el documento es corto, puedes integrar esto dentro del contenido principal.

---

### 4) Contenido principal

Aquí explicas el tema con claridad. Debe incluir **al menos**:

- Definiciones clave
- Ejemplos o analogías
- Errores comunes o confusiones frecuentes

**Buenas prácticas**

- Usa subtítulos `##` y `###` para que el TOC sea útil.
- Prefiere frases cortas y listas cuando haya pasos.
- Define términos nuevos al primer uso.

---

### 5) Lab / Ejercicio práctico (obligatorio)

El lab es lo que convierte el doc en aprendizaje práctico.

Debe incluir:

- **Objetivo del lab** (una línea)
- **Pasos claros** (numerados)
- **Resultado esperado** (qué debería pasar al final)
- Opcional: sección de “si algo falla, revisa…”

Ejemplo de estructura:

- Objetivo del lab: “Simular el cálculo de fees y comparar escenarios”.
- Pasos:
  1. …
  2. …
- Resultado esperado: “Poder explicar qué cambió y por qué”.

**Regla de oro**: un lab debe ser reproducible por alguien externo.

---

### 6) Checklist (obligatorio)

Lista de 4–8 ítems para que el usuario valide que entendió.

Ejemplos:

- [ ] Puedo explicar qué es gas sin confundirlo con “costo fijo”.
- [ ] Sé por qué una transacción puede revertir.
- [ ] Sé identificar en un explorer el `gas used`.

---

### 7) Recursos (obligatorio)

Incluye enlaces útiles, preferentemente:

- Documentación oficial (ethereum.org, docs oficiales de tooling)
- EIPs si aplica (enlaces oficiales)
- Repositorios reconocidos

**Evita**

- Links dudosos o de baja calidad
- Links que no verificaste
- Contenido con copyright pegado

---

### 8) Siguiente paso (recomendado)

Ayuda a la navegación y continuidad del aprendizaje.

Ejemplo:

- “Siguiente paso: Wallets”
- “Siguiente paso: Testing (Foundry / Hardhat)”

Incluye un link interno si ya existe:

- `[Siguiente: Wallets](../fundamentos/wallets)` (ajusta según tu estructura)

---

## Frontmatter mínimo recomendado

Todo doc debe tener al menos:

```md
---
title: Título del documento
sidebar_position: 1
---
```
