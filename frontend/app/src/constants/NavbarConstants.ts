import { TabLink } from "../structures/TabLinks";
import { APP_PREFIX, DASHBOARD_PREFIX, DEPLOYMENTS_PREFIX, SCRIPTS_PREFIX, SERVERS_PREFIX } from "./NavigateConstants";

export const NAVBAR_LINKS: TabLink[] = [
    {
        title:"Tasks",
        link:APP_PREFIX,
        icon: undefined
    },
    {
        title:"Scripts",
        link:APP_PREFIX+SCRIPTS_PREFIX,
        icon: undefined
    },
    {
        title:"Deployments",
        link:APP_PREFIX+DEPLOYMENTS_PREFIX,
        icon: undefined
    },
    {
        title:"Servers",
        link:APP_PREFIX+SERVERS_PREFIX,
        icon: undefined
    },
    {
        title:"Dashboard",
        link:APP_PREFIX+DASHBOARD_PREFIX,
        icon: undefined
    },
] 