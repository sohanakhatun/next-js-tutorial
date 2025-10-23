interface BlogProps {
  params: {
    id: string;
  };
}

export default async function BlogComments({ params }: BlogProps) {
  const { id } = await params;

  return <>Blog {id} Comments</>;
}
