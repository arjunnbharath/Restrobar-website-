/**
 * Vite only reliably emits linked ./src/style.css for some HTML entries.
 * Importing here guarantees the global stylesheet is included in the build
 * for standalone pages (booking, contact) that otherwise ship without it.
 */
import './style.css';
