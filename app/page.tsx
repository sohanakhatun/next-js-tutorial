import Link from "next/link";
import FirstClientComponent from "./FirstClientComponent";
import FirstServerComponent from "./FirstServerComponent";

export default function Home() {
  return (
    <>
      <FirstServerComponent />
      <FirstClientComponent />
      <br />
      <Link href="/blog/5" className="bg-black w-fit text-white p-4 mt-10">
        Click to go to a blog
      </Link>
    </>
  );
}
