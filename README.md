# Sistema de Reclamos - Telecomunicaciones COSPEC

Sistema enterprise para gestión de reclamos de telecomunicaciones.

## Stack Tecnológico

- **Admin Web**: Next.js 16 + Tailwind + shadcn/ui
- **App Móvil**: Expo 54 + React Native
- **API Backend**: NestJS 11 + Prisma 7
- **Base de Datos**: Neon PostgreSQL
- **Storage**: Cloudinary

## Estructura del Monorepo

```
├── apps/
│   ├── admin-web/      # Panel administrativo (Next.js)
│   └── tech-mobile/    # App técnicos (Expo)
├── services/
│   └── api/            # Backend API (NestJS)
├── packages/
│   ├── database/       # Prisma schema + client
│   ├── shared/         # Types, schemas, utils compartidos
│   └── tsconfig/       # Configuraciones TypeScript
```

## Requisitos

- Node.js 20+
- pnpm 10+

## Instalación

```bash
pnpm install
```

## Desarrollo

```bash
# Todos los servicios
pnpm dev

# Solo API
pnpm --filter api dev

# Solo Admin
pnpm --filter admin-web dev

# Solo Mobile
pnpm --filter tech-mobile dev
```

## Base de Datos

```bash
# Generar cliente Prisma
pnpm db:generate

# Aplicar migraciones
pnpm db:migrate

# Abrir Prisma Studio
pnpm db:studio
```
