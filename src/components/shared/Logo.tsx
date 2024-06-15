import { MdOutlineHandshake } from "react-icons/md";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex flex-row items-center text-2xl font-bold pt-2 pb-4 space-x-2">
      <div className="text-primary">
        <MdOutlineHandshake />
      </div>{" "}
      <Link href="/">
        <div className="text-base-content">Hirepod</div>
      </Link>
    </div>
  );
}
