import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import App from "./App";
import { Home } from "./Home";
import { About } from "./About";

const rootRoute = createRootRoute({
  component: App,
});

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])

export const router = createRouter({ routeTree })