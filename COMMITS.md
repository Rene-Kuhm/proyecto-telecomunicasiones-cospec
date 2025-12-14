# Enterprise Commits Guide

Sistema de commits semanticos para documentar mientras codeas.

---

## Quick Reference

### Formato Basico

```
<type>(<scope>): <subject>
```

### Formato Completo (Recomendado)

```
<type>(<scope>): <subject>

Por que:
- [Contexto del problema / Motivacion / Metrica]

Que:
- [Cambio 1]
- [Cambio 2]

Impacto:
- [Efecto esperado en negocio/proyecto]

Refs: #issue
```

---

## Types Validos

| Type       | Descripcion                          | Ejemplo                              |
|------------|--------------------------------------|--------------------------------------|
| `feat`     | Nueva funcionalidad                  | `feat(cart): add guest checkout`     |
| `fix`      | Bug fix                              | `fix(auth): resolve token expiration`|
| `docs`     | Documentacion                        | `docs(readme): update install steps` |
| `style`    | Formato (Biome, no afecta logica)    | `style(ui): format with biome`       |
| `refactor` | Refactoring (no cambia funcionalidad)| `refactor(api): extract service`     |
| `perf`     | Performance improvement              | `perf(db): add index to queries`     |
| `test`     | Tests                                | `test(cart): add unit tests`         |
| `build`    | Build system (deps, webpack, etc)    | `build(deps): upgrade next to 15`    |
| `ci`       | CI/CD changes                        | `ci(github): add deploy workflow`    |
| `chore`    | Mantenimiento                        | `chore(deps): update lockfile`       |
| `revert`   | Revert commit anterior               | `revert: feat(cart): add checkout`   |

---

## Scopes Comunes

- `auth` - Autenticacion
- `cart` - Carrito de compras
- `products` - Productos
- `api` - Backend/API
- `ui` - Interfaz de usuario
- `db` - Base de datos
- `payments` - Pagos
- `users` - Usuarios
- `config` - Configuracion
- `deps` - Dependencias

---

## Reglas del Subject

1. **Imperativo, presente**: "add" no "added" ni "adds"
2. **Minusculas** (lower-case)
3. **Sin punto final**
4. **Maximo 72 caracteres**
5. **Minimo 10 caracteres**

### Ejemplos Buenos vs Malos

```bash
# Bueno
feat(cart): add guest checkout flow
fix(auth): resolve JWT token expiration
perf(api): optimize product queries

# Malo
feat(cart): Added guest checkout.     # Pasado, punto final
fix: fix bug                          # Muy generico
UPDATE AUTH                           # Mayusculas, sin type
```

---

## Ejemplos Completos

### Feature

```
feat(cart): add guest checkout flow

Por que:
- 40% usuarios abandonan en login screen
- Alta friccion en proceso de compra

Que:
- Checkout sin cuenta obligatoria
- Opcion de crear cuenta despues
- Guardar email para orden

Impacto:
- Incremento proyectado: +15% conversiones
- Reduccion abandono de carrito

Closes #234
```

### Bug Fix

```
fix(auth): resolve JWT token expiration

Por que:
- Usuarios reportan logout aleatorio
- Token expira sin refresh

Que:
- Refresh token rotation
- TTL extendido: 15m -> 30m
- Auto-refresh en interceptor

Impacto:
- Mejor UX, sesiones estables
- Reduccion quejas: -90%

Fixes #456
```

### Performance

```
perf(api): optimize product queries

Por que:
- Pagina tarda >3s en cargar
- N+1 queries detectadas

Que:
- Eager loading de categorias
- Redis cache (TTL: 1h)
- Indice en category_id

Impacto:
- Tiempo: 3s -> 400ms (-87%)
- Queries: 100+ -> 3

Metricas:
- Before P95: 3200ms
- After P95: 450ms
```

### Breaking Change

```
feat(api)!: migrate to Next.js 15

BREAKING CHANGE: Updated to Next.js 15 and React 19.
All components must be migrated to new patterns.

Por que:
- Next.js 14 EOL en 6 meses
- Nuevas features de React 19

Que:
- Upgrade Next.js 14 -> 15
- Upgrade React 18 -> 19
- Migrate to new async patterns

Impacto:
- Mejor performance
- Acceso a nuevas APIs
```

---

## Comandos Utiles

```bash
# Commit con template interactivo
git commit

# Commit rapido (una linea)
git commit -m "feat(scope): description"

# Ver template
cat ~/.gitmessage

# Test commitlint manual
echo "feat(test): this is a test commit" | pnpm commitlint

# Ver configuracion
cat commitlint.config.js

# Ver hooks instalados
ls -la .husky/
```

---

## Workflow Recomendado

### 1. Antes de Codear
- Identifica el problema/feature
- Piensa en el "Por que"

### 2. Mientras Codeas
- Haz commits atomicos (un cambio logico por commit)
- Documenta el contexto fresco

### 3. Al Hacer Commit
- Usa el template: `git commit`
- Completa Por que/Que/Impacto
- Referencia issues si aplica

### 4. Despues del Commit
- El hook valida automaticamente
- Si falla, corrige y reintenta

---

## Hooks Instalados

### commit-msg
Valida que el mensaje siga Conventional Commits.

### pre-commit
1. Biome format + lint (si disponible)
2. TypeScript check (si tsconfig existe)
3. Lint-staged (archivos modificados)

---

## Bypass (Solo Emergencias)

```bash
# Bypass hooks (NO recomendado)
git commit --no-verify -m "emergency fix"
```

**Usalo solo en emergencias reales.**

---

## Beneficios

- **Document as you code** - No dejas para despues
- **Contexto fresco** - Documentas mientras recuerdas
- **Trazabilidad** - Sabes POR QUE se hizo cada cambio
- **Onboarding** - Nuevos devs leen historial significativo
- **Changelog automatico** - Semantic Release compatible
- **Disciplina** - Enterprise-grade commits

---

## Recursos

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Commitlint](https://commitlint.js.org/)
- [Husky](https://typicode.github.io/husky/)
- [Semantic Versioning](https://semver.org/)

---

> "El historial de Git no es solo un log, es tu documentacion"

**Cada commit debe contar una historia: contexto, solucion, impacto.**
