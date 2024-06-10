"use client";
import { Button } from "@/components/ui/button";
import Profile from "./Profile";
import CustomButton from "./CustomButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogHeader, DialogFooter } from "./ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Login() {
  const isLogged = false;
  const router = useRouter();
  return (
    <div>
      {/** */}
      {isLogged ? (
        <>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </>
      ) : (
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="text-primary-blue rounded-full bg-white min-w-[130px]"
            >
              Sign In
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-white rounded-md">
            <DialogHeader>
              <DialogTitle>Create an account</DialogTitle>
              <DialogDescription className="text-gray-500 p-5">
                Enter your email below to create your account
              </DialogDescription>
            </DialogHeader>
            <div className="p-6 pt-0 grid gap-4">
              <div className="grid grid-cols-2 gap-6">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                  </svg>
                  Facebook
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  <svg role="img" viewBox="0 0 24 24" className="mr-2 h-4 w-4">
                    <path
                      fill="currentColor"
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    />
                  </svg>
                  Google
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>

                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="grid gap-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  placeholder="m@example.com"
                  type="email"
                />
              </div>
              <div className="grid gap-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="password"
                  type="password"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="w-full py-[16px]
            rounded-lg bg-primary-blue text-white"
              >
                Login
              </Button>
            </DialogFooter>

            <DialogDescription className="p-10">
              <div className="text-center  items-center justify-center">
                <p className="text-gray-500 ">
                  Don’t have an account?
                  <span className="text-primary-blue m-2">
                    <Button onClick={() => router.push("./Signup")}>
                      Sign up
                    </Button>
                  </span>
                </p>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
