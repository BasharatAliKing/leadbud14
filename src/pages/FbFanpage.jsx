import React from 'react'
import Layout, { Content } from "antd/es/layout/layout";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import SideNav from "../components/sidebar/SideNav";
import Topbar from "../components/header/Header";
import { Row, Col, Card } from "antd";
import { FaPhone } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosMail } from "react-icons/io";
import { Typography, Form, Input, Button, Select, Table } from "antd";
import "../utils/FbFanpage.css";
export default function FbFanpage() {
    return (
        <Layout className='w-full'>
            <Header className="header">
                <Topbar />
            </Header>
            <Layout>
                <Sider>
                    <SideNav />
                </Sider>
              <Content>
              <div className='main-body  flex flex-col gap-10'>
                    <div className='flex p-5 shadow-xl rounded-lg w-full flex-col lg:flex-row gap-5 lg:gap-3'>
                        <div className='lg:w-[60%] flex flex-col gap-4'>
                            <div className='flex flex-col md:flex-row gap-2 w-full'>
                                <div className='flex flex-col gap-1 w-full'>
                                    <h3 className='text-[#030621] text-[14px] font-normal'>Fanpage URL</h3>
                                    <input type="text" placeholder='Enter URL of Fanpage' className='text-[#030621] p-1 px-2 text-[14px] bg-[#F5F5F5] border-none rounded-md outline-none' />
                                </div>
                                <div className='flex flex-col gap-1 w-full'>
                                    <h3 className='text-[14px] font-normal text-[#030621]'>Export Limit</h3>
                                    <select name="" id="" className='p-1 px-2 text-[14px] text-[#030621] bg-[#F5F5F5] rounded-md border-none outline-none'>
                                        <option value="">Unlimited</option>
                                        <option value="">One</option>
                                        <option value="">Two</option>
                                        <option value="">Three</option>
                                    </select>
                                </div>
                                <div className='flex gap-1 items-center mt-6 w-full'>
                                    <h3 className='text-[14px] font-normal text-[#030621]'>Token Status:</h3> <div className=' ml-2 h-3 w-3 rounded-full shadow-xl bg-green'></div>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <button className='bg-[#F5F5F5] text-[#030621] text-[13px] md:text-[15px] rounded-md px-3 py-2'>Stop Scraping</button>
                                <button className='bg-gradient-to-r from-[#56F444] via-[#55EE44] to-[#48FA8A] text-[#030621] text-[13px] md:text-[15px] rounded-md px-3 py-2'>Start Scraping</button>
                            </div>
                        </div>
                        <div className='lg:w-[40%] p-5 bg-[#F5F5F5] rounded-md flex flex-col sm:flex-row gap-5 items-center w-full'>
                            <div className=''>
                                <div className='bg-[#fff] h-32 w-32 sm:h-24 sm:w-24 rounded-full'></div>
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <div className='flex w-full '>  <h3 className='text-[#030621] text-[14px] font-normal'>Facebook Fanpage</h3> <h4 className='font-bold text-[18px] text-[#000] ml-auto'>XXXX</h4> </div>
                                <div className='flex w-full '>  <h3 className='text-[#030621] text-[14px] font-normal'>Total Posts Found</h3> <h4 className='font-bold text-[18px] text-[#000] ml-auto'>XXXX</h4> </div>
                                <div className='flex w-full '>  <h3 className='text-[#030621] text-[14px] font-normal'>Total Leads Found</h3> <h4 className='font-bold text-[18px] text-[#000] ml-auto'>XXXX</h4> </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col p-5 shadow-xl rounded-lg w-full gap-7'>
                        <div className='flex w-full flex-col lg:flex-row gap-5'>
                            <div className='flex  flex-wrap md:flex-row gap-5 w-full'>
                                <div className='flex gap-2 items-center'>
                                    <IoIosMail className='bg-gradient-to-r from-[#56F444] via-[#55EE44] to-[#48FA8A] tex-[20px] p-2 rounded-md h-10 text-[#fff] w-10' />
                                    <div className='flex flex-col'>
                                        <h3 className='font-bold text-[14px] md:text-[16px] text-[#000]'>4.8k</h3>
                                        <p className='text-[10px] md:text-[12px] font-normal -mt-1'>Persons</p>
                                    </div> </div>
                                <div className='flex gap-2 items-center'>
                                    <FaPhone className='bg-gradient-to-r from-[#56F444] via-[#55EE44] to-[#48FA8A] tex-[20px] p-2 rounded-md h-10 text-[#fff] w-10' />
                                    <div className='flex flex-col'>
                                        <h3 className='font-bold text-[14px] md:text-[16px] text-[#000]'>3.5k</h3>
                                        <p className='text-[10px] md:text-[12px] font-normal -mt-1'>Phone Number</p>
                                    </div> </div>
                                <div className='flex gap-2 items-center'>
                                    <TfiMenuAlt className='bg-gradient-to-r from-[#56F444] via-[#55EE44] to-[#48FA8A] tex-[20px] p-2 rounded-md h-10 text-[#fff] w-10' />
                                    <div className='flex flex-col'>
                                        <h3 className='font-bold text-[14px] md:text-[16px] text-[#000]'>120.5k</h3>
                                        <p className='text-[10px] md:text-[12px] font-normal -mt-1'>Total</p>
                                    </div> </div>
                            </div>
                            <div className='flex gap-2 flex-col sm:flex-row sm:ml-auto items-center w-full justify-end '>
                                <p className='text-[12px] md:text-[13px] text-end w-full sm:w-auto'>Showing 0 to 0 of 0 entities</p>
                                <div className='flex gap-2 w-full sm:w-auto text-start'>
                                    <button className='bg-[#F5F5F5] text-[#030621] text-[13px] md:text-[15px] rounded-md px-3 py-2'>Previous</button>
                                    <button className='bg-gradient-to-r from-[#56F444] via-[#55EE44] to-[#48FA8A] text-[#030621] text-[13px] md:text-[15px] rounded-md px-7 py-2'>Next</button>
                                </div>
                            </div>
                        </div>
                      <div className='w-full overflow-x-scroll lg:overflow-auto'>
                      <table className='text-start w-full'>
                            <thead>
                                <tr>
                                    <th className='text-start text-[#000]'><div className='flex gap-3 items-center'><input type="checkbox" /> Prospects</div></th>
                                    <th className='text-start text-[#000]'>Email</th>
                                    <th className='text-start text-[#000]'>Company</th>
                                    <th className='text-start text-[#000]'>Gender</th>
                                    <th className='text-start text-[#000]'>Location</th>
                                    <th className='text-start text-[#000]'>Phone Number</th>
                                    <th className='text-start text-[#000]'>City</th>
                                    <th className='text-start text-[#000]'>Title</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='odd:bg-[#fff] even:bg-[#F5F5F5]'>
                                    <td><div className='flex gap-3 items-center'><input type="checkbox" /><div><h3 className='text-[14px] md:text-[15px] font-medium text-[#000]'>Alex Summers</h3><p className='text-[12px] md:text-[13px] -mt-1'>CEO</p></div></div></td>
                                    <td> <div className='flex gap-2 items-center'><div className='h-3 w-3 bg-green rounded-full shadow-xl'></div><p>alexsummers@gmail.com</p></div> </td>
                                    <td>Salesforce</td>
                                    <td>Male</td>
                                    <td>United Kingdom</td>
                                    <td>+44 123456789</td>
                                    <td>London</td>
                                    <td>CEO</td>
                                </tr>
                                <tr className='odd:bg-[#fff] even:bg-[#F5F5F5]'>
                                    <td><div className='flex gap-3 items-center'><input type="checkbox" /><div><h3 className='text-[14px] md:text-[15px] font-medium text-[#000]'>Alex Summers</h3><p className='text-[12px] md:text-[13px] -mt-1'>CEO</p></div></div></td>
                                    <td> <div className='flex gap-2 items-center'><div className='h-3 w-3 bg-green rounded-full shadow-xl'></div><p>alexsummers@gmail.com</p></div> </td>
                                    <td>Salesforce</td>
                                    <td>Male</td>
                                    <td>United Kingdom</td>
                                    <td>+44 123456789</td>
                                    <td>London</td>
                                    <td>CEO</td>
                                </tr>
                                <tr className='odd:bg-[#fff] even:bg-[#F5F5F5]'>
                                    <td><div className='flex gap-3 items-center'><input type="checkbox" /><div><h3 className='text-[14px] md:text-[15px] font-medium text-[#000]'>Alex Summers</h3><p className='text-[12px] md:text-[13px] -mt-1'>CEO</p></div></div></td>
                                    <td> <div className='flex gap-2 items-center'><div className='h-3 w-3 bg-green rounded-full shadow-xl'></div><p>alexsummers@gmail.com</p></div> </td>
                                    <td>Salesforce</td>
                                    <td>Male</td>
                                    <td>United Kingdom</td>
                                    <td>+44 123456789</td>
                                    <td>London</td>
                                    <td>CEO</td>
                                </tr>
                                <tr className='odd:bg-[#fff] even:bg-[#F5F5F5]'>
                                    <td><div className='flex gap-3 items-center'><input type="checkbox" /><div><h3 className='text-[14px] md:text-[15px] font-medium text-[#000]'>Alex Summers</h3><p className='text-[12px] md:text-[13px] -mt-1'>CEO</p></div></div></td>
                                    <td> <div className='flex gap-2 items-center'><div className='h-3 w-3 bg-green rounded-full shadow-xl'></div><p>alexsummers@gmail.com</p></div> </td>
                                    <td>Salesforce</td>
                                    <td>Male</td>
                                    <td>United Kingdom</td>
                                    <td>+44 123456789</td>
                                    <td>London</td>
                                    <td>CEO</td>
                                </tr>
                                <tr className='odd:bg-[#fff] even:bg-[#F5F5F5]'>
                                    <td><div className='flex gap-3 items-center'><input type="checkbox" /><div><h3 className='text-[14px] md:text-[15px] font-medium text-[#000]'>Alex Summers</h3><p className='text-[12px] md:text-[13px] -mt-1'>CEO</p></div></div></td>
                                    <td> <div className='flex gap-2 items-center'><div className='h-3 w-3 bg-green rounded-full shadow-xl'></div><p>alexsummers@gmail.com</p></div> </td>
                                    <td>Salesforce</td>
                                    <td>Male</td>
                                    <td>United Kingdom</td>
                                    <td>+44 123456789</td>
                                    <td>London</td>
                                    <td>CEO</td>
                                </tr>
                            </tbody>
                        </table>
                      </div>
                    </div>
                </div>
              </Content>
            </Layout>
        </Layout>
    )
}
