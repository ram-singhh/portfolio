import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Modern Calculator | JavaScript Web App by Ram Singh",
  },
  description: "Try the Modern Calculator web app built by freelance web developer Ram Singh, featuring basic arithmetic operations, keyboard support, and error handling.",
  alternates: {
    canonical: "/projects/modern-calculator/",
  },
};

export default function ModernCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
