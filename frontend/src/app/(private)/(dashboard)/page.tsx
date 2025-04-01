import { getAllEnterprises } from "@/api/enterprise/get-all-enterprises";
import Link from "next/link";

export default async function Dashboard() {
	const enterprises = await getAllEnterprises();
	return (
		<div>
			<div className="max-w-[1440px] h-dvh mx-auto p-12 font-sans flex flex-col gap-16">
				<div className="flex flex-col gap-4 my-8">
					<h1 className="text-center text-2xl font-semibold ">
						Seja bem vindo ao Rating Hub
					</h1>
					<h3 className="text-center text-lg font-semibold text-gray-50">
						Sua opinião transforma o mercado. Avalie empresas agora!
					</h3>
				</div>
				<div className="w-full flex flex-col md:flex-row justify-center items-center gap-32">
					<h2 className="text-xl font-semibold text-wrap leading-none max-w-[350px]">
						Conheça nosso ranking com as{" "}
						<strong className="text-2xl text-blue-300 font-bold">
							Melhores/Piores
						</strong>{" "}
						avaliações de empresas do Brasil.
					</h2>
					<div className="bg-gray-300 text-blue p-8 border font-bold rounded-2xl min-w-[400px]">
						<h2 className="mb-4 text-center">Avaliações</h2>
						<ul className="space-y-10">
							{enterprises.map((enterprise) => (
								<li className="cursor-pointer" key={enterprise.id}>
									<Link
										href={`/enterprise/${enterprise.id}`}	
										className="relative z-20"
									>
										<div className="flex justify-between items-center mb-2 cursor-pointer  hover:text-gray-50 transition-colors duration-300">
											
											<p>{enterprise.name}</p>
											<span>
												{enterprise.rating}
											</span>
										</div>
									</Link>
									<hr />
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
