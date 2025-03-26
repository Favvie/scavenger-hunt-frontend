import { cn } from "@/lib/utils";

const SubheadingLeft = ({ text, wrapperClassName = "" }) => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row my-5 content-center items-center",
        wrapperClassName
      )}
    >
      <h1 className="text-xl font-orbitron">{text}</h1>
      <div className="w-40 mt-2 md:mt-0 h-[1px] bg-white mx-10" />
    </div>
  );
};

export default SubheadingLeft;
