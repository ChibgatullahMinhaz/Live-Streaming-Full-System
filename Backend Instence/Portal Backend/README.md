# Portal Backend (Admin / Agency / Seller)

## Overview

The Portal Backend manages the administrative, financial, and operational control systems of the Live Streaming & Social Gaming platform.

This backend powers:

- Super Admin Panel
- Platform Admin Dashboard
- Agency Management Portal
- Seller / Distributor Portal (if applicable)

It is designed for high-level control, reporting, configuration, and compliance management across the entire ecosystem.

This backend operates independently from the User App Backend to ensure security, scalability, and strict access separation.

---

## Core Responsibilities

### 1. Super Admin Management

- Global Platform Configuration
- Commission Settings
- Revenue Split Rules
- Game Odds Configuration
- Feature Toggle Management
- Region & Compliance Controls
- Full User Control (Ban / Freeze / Restrict)

---

### 2. Platform Admin Dashboard

- Live Stream Monitoring
- Active Game Table Monitoring
- Reported Content Review
- Wallet Transaction Oversight
- Withdrawal Approval System
- Analytics Dashboard
- Fraud Monitoring

---

### 3. Agency Management System

- Agency Registration & Approval
- Host Assignment & Removal
- Performance Tracking
- Revenue Calculation
- Commission Distribution
- Monthly Salary Reports
- Withdrawal Processing

---

### 4. Seller / Distributor Portal (Optional Model)

- Bulk Coin Distribution
- Sub-agent Creation
- Commission Tracking
- Revenue Ledger
- Transaction Audit Logs

---

### 5. Financial & Reporting System

- Revenue Analytics
- Gift Revenue Reports
- Game Revenue Reports
- Agency Earnings Reports
- Tax & Compliance Reports
- Exportable Financial Statements

---

### 6. Moderation & Compliance

- Content Moderation Tools
- User Suspension Controls
- Chat Monitoring
- AML Monitoring (if real money gaming)
- KYC Verification Dashboard
- Audit Logging

---

### 7. Game Management Controls

- Game Enable/Disable
- House Commission Configuration
- Risk Management Settings
- Player Limit Configuration
- Real-time Game Monitoring

---

### 8. Audit & Logging System

- Admin Action Logs
- Financial Activity Logs
- Role-based Access Tracking
- System Change History
- Security Alerts

---

## Access Control Model

Role-based system:

- Super Admin (Full Control)
- Platform Admin (Operational Control)
- Finance Admin (Wallet & Withdrawals)
- Moderator (Content Review)
- Agency Admin (Agency-level control)
- Seller / Distributor (Limited financial control)

---

## Architecture Highlights

- Separate authentication domain from user backend
- Strict role-based access control
- Encrypted financial operations
- Read-heavy optimized analytics layer
- Audit-safe transaction processing

---

## Security Measures

- Multi-Factor Authentication (MFA) for Admins
- IP Whitelisting (Optional)
- Action Logging for Compliance
- Sensitive Operation Approval Workflow
- Encrypted Financial Data
- Session Expiry Enforcement

---

## Purpose

The Portal Backend ensures:

- Financial transparency
- Controlled platform governance
- Secure commission distribution
- Regulatory compliance
- Operational monitoring
- Risk management

It acts as the administrative brain of the platform while the User Backend handles real-time engagement.

---
