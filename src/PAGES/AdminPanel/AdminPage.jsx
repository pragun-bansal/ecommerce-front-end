import React, { useState } from 'react';
import ProductMenu from "./ProductMenu";
import {SidebarDemo} from "./Sidebar";
import {useParams} from "react-router-dom";

const AdminPage = () => {

    return (
        <div className="container w-full p-4">
            {/*<ProductMenu />*/}
            <SidebarDemo/>
        </div>
    );
};

export default AdminPage;