// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
//
// const ProfilePage = () => {
//     const user = useSelector((state) => state.User);
//     const [isEditing, setIsEditing] = useState(false);
//     const [name, setName] = useState(user.name);
//     const [lastName, setLastName] = useState("Bansal");
//
//     const handleEditToggle = () => {
//         setIsEditing(!isEditing);
//     };
//
//     const handleSave = () => {
//         // Add save logic here
//         setIsEditing(false);
//     };
//
//     return (
//         <div className="font-inter my-auto flex flex-col items-start justify-center p-4 w-full h-screen bg-[#f0f0f0]">
//             <div className="w-full md:w-1/2 mx-auto h-auto flex flex-col justify-start gap-4 bg-white p-10">
//                 <h1 className="text-center text-2xl font-medium">Personal Details</h1>
//                 <div className="mx-auto flex flex-col md:flex-row items-center justify-start gap-4 w-full">
//                     <div className="w-full md:w-1/2 flex-col gap-4 border-r border-r-gray-600 flex items-center justify-center">
//                         <img src={user.pfp} className="w-[150px] h-[150px] rounded-full object-cover" />
//                         <input type="file" name="profile" id="profilePic" className="float-right" />
//                     </div>
//                     <div className="w-full md:w-1/2 ml-0 md:ml-10">
//                         <form className="w-full h-full px-4 py-6" id="checkout-form" name="checkout">
//                             <div className="flex flex-wrap -mx-3 mb-3 md:mb-6 md:flex-row flex-col md:justify-evenly justify-start">
//                                 <div className="w-full md:w-1/2 px-3">
//                                     <label className="block tracking-wide text-accent text-sm font-normal mb-2" htmlFor="grid-name">User Name</label>
//                                     <input
//                                         required
//                                         className="appearance-none block w-full bg-gray-100 text-accent border border-gray-100 rounded py-3 text-sm px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                         id="grid-name"
//                                         name="firstName"
//                                         disabled={!isEditing}
//                                         value={name}
//                                         onChange={(e) => setName(e.target.value)}
//                                     />
//                                 </div>
//                                 <div className="w-full md:w-1/2 px-3">
//                                     <label className="block tracking-wide text-accent text-sm font-normal mb-2" htmlFor="grid-last-name">Last Name</label>
//                                     <input
//                                         required
//                                         className="appearance-none block w-full bg-gray-100 text-accent border border-gray-100 rounded py-3 text-sm px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                         id="grid-last-name"
//                                         name="lastName"
//                                         disabled={!isEditing}
//                                         value={lastName}
//                                         onChange={(e) => setLastName(e.target.value)}
//                                     />
//                                 </div>
//                             </div>
//                             <div className="flex justify-end">
//                                 {isEditing ? (
//                                     <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSave}>Save</button>
//                                 ) : (
//                                     <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={handleEditToggle}>Edit</button>
//                                 )}
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <hr />
//             <div className="w-full md:w-1/2 mx-auto max-h-[400px] overflow-y-scroll h-auto flex flex-col items-center justify-start gap-4 bg-white p-10 example">
//                 <h1 className="text-2xl text-black mb-10 font-medium">My Orders</h1>
//                 <h1>You have not placed any orders.</h1>
//             </div>
//         </div>
//     );
// };
//
// export default ProfilePage;
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";

const ProfilePage = () => {
    const token = localStorage.getItem("token")
    const user = useSelector((state) => state.User);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(user.name);
    const [lastName, setLastName] = useState("Bansal");
    const [profilePic, setProfilePic] = useState(user.pfp);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        // Add save logic here
        setIsEditing(false);
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('token', token);
        if (file) {
            try {
                const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/updateProfilePic`,{token:token} ,formData
                );

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
        <div className="font-inter my-auto flex flex-col items-start justify-center p-4 w-full h-screen bg-[#f0f0f0]">
            <div className="w-full md:w-1/2 mx-auto h-auto flex flex-col justify-start gap-4 bg-white p-10">
                <h1 className="text-center text-2xl font-medium">Personal Details</h1>
                <div className="mx-auto flex flex-col md:flex-row items-center justify-start gap-4 w-full">
                    <div className="w-full md:w-1/2 flex-col gap-4 border-r border-r-gray-600 flex items-center justify-center">
                        <img src={profilePic} className="w-[150px] h-[150px] rounded-full object-cover" alt="Profile" />
                        <input type="file" name="profile" id="profilePic" className="float-right" onChange={handleFileChange} />
                    </div>
                    <div className="w-full md:w-1/2 ml-0 md:ml-10">
                        <form className="w-full h-full px-4 py-6" id="checkout-form" name="checkout">
                            <div className="flex flex-wrap -mx-3 mb-3 md:mb-6 md:flex-row flex-col md:justify-evenly justify-start">
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block tracking-wide text-accent text-sm font-normal mb-2" htmlFor="grid-name">User Name</label>
                                    <input
                                        required
                                        className="appearance-none block w-full bg-gray-100 text-accent border border-gray-100 rounded py-3 text-sm px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-name"
                                        name="firstName"
                                        disabled={!isEditing}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block tracking-wide text-accent text-sm font-normal mb-2" htmlFor="grid-last-name">Last Name</label>
                                    <input
                                        required
                                        className="appearance-none block w-full bg-gray-100 text-accent border border-gray-100 rounded py-3 text-sm px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-last-name"
                                        name="lastName"
                                        disabled={!isEditing}
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                {isEditing ? (
                                    <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSave}>Save</button>
                                ) : (
                                    <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={handleEditToggle}>Edit</button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <hr />
            <div className="w-full md:w-1/2 mx-auto max-h-[400px] overflow-y-scroll h-auto flex flex-col items-center justify-start gap-4 bg-white p-10 example">
                <h1 className="text-2xl text-black mb-10 font-medium">My Orders</h1>
                <h1>You have not placed any orders.</h1>
            </div>
        </div>
    );
};

export default ProfilePage;