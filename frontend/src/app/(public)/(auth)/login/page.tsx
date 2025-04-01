import { Button } from "@/components/Button";
import { InputField, InputRoot } from "@/components/Input";

export default function Login() {
	return (
		<div className="pt-2 pb-12">
			<form>
				<div className="mb-4">
					<label htmlFor="email" className="text-gray-50 font-semibold">
						Email
					</label>
					<InputRoot>
						<InputField
							type="email"
							placeholder="ex: jH2xT@example.com"
							name="email"
							id="email"
						/>
					</InputRoot>
				</div>

				<div className="mb-8">
					<label htmlFor="password" className="text-gray-50 font-semibold">
						Senha
					</label>
					<InputRoot>
						<InputField
							type="password"
							placeholder="ex: 1234@pe"
							name="password"
							id="password"
						/>
					</InputRoot>
				</div>
				<Button>Entrar</Button>
			</form>
		</div>
	);
}
