import { people } from "../../utils/people";

const PeopleSection = ({ wrong }) => {
  const peopleElements = people.map((person, index) => {
    const isPersonLost = index < wrong;

    return (
      <div key={person.id} className={`person ${isPersonLost ? "lost" : ""}`}>
        <i className={person.icon}></i>
        <h3>{person.name}</h3>
      </div>
    );
  });

  return (
    <>
      <section className="peopleSection">{peopleElements}</section>
    </>
  );
};

export default PeopleSection;
