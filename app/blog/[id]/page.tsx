import Link from "next/link";

interface BlogProps {
  params: {
    id: string;
  };
}

export default async function Blog({ params }: BlogProps) {
  const { id } = await params;

  return (
    <>
      <div className="flex flex-col gap-0">
        <h1>Blog {id}</h1>
        <Link href="/" className="bg-black w-fit text-white p-4 mt-10">
          Click to go to homepage
        </Link>
        <Link
          href="/blog/5/comments"
          className="bg-black w-fit text-white p-4 mt-10"
        >
          Click to go to blog comment
        </Link>
      </div>
    </>
  );
}
