import { Application } from "express";
import { create, roleCheck } from "./controller";
// import { get } from "./controller";
import { isAuthenticated } from "../auth/authenticated";
import { isAuthorized } from "../auth/authorized";

export function routesConfig(app: Application) {
  app.post('/user',
    isAuthenticated,
    isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: false }),
    create
  );
  app.get('/admin', [
    isAuthenticated,
    isAuthorized({ hasRole: ['admin', 'manager'] }),
    roleCheck
  ]);
  app.get('/user', [
    isAuthenticated,
    roleCheck
  ]);
}

