export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
   <div className="w-full mx-auto p-12">
    <div className="max-w-[500px] mx-auto my-36 bg-blue text-gray-100 p-12 rounded-2xl">
    <div className="text-center mb-12">
        <h2 className="text-2xl font-heading font-semibold">⭐ Rating Hub ⭐</h2>
      </div>
    {children}
    </div>
   </div>
  )
}
