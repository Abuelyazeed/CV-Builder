import React from "react";
import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

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

  function handleAdd() {
    if (selectedExperienceId) {
      const updatedList = experienceList.map((ex) =>
        ex.id === selectedExperienceId ? { ...ex, ...experienceInfo } : ex
      );
      onChangeExperienceList(updatedList);
    } else {
      const newExperience = { ...experienceInfo, id: Date.now() };
      onChangeExperienceList([...experienceList, newExperience]);
    }

    onChangeIsActive(false);
  }

  function handleDelete() {
    if (selectedExperienceId !== null) {
      onChangeExperienceList(
        experienceList.filter((ex) => ex.id !== selectedExperienceId)
      );
    }
    onChangeIsActive(false);
  }
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="company" className="form-label">
          Company Name
        </label>
        <input
          type="text"
          className="form-control"
          id="company"
          placeholder="Enter company name"
          value={experienceInfo.companyName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="position" className="form-label">
          Position Title
        </label>
        <input
          type="text"
          className="form-control"
          id="position"
          placeholder="Enter position title"
          value={experienceInfo.positionTitle}
          onChange={handleChange}
        />
      </div>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="startDate" className="form-label">
            Start Date
          </label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            placeholder="Enter degree / field of study"
            value={experienceInfo.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label htmlFor="endDate" className="form-label">
            End Date
          </label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            placeholder="Enter degree / field of study"
            value={experienceInfo.endDate}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="location" className="form-label">
          Location
        </label>
        <input
          type="text"
          className="form-control"
          id="location"
          placeholder="Enter location"
          value={experienceInfo.location}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          class="form-control"
          id="description"
          rows="3"
          placeholder="Description"
          value={experienceInfo.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <button
          type="button"
          className="btn btn-outline-danger mt-3"
          onClick={handleDelete}
        >
          <i className="bi bi-trash3 me-2"></i>
          Delete
        </button>
        <div className="d-flex flex-row">
          <button
            type="button"
            className="btn btn-outline-secondary mt-3"
            onClick={() => onChangeIsActive(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-outline-primary mt-3 ms-2"
            onClick={handleAdd}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEditExperience;
