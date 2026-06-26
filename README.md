# Raphael Frei - Personal Portfolio

A personal portfolio created with .NET Blazor.

🔗 **Live Version:** [raphaelfrei.com.br](https://www.raphaelfrei.com.br)

## 🏗 Architecture & Features

This project was built to demonstrate clean architecture principles on the front end, avoiding heavy CSS frameworks in favor of semantic HTML and custom CSS isolation.

* **Blazor SSR:** Fully client-side rendering for fast navigation and CDN caching.
* **Terminal UI Design:** Custom CSS implementation of a developer-focused, dark mode terminal aesthetic.
* **Repository Pattern:** Content (Experience, Education, Projects, Certifications) is abstracted into models and injected via interfaces (`IProjectRepository`, etc.).
* **Internationalization (i18n):** Multi-language support (English, Portuguese, Spanish) implemented via `.resx` files.
* **SEO & Meta Tags:** Dynamic Open Graph and Twitter Card rendering for accurate social sharing previews.

## 💻 Tech Stack

* **Framework:** .NET / Blazor
* **Language:** C#
* **Hosting:** Custom VPS

## 📂 Project Structure Highlights
````
/Models: Core data structures (Project, Experience, Certification).
/Repositories: In-memory data repositories implementing interfaces.
/Components: Reusable UI components (e.g., ExperienceItemCard, ProjectCard).
/Helpers: Utility classes for localized date and period formatting (DateDisplay).
/Resources: Localization dictionaries (.resx).
````
