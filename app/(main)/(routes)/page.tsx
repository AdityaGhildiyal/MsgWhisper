import { ModeToggle } from "@/components/mode-toggle";
import MsgLanding from "@/components/msglanding";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton />
      <ModeToggle />
    </div>
  );
}
