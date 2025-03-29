import { Button } from "@/components/Button";
import { InputField, InputRoot } from "@/components/Input";

export default function Register() {
    return (
      <div className="pt-2 pb-12">
      <form className="space-y-5">
        <div>
        <label htmlFor="name" className="text-gray-50 font-semibold mb-1">Nome</label>
        <InputRoot>
          <InputField type="text" placeholder="ex: John Doe" name="name" id="name" />
        </InputRoot>
        </div>

        <div>
        <label htmlFor="email" className="text-gray-50 font-semibold mb-1">Email</label>
        <InputRoot>
          <InputField type="email" placeholder="ex: jH2xT@example.com" name="email" id="email" />
        </InputRoot>
        </div>

        <div>
        <label htmlFor="document" className="text-gray-50 font-semibold mb-1">CPF/CNPJ</label>
        <InputRoot>
          <InputField type="text" placeholder="ex: 123.456.789-00" name="document" id="document" />
        </InputRoot>
        </div>

       <div>
       <label htmlFor="password" className="text-gray-50 font-semibold mb-1">Senha</label>
        <InputRoot>
          <InputField type="password" placeholder="ex: 1234@pe" name="password" id="password" />
        </InputRoot>
       </div>

         <Button type="submit">Enviar</Button>
      </form>
   </div>
    );
  }
  