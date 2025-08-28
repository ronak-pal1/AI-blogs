import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

interface BlogCardProps {
  title: string;
  subtitle: string;
  date: string;
}

const BlogCard = ({ title, subtitle, date }: BlogCardProps) => {
  return (
    <div className="w-full h-full flex flex-col space-y-2 hover:bg-[#e5cbbaa7] py-5 px-4 cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <Link
            href={"/blog/aeahe"}
            className="text-xs text-blue-500 flex items-center space-x-2"
          >
            Open
            <GoArrowUpRight size={12} />
          </Link>
        </div>
        <small className="text-xs text-gray-500">{date}</small>
      </div>
      <p className="text-xs text-gray-500">{subtitle}</p>

      <div className="flex items-center justify-between">
        <div className="w-full flex items-center space-x-4 mt-3">
          {["AI", "startups", "MCP"].map((tag) => (
            <span
              key={tag}
              className="text-[9px] text-gray-500 px-4 py-1 rounded-full border border-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
        <LiaLongArrowAltRightSolid className="text-lg" />
      </div>
    </div>
  );
};

export default BlogCard;
