import ArrowIcon from "@/assets/arrow-right.svg";
import Link from "next/link";

export const LearnMore = () => {
  return (
    <Link href="/">
      <button className="btn btn-text gap-1">
        Learn more
        <ArrowIcon className="h-5 w-5" />
      </button>
    </Link>
  );
};
