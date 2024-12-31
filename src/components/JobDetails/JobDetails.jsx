import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar } from "react-icons/ci";
import { IoCalendar } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from "../utility/localstorage";





const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idIt = parseInt(id);
    const job = jobs.find(job => job.id === idIt);
    console.log(job);

    const handleApplyJOb = () =>{
        saveJobApplication(id);
        toast('You have applied successfully');
    }

    return (
        <div className="mb-32">
            <div className=" text-center m-20">
                <h1 className="text-4xl font-bold justify-center">Job Details</h1>
            </div>
            
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-[16px]"><span className="font-bold">Job Description:</span> {job.job_description}</h2>
                    <h2 className="mt-4"><span className="font-bold">Job Responsibility:</span> {job.job_responsibility}</h2>
                    <h2 className="mt-4"><span className="font-bold ">Educational Requirements:</span></h2>
                    <h2 className="mt-4"><span className="mt-4">{job.educational_requirements}</span></h2>
                    <h2 className="font-bold mt-4">Experiences:</h2>
                    <h2 className="mt-4">{job.experiences}</h2>
                    
                </div>
                <div className="border bg-red-200">
                    <h2 className="text-2xl font-bold text-center border-b-2 border-pink-300 gap-5 m-4">Job Details</h2>
                    <div className="flex gap-2 m-2">
                        <h2 className="mt-1"><CiDollar></CiDollar></h2>
                        <h2><span className="font-bold">Salary : </span> {job.salary}</h2>
                    </div>
                    <div className="flex gap-2">
                        <h2 className="mt-1"><IoCalendar></IoCalendar></h2>
                        <h2><span className="font-bold">Job Title : </span> {job.job_title}</h2>
                    </div>
                    <h2 className="text-2xl font-bold text-center border-b-2 border-pink-300 gap-5 m-4">Contact Information</h2>
                    <div className="flex gap-2">
                        <h2 className="mt-1"><MdOutlinePhoneInTalk></MdOutlinePhoneInTalk></h2>
                        <h2><span className="font-bold">Phone : </span> {job.contact_information.phone}</h2>
                    </div>
                    <div className="flex gap-2">
                        <h2 className="mt-1"><MdOutlineMail></MdOutlineMail></h2>
                        <h2><span className="font-bold">Email : </span> {job.contact_information.email}</h2>
                    </div>
                    <div className="flex gap-2">
                        <h2 className="mt-1"><IoLocationOutline></IoLocationOutline></h2>
                        <h2><span className="font-bold">Adderss : </span> {job.contact_information.address}</h2>
                    </div>

                    
                    <button onClick={handleApplyJOb} className="btn btn-primary w-full mt-4">Apply Now</button>
                           
                    
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;