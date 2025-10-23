interface BlogProps {
  params: {
    id: string;
  };
}

export default async function Blog({ params }: BlogProps) {
  const { id } = await params;

  return <>Blog {id}</>;
}
