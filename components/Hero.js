import userData from "../constants/data";
import Link from "next/link";
import { useRouter } from "next/router";

export default function hero() {
    const router = useRouter();
    return (
        <section className="container my-auto">
            <div className="flex flex-row gap-10 mx-auto  py-10">
                <div className="flex flex-col font-['TypographProLightItalic'] justify-self-auto gap-4">
                    <h1 className="flex flex-row md:text-left text-center lg:text-8xl md:text-6xl text-4xl text-forrest-400 font-['Barcelony'] mt-10 py-5 underline-offset-[.80rem] underline decoration-khaki-900">
                        Kylie Adams
                    </h1>
                    <div className="py-4 md:text-right lg:text-6xl md:text-4xl text-2xl text-center">
                        <p className="font-['TypographProLightItalic'] text-gray-700">
                            Major: Health Promotion
                        </p>
                        <p className="font-['TypographProLightItalic'] text-gray-500 opacity-70">
                            Minor: Global Health
                        </p>
                    </div>
                    <div>
                        <p className="prose md:prose-2xl font-['TypographProLight'] my-3">
                            Hi, I am Kylie a highly motivated rising senior at
                            The University of Georgia studying Health Promotion
                            with a minor in Global Health. After graduation I
                            plan to go to law school and attend a dual MPH and
                            JD program to eventually become a legal consult.{" "}
                            <Link href="/proposals">
                                <a
                                    className={`font-['TypographProLightItalic'] text-forrest-400 no-underline hover:text-forrest-900 hover:underline ${
                                        router.asPath === "/proposals"
                                            ? "text-khaki-400 underline-offset-[5px] underline"
                                            : ""
                                    }`}
                                >
                                    View some of my proposals...{" "}
                                </a>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center px-10 basis-auto">
                    <div className="mx-auto">
                        <img
                            className="rounded-full border-forrest-400 border-4 max-h-[48rem]"
                            src={userData.avatarUrl}
                            alt="headshot"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
