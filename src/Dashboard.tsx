import React, { useCallback } from "react";
import { LookerEmbedSDK } from "@looker/embed-sdk";
import styled from "styled-components";

export const EmbeddedDashboard1 = (props: { id: number | string }) => {
    const [dashboard, setDashboard] = React.useState();
    const setupDashboard = (dashboard: any) => {
        setDashboard(dashboard);
    };
    const embedCtrRef = useCallback((el) => {
        const hostUrl = "https://zeusagrolooker.cloud.looker.com/";
        if (el && hostUrl) {
            el.innerHTML = "";
            LookerEmbedSDK.init(hostUrl);
            LookerEmbedSDK.createDashboardWithId(props.id)
                .withNext()
                .appendTo(el)
                .build()
                .connect()
                .then(setupDashboard)
                .catch((error) => {
                    console.error("Connection error", error);
                });
        }
    }, []);
    return <EmbedContainer ref={embedCtrRef}></EmbedContainer>;
};

export const EmbeddedDashboard2 = (props: { id: number }) => {
    const [dashboard, setDashboard] = React.useState();
    const setupDashboard = (dashboard: any) => {
        setDashboard(dashboard);
    };
    const embedCtrRef = useCallback((el) => {
        const hostUrl = "https://zeusagrolooker.cloud.looker.com/";
        if (el && hostUrl) {
            el.innerHTML = "";
            LookerEmbedSDK.init(hostUrl);
            LookerEmbedSDK.createDashboardWithId(props.id)
                .withNext()
                .appendTo(el)
                .build()
                .connect()
                .then(setupDashboard)
                .catch((error) => {
                    console.error("Connection error", error);
                });
        }
    }, []);
    return <EmbedContainer ref={embedCtrRef}></EmbedContainer>;
};

export const EmbeddedDashboard3 = (props: { id: number }) => {
    const [dashboard, setDashboard] = React.useState();
    const setupDashboard = (dashboard: any) => {
        setDashboard(dashboard);
    };
    const embedCtrRef = useCallback((el) => {
        const hostUrl = "https://zeusagrolooker.cloud.looker.com/";
        if (el && hostUrl) {
            el.innerHTML = "";
            LookerEmbedSDK.init(hostUrl);
            LookerEmbedSDK.createDashboardWithId(props.id)
                .withNext()
                .appendTo(el)
                .build()
                .connect()
                .then(setupDashboard)
                .catch((error) => {
                    console.error("Connection error", error);
                });
        }
    }, []);

    return <EmbedContainer ref={embedCtrRef}></EmbedContainer>;
};

export const EmbedContainer = styled.div`
 width: 100%;
 height: 95vh;
 & > iframe {
   width: 100%;
   height: 100%;
 }
`;