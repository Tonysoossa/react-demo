export function Title({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
