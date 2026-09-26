# Feature Specification: Nails, Lashes & Brows Beauty Salon Web Application

**Feature Branch**: `001-nails-lashes-brows-salon`  
**Created**: 2026-09-26  
**Status**: Approved & Specified  

---

## Executive Summary
A dual-language (Thai/English) web application for **Pearl & Glow Beauty Studio**, specializing in Premium Nails, Lash Extensions, and Eyebrow Artistry. Operating hours are strictly 08:00 AM – 08:00 PM (08:00 - 20:00).

## Core Requirements & Specifications

### 1. Internationalization (TH / EN)
- Instant client-side language switching without page reloads.
- Full translations for all navigation, services, specialist names, booking form, status badges, operating hours, and receipt notifications.

### 2. Operating Hours & Real-Time Status Indicator
- Hours: 08:00 AM to 08:00 PM daily.
- Real-time "Open Now" / "Closed" header pill based on client local time (8:00 to 20:00).
- Booking time slots dynamically restricted to 08:00 - 19:00 (last booking slot at 19:00, closing at 20:00).

### 3. Core Services Focus
- **Nails Artistry**: Japanese Gel Polish, Acrylic/Gel Extensions, Nail Art Customization, Luxury Spa Pedicure & Manicure.
- **Eyelash Extensions**: Classic 1-on-1, Volume 3D-6D Hybrid, Keratin Lash Lift & Tint.
- **Eyebrow Micro-Art**: 6D Microblading, Powder Ombre Brows, Brow Lamination & Henna.

### 4. Interactive 4-Step Booking Wizard
1. **Service Selection**: Choose multiple or single services with price and duration breakdown.
2. **Specialist Selection**: Choose preferred artist (Master Lash Stylist, Senior Nail Artist, Brow Architect) or "Any Available Artist".
3. **Date & Time Slot Picker**: Select date and available hour (08:00, 09:00, 10:00 ... 19:00).
4. **Client Information & Summary**: Enter Name, Phone, Email, Notes, view deposit estimate (30%), and generate digital booking confirmation ticket with QR Code.

### 5. Design Theme & Aesthetics
- **Style**: Clean Pearl & Modern White with subtle iridescent pearl highlights, soft rose accents, metallic gold touches, crisp modern typography (Plus Jakarta Sans & Kanit), rounded cards, glassmorphism header, micro-animations.

### 6. Admin Booking Portal Preview
- Toggleable admin view allowing salon staff to manage, filter, approve, and view incoming appointments.
