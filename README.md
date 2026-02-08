# beBrivus FullStack Track

This README documents the end-to-end design and development workflow for the beBrivus platform, from Figma UI design to frontend and backend implementation, database schema, and deployment.

Figma design: https://www.figma.com/design/CNoGWFBj59n4JHGY4oVd0X/beBrivus-Capstone-Figma-Design?node-id=4567-271&p=f&t=6nKPO0c8MaWlmShw-0

## FullStack Track

### Frontend Development

#### User Interface Design

Design process and artifacts (see Figma link):

1. Discovery and requirements
   - Define user roles (student, mentor, admin) and key flows (onboarding, mentorship, opportunities, AI coaching).
   - Map primary journeys and data needs against backend capabilities.

2. Wireframes and layout planning
   - Low-fidelity screens for dashboards, list views, and detail panels.
   - Interaction annotations for tabs, modals, and inline status chips.

3. Visual system and style guide
   - Color tokens for status states (success, warning, error, primary, secondary).
   - Typography scale with clear hierarchy for stats, sections, and secondary metadata.
   - Iconography using Lucide for consistent UI semantics.

4. Mockups and responsive variants
   - High-fidelity mockups aligned to mobile and desktop breakpoints.
   - Component variants documented for cards, buttons, tabs, and empty states.

5. Design handoff to development
   - Figma frames organized by feature area for traceability.
   - Design tokens mapped to Tailwind utility classes.

#### HTML/CSS/JavaScript (React/TypeScript) code snippets

Routing and guarded navigation are managed in the app shell, keeping public vs. protected pages consistent.

```tsx
// frontend/src/App.tsx
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};
```

Mentor dashboard UI shows responsive cards, status color mapping, and session actions. This demonstrates layout composition, visual hierarchy, and state handling.

```tsx
// frontend/src/pages/MentorDashboard.tsx
const getStatusColor = (status: string) => {
  switch (status) {
    case "requested":
      return "bg-warning-100 text-warning-800 border-warning-200";
    case "scheduled":
      return "bg-primary-100 text-primary-800 border-primary-200";
    case "in_progress":
      return "bg-success-100 text-success-800 border-success-200";
    case "completed":
      return "bg-success-100 text-success-800 border-success-200";
    case "cancelled":
      return "bg-error-100 text-error-800 border-error-200";
    case "rejected":
      return "bg-error-100 text-error-800 border-error-200";
    default:
      return "bg-neutral-100 text-neutral-800 border-neutral-200";
  }
};

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
  <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 text-white">
    <p className="text-primary-100">Total Mentees</p>
    <p className="text-3xl font-bold">{totalMentees}</p>
  </div>
</div>
```

### Backend Development

#### Server-side code

Opportunity application logic demonstrates validation and server-side creation, including deduplication of applications.

```python
# backend/apps/opportunities/views.py
@action(detail=True, methods=['post'])
def apply(self, request, pk=None):
    """Apply to an opportunity"""
    opportunity = self.get_object()

    if Application.objects.filter(user=request.user, opportunity=opportunity).exists():
        return Response(
            {'error': 'You have already applied to this opportunity'},
            status=status.HTTP_400_BAD_REQUEST
        )

    application = Application.objects.create(
        user=request.user,
        opportunity=opportunity,
        status='submitted',
        submitted_at=timezone.now()
    )

    return Response(ApplicationSerializer(application).data, status=status.HTTP_201_CREATED)
```

AI services show how prompts are built from session context and then persisted with timing metadata.

```python
# backend/apps/ai_services/views.py
@action(detail=True, methods=['post'])
def send_message(self, request, pk=None):
    session = self.get_object()
    user_message = request.data.get('message', '')

    if not user_message:
        return Response({'error': 'Message content is required'}, status=status.HTTP_400_BAD_REQUEST)

    user_msg = ChatMessage.objects.create(
        session=session,
        is_user=True,
        content=user_message
    )

    context = self._build_chat_context(session)
    prompt = f"{context}\n\nUser: {user_message}\n\nAI Assistant:"
    ai_response = gemini_service.generate_content(prompt)

    ai_msg = ChatMessage.objects.create(
        session=session,
        is_user=False,
        content=ai_response,
        model_version='gemini-2.5-flash'
    )

    return Response({
        'user_message': ChatMessageSerializer(user_msg).data,
        'ai_response': ChatMessageSerializer(ai_msg).data
    })
```

#### Database schema and data model

Below is a concise schema overview based on the Django models in the backend. Field lists are representative, focusing on the primary columns and relationships.

Users

| Table | Key Fields | Notes |
| --- | --- | --- |
| users | id, email, user_type, first_name, last_name, profile_picture, created_at | Custom user model with email as username |
| user_skills | id, user_id, name, level, verified | One-to-many skills per user |
| user_education | id, user_id, institution, degree, field_of_study | Education history |
| user_experience | id, user_id, company, position, start_date, end_date | Work experience |

Opportunities

| Table | Key Fields | Notes |
| --- | --- | --- |
| opportunity_categories | id, name, description, color, active | Category catalog |
| opportunities | id, title, description, organization, location, status, application_deadline | Core listing model |
| saved_opportunities | id, user_id, opportunity_id, created_at | Saved jobs per user |
| opportunity_recommendations | id, user_id, opportunity_id, score, reasons | AI recommendations |

Applications

| Table | Key Fields | Notes |
| --- | --- | --- |
| applications | id, user_id, opportunity_id, status, submitted_at | One application per user per opportunity |
| application_documents | id, application_id, document_type, file | Uploaded documents |
| interview_schedules | id, application_id, interview_type, scheduled_date | Interview scheduling |

#### API surface (high level)

The backend exposes RESTful endpoints configured under [backend/core/urls.py](backend/core/urls.py#L1-L31), grouped by feature area:

- Authentication: `/api/auth/`
- Opportunities: `/api/opportunities/`
- Applications: `/api/applications/`
- AI services: `/api/ai/`
- Forum: `/api/forum/`
- Resources: `/api/resources/`
- Gamification: `/api/gamification/`
- Mentors: `/api/mentors/`

### Development Process

1. Design to development
   - Start with Figma wireframes and mockups.
   - Translate design tokens into Tailwind CSS utility classes.
   - Build reusable components and page layouts in React.
   - Connect pages to API endpoints using TanStack Query.

2. Backend iteration
   - Define models and serializers.
   - Implement ViewSets and custom actions for edge cases.
   - Document endpoints and align frontend fetch logic to DTOs.

3. Validation and QA
   - Run backend tests in `backend/`.
   - Use frontend linting and TypeScript checks in `frontend/`.
   - Validate flows against the Figma checklist for visual parity.

### Deployment

Local development

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

```bash
cd frontend
npm install
npm run dev
```

Production outline (example)

1. Build frontend
   - `npm run build` to produce static assets under `frontend/dist`.

2. Configure backend
   - Set `DEBUG=False` and configure `ALLOWED_HOSTS`.
   - Provide database credentials and API keys via environment variables.

3. Serve backend
   - Run Django with a WSGI server (for example, Gunicorn).
   - Serve static and media files via a reverse proxy (for example, Nginx).

4. Database
   - Run `python manage.py migrate` and set up backups.

5. CI/CD (optional)
   - Add a pipeline to run tests and deploy on merge.

### Repository setup and initial push

```bash
git init
git add README.md
git commit -m "Initial UI design for the software product/solution demonstration"
git branch -M master
git remote add origin https://github.com/KhotKeys/beBrivus-Mission-Capstone.git
git push -u origin master
```
