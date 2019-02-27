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

const nextRoutes = require("next-routes");
const routes = nextRoutes();

routes.add("index", "/");
routes.add("package", "/package/:nodeId");
routes.add("search");
routes.add("credits");
routes.add("privacy");
routes.add("terms");

export const Link: ComponentType<LinkProps> = routes.Link;
export const Router: TRouter = routes.Router;
export default routes;
