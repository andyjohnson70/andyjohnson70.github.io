

export default function About() {
    return(
        <section id="about" className="bg-celadon w-full flex justify-center flex-col gap-20 sm:flex-row p-10">
            <div className="basis-full sm:basis-1/2">
                <div className="text-center pb-10 text-3xl underline underline-offset-8 decoration-tea-green">
                    About Me
                </div>
                <div className="pb-5">
                    With a strong foundation in backend and frontend development, I bring expertise across the full stack. 
                    I specialize in C#, JavaScript, MySQL, Rust, and Azure, having delivered a range of projects from user-friendly web applications to security focused services that help users keep their accounts safe.
                </div>
                <div className="">
                    I am constantly expanding my toolkit, recently diving deeper into React and TypeScript to create dynamic, user-friendly interfaces. 
                    My portfolio showcases this progression, with projects demonstrating not only technical skill but a drive to stay at the cutting edge of software development.
                </div>
            </div>
            
            <div className="basis-full sm:basis-1/2">
                <div className="text-center pb-10 text-3xl underline underline-offset-8 decoration-tea-green">
                    Skills
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row pb-5">
                        <div className="basis-1/4 font-bold">
                            Frontend:
                        </div>
                        <div className="basis-3/4">
                            React, TypeScript, JavaScript (ES6+), jQuery, HTML5, CSS3, Tailwind
                        </div>
                    </div>
                    <div className="flex flex-row pb-5">
                        <div className="basis-1/4 font-bold">
                            Backend:
                        </div>
                        <div className="basis-3/4">
                            C#, Rust, Node.js
                        </div>
                    </div>
                    <div className="flex flex-row pb-5">
                        <div className="basis-1/4 font-bold">
                            Database:
                        </div>
                        <div className="basis-3/4">
                            MySQL, SQL Server, PostgreSQL
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="basis-1/4 font-bold">
                            Cloud & DevOps:
                        </div>
                        <div className="basis-3/4">
                            Azure (App Services, Functions, Storage), CI/CD Pipelines
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}