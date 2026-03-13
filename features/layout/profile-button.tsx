import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { UserIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function ProfileButton() {
    const { data: session, status } = useSession();
    if (!session) return (
        <Link href="/auth/signin">
            <Button variant="primary" className="py-6 ">Login</Button>
        </Link>
    );

    if (status === "authenticated") {
        return (
            <Link href="/dashboard">
                {session.user?.image ? (
                    <HoverCard openDelay={10} closeDelay={100}>
                        <HoverCardTrigger asChild>
                            <div className="border border-primary/50 rounded-full p-1">
                                <Image src={session.user?.image} alt="User Image" width={40} height={40} className="rounded-full" />
                            </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="flex w-64 flex-col gap-0.5">
                            <Button variant="link" className="w-full justify-start" onClick={() => signOut({ callbackUrl: "/auth/signin" })}>
                                Logout
                            </Button>
                        </HoverCardContent>
                    </HoverCard>
                ) : (
                    <UserIcon className="w-6 h-6" />
                )}
            </Link>
        )
    }
}