import { useState } from 'react';
import Globe from 'react-globe.gl';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Button from '../components/Button.jsx';
import { Keyboard } from '../components/Keyboard.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('wmbennabi05@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Wael Malek Bennabi</p>
              <p className="grid-subtext">
                I am a 19 years old student with 3 years of experience, I have developed strong skills in both frontend and backend development, creating dynamic
                and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/codebranch.jpg" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Montreal, Canada', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Montreal, Canada and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[266px] h-fit flex justify-center items-center">
              <Canvas>
                <Suspense fallback={null}>
                  <PerspectiveCamera makeDefault position={[0, 0, 3]} />
                  <OrbitControls
                    enableZoom={true}
                    enablePan={false}
                    enableRotate={true}
                    autoRotate={false}
                    minDistance={2}
                    maxDistance={2}
                  />
                  <ambientLight intensity={1} />
                  <directionalLight position={[10, 10, 10]} intensity={0.5} />
                  <Keyboard
                    scale={[0.6, 0.6, 0.6]}
                    position={[0, -0.5, 0]}
                    rotation={[0, Math.PI / 4, 0]}
                  />
                </Suspense>
              </Canvas>
            </div>
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2 flex justify-center items-center">
          <div className="grid-container text-center">
            <div className="flex justify-center">
              <img
                src="assets/email.svg"
                alt="grid-4"
                className="w-48 md:w-24 sm:w-26 h-auto object-contain"
              />
            </div>
            <div className="space-y-2 mt-4">
              <p className="grid-subtext">Contact me</p>
              <div className="copy-container flex justify-center items-center gap-2" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className="w-6 h-6" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">wmbennabi05@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;