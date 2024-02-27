export default function ProjPages({
  params: { id },
}: {
  params: { id: string, map: any};
}) {
  return <div className="card">{id}</div>;
}