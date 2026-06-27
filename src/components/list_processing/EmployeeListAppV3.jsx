import { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

function EmployeeListAppV3(){
    const emps = [
        { 
            empNo: 101,
            empName: 'Pravalika',
            job: 'Business Analyst',
            salary: 1000,
            mobileNo: '7788996655',
            emailId: 'pravalikamudhiraj@gmail.com'
        },
         { 
            empNo: 102,
            empName: 'Sai Prasanna',
            job: 'Manager',
            salary: 96000,
            mobileNo: '7700996655',
            emailId: 'saiprasanna04@gmail.com'
        },
         { 
            empNo: 103,
            empName: 'Gathri',
            job: 'Clerk',
            salary: 28000,
            mobileNo: '7788996644',
            emailId: 'Gathri74@gmail.com'
        },
         { 
            empNo: 104,
            empName: 'Veena',
            job: 'Software Developer',
            salary: 50000,
            mobileNo: '2288996655',
            emailId: 'veenasamineni@gmail.com'
        },
         { 
            empNo: 105,
            empName: 'Nikhitha',
            job: 'Software engineer',
            salary: 90000,
            mobileNo: '7711887755',
            emailId: 'nikhitha04@gmail.com'
        },
         { 
            empNo: 106,
            empName: 'Rani',
            job: 'sr Software Developer',
            salary: 11000,
            mobileNo: '9900116655',
            emailId: 'Rani@gmail.com'
        },
         { 
            empNo: 107,
            empName: 'Harshitha',
            job: ' Sr Business Analyst',
            salary: 57900,
            mobileNo: '7789096655',
            emailId: 'Harshitha@gmail.com'
        },
         { 
            empNo: 108,
            empName: 'Chinni',
            job: 'Jr Business Analyst',
            salary: 50000,
            mobileNo: '7799896655',
            emailId: 'chinni@gmail.com'
        },
         { 
            empNo: 109,
            empName: 'Nandhini',
            job: ' Jr Software Developer',
            salary: 24000,
            mobileNo: '99552296655',
            emailId: 'nandhini@gmail.com'
        },
         { 
            empNo: 110,
            empName: 'Babbu',
            job: 'Full stack developer',
            salary: 100000,
            mobileNo: '7711006655',
            emailId: 'babbu@gmail.com'
        },
        
    ];
    const [empsList, setEmpsList] = useState([...emps]);
    const [dialogOpenFlag, setdialogOpenFlag] = useState(false);
    const [deletingEmpNo, setdeletingEmpNo] = useState('');

    function deleteEmp (EmpNo){
        // alert(EmpNo)
        setdeletingEmpNo(EmpNo);
        setdialogOpenFlag(true);
        }

        function yesHandler(){
            setdialogOpenFlag(false);
            let emps = empsList.filter(emp=>emp.EmpNo != deletingEmpNo);
            setEmpsList([...emps]);
        }
        function noHandler(){
            setdialogOpenFlag(false);
        }
    return(
        <div>
            <h3>Employee List</h3>
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>EmpNo</th>
                        <th>EmpName</th>
                        <th>Job</th>
                        <th>Salary</th>
                        <th>EmailId</th>
                        <th>MobileNo</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="table-primary">
            
            {
                empsList.map(emp=>{
                    return <tr key={emp.EmpNo}>
                        <td>{emp.empNo}</td>
                        <td>{emp.empName}</td>
                        <td>{emp.job}</td>
                        <td>{emp.salary}</td>
                        <td>{emp.emailId}</td>
                        <td>{emp.mobileNo}</td>
                        <td>
                            <button className="btn btn-primary">Edit</button>
                            <button className="btn btn-danger" onClick={()=>deleteEmp(emp.empNo)}>Delete</button>
                        </td>
                    </tr>
                })
            }
            </tbody>
            </table>
            <Dialog open={true}>
                <DialogTitle>Delete caution</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Do you want to delete this employee data?
                    </DialogContentText>
                    <DialogActions>
                        <button className="btn btn-primary" onClick={yesHandler}>Yes</button>
                        <button className="btn btn-danger" onClick={noHandler}>No</button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    )
}
export default EmployeeListAppV3;