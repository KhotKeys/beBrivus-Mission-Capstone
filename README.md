# beBrivus System

AI-Supported Mentorship & Opportunity Management Platform

beBrivus is a centralized web-based system that connects Students, Mentors, Institutions, and Administrators within a structured and monitored environment for opportunity access, mentorship booking, AI support, and activity tracking.

The system emphasizes administrative oversight, transparency, and controlled workflows.

**Figma Design (UI Reference):**
[https://www.figma.com/design/CNoGWFBj59n4JHGY4oVd0X/beBrivus-Capstone-Figma-Design](https://www.figma.com/design/CNoGWFBj59n4JHGY4oVd0X/beBrivus-Capstone-Figma-Design)

---

# System Overview

beBrivus operates through role-based access:

## Admin

The Admin has full system control and visibility.

Admin responsibilities include:

* Creating and assigning Institution and Mentor accounts via email
* Generating temporary passwords and sending onboarding links
* Viewing all submitted opportunities
* Monitoring mentorship bookings
* Managing resources, forum, analytics, and AI system
* Viewing Recent Activity (signups, logins, bookings, link tracking)

When:

* An Institution submits an opportunity → it appears immediately on the Admin dashboard.
* A Mentor booking is made → the Admin is notified.
* A user signs up or logs in → activity appears in Recent Activity.
* A student clicks an external opportunity link → the action is tracked and recorded.

---

## Institution Portal

* Created and configured by Admin.
* Receives generated password and login link.
* Must change password on first login.
* Can submit opportunities.

Submitted opportunities:

* Are stored in the system.
* Appear on the Admin dashboard.
* Trigger email notification to Admin.

---

## Mentor Portal

* Assigned by Admin via email.
* Must change password on first login.
* Can manage booking requests and session status.

Bookings:

* Are recorded in the system.
* Appear on the Admin dashboard.
* Trigger Admin notification.

---

## Student/User Portal

Students can:

* Register and log in.
* Browse opportunities.
* Book mentorship sessions.
* Use the AI chatbot.
* Access resources.
* Participate in the forum.
* Click external links.

All key actions are recorded in Recent Activity for Admin monitoring.

---

# AI Chatbot System

The system includes an integrated AI chatbot powered by the Gemini API.

The AI system:

* Provides academic and career guidance.
* Assists with opportunity preparation.
* Maintains session-based conversation history.
* Stores all interactions securely.

Environment variable:

```
GEMINI_API_KEY=your_api_key
```

---

# Core Modules

* Role-Based Authentication
* Opportunity Management
* Applications Management
* Mentorship Booking System
* AI Chatbot System
* Forum Module
* Resource Management
* Messaging System
* Analytics & Tracking
* Email Notification Service
* Video Session Support

---

# Technology Stack

Frontend:

* React + TypeScript
* Tailwind CSS
* Vite

Backend:

* Django
* Django REST Framework

Database:

* SQLite (development) / PostgreSQL (production-ready)

AI Integration:

* Gemini API

Authentication:

* JWT-based system

---

# Project Structure

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

# Local Development

Backend:

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

---

# Summary

beBrivus is a monitored, role-based system designed to ensure:

* Centralized administrative oversight
* Transparent opportunity management
* Structured mentorship workflows
* AI-assisted academic support
* Engagement tracking through Recent Activity
* Secure and accountable system operations

The architecture emphasizes separation of roles, controlled publishing, and system-wide visibility.
