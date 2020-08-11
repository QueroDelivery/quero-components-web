import React, { useState } from "react";
import Loader from "./Loader";

export default {
    title: "Loader",
    component: Loader,
};

function renderDefault() {
    return (
        <div style={{ margin: 50 }}>
            <Loader />
        </div>
    );
}

export const Default = () => renderDefault();
