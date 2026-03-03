import Grainient from "./components/Grainient";

import "./App.css";
import SpotlightCard from "./components/SpotlightCard";
import Button from "./components/Button";

const App = () => {
    return (
        <>
            <div className="w-full h-screen fixed top-0 left-0 z-[-1]">
                <Grainient
                    color1="#c285ff"
                    color2="#000000"
                    color3="#3dfcff"
                    timeSpeed={0.2}
                    colorBalance={0}
                    warpStrength={1}
                    warpFrequency={5}
                    warpSpeed={2}
                    warpAmplitude={50}
                    blendAngle={0}
                    blendSoftness={0.5}
                    rotationAmount={500}
                    noiseScale={2}
                    grainAmount={0}
                    grainScale={2}
                    grainAnimated={false}
                    contrast={1.5}
                    gamma={0.4}
                    saturation={1}
                    centerX={0}
                    centerY={0}
                    zoom={0.9}
                />
            </div>

            <section id="home">
                <div className="h-screen grid place-items-center">
                    <div className="max-w-screen-lg flex flex-col gap-10 text-center">
                        <h1 className="text-4xl text-glow">
                            Hi, this is <span className="text-blue-300">Frostii</span>
                        </h1>
                        <div>
                            <p className="text-2xl">
                                A <span className="text-amber-300 font-bold">Jr.DSP</span> developer
                            </p>
                            <p>
                                <br />I design simple audio patches to explore
                                how sound works. I experiment with basic
                                oscillators, filters,
                                <br />
                                and sliders to understand signal flow and
                                control. Each small project helps me improve my
                                logic,
                                <br />
                                organization, and understanding of digital sound
                                design.
                                <br />I aim to build clean, simple, and
                                functional patches while steadily growing my
                                skills.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="plugins">
                <h1 className="text-center my-40 text-glow text-4xl">Plugins</h1>
                <div>
                    <SpotlightCard
                        className="rounded-xl m-10"
                        spotlightColor="rgba(0, 200, 255, 0.2)">
                        <div className="block">
                            <h1 className="text-4xl font-bold mb-6">
                                FT-Resonator
                            </h1>
                            <p>
                                FT-Resonator is a 7 voices comb resonator effect plugin
                                built in Plugdata.
                                <br />
                                Each voice features independent gain, panning,
                                and detuning controls,
                                <br /> letting you shape rich harmonic textures,
                                wide stereo movement,
                                <br /> and evolving tonal layers from any input
                                sound.
                            </p>
                            <Button>
                                Coming Soon...
                            </Button>
                        </div>
                    </SpotlightCard>
                    {/* <SpotlightCard
                        className="rounded-xl m-10"
                        spotlightColor="rgba(255, 255, 255, 0.2)">
                        <div className="block">
                            <h1 className="text-4xl font-bold mb-6">
                                FR-PhaseDistortion
                            </h1>
                            <p className="max-w-[50%] text-balance">
                                Maybe planned for future development. Feel free
                                to reach out if you're interested in
                                collaborating on this project!
                            </p>
                            <a
                                href="#"
                                className="mt-6 p-3 px-6 bg-gray-500 w-fit rounded-full block">
                                Coming Soon...
                            </a>
                        </div>
                    </SpotlightCard> */}
                </div>
            </section>
            <section id="contact">
                <div className="h-screen grid place-items-center">
                    <div className="block">
                        <h1 className="text-4xl font-bold mb-6 section-title text-center">
                            Get in Touch
                        </h1>
                        <p
                            className="subtitle max-w-screen-md">
                            I'm currently open to new opportunities and
                            collaborations. Whether you have a project in mind,
                            want to discuss potential work together, or just
                            want to say hi, feel free to reach out!
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default App;
