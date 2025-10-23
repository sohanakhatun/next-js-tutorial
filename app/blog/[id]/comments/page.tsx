import Link from "next/link";

interface BlogProps {
  params: {
    id: string;
  };
}

export default async function BlogComments({ params }: BlogProps) {
  const { id } = await params;

  return (
    <>
      Blog {id} Comments
        <Link href="/blog/5" className="bg-black w-fit text-white p-4 mt-10">
        Click to go to a blog
      </Link>
      <br />
    </>
  );
}
