import {
    AiOutlineLinkedin,
    AiOutlineTwitter,
    AiOutlineMail,
} from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
    const router = useRouter();
    return (
        <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-forrest-400 shadow-lg navbar navbar-expand-lg navbar-light">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <Link href="/">
                    <a>
                        <h1 className="font-['Barcelony'] text-3xl text-gray-50 py-3">
                            K. A.
                        </h1>
                    </a>
                </Link>

                <div className="flex flex-row navLinkContainer gap-6 justify-between">
                    <Link href="/proposals">
                        <a
                            className={`hover:text-khaki-300 hover:drop-shadow-2xl hover:shadow-gray-700 text-base ${
                                router.asPath === "/proposals"
                                    ? "text-khaki-400 underline-offset-[5px] underline"
                                    : ""
                            }`}
                        >
                            PROPOSALS{" "}
                        </a>
                    </Link>

                    <Link href="/involvement">
                        <a
                            className={`hover:text-khaki-300 hover:drop-shadow-2xl hover:shadow-gray-700 text-base ${
                                router.asPath === "/involvement"
                                    ? "text-khaki-400 underline-offset-[5px] underline"
                                    : ""
                            }`}
                        >
                            INVOLVEMENT{" "}
                        </a>
                    </Link>
                    <Link href="/experience">
                        <a
                            className={`hover:text-khaki-300 hover:drop-shadow-2xl hover:shadow-gray-700 text-base ${
                                router.asPath === "/experience"
                                    ? "text-khaki-400 underline-offset-[5px] underline"
                                    : ""
                            }`}
                        >
                            EXPERIENCE{" "}
                        </a>
                    </Link>

                    <Link href="/contact">
                        <a
                            className={`hover:text-khaki-300 hover:drop-shadow-2xl hover:shadow-gray-700 text-base ${
                                router.asPath === "/contact"
                                    ? "text-khaki-400 underline-offset-[5px] underline"
                                    : ""
                            }`}
                        >
                            CONTACT{" "}
                        </a>
                    </Link>
                </div>

                <div className="container-fluid flex flex-wrap justify-between items-center gap-2 text-khaki-50 text-xl">
                    <a href="https://www.linkedin.com/in/kylie-adams-673926192/">
                        <AiOutlineLinkedin size={30} />
                    </a>
                    <AiOutlineTwitter size={30} />
                    <AiOutlineMail size={30} />
                </div>
            </div>
        </nav>
    );
}
