import AnimationTest from "@/components/AnimationTest";
import { serverClient } from "./_trpc/server";
import { Bento } from "@/components/Bento";
import { auth, currentUser } from "@clerk/nextjs";

export default async function Home() {
  const getTodos = await serverClient.getTodos();
  console.log("server", getTodos);
  const { userId } = auth();

  const user = await currentUser();
  console.log("user", user);
  return (
    <main className="flex min-w-screen flex-col items-center justify-between">
      <div className="flex flex-col items-center mt-[4rem] p-3 ">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          EventorBD
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-3">
          Plan, Organize & Celebrate.
        </p>
        {/* <AnimationTest /> */}
      </div>
    </main>
  );
}
