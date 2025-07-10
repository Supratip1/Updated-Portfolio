import React, { useEffect, useState } from "react";

function Eyes({ minimal, progress }) {
  const [rotate, setRotate] = useState(0);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  
  useEffect(() => {
    const handleResize = () => setIsMobileOrTablet(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  useEffect(() => {
    if (minimal && typeof progress === 'number') return; // skip mouse tracking in minimal/progress mode
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [minimal, progress]);

  // For minimal+progress mode, animate pupils in a circle
  const getPupilPosition = (radius = 12) => {
    if (typeof progress === 'number') {
      const angle = ((progress * 0.999) / 100) * 2 * Math.PI - Math.PI / 2; // Start at top, go just under full circle
      return {
        left: `calc(50% + ${radius * Math.cos(angle)}px)` ,
        top: `calc(50% + ${radius * Math.sin(angle)}px)` ,
        transform: 'translate(-50%, -50%)',
      };
    }
    // fallback: center
    return { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' };
  };

  if (minimal) {
    return (
      <div className="flex gap-4 items-center justify-center">
        <div className="w-20 h-20 flex items-center justify-center bg-zinc-100 rounded-full">
          <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
            <div
              style={getPupilPosition(12)}
              className="absolute"
            >
              <div className="w-4 h-4 rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div>
        <div className="w-20 h-20 flex items-center justify-center bg-zinc-100 rounded-full">
          <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
            <div
              style={getPupilPosition(12)}
              className="absolute"
            >
              <div className="w-4 h-4 rounded-full bg-zinc-100"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mobile and tablet version (no scroll effects)
  const mobileTabletVersion = (
    <div className="w-full relative h-[300px] sm:h-screen bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] py-8 mb-8">
      <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
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
    </div>
  );

  // Desktop version (with scroll effects)
  const desktopVersion = (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.5"
      className="w-full relative h-[300px] sm:h-screen bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
    >
      <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
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
    </div>
  );

  return (
    <div className="eyes w-full h-[300px] md:h-[800px] overflow-hidden">
      {isMobileOrTablet ? mobileTabletVersion : desktopVersion}
    </div>
  );
}

export default Eyes;