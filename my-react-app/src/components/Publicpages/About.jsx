export default function About() {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start p-8">
            <div className="bg-white shadow-lg rounded-xl p-8 max-w-3xl w-full">
                
                <h1 className="text-3xl font-bold text-blue-600 mb-4">
                    About Schola
                </h1>

                <p className="text-gray-700 leading-relaxed mb-4">
                    Schola is an advanced Student Intelligence System designed to 
                    simplify school management and improve decision-making. 
                    It brings together powerful tools for managing students, teachers, 
                    schools, attendance, performance tracking, and AI insights — all in one platform.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">
                    Our Mission
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    To empower schools with technology that automates operations, 
                    enhances learning outcomes, and ensures transparency for parents, 
                    teachers, and administrators.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-800">
                    What We Provide
                </h2>

                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                    <li>Smart dashboards for Super Admin, Admin, Teachers</li>
                    <li>Attendance automation</li>
                    <li>Student performance analytics</li>
                    <li>AI-powered insights and reporting</li>
                    <li>School and user management tools</li>
                    <li>Secure login and role-based access</li>
                </ul>

                <p className="text-gray-700 leading-relaxed mt-6">
                    We believe modern schools need modern solutions — and Schola is 
                    built to deliver exactly that.
                </p>
            </div>
        </div>
    );
}
