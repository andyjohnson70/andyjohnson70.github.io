import Image from 'next/image';
import github from '../../public/github.png';
import linkedin from '../../public/linkedin.png';
import email from '../../public/mail.png';

export default function Contact() {
    return (
        <section id="contact" className="bg-yellow-green w-full flex flex-col justify-center p-10">
            <div className="text-center pb-10 text-3xl underline underline-offset-8 decoration-tea-green">
                Contact
            </div>
            <div className="flex flex-col sm:flex-row gap-20">
                <div className='basis-1/2'>   
                    <div className='text-xs pb-5'>Send me a message through this form or email me directly at <b>andyjohnson70@gmail.com</b></div>
                    <form action="https://formspree.io/f/xjkgrbpd" method='POST'>
                        <div className="flex flex-col gap-4">
                            <input className='bg-transparent border-black border-b placeholder-black' type="text" name="name" aria-required="true" required placeholder="name" />
                            <input className='bg-transparent border-black border-b placeholder-black' type="email" name="email" aria-required="true" required placeholder="email" />
                            <textarea className='bg-transparent border-black border-b placeholder-black' name="message" aria-required="true" required placeholder="message"></textarea>
                            <button className="bg-tea-green rounded-xl w-1/2 sm:w-1/4 mx-auto" type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
                <div className="flex flex-row sm:flex-col gap-5 h-fit">
                    <a className='h-fit' href='https://github.com/andyjohnson70' target="_blank"><Image src={github} width={32} height={32} alt='GitHub Repo' /> GitHub</a>
                    <a className='h-fit' href='https://www.linkedin.com/in/andy-johnson-b48269267/' target="_blank"><Image src={linkedin} width={32} height={32} alt='LinkedIn' /> LinkedIn</a>
                    <a className='h-fit' href='mailto:andyjohnson70@gmail.com' target="_blank"><Image src={email} width={32} height={32} alt='Gmail' /> Email</a>
                </div>
            </div>
        </section>
    );
}