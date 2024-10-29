import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";

const ProfilePage = () => {
    const token = localStorage.getItem("token");
    const user = useSelector((state) => state.User);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(user.name);
    const [lastName, setLastName] = useState(user.lastName);
    const [username, setUsername] = useState(user.username);
    const [profilePic, setProfilePic] = useState(user.pfp);
    const [addressLine1, setAddressLine1] = useState(user.addressLine1);
    const [addressLine2, setAddressLine2] = useState(user.addressLine2);
    const [town, setTown] = useState(user.town);
    const [city, setCity] = useState(user.city);
    const [pinCode, setPinCode] = useState(user.pinCode);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    const [email, setEmail] = useState(user.email);
    const [gender, setGender] = useState(user.gender);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = async () => {
        const updatedDetails = {
            name,
            lastName,
            username,
            addressLine1,
            addressLine2,
            town,
            city,
            pinCode,
            phoneNumber,
            email,
            gender,
            token
        };

        try {
            const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/users/updateUserDetails`, updatedDetails, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                console.log('User details updated successfully');
            } else {
                console.error('Failed to update user details');
            }
        } catch (error) {
            console.error('Error updating user details:', error);
        }

        setIsEditing(false);
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('token', token);
        if (file) {
            try {
                const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/updateProfilePic`, { token: token }, formData);

                if (response.status === 200) {
                    const data = response.data;
                    setProfilePic(data.filePath); // Assuming the backend returns the file path
                } else {
                    console.error('Failed to upload profile picture');
                }
            } catch (error) {
                console.error('Error uploading profile picture:', error);
            }
        }
    };

    return (
        <div className="font-inter my-auto flex flex-col items-start justify-center p-4 w-full h-fit bg-[#f0f0f0]">
            <div className="w-full md:w-1/2 mx-auto h-auto flex flex-col justify-start gap-4 bg-white p-10 rounded-lg shadow-lg">
                <h1 className="text-center text-2xl font-medium">Personal Details</h1>
                <div className="mx-auto flex flex-col items-center justify-start gap-4 w-full">
                    <div className="w-full flex-col gap-4 flex items-center justify-center">
                        <img src={profilePic} className="w-[150px] h-[150px] rounded-full object-cover" alt="Profile" />
                        <input type="file" name="profile" id="profilePic" className="float-right" onChange={handleFileChange} />
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-xl font-medium mb-4">Contact Information</h2>
                            <form className="w-full h-full px-4 py-6" id="checkout-form" name="checkout">
                                <div className="flex flex-wrap -mx-3 mb-3 md:mb-6">
                                    <div className="w-full px-3">
                                        <label className="block tracking-wide text-gray-700 text-sm font-normal mb-2" htmlFor="grid-name">User Name</label>
                                        <input
                                            required
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 text-sm px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-name"
                                            name="firstName"
                                            disabled={!isEditing}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-full px-3">
                                        <label className="block tracking-wide text-gray-700 text-sm font-normal mb-2" htmlFor="grid-last-name">Last Name</label>
                                        <input
                                            required
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 text-sm px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-last-name"
                                            name="lastName"
                                            disabled={!isEditing}
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-full px-3">
                                        <label className="block tracking-wide text-gray-700 text-sm font-normal mb-2" htmlFor="grid-email">Email</label>
                                        <input
                                            required
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 text-sm px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-email"
                                            name="email"
                                            disabled={!isEditing}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-full px-3">
                                        <label className="block tracking-wide text-gray-700 text-sm font-normal mb-2" htmlFor="grid-phone-number">Phone Number</label>
                                        <input
                                            required
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 text-sm px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-phone-number"
                                            name="phoneNumber"
                                            disabled={!isEditing}
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-full px-3">
                                        <label className="block tracking-wide text-gray-700 text-sm font-normal mb-2" htmlFor="grid-gender">Gender</label>
                                        <select
                                            required
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 text-sm px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-gender"
                                            name="gender"
                                            disabled={!isEditing}
                                            value={gender}
                                            onChange={(e) => setGender(e.target.value)}
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-xl font-medium mb-4">Address</h2>
                            <form className="w-full h-full px-4 py-6" id="checkout-form" name="checkout">
                                <div className="flex flex-wrap -mx-3 mb-3 md:mb-6">
                                    <div className="w-full px-3">
                                        <label className="block tracking-wide text-gray-700 text-sm font-normal mb-2" htmlFor="grid-address-line1">Address Line 1</label>
                                        <input
                                            required
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 text-sm px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-address-line1"
                                            name="addressLine1"
                                            disabled={!isEditing}
                                            value={addressLine1}
                                            onChange={(e) => setAddressLine1(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-full px-3">
                                        <label className="block tracking-wide text-gray-700 text-sm font-normal mb-2" htmlFor="grid-address-line2">Address Line 2</label>
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 text-sm px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-address-line2"
                                            name="addressLine2"
                                            disabled={!isEditing}
                                            value={addressLine2}
                                            onChange={(e) => setAddressLine2(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-full px-3">
                                        <label className="block tracking-wide text-gray-700 text-sm font-normal mb-2" htmlFor="grid-town">Town</label>
                                        <input
                                            required
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 text-sm px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-town"
                                            name="town"
                                            disabled={!isEditing}
                                            value={town}
                                            onChange={(e) => setTown(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-full px-3">
                                        <label className="block tracking-wide text-gray-700 text-sm font-normal mb-2" htmlFor="grid-city">City</label>
                                        <input
                                            required
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 text-sm px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-city"
                                            name="city"
                                            disabled={!isEditing}
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-full px-3">
                                        <label className="block tracking-wide text-gray-700 text-sm font-normal mb-2" htmlFor="grid-pin-code">PIN Code</label>
                                        <input
                                            required
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 text-sm px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-pin-code"
                                            name="pinCode"
                                            disabled={!isEditing}
                                            value={pinCode}
                                            onChange={(e) => setPinCode(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex justify-end w-full">
                        {isEditing ? (
                            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSave}>Save</button>
                        ) : (
                            <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={handleEditToggle}>Edit</button>
                        )}
                    </div>
                </div>
            </div>
            <hr />
            <div className="w-full md:w-1/2 mx-auto max-h-[400px] overflow-y-scroll h-auto flex flex-col items-center justify-start gap-4 bg-white p-10 rounded-lg shadow-lg">
                <h1 className="text-2xl text-black mb-10 font-medium">My Orders</h1>
                <h1>You have not placed any orders.</h1>
            </div>
        </div>
    );
};

export default ProfilePage;