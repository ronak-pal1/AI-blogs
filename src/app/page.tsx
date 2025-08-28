import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-1 flex-col items-center justify-center relative z-10">

      <div className="w-full h-full flex-[0.15] flex">
        <div className="w-full h-full flex-[0.2]"></div>
        <div className="w-full h-full flex-[0.8]  border-r border-l border-[#e5cbba] flex items-center bg-background">
          <div className="w-full flex items-center justify-between mx-4 my-5">
            <div className="space-y-1">
              <h1 className="text-2xl font-semibold ">AL/ML Blogs <span className="text-[9px] text-gray-500 font-light">by Ronak Paul</span> </h1>
              <p className="text-xs text-gray-500">Last updated: 28 Aug 2025</p>
            </div>

            <div className="flex flex-col items-end space-y-3">
            <div className="flex items-center space-x-7">
              <Link
                href="https://github.com/ronak-pal1"
                className="text-xs text-blue-500 flex items-center space-x-2"
              >
                GitHub
              </Link>

              <Link
                href="https://linkedin.com/in/ronak-pal1"
                className="text-xs text-blue-500 flex items-center space-x-2"
              >
                LinkedIn
              </Link>

              <Link
                href="https://x.com/ronak_pal1"
                className="text-xs text-blue-500 flex items-center space-x-2"
              >
                X
              </Link>

              <Link
                href="https://ronakpaul.com"
                className="text-xs text-blue-500 flex items-center space-x-2"
              >
                Portfolio
              </Link>
            </div>

            <div className="flex items-center space-x-3 py-2 px-3 border border-[#e5cbba] rounded-full">
              <CiSearch className="text-xs"/>
              <input type="text" placeholder="Search" className=" w-[300px] text-xs outline-none border-none"/>
            </div>
            </div>
           
          </div>
        </div>
        <div className="w-full h-full flex-[0.2]"></div>
      </div>

      <div className="w-full h-full flex-[0.85] flex border-t border-[#e5cbba] overflow-y-hidden">
        <div className="w-full h-full flex-[0.2]"></div>
        <div className="w-full h-full flex-[0.8] border-r border-l border-[#e5cbba] flex flex-col overflow-y-scroll custom-scrollbar bg-background">
          <div className="flex flex-col space-y-10 mx-4 my-5">
            <BlogCard
              title="AI bubble is bursting"
              subtitle="AI is not a panacea. More hype, less action. It's time to focus on the fundamentals. So, let's get started."
              date="28 Aug 2025"
            />

            <BlogCard
              title="AI bubble is bursting"
              subtitle="AI is not a panacea. More hype, less action. It's time to focus on the fundamentals. So, let's get started. AI is not a panacea. More hype, less action. It's time to focus on the fundamentals. So, let's get started. AI is not a panacea. More hype, less action. It's time to focus on the fundamentals. So, let's get started."
              date="28 Aug 2025"
            />

            <BlogCard
              title="AI bubble is bursting"
              subtitle="AI is not a panacea. More hype, less action. It's time to focus on the fundamentals. So, let's get started."
              date="28 Aug 2025"
            />

            <BlogCard
              title="AI bubble is bursting"
              subtitle="AI is not a panacea. More hype, less action. It's time to focus on the fundamentals. So, let's get started. AI is not a panacea. More hype, less action. It's time to focus on the fundamentals. So, let's get started. AI is not a panacea. More hype, less action. It's time to focus on the fundamentals. So, let's get started."
              date="28 Aug 2025"
            />

            <BlogCard
              title="AI bubble is bursting"
              subtitle="AI is not a panacea. More hype, less action. It's time to focus on the fundamentals. So, let's get started."
              date="28 Aug 2025"
            />

            <BlogCard
              title="AI bubble is bursting"
              subtitle="AI is not a panacea. More hype, less action. It's time to focus on the fundamentals. So, let's get started. AI is not a panacea. More hype, less action. It's time to focus on the fundamentals. So, let's get started. AI is not a panacea. More hype, less action. It's time to focus on the fundamentals. So, let's get started."
              date="28 Aug 2025"
            />

            <BlogCard
              title="AI bubble is bursting"
              subtitle="AI is not a panacea. More hype, less action. It's time to focus on the fundamentals. So, let's get started."
              date="28 Aug 2025"
            />

            <BlogCard
              title="AI bubble is bursting"
              subtitle="AI is not a panacea. More hype, less action. It's time to focus on the fundamentals. So, let's get started. AI is not a panacea. More hype, less action. It's time to focus on the fundamentals. So, let's get started. AI is not a panacea. More hype, less action. It's time to focus on the fundamentals. So, let's get started."
              date="28 Aug 2025"
            />

            <BlogCard
              title="AI bubble is bursting"
              subtitle="AI is not a panacea. More hype, less action. It's time to focus on the fundamentals. So, let's get started."
              date="28 Aug 2025"
            />

            <div className="w-full mt-5 flex items-center justify-center">
              <p className="text-[9px] text-gray-500">
                Copyright © {new Date().getFullYear()} by Ronak Paul. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex-[0.2]"></div>
      </div>
    </div>
  );
}
