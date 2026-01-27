import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spedizioni USA - SPST",
  description:
    "Due servizi per spedire vino negli Stati Uniti: spedizioni B2B per importatori e SPST Paylink per enoturismo. Soluzioni complete per export vino USA.",
  alternates: {
    canonical: "/spedizioni-usa",
  },
};

export default function SpedizioniUsaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
