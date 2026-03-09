# 🎓 Ethereum Lima Academy — Educación Open Source

Plataforma educativa descentralizada y colaborativa para el ecosistema Ethereum en Latinoamérica. Construida con **Docusaurus 3**, **Tailwind CSS**, y una arquitectura de calidad industrial.

## 🏛️ Arquitectura de Alto Nivel

- **Modelo**: Jamstack (sitio estático generado en build)
- **Framework**: Docusaurus 3 + React + Tailwind CSS
- **Calidad**: TypeScript, ESLint, Prettier, Vitest (Unit), Playwright (E2E)
- **Flujo CI/CD**: PR (GitHub) → CI (Lint/Test/Build) → Preview → Merge → Deploy CDN

## 📂 Estructura del Proyecto

```text
├─ docs/                # Contenido central (rutas, cursos, recursos)
├─ blog/                # Artículos y actualizaciones
├─ src/
│  ├─ components/       # UI Reusable (shadcn inspired)
│  ├─ theme/           # Swizzled Docusaurus components
│  ├─ lib/             # Lógica de dominio y validación (Zod)
│  └─ styles/          # Tailwind tokens y capas
├─ tests/               # E2E (Playwright)
└─ docusaurus.config.ts # Config global
```

## 🛠️ Comandos Disponibles

### Desarrollo

- `npm run start`: Inicia el servidor de desarrollo en `http://localhost:3000`.
- `npm run clear`: Limpia la caché de Docusaurus.

### Calidad y Testing

- `npm run typecheck`: Verifica tipos de TypeScript.
- `npm run lint`: Ejecuta el linter (ESLint).
- `npm run format`: Formatea el código con Prettier.
- `npm run test:unit`: Ejecuta tests unitarios con Vitest.
- `npm run test:e2e`: Ejecuta tests E2E con Playwright.

### Build y Producción

- `npm run build`: Genera el sitio estático para producción.
- `npm run serve`: Previsualiza el build localmente.

## 🤝 Cómo Contribuir

1. Revisa la [Guía de Contribución](docs/recursos/como-aportar.md).
2. Usa la plantilla de lección en `docs/template-leccion.md`.
3. Asegúrate de que el CI pase en tu Pull Request.

---

© ${new Date().getFullYear()} Ethereum Lima. Contenido CC BY 4.0 · Código MIT.
