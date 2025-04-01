import { getEnterpriseById } from "@/api/enterprise/get-one-enterprise-by-id";
import { getAllFeedbacks } from "@/api/feedbacks/get-all-feedbacks";
import { Button } from "@/components/Button";
import { InputField, InputRoot } from "@/components/Input";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import {
	Building2,
	CalendarFold,
	Copy,
	Frown,
	MapPinHouse,
	MessageSquareMore,
	MessageSquareText,
	Smile,
	Star,
} from "lucide-react";

interface Params {
	params: Promise<{
		id: string;
	}>;
}

export default async function EnterpriseDetails({ params }: Params) {
	const { id } = await params;
	const enterprise = await getEnterpriseById(id);
	const feedbacks = await getAllFeedbacks(id);
	return (
		<div className="">
			<div className="bg-[#19213B] text-gray-50 max-w-full px-4 py-8 flex flex-col md:flex-row">
				Header
			</div>
			<div className="max-w-[1440px] bg-gray-100 h-dvh mx-auto p-12 font-sans flex flex-col gap-8">
				<div className="flex justify-between">
					<div className="flex items-center gap-6">
						<div className="w-48 h-48 rounded-full bg-blue text-gray-50 font-semibold flex justify-center items-center capitalize text-5xl">
							{enterprise?.name.substring(0, 1)}
						</div>
						<div className="flex flex-col gap-2">
							<h1 className="text-2xl font-semibold">{enterprise?.name}</h1>
							<p className="text-gray-400 text-sm">{enterprise?.sector}</p>
							<p>Nota: {enterprise?.rating}</p>
						</div>
					</div>
					<Button
						type="button"
						className="cursor-pointer bg-red-700 text-gray-50 font-semibold min-w-48 py-2 h-12 flex justify-center items-center hover:bg-gray-300  hover:text-gray-900 transition ease-in duration-300 rounded-md"
					>
						<MessageSquareMore className="mr-2 w-4 h-4 font-semibold" />
						Reclamar
					</Button>
				</div>
				<hr />
				<div>
					<Tabs defaultValue="about" className="w-full">
						<TabsList className="grid w-full grid-cols-2 gap-4">
							<TabsTrigger
								value="about"
								className="flex justify-center items-center gap-2 px-4 py-2 border-none rounded-xl bg-blue-50 focus-within:bg-blue focus-within:text-gray-50 cursor-pointer"
								autoFocus
							>
								<Building2 className="w-4 h-4" />
								<p className="font-semibold text-sm">Sobre</p>
							</TabsTrigger>
							<TabsTrigger
								value="feedbacks"
								className="flex justify-center items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 focus-within:bg-blue focus-within:text-gray-50 cursor-pointer"
							>
								<MessageSquareText className="w-4 h-4" />
								<p className="font-semibold text-sm">Feedbacks</p>
							</TabsTrigger>
						</TabsList>
						<TabsContent value="about" className="my-8 space-y-4">
							<div className="border border-gray-900 p-4 min-w-[600px]">
								<h4 className="font-semibold">Sobre {enterprise?.name}</h4>
								<p className="text-sm text-gray-400 mb-4">
									{enterprise?.description}
								</p>
								<p className="flex items-center gap-2 mt-2 text-sm text-gray-600">
									<CalendarFold className="w-4 h-4" /> Há 4 anos no mercado
								</p>
								<InputRoot className="my-2 text-sm bg-blue-50 max-w-fit p-2 flex items-center">
									CNPJ:
									<InputField readOnly defaultValue={enterprise?.cnpj} />
									<Copy className="w-4 h-4 cursor-copy hover:opacity-50 transition ease-in duration-100" />
								</InputRoot>
								<p className="mt-6 font-semibold">
									Razão Social:{" "}
									<span className="font-normal">
										{enterprise?.corporateName}
									</span>
								</p>
							</div>

							<div className="border border-gray-900 p-4 min-w-[600px]">
								<h4 className="font-semibold flex items-center gap-2 mb-2">
									<MapPinHouse /> Endereço
								</h4>
								<address className="text-sm text-gray-700">
									{enterprise?.address}
								</address>
							</div>
						</TabsContent>
						<TabsContent value="feedbacks" className="my-8">
							<p className="mb-4 font-semibold text-gray-900">
								Existem {feedbacks.length} avaliações da empresa{" "}
								{enterprise?.name}
							</p>
							<div className="max-h-[500px] overflow-y-auto">
								{feedbacks.length > 0 &&
									feedbacks.map((feedback) => (
										<div
											key={feedback.id}
											className="border border-gray-900 p-4 min-w-[600px] my-4 mr-2"
										>
											<h4 className="font-semibold">{feedback.title}</h4>
											<p className="text-sm text-gray-400 mb-4">
												{feedback.content}
											</p>

											{feedback.answers && feedback.answers.length > 0 ? (
												<div className="flex justify-center items-center gap-2 bg-red-700 text-gray-50 text-sm font-semibold p-3 max-w-43 rounded-2xl">
													<Frown className="w-4 h-4" />
													<p>Não respondida</p>
												</div>
											) : (
												<div className="flex justify-center items-center gap-2 bg-green-500 text-gray-50 text-sm font-semibold p-3 max-w-43 rounded-2xl">
													<Smile className="w-4 h-4" />
													<p>Respondida</p>
												</div>
											)}
										</div>
									))}
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	);
}
