export default function Offer() {

    return (
        <div className="w-full min-h-screen bg-[#f4eff3] py-16 px-6">

            {/* Section Heading */}
            <h1 className="text-4xl font-extrabold text-center text-[#7f576e] mb-4">
                Features
            </h1>
            <p className="text-center text-gray-600 mb-12 text-lg">
                Smart tools to make school management seamless and AI-driven.
            </p>

            {/* Features Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

                {/* Card */}
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
                    <h3 className="text-xl font-bold text-[#7f576e] mb-2">AI-Powered Analytics</h3>
                    <p className="text-gray-600">Predict trends, insights, and student performance using AI.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
                    <h3 className="text-xl font-bold text-[#7f576e] mb-2">Attendance Automation</h3>
                    <p className="text-gray-600">Auto-track attendance using digital tools with zero manual work.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
                    <h3 className="text-xl font-bold text-[#7f576e] mb-2">Parent & Student Portal</h3>
                    <p className="text-gray-600">All academic updates in one secure online portal.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
                    <h3 className="text-xl font-bold text-[#7f576e] mb-2">Multi-Campus Management</h3>
                    <p className="text-gray-600">Manage multiple branches from a single dashboard.</p>
                </div>

            </div>

            {/* Why Choose Section */}
            <h1 className="text-4xl font-extrabold text-center text-[#7f576e] mt-20 mb-4">
                Why Choose Schola?
            </h1>

            <div className="max-w-3xl mx-auto">
                <ul className="space-y-4 text-lg text-gray-700">
                    <li className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        ⭐ Reduce manual work by <b>70%</b>
                    </li>

                    <li className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        🔮 Predict student performance in advance
                    </li>

                    <li className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        👨‍👩‍👧 Improve parent engagement by 50%
                    </li>

                    <li className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        🌐 Access from anywhere, anytime
                    </li>
                </ul>
            </div>
        </div>
    );
}
