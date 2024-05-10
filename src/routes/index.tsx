import { createFileRoute } from "@tanstack/react-router";

console.log(import.meta.env);
export const Route = createFileRoute("/")({
  component: Index,
  loader: async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": import.meta.env.VITE_COINGECKO_KEY,
      },
    };

    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd",
      options,
    );

    return response.json();
  },
});

function Index() {
  const data = Route.useLoaderData();

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      {Object.entries(data).map(([key, value]) => (
        <>
          {key} is at {value.usd}$
        </>
      ))}
    </div>
  );
}
