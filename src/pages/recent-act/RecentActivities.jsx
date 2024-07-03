import React, { useState } from "react";
import SideNav from "../../components/sidebar/SideNav";
import Topbar from "../../components/header/Header";
import Layout, { Header, Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { GiNotebook } from "react-icons/gi";
import "./recent.css";
import { LuRefreshCw } from "react-icons/lu";
import MainSidebar from "./MainSidebar";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillPlusCircle } from "react-icons/ai";
const RecentActivities = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleSeeDetails = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="">
            <Header className="header">
                <Topbar Pagetitle="Database Search" />
            </Header>
            <Layout>
                <Sider>
                    <SideNav />
                </Sider>

                <div className="main w-[87%] md:w-full overflow-x-scroll">
                   <div className="p-2  md:p-0"> <MainSidebar /></div>
                    <div className="sectwo">
                        <div className="flex flex-col gap-4 lg:w-[80%] md:mr-2 ">
                            <div className="p-6 md:mt-3 bg-[#fff]  rounded-xl shadow-lg flex flex-col gap-4">
                                <div className="flex gap-5 lg:gap-10 items-center">
                                    <h1 className=" text-[16px] xl:text-[20px] font-semibold font-poppins text-[#030621]">Recent Activities</h1>
                                    <LuRefreshCw className="text-[16px] xl:text-[20px]" />
                                </div>
                                <div className="flex gap-1">
                                    <button className="flex gap-1 items-center bg-gradient-to-r from-[#56F444] via-[#55EE44] to-[#48FA8A]  rounded-md text-[#000] text-[13px] xl:text-[15px] p-2 px-3"><GiNotebook className="text-[16px]" /> Add Note</button>
                                    <button className="flex gap-1 items-center bg-[#F5F5F5] rounded-md text-[13px] xl:text-[15px] p-2 px-3"><HiOutlineMail className="text-[16px]" /> Send Email</button>
                                </div>
                                <p className="text-[#B7B7B7] text-[13px] font-poppins font-normal">Click here to take notes...</p>
                            </div>
                            <h5 className="text-center text-[14px] font-normal font-poppins">07 Oct, 2023</h5>
                            <div className="flex gap-2 items-center overflow-x-scroll lg:overflow-auto">
                                <h4 className="whitespace-nowrap">06:20 pm</h4>
                                <div className="flex whitespace-nowrap bg-[#fff] rounded-md p-2 gap-1 items-center text-[14px] xl:text-[16px] font-poppins font-normal"><AiFillPlusCircle className="text-[#56F444] text-[16px]" /> You added this prospect through Bulk Domain Search to list new 342 Industry</div>
                            </div>
                        </div>
                    </div>
                </div>


            </Layout>
        </div>
    );
};

export default RecentActivities;
