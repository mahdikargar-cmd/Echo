import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignInButton, UserButton } from "@clerk/nextjs";
import ModeToggle from "./ModeToggle";
import { currentUser } from "@clerk/nextjs/server";

async function DesktopNavbar() {
  const user = await currentUser();

  return (
    <div className=" hidden md:flex items-center space-x-4 ">


      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/">

          <span className="hidden lg:inline flex items-center align-middle">صفحه اصلی</span>
            <HomeIcon className="w-4 h-4 flex items-center align-middle" />
        </Link>
      </Button>

      {user ? (
        <>
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/notifications">

              <span className="hidden lg:inline">اعلانات</span>
                <BellIcon className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link
              href={`/profile/${
                user.username ?? user.emailAddresses[0].emailAddress.split("@")[0]
              }`}
            >

              <span className="hidden lg:inline">پروفایل</span>
                <UserIcon className="w-4 h-4" />
            </Link>
          </Button>
          <UserButton />
        </>
      ) : (
        <SignInButton mode="modal">
          <Button variant="default">ورود</Button>
        </SignInButton>
      )}

    </div>
  );
}
export default DesktopNavbar;
