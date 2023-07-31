import React from 'react'
import { useSelector } from 'react-redux'

const ProfilePage = () => {

    const user = useSelector((state)=>state.User);

    return (
        <div>
            <div class=" font-inter my-auto flex flex-col items-start justify-center p-4 w-full h-screen bg-[#f0f0f0]">
                <div class="w-1/2 mx-auto h-[400px]  flex flex-col justify-start gap-4 bg-white p-10">
                    <h1 class="text-center text-2xl font-medium">Personal Details</h1>
                    <div class=" mx-auto   flex flex-row items-center justify-start gap-4 w-full ">
                        <div class="w-1/2  flex-col gap-4 border-r border-r-gray-600 flex items-center justify-center">
                            <img src={user.pfp} class="w-[150px] h-[150px] rounded-full object-cover" /><input type="file" name="profile" id="profilePic" class="float-right" />
                        </div>
                        <div class="w-1/2 ml-10">
                            <form class="w-full h-full  px-4 py-6" id="checkout-form" name="checkout">
                                <div class="flex flex-wrap -mx-3 mb-3 md:mb-6 md:flex-row flex-col md:justify-evenly justify-start">
                                    <div class="w-full md:w-1/2 px-3 ">
                                        <label class="block tracking-wide text-accent text-sm font-normal mb-2" for="grid-name">User Name</label>
                                        <input required="" class="appearance-none block w-full bg-gray-100 text-accent border border-grabg-gray-100 rounded py-3 text-sm px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" name="firstName" disabled="" value={user.name} readonly/>
                                    </div>
                                    <div class="w-full md:w-1/2 px-3 ">
                                        <label class="block tracking-wide text-accent text-sm font-normal mb-2" for="grid-re-email">Last name</label>
                                        <input required="" class="appearance-none block w-full bg-gray-100 text-accent border border-grabg-gray-100 rounded py-3 text-sm px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" name="lastName" disabled="" value="Bansal" />
                                    </div>
                                </div>
                                <div class="flex flex-wrap -mx-3 mb-2 mt-8">
                                    <div class="w-full px-3 ">
                                        <label class="block tracking-wide text-accent text-sm font-normal mb-2" for="grid-phone">Email</label>
                                        <input required="" class="appearance-none block w-full bg-gray-100 text-accent border border-grabg-gray-100 rounded py-3 text-sm px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" name="email" type="email" disabled="" value={user.email} readonly/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="w-1/2 mx-auto max-h-[400px] overflow-y-scroll h-auto flex flex-col items-center justify-start gap-4 bg-white p-10 example">
                    <h1 class="text-2xl text-black mb-10 font-medium">My Orders</h1>
                    <h1>You have not placed any orders. </h1>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage