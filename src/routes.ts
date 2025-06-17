import {RouteDefinition, RouterProps} from "@solidjs/router";
import {lazy} from "solid-js";

export const routes: RouteDefinition[] = [
    {
        path: '/',
        component: lazy(() => import('./Home')),
    },
    {
        path: '/event-handling-techniques',
        component: lazy(() => import('./event-handling-techniques/Layout')),
        children: [
            {
                path: '/immediate',
                component: lazy(() => import('./event-handling-techniques/Immediate')),
            },
            {
                path: '/throttle',
                component: lazy(() => import('./event-handling-techniques/Throttle')),
            },
            {
                path: '/debounce',
                component: lazy(() => import('./event-handling-techniques/Debounce')),
            },
        ]
    },
]