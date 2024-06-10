import { Card, CardContent, CardHeader } from "./ui/card";

export function MainMenuCard(){
    return(
        <Card className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300 ease cursor-pointer active:bg-gray-600 active:text-white dark:active:text-black ">
            <CardHeader>Hello</CardHeader>
            <CardContent>
                Hello World
            </CardContent>
        </Card>
    );
}