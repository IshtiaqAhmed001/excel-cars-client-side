import React from 'react';
import { Table } from 'react-bootstrap';
import useRegisteredUsers from '../../hooks/useRegisteredUsers';

const MakeAdmin = () => {
    const { registeredUsers } = useRegisteredUsers();

    const handleMakeAdmin = email => {
        const updatedUsers = registeredUsers.filter(user => user.email === email);
        updatedUsers[0].role = "admin";
        const updatedUser = updatedUsers[0];

        const url = `https://floating-taiga-26098.herokuapp.com/users/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('User role updated to Admin!');
                    window.location.reload();
                }
            })
    }

    return (
        <div>
            <h1 className="display-5 mt-5 text-primary fw-bold">Number of Registered Users: {registeredUsers.length}</h1>
            <hr className="w-50 mx-auto mb-5" />

            <div className="my-5 container">
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th className="fs-5">User Name</th>
                            <th className="fs-5">User Email</th>
                            <th className="fs-5">User Role</th>
                            <th className="fs-5">Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            registeredUsers.map(user => < tr >
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td><strong>{user.role}</strong></td>
                                <td><button onClick={() => handleMakeAdmin(user.email)} className="btn btn-success">Make Admin</button></td>

                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MakeAdmin;