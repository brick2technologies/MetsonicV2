import { easeInOut } from 'framer-motion';
import { useEffect, useRef } from 'react';


// GSAP types
interface GSAPInstance {
    registerPlugin: (...plugins: unknown[]) => void;
    to: (target: unknown, vars: Record<string, unknown>) => void;
}

interface ScrollTriggerInstance {
    create: (vars: Record<string, unknown>) => void;
    getAll: () => Array<{ kill: () => void }>;
}

// Extend Window interface for GSAP
declare global {
    interface Window {
        gsap: GSAPInstance;
        ScrollTrigger: ScrollTriggerInstance;
    }
}

const StackingCards = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Dynamically load GSAP and ScrollTrigger
        const script1 = document.createElement('script');
        script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        script1.async = true;

        const script2 = document.createElement('script');
        script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
        script2.async = true;

        document.body.appendChild(script1);

        script1.onload = () => {
            document.body.appendChild(script2);

            script2.onload = () => {
                const gsap = window.gsap;
                const ScrollTrigger = window.ScrollTrigger;
                gsap.registerPlugin(ScrollTrigger);

                const totalCards = cardsRef.current.length;

                cardsRef.current.forEach((card, index) => {
                    if (!card) return;

                    // Pin each card at the stacking position
                    ScrollTrigger.create({
                        trigger: card,
                        start: 'center center',
                        end: () => `+=${(totalCards - index) * window.innerHeight}`,
                        pin: true,
                        pinSpacing: false,
                        markers: false,
                        id: `pin-${index}`
                    });

                    // Exit animation - move all cards up together after last card
                    if (index === totalCards - 1) {
                        gsap.to(cardsRef.current, {
                            yPercent: -100 * totalCards, // move all cards smoothly upwards
                            opacity: 0,
                            ease: easeInOut, // linear for smooth scroll
                            scrollTrigger: {
                                trigger: card,
                                start: "top top",
                                end: () => `+=${window.innerHeight * totalCards}`, // scroll distance proportional to total cards
                                scrub: 1,
                                markers: false
                            }
                        });
                    }

                });
            };
        };

        return () => {
            if (window.ScrollTrigger) {
                window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            }
            if (document.body.contains(script1)) {
                document.body.removeChild(script1);
            }
            if (document.body.contains(script2)) {
                document.body.removeChild(script2);
            }
        };
    }, []);

    const cards = [
        {
            title: "Discover",
            description: "Explore amazing features and capabilities",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Create",
            description: "Build something extraordinary",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Innovate",
            description: "Push boundaries and think differently",
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Achieve",
            description: "Reach your goals and celebrate success",
            color: "from-orange-500 to-red-500"
        }
    ];

    return (
        <div className="bg-gray-900">
            {/* Hero Section */}
            <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="text-center px-4">
                    <h1 className="text-6xl font-bold text-white mb-4">Stacking Cards</h1>
                    <p className="text-xl text-gray-300">Scroll down to see the magic</p>
                </div>
            </div>

            {/* Cards Container */}
            <div ref={containerRef} className="relative">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="h-screen flex items-center justify-center"
                    >
                        <div
                            ref={(el) => {
                                cardsRef.current[index] = el;
                            }}
                            className="w-full max-w-4xl px-4"
                            style={{ zIndex: index + 1 }}
                        >
                            <div className={`bg-gradient-to-br ${card.color} rounded-3xl p-12 shadow-2xl min-h-[400px] flex flex-col justify-center`}>
                                <h2 className="text-5xl font-bold text-white mb-4">
                                    {card.title}
                                </h2>
                                <p className="text-2xl text-white/90">
                                    {card.description}
                                </p>
                                <div className="mt-8 text-white/60 text-lg">
                                    Card {index + 1} of {cards.length}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Extra space for exit animation */}
            <div className="h-screen"></div>

            {/* Footer */}
            <div className="h-screen flex items-center justify-center bg-gray-900">
                <div className="text-center px-4">
                    <h2 className="text-4xl font-bold text-white mb-4">That's it!</h2>
                    <p className="text-xl text-gray-300">Beautiful stacking effect with GSAP</p>
                </div>
            </div>
        </div>
    );
};

export default StackingCards;