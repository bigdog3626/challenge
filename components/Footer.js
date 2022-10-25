import { useState } from "react";
import {
    AiOutlineLinkedin,
    AiOutlineTwitter,
    AiOutlineMail,
} from "react-icons/ai";

export default function Footer() {
    return (
        <footer className="p-4 bg-forrest-300 shadow">
            <div className="relative flex flex-wrap">
                <div>
                    <h1 className="font-['Barcelony'] text-3xl text-gray-50 py-3">
                        K. A.
                    </h1>
                    <div className="text-sm text-khaki-100 pt-4">
                        <ul className="flex w-30 flex-auto gap-6">
                            <ul>
                                <li className="py-1">
                                    <a href="">PROPOSALS</a>
                                </li>
                                <li className="py-1">
                                    <a href="">INVOLVEMENT</a>
                                </li>
                            </ul>
                            <ul>
                                <li className="py-1">
                                    <a href="">CONTACT</a>
                                </li>
                                <li className="py-1">
                                    <a href="">EXPERIENCE</a>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div className="absolute flex flex-wrap justify-around bottom-0 right-0 gap-2 text-khaki-50 text-xl">
                    <a href="https://www.linkedin.com/in/kylie-adams-673926192/">
                        <AiOutlineLinkedin size={30} />
                    </a>
                    <AiOutlineTwitter size={30} />
                    <AiOutlineMail size={30} />
                </div>
            </div>

            <hr className="my-6 border-gray-50" />
            <span className="block text-sm text-khaki-100 text-center">
                <a href="https://www.dylmeyer.com" class="hover:underline">
                    Kylie Adams{" "}
                </a>
                @ 2022
                <br />
                All Rights Reserved.
            </span>
        </footer>
    );
}
