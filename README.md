# 🥘 RecipeBox

A full-stack recipe ordering web application built with **Next.js 14 (App Router)** for the frontend and **Django + Django REST Framework** for the backend.

---

## ✨ Features

- User authentication (JWT)
- Browse curated recipes
- View recipe details
- Place orders for recipes
- View order history
- Fully responsive and modern UI
- Deployed with Vercel (frontend) and Render/Railway (backend)

---

## 📸 Preview

---

## 🛠️ Tech Stack

### Frontend
- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- JWT Auth via localStorage
- Axios / Fetch for API requests

### Backend
- [Django 4.x](https://www.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- Simple JWT for authentication
- SQLite / PostgreSQL (easily swappable)

---

## 🗃️ File Structure (Simplified)

```
root/
├── backend/              # Django project
│   ├── recipes/          # Models, serializers, views
│   ├── users/            # Auth (optional)
│   └── backend/          # Settings, URLs
│
├── frontend/             # Next.js app
│   ├── app/              # App router structure
│   ├── components/       # UI components
│   └── lib/              # API/auth utils
```

---

## ⚙️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/recipebox.git
cd recipebox
```

### 2. Backend Setup (`/backend`)

```bash
cd backend
python -m venv env
source env/bin/activate  # or env\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Create a `.env` file and add:

```ini
SECRET_KEY=your_django_secret
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
```

### 3. Frontend Setup (`/frontend`)

```bash
cd frontend
npm install
npm run dev
```

Create `.env.local`:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

---

## 🔐 Authentication

* Register: `POST /api/register/`
* Login: `POST /api/token/`
* Access token is stored in `localStorage` and used for authenticated requests.

---

## 📦 Deployment

* **Frontend**: [Vercel](https://vercel.com)
* **Backend**: [Render](https://render.com) or [Railway](https://railway.app)

---

## 📌 TODO (Optional Features)

* Add pagination
* Add ratings or reviews
* Search/filter recipes
* Admin dashboard (Django Admin)

---

## 📄 License

MIT License © 2025 [Your Name]
