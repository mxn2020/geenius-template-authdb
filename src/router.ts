import { createRouter, createRoute, createRootRoute, Outlet, Link, useRouterState, redirect } from '@tanstack/react-router';
import { AppLayout } from '~/components/AppLayout';
import { Dashboard } from '~/routes/Dashboard';
import { Items } from '~/routes/Items';
import { Settings } from '~/routes/Settings';

const rootRoute = createRootRoute({
    component: AppLayout,
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    beforeLoad: () => { throw redirect({ to: '/dashboard' }); },
});

const dashboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/dashboard',
    component: Dashboard,
});

const itemsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/items',
    component: Items,
});

const settingsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/settings',
    component: Settings,
});

const routeTree = rootRoute.addChildren([indexRoute, dashboardRoute, itemsRoute, settingsRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

export { Link, useRouterState };
