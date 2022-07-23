import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positionsProfessional from '../data/resume/positionsProfessional';
import positionsAcademic from '../data/resume/positionsAcademic';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Professional Experience',
  'Academic Experience',
  'Skills',
  'Courses',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Zhuoheng Huang's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positionsProfessional} type="Professional Experience" />
      <Experience data={positionsAcademic} type="Academic Experience" />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />

    </article>
  </Main>
);

export default Resume;
