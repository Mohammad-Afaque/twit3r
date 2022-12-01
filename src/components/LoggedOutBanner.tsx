import { signIn, useSession } from "next-auth/react";
import { Container } from "./Container";

export function LoggedOutBanner() {
  const { data: session } = useSession();

  // if (session) {
  //   return null;
  // }

  return (
    <div className="fixed bottom-0 w-full bg-primary p-4">
      <Container>
        <p>Do not missout</p>
        <div>
          <button onClick={() => signIn()}>Login</button>
        </div>
      </Container>
    </div>
  );
}
