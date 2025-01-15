import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton />
      <h1>Dashboard Page</h1>
    </div>
  );
}
