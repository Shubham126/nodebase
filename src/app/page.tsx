 import { cn } from "@/lib/utils";
 import { Button } from "@/components/ui/button"
 import prisma from "@/lib/db";

const Page = async() => {
  const user = await prisma.user.findMany();
  return (
    <div className = "min-h-screen min-w-screen flex items-center justify-center">
    <Button variant = "outline">
      {JSON.stringify(user)}
    </Button>
    </div>
  )
}

export default Page;