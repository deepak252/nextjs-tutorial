"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h4>{error.message}</h4>
    </div>
  );
}
