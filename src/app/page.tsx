import { MainMenuCard } from "@/components/mainmenu-card";
import { ModeToggle } from "@/components/mode-toggle";
import { NavigationBar } from "@/components/navigation-bar";
import Link from "next/link"; // TODO: Utilize for Logo Link to Home

export default function Home() {
  return (
    <>
      <header className="h-12 px-1 flex justify-between items-center ">
        <h1 className="text-sm pl-2">P R O J E C T - M I N I E S</h1>
        <div className="flex space-x-1">
          <NavigationBar/>
          <ModeToggle/>
        </div>
      </header>
      <main className="flex-grow flex justify-center items-center">
        <MainMenuCard/>
      </main>
    </>
  );
}
