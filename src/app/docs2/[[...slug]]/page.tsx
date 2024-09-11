// Route: "/docs2/<Param1>/<Param2>/<Param3>/..."
// Route (Docs2 Home): "/docs2"
export default function Docs2Page({
  params,
}: {
  params: {
    slug?: string[];
  };
}) {
  const { slug = [] } = params;
  if (slug.length == 2) {
    return (
      <h2>
        Viewing docs for Feature: {slug[0]} and Concept: {slug[1]}{" "}
      </h2>
    );
  }
  if (slug.length == 1) {
    return <h2>Viewing docs for Feature: {slug[0]} </h2>;
  }

  return <h2>Docs Home Page</h2>;
}
