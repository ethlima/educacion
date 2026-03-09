---
title: Cómo aportar
sidebar_position: 2
---

# Cómo aportar

Esta guía te explica el proceso completo para subir contenido o mejoras al repositorio.

## Requisitos

- Cuenta en **GitHub**
- Conocimientos básicos de edición Markdown (puedes aprenderlo rápido)
- Si harás cambios grandes: tener Node instalado para correr el build

---

## Tipos de contribución

### 1) Cambios pequeños (rápidos)

Ideal para:

- typos
- mejorar claridad
- arreglar links
- mejorar un ejemplo corto

**Recomendado:** editar desde GitHub (sin instalar nada).

1. Abre el archivo en GitHub
2. Haz clic en **Edit** (ícono del lápiz)
3. Realiza el cambio
4. Crea un Pull Request

> El equipo revisa y te pide ajustes si hicieran falta.

---

### 2) Cambios medianos o grandes (contenido nuevo / labs)

Ideal para:

- nuevos documentos
- labs completos
- reestructuras

#### Paso 1: Proponer (recomendado)

Antes de escribir mucho, crea un Issue o comenta qué harás:

- objetivo del contenido
- dónde irá (Formación / Contribuir)
- alcance (1 doc o varios)
- referencias (si aplica)

#### Paso 2: Fork + rama

1. Haz Fork del repositorio
2. Clona tu fork en local
3. Crea una rama:
   - `feat/<tema>`
   - `fix/<tema>`

#### Paso 3: Escribir siguiendo estándares

Antes de abrir PR:

- usa la **[Estructura mínima](./estructura-minima)**
- sigue el **[Estilo de redacción](./estilo-redaccion)**

#### Paso 4: Validar build (muy importante)

En tu máquina:

```bash
npm install
npm run build
```
