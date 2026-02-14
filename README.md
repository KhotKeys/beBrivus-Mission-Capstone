# beBrivus System

**AI-Supported Mentorship & Opportunity Management Platform**

beBrivus is a centralized web-based system connecting **Students, Mentors, Institutions, and Administrators** in a structured, monitored, and transparent environment.

**Figma Design:** [View beBrivus Capstone Design](https://www.figma.com/design/CNoGWFBj59n4JHGY4oVd0X/beBrivus-Capstone-Figma-Design?node-id=4567-271&p=f&t=6nKPO0c8MaWlmShw-0)

---

## Table of Contents

* [System Architecture Overview](#system-architecture-overview)

  * [Admin (Platform Oversight)](#1-admin-platform-oversight)
  * [Institution Portal](#2-institution-portal)
  * [Mentor Portal](#3-mentor-portal)
  * [Student / Graduate Portal](#4-student--graduate-portal)
* [AI Consultation Chatbot](#ai-consultation-chatbot)
* [Core Modules](#core-modules)
* [Technology Stack](#technology-stack)
* [Local Development](#local-development)
* [Project Structure](#project-structure)
* [System Principles](#system-principles)
* [Summary](#summary)

---

## System Architecture Overview

The system operates through **role-based access control** with centralized monitoring.

### 1. Admin (Platform Oversight)

The Admin maintains **full system control and visibility**:

* Creates and assigns Institution and Mentor accounts via email
* Generates temporary passwords and sends onboarding links
* Monitors opportunity submissions
* Manages resources, forum, analytics, and AI system
* Views Recent Activity for all platform users

<details>
<summary>Notifications & Activity</summary>

* On the Admin dashboard (Recent Activity)
* Via assigned Admin email for critical actions

This ensures transparency and centralized monitoring without interfering with role-specific workflows.

</details>

---

### 2. Institution Portal

Institutions are **created and configured by the Admin**.

**Process:**

* Receives generated password and login link
* Must change password on first login
* Can submit opportunities

<details>
<summary>Opportunity Submission Workflow</summary>

When an opportunity is submitted:

* Stored and counted on the Institution dashboard
* Sent to the Student/Graduate portal
* Appears on the Admin dashboard
* Triggers a Recent Activity entry for Admin visibility
* Sends email notification to Admin

**Note:** Institutions do not publish independently without Admin oversight.

</details>

---

### 3. Mentor Portal

Mentors are assigned by the Admin via email.

**Process:**

* Receives generated password and login link
* Must change password on first login

**Mentor Booking Workflow:**

* Booking appears on the assigned Mentor’s dashboard
* Booking is recorded on the Student’s dashboard
* Admin receives a Recent Activity update (monitoring only)

This ensures Mentor–Student interaction is direct while maintaining platform-level visibility.

---

### 4. Student / Graduate Portal

Students can:

* Register and log in
* Browse opportunities
* Book mentorship sessions
* Access resources
* Participate in forum discussions
* Use the AI consultation chatbot
* Click external links

All actions are recorded in **Recent Activity** for Admin monitoring.

---

## AI Consultation Chatbot

The platform includes an **AI-powered chatbot** integrated via the **Gemini API**.

**Features:**

* Academic and career guidance consultation
* Application preparation support
* Context-aware conversation handling
* Session-based interaction storage
* Anti copy-paste restriction (consultation only)

**Environment Variable:**

```bash
GEMINI_API_KEY=your_api_key
```

---

## Core Modules

* Role-Based Authentication (JWT)
* Opportunity Management
* Mentor Booking System
* AI Consultation System (Gemini Integration)
* Resource Management
* Forum Module
* Activity Tracking (Recent Activity Engine)
* External Link Tracking
* Email Notification Service
* Analytics Monitoring

---

## Technology Stack

**Frontend:**

* React + TypeScript
* Tailwind CSS
* Vite

**Backend:**

* Django
* Django REST Framework

**Database:**

* SQLite (Development)
* PostgreSQL (Production-ready)

**AI Integration:**

* Gemini API

**Authentication:**

* JWT-based system

---

## Local Development

<details>
<summary>Backend Setup</summary>

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

</details>

<details>
<summary>Frontend Setup</summary>

```bash
cd frontend
npm install
npm run dev
```

</details>

---

## Project Structure

```
beBrivus-Mission-Capstone/
├── README.md
├── PROFILE_PAGE.md
├── IMPLEMENTATION_SUMMARY.md
├── APPLICATION_STRUCTURE_GUIDE.md
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   ├── core/                # Django configuration
│   ├── apps/
│   │   ├── accounts/        # User & role management
│   │   ├── opportunities/   # Opportunity submissions & tracking
│   │   ├── applications/    # Student applications
│   │   ├── mentors/         # Mentorship booking system
│   │   ├── ai_services/     # Gemini integration & chatbot
│   │   ├── forum/           # Community discussions
│   │   ├── gamification/    # Engagement features
│   │   ├── analytics/       # Activity monitoring
│   │   ├── resources/       # Learning materials
│   │   ├── messaging/       # Communication system
│   │   ├── tracker/         # External link & activity tracking
│   │   └── video/           # Video session support
│   ├── templates/emails/    # Email invitation templates
│   ├── media/               # Uploaded files
│   └── staticfiles/
│
├── frontend/
│   ├── src/
│   │   ├── api/             # API communication layer
│   │   ├── components/      # Reusable UI components
│   │   ├── contexts/        # Auth & notification context
│   │   ├── pages/           # Role-based dashboards
│   │   ├── services/        # Client-side services
│   │   └── utils/           # Helper utilities
│   └── public/
│
└── .gitignore
```

---

## System Principles

* Centralized administrative oversight
* Role separation with controlled workflows
* Transparent activity tracking
* Structured opportunity and mentorship management
* Responsible AI consultation usage
* Secure and accountable platform operations

---

## Summary

beBrivus enables:

* Monitored opportunity publishing
* Direct Mentor–Student booking interactions
* Administrative visibility via Recent Activity
* AI-assisted consultation support
* Secure, traceable platform engagement

The architecture ensures **visibility, control, and responsible system usage** while supporting independent operations for each role.

Do you want me to do that next?
