import Link from 'next/link';
import React from 'react';

const UserPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    // console.log(users);

    return (
        <div className="w-10/12 mx-auto p-6 space-y-4">
            <h2 className="text-3xl font-bold text-center">Users Information</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    users.slice(0, 6).map((user) => (
                        <div key={user.id} className="card bg-base-100 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300">
                            <div className="card-body">
                                <h2 className="card-title">{user.name}</h2>

                                <p><span className="font-semibold">Username:</span> {user.username}</p>
                                <p><span className="font-semibold">Email:</span> {user.email}</p>
                                <p><span className="font-semibold">Phone:</span> {user.phone}</p>
                                <p><span className="font-semibold">Website:</span> {user.website}</p>

                                <div className="mt-2">
                                    <p className="font-semibold">Address:</p>
                                    <p className="text-sm">
                                        {user.address.street}, {user.address.city}
                                    </p>
                                </div>

                                <div className="card-actions justify-end mt-4">
                                    <Link href={`users/${user.id}`}>
                                        <button className="btn btn-primary btn-sm">
                                            View Profile
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default UserPage;