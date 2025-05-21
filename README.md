# 🚗 Car Explorer – Next.js + Tailwind CSS

A modern car listing application built with **Next.js**, **Tailwind CSS**, and deployed on **Vercel**. Users can browse, search, and filter cars, and view detailed pages for each vehicle.

[![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=flat&logo=vercel)](https://suzuki-assesment-8hve.vercel.app/)

---

## ✨ Features

- 🔍 Search and filter cars by make, model, and year
- 🖼️ Image loading with fallback support
- 📱 Responsive design using Tailwind CSS
- 📄 Detailed car information pages
- 📦 Pagination for optimized listing
- 🔒 API URL hidden using server-side proxy via Next.js API routes

---

## 🔧 Tech Stack

- [Next.js](https://nextjs.org/) – React framework with server-side rendering
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) – Type-safe JavaScript
- [Vercel](https://vercel.com/) – Hosting & CI/CD
- [Lottie](https://lottiefiles.com/) – Animation for loaders

---

## 🚀 Live Demo

🌐 **[View Live]([https://suzuki-assesment-8hve.vercel.app/])**

---

## 📦 Installation & Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/car-explorer.git
cd car-explorer
```

## 2. Install Dependencies
```bash
npm install
```

## 3. Run the Development Server
```
npm run dev

```

## 🛠️ Folder Structure
```
/src
  /components     → UI components (CarCard, Pagination, Carousel)
  /interface      → TypeScript interfaces
  /utils          → API helper functions
/pages
  /api/cars       → Next.js API routes to hide external URLs
  /cars/[id].tsx  → Car details page
  index.tsx       → Home page


```

## ✍️ Design Decisions
    ✅ Server-Side Proxy for API
    Instead of calling the third-party API directly from the browser, we use Next.js API routes to proxy requests.
    
    This hides the actual API URL and allows for better security and control over data handling.
    
    ✅ Tailwind CSS for Fast UI Development
    Tailwind enables rapid prototyping with utility-first classes.
    
    Easily customizable and responsive out of the box.
    
    ✅ TypeScript for Type Safety
    Improves developer experience and reduces runtime bugs.

## 🧱 Challenges & Solutions
    📌 Challenge: Image Handling from Dynamic Sources
    Some image URLs were invalid or slow to load.
    
    Solution: Added imgError fallback logic and loading states using useState and onError.
    
    📌 Challenge: API URL Exposure
    API was publicly visible in the frontend code.
    
    Solution: Used environment variables and Next.js API routes to securely proxy the data.
    
    📌 Challenge: Filtering Logic & Pagination
    Filtering while paginating required careful state syncing.
    
    Solution: Applied controlled state with useEffect dependencies and reset the page index on filter changes.

## 💫 Future Improvements
    Add sorting (price, year, mileage)
    
    Add user authentication for saved listings
    
    Use a real backend (e.g. Firebase, Supabase) with CRUD support
    
    Improved animations using Framer Motion


