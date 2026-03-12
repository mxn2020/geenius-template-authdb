/**
 * Shared types for the adapter layer
 */

/** Base entity fields present on all Convex documents */
export interface BaseEntity {
    _id: string;
    _creationTime: number;
}

/** Soft-deletable entity */
export interface SoftDeletable {
    deletedAt?: number;
    deletedBy?: string;
}

/** Timestamped entity */
export interface Timestamped {
    createdAt?: number;
    updatedAt?: number;
}

/** Standard list query options */
export interface ListQueryOptions {
    limit?: number;
    cursor?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    search?: string;
    filters?: Record<string, unknown>;
}

/** Paginated response */
export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    cursor?: string;
    hasMore: boolean;
}

/** Item entity */
export interface Item extends BaseEntity, SoftDeletable, Timestamped {
    title: string;
    description?: string;
    status?: string;
    priority?: string;
    tags?: string[];
    category?: string;
    createdBy?: string;
    updatedBy?: string;
}
