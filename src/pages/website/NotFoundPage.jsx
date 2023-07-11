import { Card } from "flowbite-react";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Card className="w-full" href="#">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>404</p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Page Not Found
        </p>
      </Card>
    </div>
  );
}
