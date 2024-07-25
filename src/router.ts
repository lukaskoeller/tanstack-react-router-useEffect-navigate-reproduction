import { createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import App from "./App";
import { Home } from "./Home";
import { About } from "./About";
import { News } from "./News";
import { number, object, string } from "zod";
import { Repro3 } from "./Repro3";

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

export const repro3Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/repro3",
  validateSearch: object({
    param1: number().optional().default(7),
    param2: string().optional().default("defaultValue1"),
  }),
  component: Repro3,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, newsRoute, repro3Route])

export const router = createRouter({ routeTree })