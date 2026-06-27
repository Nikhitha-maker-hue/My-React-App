function EmployeeListApp(){
    const emp=[
        {
            empNo:101,
            empName:'Pravalika',
            job:'Sr Manager',
            salary:'196000',
            mobileNo:'9876543208',
            emailId:'pravalikamudhiraj@gmail.com',
        },
        {
            empNo:102,
            empName:'Nikhitha',
            job:' Manager',
            salary:'96000',
            mobileNo:'9678543206',
            emailId:'Nikhithabapuji@gmail.com',
        },
        {
            empNo:103,
            empName:'Gayathri',
            job:'Software Engineer',
            salary:'86000',
            mobileNo:'8765890543',
            emailId:'gayathri04@gmail.com',
        },
        {
            empNo:104,
            empName:'Sai prasanna',
            job:'Business Analyst',
            salary:'85000',
            mobileNo:'9876578960',
            emailId:'Saiprasanna@gmail.com',
        },
        {
            empNo:105,
            empName:'Veena',
            job:'Business Analyst',
            salary:'96000',
            mobileNo:'9789085336',
            emailId:'veenasamineni@gmail.com',
        },
        {
            empNo:106,
            empName:'Rahul',
            job:'Sr Software Engieer',
            salary:'96000',
            mobileNo:'8976547804',
            emailId:'Rahul@gmail.com',
        },
        {
            empNo:107,
            empName:'Fathima',
            job:'Software Engineer',
            salary:'76000',
            mobileNo:'9865432801',
            emailId:'fathima09@gmail.com',
        },
        {
            empNo:108,
            empName:'Harshitha',
            job:'Business Analyst',
            salary:'100000',
            mobileNo:'9564321806',
            emailId:'harshithachowdary@gmail.com',
        }
    ]
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
                        <th> MobileNo</th>
                        <th>EmailId</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="table-primary">
            {
                emp.map(list => {
                    return <tr>
                        <td>{list.empNo}</td>
                        <td>{list.empName}</td>
                        <td>{list.job}</td>
                        <td>{list.salary}</td>
                        <td>{list.mobileNo}</td>
                        <td>{list.emailId}</td>
                        <td>
                            <button className="btn btn-primary">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                }
                )
            }
            </tbody>
            </table>
        </div>
    )
}
export default EmployeeListApp;