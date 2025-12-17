import { MdOutlinePhoneAndroid, MdOutlineEmail } from "react-icons/md";

export default function Topbar() {
    return (
        <div className="w-full bg-[#7f576e] text-[#FFFCFB]">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-1 text-sm">
                
                {/* Phone */}
                <p className="flex items-center gap-2 mb-1 sm:mb-0">
                    <MdOutlinePhoneAndroid className="text-[16px]" />
                    <span>Contact: 9866664073</span>
                </p>

                {/* Email */}
                <p className="flex items-center gap-2">
                    <MdOutlineEmail className="text-[16px]" />
                    <span>Email: schools@gmail.com</span>
                </p>

            </div>
        </div>
    );
}
