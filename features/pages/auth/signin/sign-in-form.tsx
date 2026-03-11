"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserType } from "@/features/types/user.type"
import { zodResolver } from "@hookform/resolvers/zod"
import bcrypt from "bcryptjs"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { signInSchema, SignInSchema } from "../schema/auth-schema"

export function SignInForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<SignInSchema>({
        resolver: zodResolver(signInSchema),
    })
    const router = useRouter()



    const onSubmit = async (data: SignInSchema) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
            const users = await res.json()

            if (!users?.length) throw new Error("No users found");

            const user = users.find((user: UserType) => user?.email === data.email)
            if (!user) throw new Error("User not found");

            const isPasswordValid = await bcrypt.compare(data.password, user.password)
            if (!isPasswordValid) throw new Error("Invalid password");

            router.push("/")
        } catch (error) {
            console.error("Failed to login", error);
        }
    }

    return (
        <Card className="w-full max-w-sm mx-auto">
            <CardHeader>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
                <CardAction>
                    <Button variant="link">Sign Up</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                {...register("email")}
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    href="#"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input id="password" type="password" required {...register("password")} />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>
                    </div>
                    <Button type="submit" className="w-full mt-5">
                        Login
                    </Button>
                </form>
            </CardContent>
            <CardFooter className="flex-col">
                <Button variant="outline" className="w-full">
                    Login with Google
                </Button>
            </CardFooter>
        </Card>
    )
}





