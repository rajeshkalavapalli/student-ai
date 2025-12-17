import { Link } from 'react-router-dom';

export default function Intro() {
  return (
    <div className="relative w-full h-fit py-16 overflow-hidden bg-gradient-to-br from-[#f4e8f1] via-[#f7f2f6] to-[#eadbe4]">

      {/* Background Blurred Design Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#cfa8be] opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-32 w-80 h-80 bg-[#7f576e] opacity-20 blur-3xl rounded-full"></div>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center relative">
        <h1 className="font-bold text-5xl hover:text-[#7f576e]">Schola</h1>
        <p className="font-semibold mt-2 text-lg">Unified School Management, Powered by AI</p>

        <div className="text-3xl mt-8 text-[#7f576e] hover:text-[#37353E]">
          <h3>“The future of school management — Smart, Simple, AI-Ready.”</h3>
        </div>

        <p className="mt-8 max-w-3xl">
          A modern platform to simplify administration, boost academic performance, and unify all school
          operations with AI-powered automation.
        </p>

        <div className="mt-10 flex flex-row gap-6 items-center">
          <Link to="/Login">
            <button className="bg-[#7f576e] text-white px-6 py-2 rounded-lg hover:bg-[#68475c]">
              Get started
            </button>
          </Link>

          <button className="bg-white border border-[#7f576e] text-[#7f576e] px-6 py-2 rounded-lg hover:bg-[#f4e8ef]">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
}
