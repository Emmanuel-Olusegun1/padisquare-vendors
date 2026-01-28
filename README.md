Padisquare – Multi-Vendor Mini Sites

This project is a simplified implementation of Padisquare’s multi-vendor storefront system, where each vendor can have their own mini site accessible via a unique URL.

The goal of this task was to demonstrate clean architecture, App Router proficiency, UI/UX thinking, and scalability considerations using modern Next.js practices.

🔗 Live Routes

Each vendor page is accessed using dynamic routing:

/site/[vendorSlug]


Example:

/site/fresh-basket


This simulates a multi-tenant storefront setup where each vendor has isolated content but shares the same application.

🛠️ Tech Stack

Next.js 14+ (App Router)

TypeScript

Tailwind CSS

Local mock data (JSON / in-memory objects)

📁 Project Structure & Decisions
app/
 ├─ layout.tsx
 ├─ site/
 │   └─ [vendorSlug]/
 │       └─ page.tsx
components/
 ├─ ProductBrowser.tsx
 ├─ ProductCard.tsx
 ├─ Pagination.tsx
 └─ SiteHeader.tsx
lib/
 ├─ data.ts
 ├─ paginate.ts
 └─ useDebounce.ts
public/
 ├─ brand/
 ├─ vendors/
 └─ products/

Why this structure?

App Router enforces a clear, file-based routing model.

Shared UI elements live in components/ for reuse.

Business logic (pagination, debounce, mock data) is isolated in lib/.

Static assets are colocated in public/ to reflect a real storefront setup.

🧭 Routing Strategy (Multi-Tenant Simulation)

Dynamic routing is implemented using:

app/site/[vendorSlug]/page.tsx

Why this approach?

Mirrors real-world SaaS multi-tenant architectures

Easily extendable to database-backed vendors

Supports vendor-specific SEO metadata

🧠 Data Strategy

Vendor and product data are sourced from local mock data.

Why mock data?

Keeps focus on frontend architecture and UX

Matches the task requirement (Mock API / JSON allowed)

Easily replaceable with real APIs in the future

⚙️ Server vs Client Components
Server Components

Vendor page (page.tsx)

Vendor lookup and validation

SEO metadata generation

Client Components

Product search

Sorting

Pagination

Debounced input handling

Reasoning:
Server Components are used for request-based data and rendering, while Client Components manage interactivity and state.

🔍 Search, Sorting & Pagination
Search

Implemented using a debounced input

Prevents unnecessary re-renders

Improves performance and UX

Sorting

Most recent

Price: Low → High

Price: High → Low

Pagination

Client-side pagination with a fixed page size

Pagination logic separated from UI

Pagination controls hidden when unnecessary

🚫 Empty, Loading & Error States

Empty State: Displayed when no products match the search query

Vendor Not Found: Handled via notFound() (Next.js default 404)

Pagination Edge Cases: Prevents empty pages from rendering

These states were intentionally added to reflect real-world UX expectations.

🎨 UI / UX Decisions

Dark, premium color palette aligned with Padisquare branding

Spacious layout with clear product hierarchy

Minimal UI distractions to keep focus on content

Fully responsive across screen sizes

Why Tailwind CSS?

Rapid iteration

Consistent styling system

Easy long-term maintenance

♻️ Caching & Revalidation

Vendor pages use Incremental Static Regeneration (ISR):

export const revalidate = 60;

Why?

Improves performance through caching

Ensures data freshness

Matches production-grade Next.js patterns

🌗 Dark Mode (Not Implemented)

Dark mode was considered but intentionally not implemented in the final submission.

Reasoning:

Not required for core functionality

Avoided incomplete or inconsistent UX

Priority was given to routing, architecture, and data handling

This decision was made deliberately to keep the solution focused and robust.

📈 SEO Considerations

Dynamic metadata per vendor page

Vendor name and hero image included in Open Graph metadata

Improves shareability and search engine indexing

🚀 Getting Started

Install dependencies:

npm install


Run the development server:

npm run dev


Open in your browser:

http://localhost:3000

✅ Deliverables Checklist
✅ Multi-tenant routing (/site/[vendorSlug])
✅ Product grid
✅ Search, sorting, and pagination
✅ Empty and error states
✅ SEO metadata
✅ Responsive UI
✅ Clean, scalable folder structure
✅ Documented technical decisions


<h2>Final Note</h2>
This project was built with clarity, scalability, and maintainability in mind.
The architecture allows easy extension to:

1. Real APIs
2. Authentication
3. Vendor dashboards
4. Checkout and payments