import React from 'react';
import { Progress } from 'antd';

const SkillSection: React.FC<any> = (props) => {
  const { gitInfo } = props;
  const { repoCount, repoName, skills, skillsOrder, __v, _id } = gitInfo;
  const percentDivision = 100 / Math.max(...skillsOrder);

  return (
    <>
      <section className="skills-section">
        <h3>
          <b>Skills</b>
        </h3>
        {skills.map((itm: string, index: number) => {
          return (
            <>
              <span>{itm}</span>
              <Progress
                percent={percentDivision * skillsOrder[index]}
                showInfo={false}
                strokeColor="#F2EE8B"
              />
            </>
          );
        })}
      </section>
      <section className="github-repo-section">
        <h3>
          <b>Github repo count</b>
        </h3>
        <h2>{repoCount}</h2>
      </section>
    </>
  );
};

export default SkillSection;
