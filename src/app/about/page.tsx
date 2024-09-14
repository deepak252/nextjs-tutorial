import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About" // Ingnores the parent template metadata
  },
  description: 'This is about page'
}
export default function AboutPage() {
  return <div>About Page</div>;
}
