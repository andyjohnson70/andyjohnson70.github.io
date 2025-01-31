'use client'
import locationIcon from "../../public/location.png";
import Image from 'next/image';
import github from '../../public/github.png';
import linkedin from '../../public/linkedin.png';
import email from '../../public/mail.png';
import { useEffect, useState } from "react";

export default function Landing() {
    const [rainDrops, setRainDrops] = useState<RainDrop[]>([]);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        setIsClient(true);
        setWindowWidth(window.innerWidth);
        function handleWindowResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

    function populateRainDrops() {
        const newRainDrops : RainDrop[] = [];
        const amount = 200;
        let i = 0;
        while(i < amount) {
            newRainDrops.push({ width: Math.random() * 5, position: Math.random(), delay: Math.random() * -20, duration: Math.random() * 5});
            i++;
        }
        setRainDrops(newRainDrops);
    }
    if(rainDrops.length < 1) {
        populateRainDrops();
    }
    return(
        <section id="home" className="bg-cal-poly-green w-full">
            <div className="rainDrops">
                {isClient ? rainDrops.map((rainDrop, index) => {
                    return <div className="rainDrop" style={{width:Math.max(1, (0.5 * rainDrop.width)) + 'px', left: Math.min(windowWidth - 30, (Math.floor(rainDrop.position * windowWidth)))  + 'px', animationDelay: rainDrop.delay + 's', animationDuration: Math.min(5, 2 + rainDrop.duration) + 's'}} key={index}>
                                <div className="stem" style={{width:Math.max(1, (0.5 * rainDrop.width)) + 'px', animationDelay: rainDrop.delay + 's', animationDuration: Math.min(5, 2 + rainDrop.duration) + 's'}}></div>
                                <div className="splat" style={{animationDelay: 0.05 + rainDrop.delay + 's', animationDuration: Math.min(5, 2 + rainDrop.duration) + 's'}}></div>
                            </div>
                }) : null}
            </div>
            <div className="flex flex-col gap-12 justify-center h-screen items-center">
                <div className="text-2xl sm:text-7xl text-tea-green font-extrabold text-center z-10">
                    MY NAME IS ANDY JOHNSON
                </div>
                <div className="text-sm sm:text-xl text-tea-green text-center z-10">
                    a fullstack software engineer who designs and builds end to end web solutions
                </div> 
                <div className="flex flex-row z-10">
                    <a href='https://github.com/andyjohnson70' target="_blank"><Image src={github} width={32} height={32} alt='GitHub Repo' /></a>
                    <a className="px-5" href='https://www.linkedin.com/in/andy-johnson-b48269267/' target="_blank"><Image src={linkedin} width={32} height={32} alt='LinkedIn' /></a>
                    <a href='mailto:andyjohnson70@gmail.com' target="_blank"><Image src={email} width={32} height={32} alt='Gmail' /></a>
                </div>
                <div className="text-tea-green text-center z-10">
                    <Image className="inline-block mr-2" src={locationIcon} width={25} height={25} alt="Location icons created by Freepik - Flaticon" />
                    <div className="inline-block">Seattle, WA</div>
                </div>
            </div>
        </section>
    );
}

type RainDrop = {
    width: number;
    position: number;
    delay: number;
    duration: number;
}