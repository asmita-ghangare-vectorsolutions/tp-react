import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";
// import {
//   VectorTopnavComponent, VectorSidenavComponent,
//   VectorSidenavItem
// } from "@vector-web-components/core";
// import "../../../node_modules/@vector-web-components/core/styles.css";

// function initNavigation() {
//   const t = document.getElementById("topnav") as VectorTopnavComponent;

//   t.user = {
//     firstName: "Teachpoint",
//     lastName: "web",
//     email: "tp@example.com",
//   };
//   const s = document.getElementById("sidenav") as VectorSidenavComponent;

//   s.items = sidenavItems;
//   s.activeItemId = location.href.split("/").at(-1).toUpperCase() || "HOME";
// }
const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
 // initNavigation();
start();
// declare const sidenavItems: VectorSidenavItem[];