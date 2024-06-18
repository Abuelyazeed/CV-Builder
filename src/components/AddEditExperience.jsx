import React from "react";

function AddEditExperience({
  experienceList,
  onChangeExperienceList,
  selectedExperienceId,
  onChangeIsActive,
}) {
  const [experienceInfo, setExperienceInfo] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    if (selectedExperienceId !== null) {
      const selectedExperience = experienceList.find(
        (ex) => ex.id === selectedExperienceId
      );
      if (selectedExperience) {
        setExperienceInfo(selectedExperience);
      }
    }
  }, [selectedExperienceId, experienceList]);

  function handleChange(e) {
    const { id, value } = e.target;
    setExperienceInfo({ ...experienceInfo, [id]: value });
  }
  return <div>AddEditExperience</div>;
}

export default AddEditExperience;
