import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import userData from "../constants/data";
export default function CustomCarousel() {
    return (
        <div
            style={{
                paddingBottom: "30px",
                position: "relative",
            }}
        >
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={10000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024,
                        },
                        items: 1,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0,
                        },
                        items: 1,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464,
                        },
                        items: 1,
                    },
                }}
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {userData.involvement.map((p, idx) => (
                    <InvolvementCard
                        event={p.event}
                        org={p.org}
                        synopsis={p.synopsis}
                        number={`${idx + 1}`}
                        image={p.image}
                    />
                ))}
            </Carousel>
        </div>
    );
}

const InvolvementCard = ({ event, org, synopsis, number, image }) => {
    return (
        <div className="flex flex-wrap items-center justify-center">
            <div className="rounded-lg shadow-lg p-4 m-4">
                <p>{number}</p>
                <h1>{event}</h1>
                <h2>{org}</h2>

                <p className="prose prose-md">{synopsis}</p>
            </div>
            <div>
                <img src={image} alt="placeholder.png" />
            </div>
        </div>
    );
};
