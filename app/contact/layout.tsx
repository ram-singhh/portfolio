import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Book a Web Development Project | Ram Singh",
  },
  description: "Submit a project brief to book a web development project with freelance developer Ram Singh. Open to responsive web designs, frontend modernization, and custom web applications.",
  alternates: {
    canonical: "https://www.ramsingh.dev/contact/",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
