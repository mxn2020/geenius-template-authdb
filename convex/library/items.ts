// convex/library/items.ts

import { query, mutation } from '../_generated/server';
import { v } from 'convex/values';

/** List all non-deleted items */
export const list = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db
            .query('items')
            .filter((q) => q.eq(q.field('deletedAt'), undefined))
            .order('desc')
            .collect();
    },
});

/** Get a single item by ID */
export const get = query({
    args: { id: v.id('items') },
    handler: async (ctx, { id }) => {
        return await ctx.db.get(id);
    },
});

/** Create a new item */
export const create = mutation({
    args: {
        title: v.string(),
        description: v.optional(v.string()),
        status: v.optional(v.string()),
        priority: v.optional(v.string()),
        tags: v.optional(v.array(v.string())),
        category: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        return await ctx.db.insert('items', {
            ...args,
            createdAt: Date.now(),
        });
    },
});

/** Update an existing item */
export const update = mutation({
    args: {
        id: v.id('items'),
        title: v.optional(v.string()),
        description: v.optional(v.string()),
        status: v.optional(v.string()),
        priority: v.optional(v.string()),
        tags: v.optional(v.array(v.string())),
        category: v.optional(v.string()),
    },
    handler: async (ctx, { id, ...updates }) => {
        await ctx.db.patch(id, {
            ...updates,
            updatedAt: Date.now(),
        });
    },
});

/** Soft-delete an item */
export const remove = mutation({
    args: { id: v.id('items') },
    handler: async (ctx, { id }) => {
        await ctx.db.patch(id, {
            deletedAt: Date.now(),
        });
    },
});
