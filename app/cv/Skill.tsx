import React from 'react';
import Image from 'next/image';

const Skill = () => {
    const language = ['React','Javascrip','Typescript','Python','HTML',
    'CSS','Tailwindcss','Objectice-C','Node.js','Next.js','Express.js','C++','C'];
    const tools=['Git'];
    const apps =['Jekins','Figma','mongoose'];
    const database = ['MongoDB'];
    const platform = ['Heroku','Vercel'];
    const others = ['Unit Testing','Jest','CI/CD'];

    return (
        <div className="ocha">
            <div className="school-name">
                <p>Development</p>
                <Image className="spot" src='/images/spot.svg' alt="spot" />
            </div>
            <ul className="development-language">
                {language.map(item => <li className="language-label" key={item}>{item}</li>)}
                {tools.map(item => <li className="tools" key={item}>{item}</li>)}
                {apps.map(item => <li className="apps" key={item}>{item}</li>)}
                {database.map(item => <li className="database" key={item}>{item}</li>)}
                {platform.map(item => <li className="platform" key={item}>{item}</li>)}
                {others.map(item => <li className="others" key={item}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Skill