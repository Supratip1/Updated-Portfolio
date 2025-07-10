import React, { useEffect, useState } from "react";

export default function Contact() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="contact" className="w-full min-h-[80vh] flex flex-col justify-center items-center bg-[#d2f857] relative overflow-hidden py-20">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="relative w-full flex flex-col items-center justify-center">
          <h2 className="font-FoundersGrotesk text-center font-extrabold uppercase text-[#212121] mb-8 leading-tight" style={{ fontSize: '78px' }}>
            READY<br/>
            TO WORK<br/>
            WITH ME?
          </h2>
        </div>
        {/* Eyes from Eyes section, now below the heading */}
        <div className="flex gap-10 my-8 justify-center items-center w-full">
          <div className="w-[24vw] md:w-[15vw] h-[24vw] md:h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-[3vw] h-[3vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[24vw] md:w-[15vw] h-[24vw] md:h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
            <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-[3vw] h-[3vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 mt-16 z-30 w-full">
          <a
            href="https://drive.google.com/file/d/1akGHd7FOXtQ2951ZqCJxUUPhm5fFCGtn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-black text-white rounded-full text-lg font-bold uppercase tracking-wide hover:bg-zinc-900 transition-colors duration-200 text-center shadow-lg"
          >
            Download Resume
          </a>
          <span className="font-FoundersGrotesk text-black text-lg font-bold uppercase tracking-wide my-2">OR</span>
          <a
            href="https://www.linkedin.com/in/frontenddeveloper-supratip/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-black text-white rounded-full text-lg font-bold uppercase tracking-wide hover:bg-zinc-900 transition-colors duration-200 text-center shadow-lg"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
} 