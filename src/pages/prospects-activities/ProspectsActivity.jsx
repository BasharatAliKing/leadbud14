import React, { useState } from 'react'
import Layout, { Content } from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import SideNav from "../../components/sidebar/SideNav";
import Topbar from "../../components/header/Header";
import Logo from "../../assets/images/prospects-activity-logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./prospectsactivity.css";
import { BiListCheck } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import ButtonComponent from './ButtonComponent';
export default function ProspectsActivity() {
    const companykeywords = [
        "enterprise software",
        "developer tools",
        "consumer internet",
        "input purchases",
        "payments",
        "information technology",
        "e-commerce sass",
        "application Licencing",
        "sdks",
        "software",
        "tax compliance",
        "analytice",
        "customer service",
        "internet",
        "ecommerce",
        "checkout",
    ]
    const [show, setShow] = useState('Technologies');
    return (
        <Layout className='w-full bg-[#F5F5F5]'>
            <Header className="header">
                <Topbar />
            </Header>
            <Layout>
                <Sider>
                    <SideNav />
                </Sider>
                <Content>
                    <div className='mx-auto lg:w-[90%] xl:w-[75%] m-10 flex flex-col gap-8'>
                        <div className='flex justify-between shadow-xl bg-[#fff] p-5 rounded-md items-center'>
                            <img src={Logo} alt="my-img" />
                            <div className="flex gap-3  text-[#56F444]">
                                <div className='h-[37px] w-[37px] border border-[#56F444] flex items-center justify-center rounded-full'> <FaFacebookF className='text-[20px]' /></div>
                                <div className='h-[37px] w-[37px] border border-[#56F444] flex items-center justify-center rounded-full'> <FaLinkedinIn className='text-[20px]' /></div>
                                <div className='h-[37px] w-[37px] border border-[#56F444] flex items-center justify-center rounded-full'> <FaTwitter className='text-[20px]' /></div>
                                <div className='h-[37px] w-[37px] border border-[#56F444] flex items-center justify-center rounded-full'> <FaInstagram className='text-[20px]' /></div>
                            </div>
                        </div>
                        <div className=" bg-[#fff] shadow-xl mt-2 rounded-[10px] w-full">
                            <div className='btnsprospects flex justify-between text-[14px] md:text-[15px]  xl:text-[18px] font-poppins whitespace-nowrap overflow-x-scroll hide-scrollbar'>
                                <button className=' activepro'>Overview</button>
                                <button className=''>Recommendations</button>
                                <button className=''>Existing Contacts</button>
                                <button className=''>Conversations</button>
                                <button className=''>Employees</button>
                                <button className=''>Sequences</button>
                                <button className=''>Deals</button>
                                <button className=''>Custom Fields</button>
                            </div>
                        </div>
                        <div className='w-full flex flex-col md:flex-row gap-5'>
                            <div className='md:w-[65%] flex flex-col gap-6'>
                                <div className='flex flex-col gap-3 p-5 bg-[#fff] shadow-xl rounded-xl'>
                                    <p className='text-[14px] xl:text-[15px] font-poppins text-[#7B7B7B]'>B2B and B2C software companies around the globe use Paddle to offload operational complexities so
                                        they can focus on growth....  <span className='text-[#48FA8A]'>Show More</span></p>
                                    <h3 className='text-[16px] xl:text-[18px] font-poppins font-semibold'>Company keywords</h3>
                                    <div className='flex flex-wrap gap-3'>
                                        {
                                            companykeywords.map((val) => {
                                                return (
                                                    <p className='bg-[#F5F5F5] p-1 px-4 rounded-full text-[#7B7B7B] text-[13px] xl:text-[14px]'>{val}</p>
                                                )
                                            })
                                        }

                                    </div>
                                    <button className='bg-[#F5F5F5] text-[15px] xl:text-[16px] font-poppins font-normal mr-auto p-2 px-5 rounded-md flex items-center'><BiListCheck className='text-[30px]' /> Add To List</button>
                                </div>
                                <div className='flex flex-col gap-3 p-5 bg-[#fff] shadow-xl rounded-xl'>
                                    <div className="p-2 flex gap-2 md:gap-0 items-center bg-[#F5F5F5] rounded-md">
                                        <h2 className="text-[13px] md:w-[120px] font-normal font-poppins">Industry:</h2>
                                        <p className="text-[13px] font-normal font-poppins text-[#030621]">Information Technology & Services, Computer Software, Internet</p>
                                    </div>
                                    <div className='flex flex-col md:flex-row gap-3'>
                                        <div className='md:w-1/2'>
                                            <div className="p-2 flex gap-2 md:gap-0 items-center ">
                                                <h2 className="text-[13px] md:w-[120px] font-normal font-poppins">Founding Year:</h2>
                                                <p className="text-[13px] font-normal font-poppins text-[#030621]">2012</p>
                                            </div>
                                            <div className="p-2 flex gap-2 md:gap-0 items-center bg-[#F5F5F5] rounded-md">
                                                <h2 className="text-[13px] md:w-[120px] font-normal font-poppins">Employees:</h2>
                                                <p className="text-[13px] font-normal font-poppins text-[#030621]">300 Finds Lead</p>
                                            </div>
                                            <div className="p-2 flex gap-2 md:gap-0 items-center  ">
                                                <h2 className="text-[13px] md:w-[120px] font-normal font-poppins">Annual Revenue:</h2>
                                                <p className="text-[13px] font-normal font-poppins text-[#030621]">$100M</p>
                                            </div>
                                            <div className="p-2 flex gap-2 md:gap-0 items-center bg-[#F5F5F5] rounded-md">
                                                <h2 className="text-[13px] md:w-[120px] font-normal font-poppins">Account Stage:</h2>
                                                <p className="text-[13px] font-normal font-poppins text-[#030621]">Cold</p>
                                            </div>
                                        </div>
                                        <div className='md:w-1/2'>
                                            <div className="p-2 flex gap-2 md:gap-0 items-center ">
                                                <h2 className="text-[13px] md:w-[120px] font-normal font-poppins">Parent Account:</h2>
                                                <p className="text-[13px] font-normal font-poppins text-[#030621]">None</p>
                                            </div>
                                            <div className="p-2 flex gap-2 md:gap-0 items-center bg-[#F5F5F5] rounded-md">
                                                <h2 className="text-[13px] md:w-[120px] font-normal font-poppins">Engagement:</h2>
                                                <p className="text-[13px] font-normal font-poppins text-[#030621]">0 Inbound 0 Outbound</p>
                                            </div>
                                            <div className="p-2 flex gap-2 md:gap-0 items-center  ">
                                                <h2 className="text-[13px] md:w-[120px] font-normal font-poppins">Last 12 Months:</h2>
                                                <p className="text-[13px] font-normal font-poppins text-[#030621]">--------</p>
                                            </div>
                                            <div className="p-2 flex gap-2 md:gap-0 items-center bg-[#F5F5F5] rounded-md">
                                                <h2 className="text-[13px] md:w-[120px] font-normal font-poppins">Location:</h2>
                                                <p className="text-[13px] font-normal font-poppins text-[#030621]">London, United Kingdom</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3 p-5 bg-[#fff] shadow-xl rounded-xl'>
                                    <div className='flex gap-3 items-center'>
                                        <h2 className='text-[16px] md:text-[18px] xl:text-[20px] font-semibold font-poppins text-[#030621]'>Account Review</h2>
                                        <FaChevronDown className='text-[#030621] ml-3' />
                                        <MdOutlineLock className='text-[#B7B7B7] ml-2 text-[20px]' />
                                        <RiDeleteBinLine className='text-[#B7B7B7] text-[20px]' />
                                    </div>
                                    <h4 className='flex items-center gap-5 text-[#030621] font-semibold text-[15px] md:text-[16px]'>Insights <IoSettingsOutline className='text-[#B7B7B7] text-[20px]' /></h4>
                                    <ButtonComponent />
                                </div>
                            </div>
                            <div className='md:w-[35%]'>
                                <div className='flex justify-between shadow-xl bg-[#fff] p-5 rounded-md items-center'>

                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}
