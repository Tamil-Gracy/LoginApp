

const Dashboard = () => {
    return (<div className="min-h-screen bg-black flex items-center justify-center p-6">
                <div className="bg-white rounded-2xl shadow-lg w-full max-w-6xl p-8">

                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-xl font-bold text-gray-900">Hello Tamil!</h1>
                        <p className="text-blue-600 text-sm">I help you manage your activities :)</p>
                    </div>

                    {/* Top 3 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-purple-200 rounded-lg p-6 text-center">
                            <p className="text-lg font-semibold text-gray-900">Today</p>
                            <p className="text-gray-800 mt-1">28th September</p>
                        </div>
                        <div className="bg-green-200 rounded-lg p-6 text-center">
                            <p className="text-lg font-semibold text-gray-900">Completed</p>
                            <p className="text-gray-800 mt-1">0</p>
                        </div>
                        <div className="bg-pink-200 rounded-lg p-6 text-center">
                            <p className="text-lg font-semibold text-gray-900">Pending</p>
                            <p className="text-gray-800 mt-1">0</p>
                        </div>
                    </div>

                    {/* Bottom section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* Add activity card */}
                        <div className="bg-yellow-100 rounded-lg p-6">
                            <h2 className="font-semibold text-gray-900 mb-4">Today's Activity</h2>
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    placeholder="Enter your activity.."
                                    className="flex-1 px-4 py-2 rounded-md border border-gray-300 bg-white
                           focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <button
                                    className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition"
                                >
                                    Add
                                </button>
                            </div>
                        </div>

                        {/* Manage activities table */}
                        <div className="bg-blue-50 rounded-lg p-6">
                            <h2 className="font-semibold text-gray-900 mb-4">Manage Activites</h2>
                            <div className="overflow-x-auto rounded-md">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-gray-200 text-gray-900 text-left">
                                            <th className="p-3 w-10">
                                                <input type="checkbox" />
                                            </th>
                                            <th className="p-3 font-bold">S.no</th>
                                            <th className="p-3 font-bold">Activity</th>
                                            <th className="p-3 font-bold">Status</th>
                                            <th className="p-3 font-bold">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr>
                                                <td colSpan="5" className="text-center text-red-500 py-4">
                                                    No Activities Added Yet
                                                </td>
                                            </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    )
}

export default Dashboard;