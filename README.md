# 🌐 Havcon Infrastructures – Civil Construction Portfolio

**Havcon Infrastructures** is a fully responsive and modern portfolio website for a civil construction company. Built with **Next.js**, **TailwindCSS**, **ShadCN UI**, and **Framer Motion**, it showcases industrial infrastructure projects, services, and client portfolios with an elegant, professional design.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 14+
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## 📄 Pages Included

### 🏗️ Public Website Pages

- `/` – Home – Hero section, services overview, featured projects, clients, testimonials
- `/about` – About Us – Company information and team details
- `/services` – Services Offered – Detailed service catalog with descriptions
- `/portfolio` – Project Showcase – Complete gallery of completed and current projects
- `/equipments` – Equipment Listing – Display of available equipment
- `/unitconvertor` – Unit Converter – Industrial unit conversion tool
- `/report/[slug]` – Project Reports – Detailed project reports and case studies
- `/contact` – Contact Form – Client inquiry and contact information
- `/terms` – Terms and Conditions
- `/privacy` – Privacy Policy


## 🧩 Features

- **Fully Responsive Design** – Optimized for mobile, tablet, and desktop devices
- **Component-Based Architecture** – Reusable UI components from ShadCN library
- **Smooth Animations** – Framer Motion scroll-triggered animations and transitions
- **Project Showcase** – Featured and full project portfolio with detailed case studies
- **Dynamic Content** – Data-driven content from structured JavaScript files
- **Client Logos Grid** – Professional client/company logo display sections
- **Service Catalog** – Comprehensive service listings with descriptions
- **Team Section** – Team member profiles and information
- **Contact Forms** – Functional contact and inquiry submission
- **Blog/Reports** – Dynamic project reports with slug-based routing
- **Unit Converter** – Industrial unit conversion tool with multiple categories
- **Modern UI/UX** – Clean, professional design tailored for construction industry
- **SEO Ready** – Sitemap generation with next-sitemap configuration

## ✅ Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/pawantech12/digitalagency-site.git
   cd digitalagency-site
   ```

2. **Install Dependencies:**

   ```bash
   pnpm install
   # or
   yarn install
   ```

3. **Run the Development Server:**

   ```bash
   pnpm run dev
   # or
   yarn dev
   ```

4. Visit: `http://localhost:3000`

## � Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.jsx           # Home page
│   ├── layout.jsx         # Root layout
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── portfolio/         # Portfolio page
│   ├── contact/           # Contact page
│   ├── equipments/        # Equipment listing
│   ├── unitconvertor/     # Unit converter tool
│   ├── report/[slug]/     # Dynamic project reports
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms and conditions
│   ├── api/               # API routes (contact, reports, etc.)
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── ui/               # ShadCN UI components
│   ├── header.jsx        # Navigation header
│   ├── footer.jsx        # Footer component
│   ├── slider.jsx        # Project slider
│   ├── projectsDialog.jsx # Project modal
│   └── ...               # Other components
├── data/                  # Static data files
│   ├── featuredProjects.js # Featured and all projects data
│   ├── services.js        # Services offerings
│   ├── client_logos.js    # Client logos and branding
│   ├── team.js            # Team member information
│   ├── equipments.js      # Equipment catalog
│   ├── unitTypes.js       # Unit converter types
│   └── convertionRate.js  # Unit conversion rates
├── lib/                   # Utility functions
│   └── utils.js
└── assets/                # Static assets
```

## 💾 Data Management

The site uses a data-driven approach with structured JavaScript files:

- **`featuredProjects.js`** – Featured projects for homepage + full project portfolio
- **`services.js`** – Service catalog with descriptions
- **`client_logos.js`** – Client company logos and styling
- **`team.js`** – Team member profiles
- **`equipments.js`** – Equipment inventory
- **`unitTypes.js`** & **`convertionRate.js`** – Unit converter data

All data is centralized and easy to maintain without a database.

## 🎨 Styling

- **Tailwind CSS** – Utility-first CSS framework for responsive design
- **Custom Components** – ShadCN UI prebuilt components with customization
- **CSS Modules** – Component-level styling for specific pages
- **Framer Motion** – Animation library for interactive elements

## 🌐 SEO & Meta

- Sitemap generation via `next-sitemap`
- Meta tags for Open Graph and Twitter
- Structured data ready for search engines

## 📌 Future Enhancements

- Backend API integration for dynamic project data
- Database connection (MongoDB/PostgreSQL) for projects and testimonials
- Email service integration for contact forms
- Admin dashboard for content management
- Blog/News section with MDX or CMS
- Multi-language support (i18n)
- Advanced search and filtering for projects
- Client testimonials carousel
- Live chat support integration

## 🔨 Build & Deployment

**Build for Production:**

```bash
pnpm run build
pnpm run start
```

**Generate Sitemap:**

```bash
pnpm run sitemap
```

**Deploy to Vercel (Recommended):**

The site is optimized for deployment on [Vercel](https://vercel.com/):

```bash
vercel
```

## 📋 Environment Variables

Create a `.env.local` file in the root directory (if needed for future API integrations):

```
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_SITE_URL=your_site_url
```

## 💡 Development Tips

- **Edit Projects:** Modify `src/data/featuredProjects.js` to add/update projects
- **Add Services:** Update `src/data/services.js` to add new service offerings
- **Add Clients:** Add logos in `public/client_logos/` and update `src/data/client_logos.js`
- **Add Team Members:** Update `src/data/team.js` with new team info
- **Update Equipments:** Modify `src/data/equipments.js` for equipment catalog
- **Use Components:** Leverage ShadCN UI components from `src/components/ui/`
- **Styling:** Use Tailwind utilities for responsive design across pages

## 🤝 Contributing

Feel free to fork the project, open issues, or submit pull requests.

## 📜 License

This project is free to use.
