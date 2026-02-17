# Admin & Agency Portal – Frontend Application

## Overview

The Admin & Agency Portal Frontend is a secure, role-based web application designed to manage, monitor, and control the Live Streaming & Social Gaming ecosystem.

This portal serves:

- Super Admin
- Platform Admin
- Finance Admin
- Moderators
- Agency Admins
- Sellers / Distributors (Optional)

The application provides a centralized dashboard for operational control, financial management, compliance monitoring, and performance analytics.

It connects to the dedicated Portal Backend and is built with a scalable, modular frontend architecture to support enterprise-level administrative workflows.

---

## Core Objectives

- Provide full operational visibility of the platform
- Enable financial control and commission management
- Allow structured agency and host management
- Ensure regulatory compliance and moderation oversight
- Maintain audit transparency and secure access control

---

## Key Features

### 1. Role-Based Dashboard

Each role sees a customized dashboard:

- Super Admin – Full system metrics & configuration controls
- Platform Admin – Live monitoring & user management
- Finance Admin – Revenue & withdrawal management
- Agency Admin – Host tracking & commission reports
- Moderator – Content & chat monitoring

---

### 2. Analytics & Reporting

- Real-time active users count
- Live stream performance metrics
- Game table monitoring
- Revenue analytics (Daily / Weekly / Monthly)
- Gift & wallet transaction reports
- Agency earnings breakdown
- Exportable CSV / Excel reports

---

### 3. User & Host Management

- View & search users
- Suspend / Ban accounts
- Freeze wallets
- Approve host verification
- Review KYC documents
- View user activity logs

---

### 4. Agency Management

- Register & approve agencies
- Assign / remove hosts
- Track host performance
- Calculate commissions automatically
- View monthly agency payouts
- Approve withdrawal requests

---

### 5. Financial Control Panel

- Monitor wallet transactions
- Approve / reject withdrawals
- Adjust commission percentages
- Configure revenue split rules
- Track platform profit margins
- Payment reconciliation dashboard

---

### 6. Game Management Panel

- Enable / disable games
- Adjust house commission percentage
- Monitor active game tables
- View betting statistics
- Risk management dashboard
- Player dispute management

---

### 7. Content Moderation Tools

- Monitor live chat in real time
- Review reported streams
- Manage banned keywords
- Suspend inappropriate streams
- Review flagged user accounts

---

### 8. System Configuration

- Feature toggles
- Maintenance mode
- Region-based restrictions
- Level & reward configuration
- VIP & subscription management
- Announcement management

---

### 9. Security & Access Control

- Role-Based Access Control (RBAC)
- Multi-Factor Authentication (MFA)
- IP Whitelisting (Optional)
- Secure session handling
- Activity logs for admin actions
- Audit trail tracking

---

## Application Architecture

- SPA (Single Page Application)
- API-driven architecture
- Modular component-based structure
- Secure authentication with JWT
- WebSocket support for real-time updates

---

## Technology Stack

### Frontend Framework
- React.js (with TypeScript) or Next.js

### State Management
- Redux Toolkit / Zustand
- React Query (for server state)

### UI & Styling
- Tailwind CSS / Material UI / Ant Design
- Responsive layout for desktop & tablet

### Authentication
- JWT-based authentication
- Secure HTTP-only cookies (if required)

### Real-Time Monitoring
- WebSocket / Socket.io client

### Charts & Analytics
- Recharts / Chart.js / ECharts

### Build & Deployment
- Vite / Next.js build system
- Dockerized deployment
- Nginx for production serving

---

## Performance Considerations

- Lazy loading for large dashboards
- Pagination for large datasets
- Optimized API calls with caching
- Debounced search & filtering
- Role-based dynamic module loading

---

## Deployment Environments

- Development
- Staging
- Production

Environment variables are managed via `.env` files and secured using:

- Cloud environment variables
- CI/CD pipeline secrets
- Secret management services

---

## Purpose

The Admin & Agency Portal Frontend acts as the operational control center of the platform.  
It ensures:

- Transparent financial governance
- Structured agency revenue management
- Secure platform moderation
- Real-time operational visibility
- Regulatory compliance support

This application is critical for maintaining platform stability, profitability, and governance integrity.
