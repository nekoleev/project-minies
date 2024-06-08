import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <>
      <header className="h-14 px-4 flex justify-between items-center">
        <h1 className="text-sm">P R O J E C T - M I N I E S</h1>
        <ModeToggle/>
      </header>
      <main className="flex-grow flex justify-center items-center border-2 border-solid border-white">
        <p>Main</p>
      </main>
      <footer className="h-10 flex justify-center items-center">
        <p className="text-sm">Built by Nekoleev.dev</p>
      </footer>
    </>
  );
}
