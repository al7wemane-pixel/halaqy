# حلاقي - Halaqy Barber Booking App

تطبيق لحجز مواعيد الحلاقة مع نظام إدارة شامل للعملاء والحلاقين

## المميزات

- 📱 تطبيق موبايل (iOS و Android) بـ React Native
- 🔐 نظام مصادقة آمن (OTP via SMS/Email)
- 👨‍💼 واجهات منفصلة للعملاء والحلاقين
- 📅 نظام حجز مواعيد ذكي
- 💳 بوابات دفع متعددة (Mada, Apple Pay, Tabby, Tamara)
- ⭐ نظام التقييمات والتقويمات
- 📍 عرض الحلاقين الأقرب جغرافياً
- 🔔 نظام الإشعارات
- 📊 لوحة تحكم للإدارة

## هيكل المشروع

```
halaqy/
├── mobile/                 # تطبيق React Native
│   ├── src/
│   ├── app.json
│   └── package.json
├── backend/                # API Node.js + Express
│   ├── src/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   └── index.js
│   ├── migrations/
│   ├── seeds/
│   ├── package.json
│   ├── .env.example
│   └── Dockerfile
├── admin/                  # لوحة التحكم React
│   ├── src/
│   └── package.json
├── docs/                   # التوثيق
├── .gitignore
└── docker-compose.yml
```

## المتطلبات

- Node.js 16+
- PostgreSQL 12+
- React Native CLI
- npm أو yarn

## البدء السريع

### 1. إعداد قاعدة البيانات (Docker)

```bash
docker-compose up -d postgres redis
```

### 2. إعداد Backend

```bash
cd backend
npm install
cp .env.example .env
npm run migrate
npm run dev
```

### 3. إعداد Mobile App

```bash
cd mobile
npm install
npm start
```

### 4. إعداد Admin Dashboard

```bash
cd admin
npm install
npm run dev
```

## قنوات الدفع المدعومة

- 💳 Mada
- 🍎 Apple Pay
- 📦 Tabby
- 📦 Tamara

## المساهمة

يرجى إنشاء فرع جديد لأي ميزة جديدة:

```bash
git checkout -b feature/اسم-الميزة
```

## الترخيص

MIT
