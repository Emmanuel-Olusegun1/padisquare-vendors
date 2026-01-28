<h1>Padisquare – Multi-Vendor Mini Sites</h1>

This project is a simplified implementation of Padisquare’s multi-vendor storefront system, where each vendor can have their own mini site accessible via a unique URL.
<br>
The goal of this task was to demonstrate clean architecture, App Router proficiency, UI/UX thinking, and scalability considerations using modern Next.js practices.

<h2> Live Routes </h2>
Each vendor page is accessed using dynamic routing:<br>

/site/[vendorSlug]<br>

Example:<br>
<i>/site/orizon-mart</i>

This simulates a multi-tenant storefront setup where each vendor has isolated content but shares the same application.

<h2>Tech Stack</h2>
• Next.js 14+ (App Router)<br>
• TypeScript<br>
• Tailwind CSS<br>
• Local mock data (JSON / in-memory objects)

<h2>Project Structure & Decisions</h2>
app/<br>
 ├─ layout.tsx<br>
 ├─ site/<br>
 │   └─ [vendorSlug]/<br>
 │       └─ page.tsx<br>
components/<br>
 ├─ ProductBrowser.tsx<br>
 ├─ ProductCard.tsx<br>
 ├─ Pagination.tsx<br>
 └─ VendorHero.tsx<br>
lib/<br>
 ├─ data.ts<br>
 └─ useDebounce.ts<br>
public/<br>
 ├─ brand/<br>
 ├─ vendors/<br>
 └─ products/<br>

<h2>Why this structure?</h2>
• App Router enforces a clear, file-based routing model.<br>
• Shared UI elements live in components/ for reuse.<br>
• Business logic (debounce, mock data) is isolated in lib/.<br>
• Static assets are colocated in public/ to reflect a real storefront setup.

<h2>Routing Strategy (Multi-Tenant Simulation)</h2>
<b>Dynamic routing is implemented using:</b>
<i>app/site/[vendorSlug]/page.tsx</i>

<h2>Why this approach?</h3>
• Mirrors real-world SaaS multi-tenant architectures
• Easily extendable to database-backed vendors
• Supports vendor-specific SEO metadata

<h2>Data Strategy</h2>
Vendor and product data are sourced from local mock data.

<h3>Why mock data?</h3>
• Keeps focus on frontend architecture and UX
• Matches the task requirement (Mock API / JSON allowed)
• Easily replaceable with real APIs in the future

<h2>Server vs Client Components</h2>

<h3>Server Components</h3>
• Vendor page (page.tsx)
• Vendor lookup and validation
• SEO metadata generation

<h3>Client Components</h3>
• Product search
• Sorting
• Pagination
• Debounced input handling

<b> Reasoning: </b>
Server Components are used for request-based data and rendering, while Client Components manage interactivity and state.

<h2>Search, Sorting & Pagination</h2>

<h3>Search</h3>
• Implemented using a debounced input
• Prevents unnecessary re-renders
• Improves performance and UX

<h3>Sorting</h3>
• Most recent
• Price: Low → High
• Price: High → Low

<h3>Pagination</h3>
• Client-side pagination with a fixed page size
• Pagination logic separated from UI
• Pagination controls hidden when unnecessary

<h2> Empty, Loading & Error States</h2>
• <b>Empty State:</b> Displayed when no products match the search query

• <b>Vendor Not Found:</b> Handled via notFound() (Next.js default 404)

• <b>Pagination Edge Cases:</b> Prevents empty pages from rendering

These states were intentionally added to reflect real-world UX expectations.

<h2> UI / UX Decisions</h2>
• Dark, premium color palette aligned with Padisquare branding (Checked through the official waitlist site)
• Spacious layout with clear product hierarchy
• Minimal UI distractions to keep focus on content
• Fully responsive across screen sizes

<h3>Why Tailwind CSS?</h3>
• Rapid iteration
• Consistent styling system
• Easy long-term maintenance

<h2>Caching & Revalidation</h2>

Vendor pages use Incremental Static Regeneration (ISR):

export const revalidate = 60;

<b>Why?</b>
• Improves performance through caching
• Ensures data freshness
• Matches production-grade Next.js patterns

<h2>Dark Mode (Not Implemented)</h2>
Dark mode was considered but intentionally not implemented in the final submission.

<b>Reasoning:</b>
•Not required for core functionality
•Avoided incomplete or inconsistent UX
•Priority was given to routing, architecture, and data handling

This decision was made deliberately to keep the solution focused and robust.

<h2>SEO Considerations</h2>
• Dynamic metadata per vendor page
• Vendor name and hero image included in Open Graph metadata
• Improves shareability and search engine indexing

<h2>Getting Started</h2>

<b>Install dependencies:</b>
<i>npm install</i>

<b>Run the development server:</b>
<i>npm run dev</i>

<b>Open in your browser:</b>
<i>http://localhost:3000</i>

<h2>Deliverables Checklist</h2>
• Multi-tenant routing (/site/[vendorSlug])
• Product grid
• Search, sorting, and pagination
• Empty and error states
• SEO metadata
• Responsive UI
• Clean, scalable folder structure
• Documented technical decisions


<h2>Final Note</h2>
This project was built with clarity, scalability, and maintainability in mind.
The architecture allows easy extension to:

• Real APIs
• Authentication
• Vendor dashboards
• Checkout and payments