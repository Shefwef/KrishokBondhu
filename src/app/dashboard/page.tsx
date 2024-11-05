import { auth, currentUser } from "@clerk/nextjs/server";

export default async function DashBoardPage() {
  const { userId } = await auth();

  const user = await currentUser();

  return <div>DashBoard</div>;
}
