import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Listino - SPST",
  description:
    "Scarica il pacchetto completo per integrare le pagine listino e calcolatori sul sito Veronasped",
  alternates: {
    canonical: "/download-listino",
  },
};

export default function DownloadListinoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
