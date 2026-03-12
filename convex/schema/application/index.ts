// convex/schema/application/index.ts

import { v } from 'convex/values';
import { auditFields, softDeleteFields, classificationFields } from '../base';

/**
 * Application tables — items (generic CRUD entity)
 */

export const items = {
    title: v.string(),
    description: v.optional(v.string()),
    status: v.optional(v.string()),
    priority: v.optional(v.string()),
    ...classificationFields,
    ...auditFields,
    ...softDeleteFields,
};
