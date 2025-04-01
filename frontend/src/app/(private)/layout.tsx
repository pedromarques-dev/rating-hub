export default function PrivateLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="text-gray-50">
			<div className="bg-[#19213B] max-w-full px-4 py-8 flex flex-col md:flex-row">
				Header
			</div>
			<div className="relative bg-gray-900 z-10 w-full min-h-screen">
				<div className="bg-[url(/bg-main.jpg)] bg-no-repeat bg-center bg-cover opacity-15 absolute w-full h-full" />
				{children}
			</div>
		</div>
	);
}
