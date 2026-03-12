/**
 * Auth adapter — wraps ConvexAuth for React usage
 */
import { useConvexAuth } from 'convex/react';

/**
 * Auth query helpers for use in components
 */
export const authQuery = {
    /**
     * Get the current authentication state
     */
    useAuth: () => useConvexAuth(),
};
