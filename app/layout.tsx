import "./globals.css";

export const metadata = {
  title: "Barbearia Street",
  description: "Estilo urbano. Precisão. Identidade.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-background text-textMain antialiased">
        {children}
      </body>
    </html>
  );
}