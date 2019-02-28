// const nextRoutes = require("next-routes");
// const routes = (module.exports = nextRoutes());

// routes.add("index", "/");
// routes.add("package", "/package/:nodeId");
// routes.add("search");
// routes.add("credits");
// routes.add("privacy");
// routes.add("terms");

import { ComponentType } from "react";
import { LinkProps, Router as TRouter } from "next-routes";
import createRoutes from "next-routes";
import Routes from "next-routes";

// const createRoutes = require("next-routes");

// @ts-ignore Types are broken
const routes: Routes = createRoutes();

routes.add("index", "/");
routes.add("package", "/package/:nodeId");
routes.add("search");
routes.add("credits");
routes.add("privacy");
routes.add("terms");

export const Link: ComponentType<LinkProps> = routes.Link;
export const Router: TRouter = routes.Router;
export default routes;
