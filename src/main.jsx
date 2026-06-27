import './styles/globals.css'
import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes.jsx'

// Static pre-rendering + client hydration. Each route is rendered to its own
// HTML file at build time (great for SEO + first paint), then hydrated.
export const createRoot = ViteReactSSG({ routes })
