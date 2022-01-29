/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { useState } from "react";
interface skillsDataTypes {
  skillName: string;
  developers: string[];
  profile: { technologies: string[]; roles: string[] };
}
const App = () => {
  const [typedData, setTypedData] = useState<skillsDataTypes>();
  const [ShowAddForm, setShowAddForm] = useState(false);

  const [skillData, setSkillData] = useState<skillsDataTypes>({
    skillName: "",
    developers: [],
    profile: {
      technologies: [],
      roles: [],
    },
  });
  const [skillsData, setSkillsData] = useState<skillsDataTypes[]>([
    {
      skillName: "",
      developers: [],
      profile: {
        technologies: [],
        roles: [],
      },
    },
  ]);

  const [showSkill, setShowSkill] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  let listSkills = skillsData.map((skill, index) => (
    <ul key={index}>
      <li>Skill Name: {skill.skillName}</li>
      <li>
        Developers:
        <ul>
          <li>{skill.developers[0]}</li>
          <li>{skill.developers[1]}</li>
        </ul>
      </li>
      <li>
        Technologies:
        <ul>
          <li>{skill.profile.technologies[0]}</li>
          <li>{skill.profile.technologies[1]}</li>
        </ul>
      </li>
      <li>
        Roles:
        <ul>
          <li>{skill.profile.roles[0]}</li>
          <li>{skill.profile.roles[1]}</li>
        </ul>
      </li>
    </ul>
  ));

  let name = (
    <>
      <h3>{skillData.skillName}</h3>
      <ul>
        <li>Skill Name: {skillData.skillName}</li>
        <li>
          Developers:
          <ul>
            <li>{skillData.developers[0]}</li>
            <li>{skillData.developers[1]}</li>
          </ul>
        </li>
        <li>
          Technologies:
          <ul>
            <li>{skillData.profile.technologies[0]}</li>
            <li>{skillData.profile.technologies[1]}</li>
          </ul>
        </li>
        <li>
          Roles:
          <ul>
            <li>{skillData.profile.roles[0]}</li>
            <li>{skillData.profile.roles[1]}</li>
          </ul>
        </li>
      </ul>
    </>
  );

  function loadSkill() {
    setShowSkill(true);
    setShowSkills(false);
    fetch("https://61e4d942595afe00176e51cb.mockapi.io/api/v1/skill")
      .then((response) => response.json())
      .then((data) => {
        setSkillData(data[0]);
      });
  }
  function loadSkills(skillItem ?:skillsDataTypes) {
    setShowSkill(false);
    setShowSkills(true);
    fetch("https://61e4d942595afe00176e51cb.mockapi.io/api/v1/skills")
      .then((response) => response.json())
      .then((data) => {
        setSkillsData(skillItem ? [skillItem,...data]: data);
      });
  }
  function OnSubmit(e: any) { //updated
    loadSkills(skillData);
    setShowSkills(true);
    setShowAddForm(false);
  }
  function OnChange(e: any, fieldName: string) {
    console.log(e.target.value);
    if (fieldName === "technologies" || fieldName === "roles") {
      setSkillData({
        ...skillData,
        profile: { ...skillData.profile, [fieldName]: [e.target.value] },
      });
    } else if (fieldName === "developers") {
      setSkillData({ ...skillData, developers: [e.target.value] });
    } else {
      {
        setSkillData({ ...skillData, [fieldName]: e.target.value });
      }
    }
  }
  function HandleClickAddBtn() {
    setShowAddForm(true);
  }
  return (
    <div data-test-id="div-data-test-id" className="App">
      <header className="App-header">
        <h1 data-test-id="h1-data-test-id">Developers App</h1>
      </header>
      {!ShowAddForm ? (
        <>
          <label data-test-id="label-data-test-id" htmlFor="input1">
            Type the skill you would like to search
          </label>
          <input data-test-id="input-skill-data-test-id" id="input-skill" className="input1"></input>
          <a data-test-id="search-button-data-test-id" id="search-button" className="button1" onClick={() => loadSkill()}>
            Search
          </a>
          <a
            data-test-id="load-skills-button-data-test-id"
            id="load-skills-button"
            className="button1"
            onClick={() => loadSkills()}
          >
            All Skills
          </a>
          <a
            data-test-id="add-skill-button-data-test-id"
            id="add-skill-button"
            className="button1"
            onClick={HandleClickAddBtn}
          >
            Add Skills
          </a>
          {showSkill ? name : ""}
          {showSkills ? listSkills : ""}
        </>
      ) : (
        <form onSubmit={OnSubmit}>
          <body>
            <h5> Skill Name </h5>
            <input
              type="text"
              id="skillName"
              name="skillName"
              onChange={(e) => OnChange(e, "skillName")}
              style={{ width: "200px", height: "40px" }}
            />
            <h5> Developers </h5>
            <select
              id="developers"
              name="developers"
              onChange={(e) => OnChange(e, "developers")}
              style={{ width: "200px", height: "40px" }}
            >
              <input type="text" name="Developer" />
              <option value="Dev_1">Dev_1</option>
              <option value="Dev_2">Dev_2</option>
              <option value="Dev_3">Dev_3</option>
            </select>
            <h5> Thecnologies </h5>
            <select
              id="technologies"
              name="technologies"
              onChange={(e) => OnChange(e, "technologies")}
              style={{ width: "200px", height: "40px" }}
            >
              <option value="Java">Java</option>
              <option value="React">React</option>
              <option value="Phyton">Phyton</option>
            </select>
            <h5> Roles </h5>
            <select
              id="roles"
              name="roles"
              onChange={(e) => OnChange(e, "roles")}
              style={{ width: "200px", height: "40px" }}
            >
              <option value="Developer">Developer</option>
              <option value="Quality Assurance">Quality Assurance</option>
              <option value="UI/UX_Designer">UI/UX Designer</option>
            </select>
          </body>
          <button type="submit" >Add Skills </button>
        </form>
      )}
    </div>
  );
};
export default App;
