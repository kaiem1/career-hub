import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";



const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure className="mt-5">
    
  </figure>
  <div className="card-body">
  <img className="w-32" 
      src={logo}
      alt="" />
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-5 text-[#3048e6]">{remote_or_onsite}</button>
        <button className="px-5 text-[#3048e6] py-2 font-extrabold border rounded border-[#7E90FE]">{job_type}</button>
    </div>
    <div className="mt-4 flex gap-3">
        <h2 className="flex "><IoLocationOutline className="text-2xl mr-2"></IoLocationOutline>{location}</h2>
        <h2 className="flex"><AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar>{salary}</h2>
    </div>
    <div className="card-actions ">
     <Link to={`/job/${id}`}>
     <button className="btn btn-primary">View Details</button>
     </Link>
    </div>
  </div>
</div>
    );
};

export default Job;