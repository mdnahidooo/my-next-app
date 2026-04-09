import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "User Profile",
    description: "",
};

const UsersDetailPage = async ({ params }) => {
    const { userId } = await params;
    // console.log(userId, 'user id');
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();

    return (
        <div>
            <h2 className='text-xl text-center mt-4'>Personal Info</h2>

            <div className="flex items-center justify-center p-6">
                <div className="card w-full max-w-lg bg-base-100 shadow-2xl">

                    <div className="card-body space-y-3">
                        <h2 className="card-title text-2xl">{user.name}</h2>

                        <p><span className="font-semibold">Username:</span> {user.username}</p>
                        <p><span className="font-semibold">Email:</span> {user.email}</p>
                        <p><span className="font-semibold">Phone:</span> {user.phone}</p>
                        <p><span className="font-semibold">Website:</span> {user.website}</p>

                        <div className="divider"></div>

                        <div>
                            <h3 className="font-bold">Address</h3>
                            <p className="text-sm">
                                {user.address.street}, {user.address.suite}
                            </p>
                            <p className="text-sm">
                                {user.address.city}, {user.address.zipcode}
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold">Company</h3>
                            <p className="text-sm">{user.company.name}</p>
                            <p className="text-xs text-gray-500">
                                {user.company.catchPhrase}
                            </p>
                        </div>

                        <div className="card-actions justify-end mt-4">
                            <Link href="/users" className="btn btn-outline btn-info btn-sm">
                                Back
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UsersDetailPage;