---
name: database-and-features
description: Esquema de entidades de base de datos (Postgres/Supabase) y estructura de rutas/menús del sistema.
---

# Entidades de Base de Datos y Módulos del Sistema (Features & DB Schema)

Este documento centraliza el diseño lógico de las entidades de la base de datos de Supabase y el mapa de navegación/rutas por módulos del sistema.

---

## 1. Rutas y Estructura de Módulos (Menu & Features)

La arquitectura de vistas y menús del sistema está distribuida en los siguientes módulos:

```
├── Dashboard/                          # Dashboard principal y widget cards
│
├── Admin/                              # Módulos de Administración
│   ├── Usuarios/                       # CRUD de usuarios y roles
│   ├── Eventos/                        # CRUD de eventos y lanzamientos
│   └── Sponsors/                       # CRUD de patrocinadores de la comunidad
│
├── Reportes/                           # Módulos de Reportes y Estadísticas
│   ├── Eventos/                        # Reporte de métricas de eventos
│   └── Usuarios/                       # Reporte de asistentes e inscripciones
```

---

## 2. Esquema de Entidades de Base de Datos

Todas las columnas de las tablas de Supabase se generan de forma tipada. No modificar la base de datos a mano; proponer primero una migración SQL en `supabase/migrations/` y actualizar este documento.

### 2.1. Tabla Consolidada de Base de Datos (Postgres / Supabase)

