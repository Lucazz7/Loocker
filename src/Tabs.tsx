import React from "react";
import { ComponentsProvider, Tabs2, Tab2 } from "@looker/components";
import { EmbeddedDashboard1, EmbeddedDashboard2, EmbeddedDashboard3 } from "./Dashboard";

export const Tabs = () => (
    <ComponentsProvider>
        <Tabs2>
            <Tab2 id="5" label="Order Analysis Dashboard">
                Order data from the last 12 months
                <EmbeddedDashboard1 id={5} />
            </Tab2>
            <Tab2 id="2" label="Inventory Dashboard">
                Current global inventory
                <EmbeddedDashboard2 id={2} />
            </Tab2>
            <Tab2 id="7" label="Customer Dashboard">
                Anonymized customer data
                <EmbeddedDashboard3 id={7} />
            </Tab2>
        </Tabs2>
    </ComponentsProvider>
)