import Image from 'next/image';
import github from '../../public/github.png';
import linkedin from '../../public/linkedin.png';
import email from '../../public/mail.png';
import resume from '../../public/resume.png';

export default function Contact() {
    return (
        <section id="contact" className="bg-yellow-green w-full flex flex-col justify-center p-10">
            <div className="text-center pb-10 text-3xl underline underline-offset-8 decoration-tea-green">
                Contact
            </div>
            <div className="flex flex-row gap-20">
                <div className='basis-1/2'>   
                    <form action="https://formspree.io/f/xjkgrbpd" method='POST'>
                        <div className="flex flex-col gap-4">
                            <input type="text" name="name" placeholder="name" />
                            <input type="email" name="email" placeholder="email" />
                            <textarea name="message" placeholder="message"></textarea>
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
                <div className="flex flex-col gap-2">
                    <div>
                        <a href='https://github.com/andyjohnson70' target="_blank"><Image src={github} width={32} height={32} alt='GitHub Repo' /> GitHub</a>
                    </div>
                    <div>
                        <a href='https://www.linkedin.com/in/andy-johnson-b48269267/' target="_blank"><Image src={linkedin} width={32} height={32} alt='LinkedIn' /> LinkedIn</a>
                    </div>
                    <div>
                        <a href='mailto:andyjohnson70@gmail.com' target="_blank"><Image src={email} width={32} height={32} alt='Gmail' /> Email</a>
                    </div>
                    <div>
                        <a href='' target="_blank"><Image src={resume} width={32} height={32} alt='Gmail' /> Resume</a>
                    </div>
                </div>
            </div>
        </section>
    );
}