import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import App from "./App";
import { Home } from "./Home";
import { About } from "./About";
import { News } from "./News";
import { number, object } from "zod";

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

export const newsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/news",
  // loader: async () => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(true);
  //     }, 1000);
  //   });
  // },
  validateSearch: object({
    firstId: number().optional(),
    secondId: number().optional(),
  }),
  component: News,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, newsRoute])

export const router = createRouter({ routeTree })