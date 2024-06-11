import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationBar } from "@/components/navigation-bar";
import { MainBreadCrumbs } from "@/components/main-breadcrumbs";

export default function SubrootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return (
        <body className="flex flex-col w-screen h-screen font-mono">
            <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
                <header className="h-12 px-1 flex justify-between items-center ">
                    <div className="flex">
                        <h1 className="text-sm pl-2">P R O J E C T - M I N I E S</h1>
                        <MainBreadCrumbs/>
                    </div>
                    <div className="flex space-x-1">
                        <NavigationBar/>
                        <ModeToggle/>
                    </div>
                </header>
                <main className="flex-grow flex justify-center items-center">
                    {children}
                </main>
            </ThemeProvider>
        </body>
    )
}