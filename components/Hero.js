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
                            Kylie Adams is a senior at the University of Georgia
                            where she is majoring in Health Promotion with a
                            minor in Global Health. Her interest in public
                            health began during highschool when she had the
                            opportunity to help establish a food pantry in her
                            community. She is passionate about improving health
                            equity in the United States. One of her dreams is to
                            improve comprehensive sexuality education, in
                            schools and in communities. <br />
                            <br />
                            Kylie aspires to pursue a career in health policy
                            and propose new policies that strive to achieve
                            these missions. When she is not busy listening to
                            health and political podcasts, she enjoys working in
                            the coffee industry and going on outdoor adventures.
                            <br />
                            <br />
                            Kylie will be interning in the spring at the CDC’s
                            Office of Safety, Security, and Asset Management
                            (OSSAM) where she will participate in and lead
                            process improvement projects in addition to working
                            with the CDC’s Occupational Health Clinic to develop
                            influenza planning documentation and a new nurse
                            hire training plan and materials. She is expected to
                            graduate in May 2023. After graduation, Kylie is
                            hoping to gain experience working in the public
                            health field before pursuing further education in
                            graduate or law school programs.
                            <Link href="/proposals">
                                <a
                                    className={`font-['TypographProLightItalic'] text-lime-700 no-underline hover:text-forrest-900 hover:underline ${
                                        router.asPath === "/proposals"
                                            ? "text-khaki-400 underline-offset-[5px] underline"
                                            : ""
                                    }`}
                                >
                                    {" "}
                                    View some of my projects...{" "}
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
