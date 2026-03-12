/**
 * Items adapter — data access layer for items
 */
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../../convex/_generated/api';

export const itemsAdapter = {
    /** List all items */
    useList: () => useQuery(api.library.items.list),

    /** Get a single item */
    useGet: (id: string) => useQuery(api.library.items.get, { id: id as any }),

    /** Create mutation handle */
    useCreate: () => useMutation(api.library.items.create),

    /** Update mutation handle */
    useUpdate: () => useMutation(api.library.items.update),

    /** Delete mutation handle */
    useRemove: () => useMutation(api.library.items.remove),
};