| esquema | tabla                  | columna           | tipo_dato                | permite_nulos |
| ------- | ---------------------- | ----------------- | ------------------------ | ------------- |
| public  | events                 | id                | uuid                     | NO            |
| public  | events                 | title             | character varying        | NO            |
| public  | events                 | slug              | character varying        | NO            |
| public  | events                 | event_type        | character varying        | NO            |
| public  | events                 | capacity          | integer                  | NO            |
| public  | events                 | date_start        | timestamp with time zone | NO            |
| public  | events                 | date_end          | timestamp with time zone | YES           |
| public  | events                 | is_published      | boolean                  | YES           |
| public  | events                 | created_at        | timestamp with time zone | YES           |
| public  | events                 | updated_at        | timestamp with time zone | YES           |
| public  | events                 | description       | text                     | YES           |
| public  | events                 | image_url         | text                     | YES           |
| public  | events                 | banner_url        | text                     | YES           |
| public  | events                 | location_type     | character varying        | YES           |
| public  | events                 | location_name     | text                     | YES           |
| public  | events                 | address_link      | text                     | YES           |
| public  | events                 | category          | character varying        | YES           |
| public  | events                 | extra_info        | jsonb                    | YES           |
| public  | inscripciones_sessions | id                | uuid                     | NO            |
| public  | inscripciones_sessions | usuario_id        | uuid                     | NO            |
| public  | inscripciones_sessions | session_id        | uuid                     | NO            |
| public  | inscripciones_sessions | inscrito_en       | timestamp with time zone | NO            |
| public  | inscripciones_sessions | asistio           | boolean                  | NO            |
| public  | inscripciones_sessions | checked_in_at     | timestamp with time zone | YES           |
| public  | event_coupons          | id                | uuid                     | NO            |
| public  | event_coupons          | event_id          | uuid                     | NO            |
| public  | event_coupons          | code              | character varying        | NO            |
| public  | event_coupons          | role              | character varying        | NO            |
| public  | event_coupons          | max_uses          | integer                  | NO            |
| public  | event_coupons          | created_at        | timestamp with time zone | YES           |
| public  | event_coupons          | updated_at        | timestamp with time zone | YES           |
| public  | registrations          | id                | uuid                     | NO            |
| public  | registrations          | event_id          | uuid                     | NO            |
| public  | registrations          | user_id           | uuid                     | YES           |
| public  | registrations          | ticket_type_id    | uuid                     | NO            |
| public  | registrations          | event_role        | character varying        | NO            |
| public  | registrations          | status            | character varying        | NO            |
| public  | registrations          | created_at        | timestamp with time zone | YES           |
| public  | registrations          | updated_at        | timestamp with time zone | YES           |
| public  | registrations          | custom_responses  | jsonb                    | YES           |
| public  | registrations          | payment_proof_url | text                     | YES           |
| public  | registrations          | coupon_id         | uuid                     | YES           |
| public  | scan_logs              | id                | uuid                     | NO            |
| public  | scan_logs              | registration_id   | uuid                     | NO            |
| public  | scan_logs              | scanned_by        | uuid                     | YES           |
| public  | scan_logs              | scan_type         | character varying        | NO            |
| public  | scan_logs              | scanned_at        | timestamp with time zone | YES           |
| public  | scan_logs              | created_at        | timestamp with time zone | YES           |
| public  | scan_logs              | updated_at        | timestamp with time zone | YES           |
| public  | session_registrations  | registration_id   | uuid                     | NO            |
| public  | session_registrations  | session_id        | uuid                     | NO            |
| public  | session_registrations  | registered_at     | timestamp with time zone | YES           |
| public  | sessions               | id                | uuid                     | NO            |
| public  | sessions               | event_id          | uuid                     | NO            |
| public  | sessions               | title             | character varying        | NO            |
| public  | sessions               | capacity          | integer                  | NO            |
| public  | sessions               | created_at        | timestamp with time zone | YES           |
| public  | sessions               | updated_at        | timestamp with time zone | YES           |
| public  | sponsors               | id                | uuid                     | NO            |
| public  | sponsors               | name              | text                     | YES           |
| public  | sponsors               | description       | text                     | YES           |
| public  | sponsors               | score             | text                     | YES           |
| public  | sponsors               | state             | USER-DEFINED             | NO            |
| public  | sponsors               | created_at        | timestamp with time zone | NO            |
| public  | sponsors               | updated_at        | timestamp with time zone | NO            |
| public  | staff_whitelist        | id                | uuid                     | NO            |
| public  | staff_whitelist        | email             | character varying        | NO            |
| public  | staff_whitelist        | role              | character varying        | NO            |
| public  | staff_whitelist        | created_at        | timestamp with time zone | YES           |
| public  | staff_whitelist        | updated_at        | timestamp with time zone | YES           |
| public  | ticket_types           | id                | uuid                     | NO            |
| public  | ticket_types           | event_id          | uuid                     | NO            |
| public  | ticket_types           | name              | character varying        | NO            |
| public  | ticket_types           | price             | numeric                  | NO            |
| public  | ticket_types           | ticket_capacity   | integer                  | YES           |
| public  | ticket_types           | created_at        | timestamp with time zone | YES           |
| public  | ticket_types           | updated_at        | timestamp with time zone | YES           |
| public  | ticket_types           | payment_qr_url    | text                     | YES           |
| public  | ticket_types           | description       | text                     | YES           |
| public  | ticket_types           | image_url         | text                     | YES           |
| public  | tracks                 | id                | uuid                     | NO            |
| public  | tracks                 | evento_id         | uuid                     | NO            |
| public  | tracks                 | nombre            | text                     | NO            |
| public  | tracks                 | descripcion       | text                     | YES           |
| public  | tracks                 | created_at        | timestamp with time zone | NO            |
| public  | users                  | id                | uuid                     | NO            |
| public  | users                  | email             | character varying        | NO            |
| public  | users                  | first_name        | character varying        | NO            |
| public  | users                  | last_name         | character varying        | NO            |
| public  | users                  | avatar_url        | text                     | YES           |
| public  | users                  | phone             | character varying        | YES           |
| public  | users                  | extra_info        | jsonb                    | YES           |
| public  | users                  | is_staff          | boolean                  | YES           |
| public  | users                  | created_at        | timestamp with time zone | YES           |
| public  | users                  | updated_at        | timestamp with time zone | YES           |

---

## 3. Flujo para Modificaciones de Base de Datos y Rutas

1. **Definir la columna/tabla en este documento**: Antes de usar una columna en frontend o backend, debe estar listada aquí.
2. **Crear migración SQL**: Escribir la migración en `supabase/migrations/` definiendo PKs, FKs con `on delete` explícito y habilitando RLS.
3. **Generar tipos**: Correr `supabase gen types typescript --local > src/app/core/models/database.types.ts` para sincronizar tipos con TypeScript.
4. **Actualizar el componente de navegación**: Ajustar el menú de navegación correspondiente en `src/app/` para que coincida con la ruta y los módulos definidos en este skill.
