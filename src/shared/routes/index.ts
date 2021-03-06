import { ComponentType } from "react";
import { LinkProps, Router as TRouter } from "@yolkai/next-routes";
import createRoutes from "@yolkai/next-routes";

// @ts-ignore Types are broken
const routes = createRoutes();

routes.add("index", "/");
routes.add("package", "/package/:nodeId");
routes.add("search");
routes.add("credits");
routes.add("privacy");
routes.add("terms");

export const Link: ComponentType<LinkProps> = routes.Link;
export const Router: TRouter = routes.Router;
export default routes;
