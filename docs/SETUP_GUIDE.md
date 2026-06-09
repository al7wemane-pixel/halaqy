# Setup Guide - حلاقي

## Prerequisites

- Node.js 16+
- PostgreSQL 12+
- Git
- npm or yarn

## Step 1: Clone Repository

```bash
git clone https://github.com/al7wemane-pixel/halaqy.git
cd halaqy
```

## Step 2: Setup Database

### Using Docker

```bash
docker-compose up -d postgres redis
```

### Manual Setup

```bash
psql -U postgres
CREATE DATABASE halaqy;
CREATE USER halaqy WITH PASSWORD 'halaqy123';
ALTER ROLE halaqy SET client_encoding TO 'utf8';
ALTER ROLE halaqy SET default_transaction_isolation TO 'read committed';
ALTER ROLE halaqy SET default_transaction_deferrable TO on;
GRANT ALL PRIVILEGES ON DATABASE halaqy TO halaqy;
```

## Step 3: Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run migrate
npm run seed
npm run dev
```

## Step 4: Mobile Setup

```bash
cd mobile
npm install

# For iOS
npm run ios

# For Android
npm run android
```

## Step 5: Admin Dashboard Setup

```bash
cd admin
npm install
npm run dev
```

## Configuration

Make sure to configure:
- Email service (Gmail/SendGrid)
- SMS service (Twilio)
- Payment gateways (Stripe, Mada, etc.)
- Google Maps API
- AWS S3 (for image uploads)
