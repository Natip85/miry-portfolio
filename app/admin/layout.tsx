export const dynamic = "force-dynamic";
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      <main className="flex-col min-h-screen">
        <div className="flex-1 w-full">{children}</div>
      </main>
    </div>
  );
}
