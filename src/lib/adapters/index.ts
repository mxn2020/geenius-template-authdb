/**
 * Adapter Layer — Unified data access API
 *
 * Always use this module for data operations instead of
 * directly importing from Convex. This decouples the UI
 * from the backend implementation.
 *
 * Usage:
 *   import { itemsAdapter, authQuery } from '~/lib/adapters';
 */

export { authQuery } from './auth';
export { itemsAdapter } from './db/items';
