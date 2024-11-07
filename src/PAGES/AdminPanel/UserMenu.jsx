import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserMenu = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const token = localStorage.getItem("token");
        const fetchUsers = async () => {
            try {
                const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/users/findUser/${searchTerm}`,{token:token});
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };



    useEffect(() => {
        const results = users.filter(user =>
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(results);
    }, [users]);

    const handleDeleteUser = async (userId) => {
        try {
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/users/${userId}`);
            setUsers(users.filter(user => user._id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleMakeAdmin = async (userId) => {
        try {
            await axios.put(`${process.env.REACT_APP_SERVER_URL}/users/${userId}/make-admin`,{token:token});
            setUsers(users.map(user => user._id === userId ? { ...user, admin: true } : user));
        } catch (error) {
            console.error('Error making user admin:', error);
        }
    };
    const handleRemoveAdmin = async (userId) => {
        try {
            await axios.put(`${process.env.REACT_APP_SERVER_URL}/users/${userId}/remove-admin`,{token:token});
            setUsers(users.map(user => user._id === userId ? { ...user, admin: false } : user));
        } catch (error) {
            console.error('Error making user admin:', error);
        }
    };

    const handleFindUser = async () => {
        try {
            fetchUsers();
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">User Management</h1>
            <div className="flex items-center mb-4">
                <input
                    type="text"
                    placeholder="Search by email or name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full"
                />
                <button onClick={handleFindUser} className="bg-blue-500 text-white p-2 rounded-md ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-6 h-6" viewBox="0,0,256,256">
                        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                           stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                           font-family="none" font-weight="none" font-size="none" text-anchor="none"
                        >
                            <g transform="scale(5.12,5.12)">
                                <path
                                    d="M21,3c-9.39844,0 -17,7.60156 -17,17c0,9.39844 7.60156,17 17,17c3.35547,0 6.46094,-0.98437 9.09375,-2.65625l12.28125,12.28125l4.25,-4.25l-12.125,-12.09375c2.17969,-2.85937 3.5,-6.40234 3.5,-10.28125c0,-9.39844 -7.60156,-17 -17,-17zM21,7c7.19922,0 13,5.80078 13,13c0,7.19922 -5.80078,13 -13,13c-7.19922,0 -13,-5.80078 -13,-13c0,-7.19922 5.80078,-13 13,-13z"></path>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredUsers?.map(user => (
                    <div key={user._id} className="p-4 border border-gray-300 rounded-md">
                        <h2 className="text-xl font-semibold">{user.name} {user.lastName}</h2>
                        <p><strong>Username:</strong> {user.username ? user.username : "UserName"}</p>
                        <p><strong>Email:</strong> {user.email ? user.email : "Email"}</p>
                        <p><strong>Profile Picture:</strong> <img
                            src={user.pfp ? user.pfp : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"}
                            alt="Profile" className="w-16 h-16 rounded-full"/></p>
                        <p><strong>Admin:</strong> {user.admin ? 'Yes' : 'No'}</p>
                        <p><strong>Address Line 1:</strong> {user.addressLine1?user.addressLine1:"AddressLine1"}</p>
                        <p><strong>Address Line 2:</strong> {user.addressLine2?user.addressLine2:"AdressLine2"}</p>
                        <p><strong>Town:</strong> {user.town?user.town:"Town"}</p>
                        <p><strong>City:</strong> {user.city?user.city:"City"}</p>
                        <p><strong>Pin Code:</strong> {user.pinCode?user.pinCode:"Pincode"}</p>
                        <p><strong>Phone Number:</strong> {user.phoneNumber?user.phoneNumber:"PhoneNumber"}</p>
                        <p><strong>Gender:</strong> {user.gender?user.gender:"Gender"}</p>
                        <button
                            onClick={() => handleDeleteUser(user._id)}
                            className="bg-red-500 text-white px-4 py-2 rounded mt-2"
                        >
                            Delete User
                        </button>
                        {!user.admin ? (
                            <button
                                onClick={() => handleMakeAdmin(user._id)}
                                className="bg-blue-500 text-white px-4 py-2 rounded mt-2 ml-2"
                            >
                                Make Admin
                            </button>
                        ):(
                            <button
                                onClick={() => handleRemoveAdmin(user._id)}
                                className="bg-blue-500 text-white px-4 py-2 rounded mt-2 ml-2"
                            >
                                Remove Admin
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserMenu;