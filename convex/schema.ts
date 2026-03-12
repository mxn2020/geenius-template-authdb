// convex/schema.ts

import { defineSchema, defineTable } from 'convex/server';
import { authTables } from '@convex-dev/auth/server';
import { items } from './schema/application';
import { userProfiles, auditLog } from './schema/system';

const schema = defineSchema({
    ...authTables,
    userProfiles: defineTable(userProfiles),
    auditLog: defineTable(auditLog).index('by_userId', ['userId']),
    items: defineTable(items).index('by_status', ['status']),
});

export default schema;
