import { ReactElement, useState } from "react";
import { Auth } from "aws-amplify";
import { useRouter } from 'next/router'

function Login(): ReactElement {
  const router = useRouter()
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function signIn() {
    try {
      const user = await Auth.signIn(email, password);
      if (user.challengeName === "NEW_PASSWORD_REQUIRED")
        await Auth.completeNewPassword(user, password);
      router.push('/')
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  return (
    <div className="p-8 bg-white">
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="email"
          className="border border-slate-500 p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          className="border border-slate-500 p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={() => signIn()}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
