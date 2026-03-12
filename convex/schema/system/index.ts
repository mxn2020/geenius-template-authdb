// convex/schema/system/index.ts

import { v } from 'convex/values';
import { auditFields } from '../base';

/**
 * System tables — users, profiles, audit log
 */

export const userProfiles = {
    userId: v.string(),
    displayName: v.optional(v.string()),
    avatarUrl: v.optional(v.string()),
    role: v.optional(v.string()),
    ...auditFields,
};

export const auditLog = {
    userId: v.string(),
    action: v.string(),
    resource: v.string(),
    resourceId: v.optional(v.string()),
    details: v.optional(v.string()),
    timestamp: v.number(),
};
