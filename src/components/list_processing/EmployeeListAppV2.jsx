import { useState } from "react";

function EmployeesListv2(){
    const emps=[
        {
            empNo:101,
            empName:"sai",
            job:'Bussiness Analyst',
            salary:200000,
            mobileNo:'7788995566',
            emailId:'Harshi@gmail.com'
        },
        {
            empNo:102,
            empName:"prasanna",
            job:'Manager ',
            salary:96000,
            mobileNo:'7766889955',
            emailId:'Ankitha@gmail.com'
        },
        {
            empNo:103,
            empName:"Gayathri",
            job:'Clerk ',
            salary:65000,
            mobileNo:'9977885566',
            emailId:'Gayathri@gmail.com'
        },
        {
            empNo:104,
            empName:"Venna",
            job:'Software Engineer ',
            salary:46000,
            mobileNo:'7788559966',
            emailId:'Vyshu@gmail.com'
        },
        {
            empNo:105,
            empName:"Saiprasanna",
            job:'Sr Software Engineer ',
            salary:156000,
            mobileNo:'7799556688',
            emailId:'srija@gmail.com'
        },
        {
            empNo:106,
            empName:"abhi",
            job:'Software Engineer ',
            salary:66000,
            mobileNo:'8899556677',
            emailId:'Valli@gmail.com'
        },
        {
            empNo:107,
            empName:"Priya",
            job:'Bussiness Analyst',
            salary:56000,
            mobileNo:'7755889966',
            emailId:'Preethi@gmail.com'
        },
        {
            empNo:108,
            empName:"rish",
            job:'Bussiness Analyst',
            salary:56000,
            mobileNo:'7899785566',
            emailId:'Nish@gmail.com'
        },
        {
            empNo:109,
            empName:"Maha",
            job:'Bussiness Analyst',
            salary:56000,
            mobileNo:'7788995566',
            emailId:'Maha@gmail.com'
        },
        {
            empNo:110,
            empName:"Alice",
            job:'Bussiness Analyst',
            salary:56000,
            mobileNo:'7788995566',
            emailId:'Alice@gmail.com'
        }
    ];
    const [empsList, setEmpsList] = useState([...emps]);
    function deleteEmp (empNo){
        let emps = empsList.filter(emp=>emp.empNo != empNo);
        setEmpsList([...emps]);
    }
    return(
        <div>
            <h3>Employee List v2</h3>
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr><th>EmpNo</th>
                    <th>EmpName</th>
                    <th>Job</th>
                    <th>Salary</th>
                    <th>MobileNo</th>
                    <th>EmailId</th>
                    <th>Actions</th></tr>
                </thead>
                    <tbody className="table-primary">
                    {
                empsList.map(emp=>{
                    return <tr key={emp.empNo}>
                        <td>{emp.empNo}</td>
                        <td>{emp.empName}</td>
                        <td>{emp.job}</td>
                        <td>{emp.salary}</td>
                        <td>{emp.mobileNo}</td>
                        <td>{emp.emailId}</td>
                        <td>
                            <button className="btn btn-primary">Edit</button>
                            <button className="btn btn-danger"
                            onClick={() => deleteEmp(emp.empNo)}
                            >Delete</button>
                        </td>
                    </tr>
                })
            }
                    </tbody>
                
            </table>
            
        </div>
    )
}
export default EmployeesListv2;