import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import Link from "next/link";
export default function Nav_Responsive() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="group">
            <svg
              className="w-6 h-6 text-gray-800 group-hover:rotate-180 duration-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 17 14"
            >
              <path d="M16 2H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2Zm0 6H1a1 1 0 0 1 0-2h15a1 1 0 0 1 0 2Z" />
            </svg>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="font-bold">Nắng Yêu Thương</SheetTitle>
            <SheetDescription>
              Xin mời bạn đến với "Nắng YÊU THƯƠNG"
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <ul>
              <Navbar />
            </ul>
            <button
              type="button"
              className="text-white uppercase resize-none font-bold rounded-full text-sm px-2 py-2.5 text-center me-2 mb-2 bg-orange-400 focus:outline-none focus:bg-yellow-700 hover:bg-yellow-700 duration-300 whitespace-nowrap"
            >
              <Link href="/unghonhom" className=" focus:outline-none">
                Ủng Hộ Nhóm
              </Link>
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
