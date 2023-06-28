import React from "react";
import "./index.css";
import Card from "../Card";

const Layout = ({
    mb = 1,
    dt = mb, /* mb - пропс-параметр для мобильной версии, dt - для десктопной */
    gap = "normal"
}) => {
    let className = "layout";
    switch(mb) {
        case 2: className += " layout_2"; break; /* ПРОБЕЛ ПЕРЕД КЛАССОМ ОБЯЗАТЕЛЕН */
        case 3: className += " layout_3"; break;
        case 4: className += " layout_4"; break;
        default: break;
    }
    switch(dt) {
        case 1: className += " layout_dt-1"; break;
        case 2: className += " layout_dt-2"; break;
        case 3: className += " layout_dt-3"; break;
        case 4: className += " layout_dt-4"; break;
        default: break;
    }
    switch(gap) {
        case "none": className += " layout_gap-none"; break;
        case "small": className += " layout_gap-small"; break;
        default: break;
    }
    return <div className={className}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

        <Card/>
        <Card/>
        <Card/>
    </div>
}

export default Layout;