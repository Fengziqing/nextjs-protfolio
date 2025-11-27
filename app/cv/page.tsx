"use client"
import React from "react"
import DownloadCV from "./Download"
import spot from "@/public/images/spot.svg"
import Image from "next/image"
import "./cv.scss"

const Cv = () => {
    const language = [
        "Python",
        "C++",
        "React",
        "Javascrip",
        "Typescript",
        "HTML",
        "CSS",
        "Bash",
        "Tailwindcss",
        "Objectice-C",
        "Node.js",
        "Next.js",
        "Express.js",
        "C",
    ]
    const tools = ["Git", "hardhat"]
    const apps = ["Jekins", "Figma", "mongoose", "ganache"]
    const database = ["MongoDB"]
    const platform = ["Heroku", "Vercel", "chainlink"]
    const others = ["Unit Testing", "Jest", "CI/CD"]

    function handleClick(link: string) {
        window.open(link, "_blank")
    }

    return (
        <>
            <div className="cv">
                <DownloadCV />
                <div className="seperater">Skills</div>
                <div className="ocha">
                    <div className="school-name [&>*]:dark:text-white">
                        <p>
                            Language <br />
                            <span>
                                {" "}
                                - All professional proficiency or above -{" "}
                            </span>
                        </p>
                        <Image className="spot" src={spot} alt="spot" />
                    </div>
                    <ul className="ul-normal [&>*]:dark:text-white">
                        <li>Chinese - native speaker</li>
                        <li>English - working language / IELTS 6.0</li>
                        <li>Japnese - N1</li>
                    </ul>
                </div>
                <div className="ocha">
                    <div className="school-name [&>*]:dark:text-white">
                        <p>Development</p>
                        <Image className="spot" src={spot} alt="spot" />
                    </div>
                    <ul className="development-language">
                        {language.map((item) => (
                            <li key={item} className="language-label">
                                {item}
                            </li>
                        ))}
                        {tools.map((item) => (
                            <li key={item} className="tools">
                                {item}
                            </li>
                        ))}
                        {apps.map((item) => (
                            <li key={item} className="apps">
                                {item}
                            </li>
                        ))}
                        {database.map((item) => (
                            <li key={item} className="database">
                                {item}
                            </li>
                        ))}
                        {platform.map((item) => (
                            <li key={item} className="platform">
                                {item}
                            </li>
                        ))}
                        {others.map((item) => (
                            <li key={item} className="others">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="seperater">Work Experience </div>
                <div className="ocha">
                    <div className="school-name [&>*]:dark:text-white">
                        <p>
                            Software Engineer
                            <br />
                            <span>Huawei - YinWang (outsource)</span>
                            <br />
                            <span>
                                Shanghai, China <br />
                                2024.09 - 2025.09
                            </span>
                        </p>
                        <Image className="spot" src={spot} alt="spot" />
                    </div>
                    <ul className="ul-normal [&>*]:dark:text-white">
                        <li>
                            AITO M9 In-Car Motion Gaming (
                            <span className="skill">Industry First</span>): As a
                            core developer, conducted model research, training,
                            and optimization using PyTorch to solve low-light
                            recognition (30% up). Implemented 3 high-precision
                            gesture recognition algorithms (
                            <span className="language">C++</span>), maintaining
                            a stable detection rate of over 99% in vehicle
                            environments. Wrote and maintained unit tests for
                            C++ modules, achieving over 80% branch coverage to
                            ensure code reliability.{" "}
                            <span className="skill">
                                The flagship feature achieved over 20,000 Weekly
                                Active Users on the M9
                            </span>
                            .
                        </li>
                        <li>
                            AITO M9 Gesture-Controlled Door (
                            <span className="skill">Industry First</span>):
                            Played a key role in the end-to-end development:
                            conducted model investigation and validation (
                            <span className="language">PyTorch</span>), and
                            implemented the core functionality (
                            <span className="language">C++</span>). Contributed
                            to API design and verification, ensuring robust
                            system integration.
                            <span className="skill">
                                The launched feature achieved over 85% detection
                                rate and a 40% user adoption rate via OTA in its
                                first month.
                            </span>
                        </li>
                        <li>
                            CI/CD Pipeline Improvement: Redesigned and optimized
                            CI/CD build scripts (
                            <span className="language">Bash</span>) to support
                            automated multi-repository fetching and compilation.
                            This enhancement established the foundation for
                            scaling team projects by enabling parallel
                            development.
                        </li>
                        <li>
                            Root-caused and fixed a persistent crash caused by a
                            dangling pointer from flawed thread lifecycle
                            management, permanently resolving the issue.
                        </li>
                    </ul>
                </div>
                <div className="ocha">
                    <div className="school-name [&>*]:dark:text-white">
                        <p>
                            Freelancer
                            <br />
                            <span>2023.10 - now</span>
                        </p>
                        <Image className="spot" src={spot} alt="spot" />
                    </div>
                    <ul className="ul-normal [&>*]:dark:text-white">
                        <li>
                            This Website: 100% developed and designed by myself
                            <br /> Development Language: HTML, Tailwind CSS,
                            SCSS(cvPage), Typescript, React, Nextjs, Nodejs,
                            Expressjs ...
                            <br /> Github:{" "}
                            <span
                                className="name-explanation"
                                onClick={() =>
                                    handleClick(
                                        "https://github.com/Fengziqing/nextjs-protfolio",
                                    )
                                }
                            >
                                https://github.com/Fengziqing/nextjs-protfolio
                                🔗
                            </span>
                        </li>
                        <li>
                            *
                            <br /> Old version of my portfolio website (100%
                            developed and designed by me)
                            <br /> Link:{" "}
                            <span
                                className="name-explanation"
                                onClick={() =>
                                    handleClick(
                                        "https://ziqingfeng-v1.vercel.app/",
                                    )
                                }
                            >
                                https://ziqingfeng-v1.vercel.app/
                            </span>
                            <br /> Development Language: HTML, SCSS, Javascript,
                            React, Nodejs, Expressjs ...
                            <br /> Github:{" "}
                            <span
                                className="name-explanation"
                                onClick={() =>
                                    handleClick(
                                        "https://github.com/Fengziqing/portfolio",
                                    )
                                }
                            >
                                https://github.com/Fengziqing/portfolio 🔗 *
                            </span>
                            <br />*
                        </li>
                    </ul>
                </div>
                <div className="ocha">
                    <div className="school-name [&>*]:dark:text-white">
                        <p>
                            Client Engineer
                            <br />{" "}
                            <span
                                className="name-explanation"
                                onClick={() => handleClick("https://zoom.us/")}
                            >
                                ZOOM 🔗
                            </span>{" "}
                            <br />
                            <span>
                                {" "}
                                HangZhou, China <br />
                                2022 - 2023
                            </span>
                        </p>
                        <Image className="spot" src={spot} alt="spot" />
                    </div>
                    <ul className="ul-normal [&>*]:dark:text-white">
                        <li>
                            Led the development of{" "}
                            <span
                                className="name-explanation"
                                onClick={() =>
                                    handleClick(
                                        "https://github.com/Fengziqing/languageTest",
                                    )
                                }
                            >
                                validation scripts(
                                <span className="language">Python</span>) 🔗
                            </span>
                            for ZOOM Mac client in all 16 languages, covering
                            the entire process from{" "}
                            <span className="skill">
                                requirements analysis to script development,
                                testing, and automation
                            </span>
                            . Utilized Python to implement checks for
                            translation accuracy, text formatting, and
                            placeholders across the diverse language set. The
                            script generates comprehensive output files with
                            summaries, ensuring outstanding and stable support
                            for ZOOM Mac client usage.
                        </li>
                        <li>
                            Led the design and development of a new feature(
                            <span className="language">Objective-C</span>) which
                            aimed at enhancing user engagement for unregistered
                            users, by{" "}
                            <span className="skill">
                                millions of non-enterprise users daily, has
                                become instrumental in generating millions of
                                dollars in revenue for ZOOM each quarter.
                            </span>{" "}
                        </li>
                        <li>
                            Successfully refactored the Zoom settings interface
                            by transitioning from XIB(utilizing visual tools for
                            development but prone to unpredictable bugs) to
                            entirely{" "}
                            <span className="language">Objective-C</span>{" "}
                            code-based implementation (stable and easily
                            traceable for bug identification).
                        </li>
                        <li>
                            Developed a website using{" "}
                            <span className="language">
                                HTML, CSS, and Javascript
                            </span>{" "}
                            for internal staff to upload and analyze log files.
                            This website facilitates daily tasks for all
                            development colleagues, making their work more
                            efficient.
                        </li>
                        <li>
                            Collaborated with the UI/UX team to ensure a
                            consistent and visually appealing interface across
                            all versions of macOS devices.
                        </li>
                        <li>
                            Authored documentation on trigger tracking code
                            usage, effectively aiding new colleagues in rapidly
                            mastering the skill of writing tracking code.
                        </li>
                    </ul>
                </div>
                <div className="seperater">Education</div>
                <div className="ocha">
                    <div className="school-name [&>*]:dark:text-white">
                        <p>
                            Master degree <br />{" "}
                            <span
                                className="name-explanation"
                                onClick={() =>
                                    handleClick(
                                        "https://www.ocha.ac.jp/index.html",
                                    )
                                }
                            >
                                Ochanomizu University 🔗
                            </span>{" "}
                            <br />
                            <span>Tokyo, Japan</span> <br />{" "}
                            <span>2020 - 2022</span>
                        </p>
                        <Image className="spot" src={spot} alt="spot" />
                    </div>
                    <ul className="ul-normal [&>*]:dark:text-white">
                        <li>
                            Computer Science Master degree in{" "}
                            <span
                                className="name-explanation"
                                onClick={() =>
                                    handleClick("http://is.ocha.ac.jp/~siio/")
                                }
                            >
                                Human-Computer Interaction, Siio Lab 🔗
                            </span>
                        </li>
                        <li>
                            <span
                                className="name-explanation"
                                onClick={() =>
                                    handleClick(
                                        "https://www.ipsj.or.jp/award/taikaigakusei.html",
                                    )
                                }
                            >
                                Student Encouragement Award 🔗
                            </span>
                            , The 84th National Convention of the Information
                            Processing Society of Japan(IPSJ), 2022
                            <br />
                            ZIQING FENG, Mana SASAGAWA, Itiro SIIO, Yasushi
                            MATOBA, “
                            <span
                                className="name-explanation"
                                onClick={() =>
                                    handleClick(
                                        "http://is.ocha.ac.jp/~siio/projects/papers/ipsj2022/7Y-03.pdf",
                                    )
                                }
                            >
                                control by using half-reflective AR mirror
                                display 🔗
                            </span>
                            “
                        </li>
                        <li>
                            <span
                                className="name-explanation"
                                onClick={() =>
                                    handleClick(
                                        "https://www.jlpt.jp/e/about/levelsummary.html",
                                    )
                                }
                            >
                                Language Proficiency N1 🔗
                            </span>{" "}
                            : The highest-level certificate of Japanese
                            proficiency (24.1% Pass Rate)
                        </li>
                    </ul>
                </div>
                <DownloadCV />
            </div>
        </>
    )
}

export default Cv
