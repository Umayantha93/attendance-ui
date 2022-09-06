import axios from "axios";
import React, {useState, useEffect} from "react"

function Attendance() {

    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/get-file')
        .then(res =>{
            setAttendance(res.data)
        },[])
    },[])

    return (
        <div>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Check In</th>
                                <th scope="col">Check Out</th>
                                <th scope="col">Total Working Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                                {attendance.map(attend => 
                                    <tr key={attend.id}>
                                        <td>{attend.name}</td>
                                        <td>{attend.check_in}</td>
                                        <td>{attend.check_out}</td>
                                        <td>{attend.working_hours}</td>
                                    </tr>
                                        )}
                            
                        </tbody>
                    </table>
                </div>    
        </div>
    )

}

export default Attendance