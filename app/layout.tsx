import "../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="antialiased">
      <head />
      <body>
        <div className="flex">
          <aside className="w-1/12 bg-red-500 min-h-screen">
            <h1>RootLayout</h1>
          </aside>
          <main className="p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
