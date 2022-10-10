import React from "react";
import userData from "../constants/data";

export default function Proposals() {
    return (
        <section>
            <div className="grid grid-cols-2 mx-auto px-3 gap-10 py-10 my-10">
                {userData.proposals.map((proj, idx) => (
                    <ProposalCard
                        title={proj.title}
                        type={proj.type}
                        body={proj.body}
                        number={`${idx + 1}`}
                        fileLink={proj.downloadLink}
                    />
                ))}
            </div>
        </section>
    );
}

const ProposalCard = ({ title, type, body, number, fileLink }) => {
    return (
        <div className="shadow-sm rounded-xl">
            <div className="mx-3">
                <h1 className="text-2xl text-forrest-400 py-2">
                    {number.length === 1 ? "0" + number : number}
                </h1>
                <h2 className="text-3xl text-forrest-50 text-opacity-75">
                    {title}
                </h2>
                <h3 className="text-xl text-gray-300">{type}</h3>

                <p className="prose prose-lg ">
                    {body}
                    <a
                        href={fileLink}
                        lassName="font-['TypographProLightItalic'] text-forrest-400 no-underline hover:text-forrest-900 hover:underline"
                    >
                        View Full {type}...
                    </a>
                </p>
            </div>
        </div>
    );
};
