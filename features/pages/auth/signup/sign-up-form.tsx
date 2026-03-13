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
import { zodResolver } from "@hookform/resolvers/zod"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { signUpSchema, SignUpSchema } from "../schema/auth-schema"


export function SignUpForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<SignUpSchema>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    })
    const router = useRouter()

    const onSubmit = async (data: SignUpSchema) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
                method: "POST",
                body: JSON.stringify(data),
            })

            if (!res.ok) {
                const { message } = await res.json()
                throw new Error(message ?? "User creation failed")
            }

            router.push("/auth/signin")
        } catch (error) {
            console.error("Failed to sign up", error);
        }
    }

    return (
        <Card className="w-full max-w-sm mx-auto">
            <CardHeader>
                <CardTitle>Sign up your account</CardTitle>
                <CardDescription>
                    Enter your email below to sign up your account
                </CardDescription>
                <CardAction>
                    <Button variant="link">Sign up</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Your name"
                                required
                                {...register("name")}
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                        </div>
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
                            </div>
                            <Input id="password" type="password" required {...register("password")} placeholder="********" />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="confirm-password">Confirm Password</Label>
                            </div>
                            <Input id="confirm-password" type="password" required {...register("confirmPassword")} placeholder="********" />
                            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
                        </div>
                    </div>
                    <Button type="submit" className="w-full mt-5">
                        Sign up
                    </Button>
                </form>
            </CardContent>
            <CardFooter className="flex-col">
                <Button variant="outline" className="w-full">
                    Sign up with Google
                </Button>
            </CardFooter>
        </Card>
    )
}





