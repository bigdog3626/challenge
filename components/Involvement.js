import { useEffect, useState } from "react";
import userData from "../constants/data";
import CustomCarousel from "./CustomCarousel";

export default function Involvement() {
    return (
        <section>
            <div className="flex flex-wrap gap-10 justify-evenly">
                <div className="grid-cols-2">
                    <div className="flex flex-col deBorder"></div>

                    <CustomCarousel />
                </div>
            </div>
        </section>
    );
}
