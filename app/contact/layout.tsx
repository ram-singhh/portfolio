import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Ram Singh | Freelance Web Developer",
  },
  description: "Get in touch with freelance web developer Ram Singh. Open to web development internships, collaborations, and freelance opportunities.",
  alternates: {
    canonical: "/contact/",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
