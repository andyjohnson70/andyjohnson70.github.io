import Image, { StaticImageData } from 'next/image';
import github from '../../public/github.png';
import tft from '../../public/tft-preview.png';
import golfAdmin from '../../public/golf-admin-preview.png';

export default function Projects() {
    return(
        <section id="projects" className="bg-dark-spring-green w-full flex flex-col justify-center p-10 gap-y-10">
            <div className="text-center text-3xl underline underline-offset-8 decoration-tea-green">
                Projects
            </div>
            <div>
                <ProjectRow
                    image={golfAdmin}
                    title='Golf Tournament Dashboard'
                    description='An admin and dashboard site for a local golf tournament that my family puts on every summer. Built with React, TypeScript, Node.JS, and utilizes Google Sheets.'
                    link='https://johnsonopen.com' />
            </div>
            <div>
                <ProjectRow 
                    image={tft}
                    title='Strategy Game Practice Tool'
                    description='A tool that I made to practice my favorite strategy game, Teamfight Tactics, that is build with React, TypeScript, NextJS, PostgreSQL, and deployed and managed with Vercel.'
                    link='https://github.com/andyjohnson70/TFT-Rolldown-Simulator' />
            </div>
        </section>
    );
}

function ProjectRow(props: ProjectRowProps) {
    return(
        <div className='flex flex-col sm:flex-row gap-5 w-full sm:w-9/12 justify-center mx-auto'>
            <div className='sm:basis-1/2'>
                <Image className='w-full rounded-lg border border-solid border-black' src={props.image} alt="" />
            </div>
            <div className='sm:basis-1/2'>
                <div className='flex flex-col'>
                    <div className='text-center text-xl font-bold pt-5'>
                        {props.title}
                    </div>
                    <div className='text-sm pt-5'>
                        {props.description}
                    </div>
                    <a className='w-fit pt-5' href={props.link} target="_blank"><Image src={github} width={32} height={32} alt='GitHub Repo' /></a>
                </div>
            </div>
        </div>
    );
}

interface ProjectRowProps {
    image: StaticImageData,
    title: string
    description: string,
    link: string,
}