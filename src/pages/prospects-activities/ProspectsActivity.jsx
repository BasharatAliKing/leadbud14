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
import { HiOutlineSignal } from "react-icons/hi2";
import { FaChevronRight } from "react-icons/fa";
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
                    <div className='mx-auto  w-[95%] md:w-[80%] lg:w-[95%] py-5  xl:w-[75%]  xl:p-10 flex flex-col gap-8'>
                        <div className='flex justify-between shadow-xl bg-[#fff] p-3 md:p-5 rounded-md items-center'>
                            <img className='w-[30%] md:w-[20%]' src={Logo} alt="my-img" />
                            <div className="flex gap-3  text-[#56F444]">
                                <div className='h-[22px] w-[22px] sm:h-[37px] sm:w-[37px] border border-[#56F444] flex items-center justify-center rounded-full'> <FaFacebookF className='text-[12px] sm:text-[16px] md:text-[20px]' /></div>
                                <div className='h-[22px] w-[22px] sm:h-[37px] sm:w-[37px] border border-[#56F444] flex items-center justify-center rounded-full'> <FaLinkedinIn className='text-[12px] sm:text-[16px] md:text-[20px]' /></div>
                                <div className='h-[22px] w-[22px] sm:h-[37px] sm:w-[37px] border border-[#56F444] flex items-center justify-center rounded-full'> <FaTwitter className='text-[12px] sm:text-[16px] md:text-[20px]' /></div>
                                <div className='h-[22px] w-[22px] sm:h-[37px] sm:w-[37px] border border-[#56F444] flex items-center justify-center rounded-full'> <FaInstagram className='text-[12px] sm:text-[16px] md:text-[20px]' /></div>
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
                        <div className='w-full flex flex-col lg:flex-row gap-5'>
                            <div className='lg:w-[60%] flex flex-col gap-6'>
                                <div className='flex flex-col gap-3 p-5 bg-[#fff] shadow-xl rounded-xl'>
                                    <p className='text-[14px] xl:text-[15px] font-poppins text-[#7B7B7B]'>B2B and B2C software companies around the globe use Paddle to offload operational complexities so
                                        they can focus on growth....  <span className='text-[#48FA8A]'>Show More</span></p>
                                    <h3 className='text-[16px] xl:text-[18px] font-poppins font-semibold'>Company keywords</h3>
                                    <div className='flex flex-wrap gap-3'>
                                        {
                                            companykeywords.map((val) => {
                                                return (
                                                    <p className='bg-[#F5F5F5] p-1 px-4 rounded-full text-[#7B7B7B] text-[11px] sm:text-[13px] xl:text-[14px]'>{val}</p>
                                                )
                                            })
                                        }

                                    </div>
                                    <button className='bg-[#F5F5F5] text-[14px] sm:text-[15px] xl:text-[16px] font-poppins font-normal mr-auto p-2 px-5 rounded-md flex items-center'><BiListCheck className='text-[20px] md:text-[30px]' /> Add To List</button>
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
                            <div className='lg:w-[40%] flex flex-col gap-5'>
                                <div className='flex flex-col gap-1 shadow-xl bg-[#fff] p-3 md:p-5 rounded-xl'>
                                    <div className='flex justify-between w-full items-center'>
                                        <h2 className='text-[15px] xl:text-[17px] font-semibold font-poppins text-[#030621]'>Signals & Communication Advice</h2>
                                        <FaChevronDown className='' />
                                    </div>
                                    <h4 className='flex items-center gap-5 font-normal my-3 text-[#B7B7B7] text-[14px] md:text-[15px]'>Top signals for LinkedIn <IoSettingsOutline className='text-[#B7B7B7] text-[20px]' /></h4>
                                    <div className='bg-[#F5F5F5] p-4 rounded-xl flex gap-3 w-full'>
                                        <HiOutlineSignal className='text-[30px] text-[#48FA8A] mt-2' />
                                        <div className='w-full'>
                                            <div className='flex justify-between w-full items-center'>
                                                <h2 className='text-[15px] xl:text-[16px] font-semibold font-poppins text-[#030621]'>Award or recognition</h2>
                                                <FaChevronRight className='text-[#030621]' />
                                            </div>
                                            <h4 className='text-[14px] xl:text-[15px] font-normal font-poppins text-[#7B7B7B]'>Recognition = Recognition +1</h4>
                                            <p className='mt-5 text-[13px] xl:text-[14px] font-normal font-poppins text-[#7B7B7B]'>Discuss the recent award or recognition</p>
                                        </div>
                                    </div>
                                    <div className=' p-4 rounded-xl flex gap-3 w-full'>
                                        <HiOutlineSignal className='text-[30px] text-[#48FA8A] mt-2' />
                                        <div className='w-full'>
                                            <div className='flex justify-between w-full items-center'>
                                                <h2 className='text-[15px] xl:text-[16px] font-semibold font-poppins text-[#030621]'>New Partnership</h2>
                                                <FaChevronRight className='text-[#030621]' />
                                            </div>
                                            <h4 className='text-[14px] xl:text-[15px] font-normal font-poppins text-[#7B7B7B]'>Recognition = Recognition +1</h4>
                                            <p className='mt-5 text-[13px] xl:text-[14px] font-normal font-poppins text-[#7B7B7B]'>Congratulate them on the new partnership</p>
                                        </div>
                                    </div>
                                    <div className='bg-[#F5F5F5] p-4 rounded-xl flex gap-3 w-full'>
                                        <HiOutlineSignal className='text-[30px] text-[#48FA8A] mt-2' />
                                        <div className='w-full'>
                                            <div className='flex justify-between w-full items-center'>
                                                <h2 className='text-[15px] xl:text-[16px] font-semibold font-poppins text-[#030621]'>New product or service</h2>
                                                <FaChevronRight className='text-[#030621]' />
                                            </div>
                                            <h4 className='text-[14px] xl:text-[15px] font-normal font-poppins text-[#7B7B7B]'>New Offering = New Offering +1</h4>
                                            <p className='mt-5 text-[13px] xl:text-[14px] font-normal font-poppins text-[#7B7B7B]'>Congratulate them on the new offering and</p>
                                        </div>
                                    </div>
                                    <div className='flex mt-3 items-center text-[#030621]'>
                                        <input type="checkbox" />
                                        <h3 className='text-[13px] xl:text-[14px] font-normal ml-1'>Hide talking tips & snippets</h3>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4 shadow-xl bg-[#fff] p-3 md:p-5 rounded-xl'>
                                    <div className='flex flex-col gap-4 p-3 bg-[#F5F5F5] rounded-xl'>
                                        <div className='flex justify-between items-center'>
                                            <h2 className='text-[16px] xl:text-[18px] text-[#030621] font-semibold font-poppins'>Activities</h2>
                                            <h5 className='text-[14px] xl:text-[15px] text-[#48FA8A] font-normal font-poppins cursor-pointer'>Hide Activities</h5>
                                        </div>
                                        <div className='flex gap-3'>
                                            <div className='flex gap-1 items-center'><input type="radio" name='selecttype' /><p className='text-[13px] font-normal text-[#030621] md:text-[14px]'>Note</p></div>
                                            <div className='flex gap-1 items-center'><input type="radio" name='selecttype' /><p className='text-[13px] font-normal text-[#030621] md:text-[14px]'>Call</p></div>
                                            <div className='flex gap-1 items-center'><input type="radio" name='selecttype' /><p className='text-[13px] font-normal text-[#030621] md:text-[14px]'>Action</p></div>
                                            <div className='flex gap-1 items-center'><input type="radio" name='selecttype' /><p className='text-[13px] font-normal text-[#030621] md:text-[14px]'>Task</p></div>
                                        </div>
                                        <textarea name="" id="" rows={3} placeholder='Type a Note.....' className='outline-none border-none bg-[#fff] rounded-xl placeholder-[#B7B7B7] text-[#B7B7B7] text-[14px] w-full'></textarea>
                                        <div className='flex justify-between items-center'>
                                            <button className='bg-[#fff] py-2 text-[#B7B7B7] text-[14px] xl:text-[15px] font-normal px-4'>Log Note</button>
                                            <div className='flex gap-1 items-center'><input type="checkbox" className='' /><p className='text-[13px] font-normal text-[#030621] md:text-[14px]'>Pin note to top</p></div>
                                        </div>

                                    </div>
                                    <div className='flex flex-col gap-1 p-3 bg-[#F5F5F5] rounded-xl'>
                                        <div className='flex justify-between items-center'>
                                            <h2 className='text-[16px] xl:text-[18px] text-[#030621] font-semibold font-poppins'>Activities</h2>
                                            <h5 className='text-[14px] xl:text-[15px] text-[#48FA8A] font-normal font-poppins cursor-pointer flex gap-3 items-center'>All Activity types <FaChevronDown /> </h5>
                                        </div>
                                        <p className='text-[14px] mt-4 xl:text-[15px] font-poppins font-normal text-[#7B7B7B]'>Leadbud automatic email fulfillment found a
                                            verified email hannah.loughlin@paddle.com
                                            for Hannah L.
                                        </p>
                                        <p className='text-[14px] xl:text-[15px] font-poppins font-normal text-[#7B7B7B]'> 05:35 PM</p>
                                        <p className='text-[14px] mt-4 xl:text-[15px] font-poppins font-normal text-[#7B7B7B]'>
                                            The account has been automatically
                                            enriched with industry, company size, and
                                            other demographics. information with
                                            Paddie in Apollo's company database
                                        </p>
                                        <p className='text-[14px] xl:text-[15px] font-poppins font-normal text-[#7B7B7B]'> 05:35 PM</p>
                                        <p className='text-[14px] mt-4 xl:text-[15px] font-poppins font-normal text-[#7B7B7B]'>
                                            Requested from Apollo by Aisha
                                        </p>
                                        <p className='text-[14px] xl:text-[15px] font-poppins font-normal text-[#7B7B7B]'> 05:35 PM</p>
                                    </div>
                                    <p className='text-center text-[#48FA8A] font-poppins font-normal text-[14px] cursor-pointer'>Show in Window View</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}
