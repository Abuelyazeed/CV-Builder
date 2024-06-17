import React from "react";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function AddEducation({
  educationList,
  onChangeEducationList,
  onChangeIsActive,
}) {
  const [educationInfo, setEducationInfo] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setEducationInfo({ ...educationInfo, [id]: value });
  }
  function handleAdd() {
    onChangeEducationList([...educationList, educationInfo]);
    onChangeIsActive(false);
  }

  function handleDelete() {
    onChangeIsActive(false);
  }
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="school" className="form-label">
          School
        </label>
        <input
          type="text"
          className="form-control"
          id="school"
          placeholder="Enter school / university"
          value={educationInfo.school}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="degree" className="form-label">
          Degree
        </label>
        <input
          type="text"
          className="form-control"
          id="degree"
          placeholder="Enter degree / field of study"
          value={educationInfo.degree}
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
            value={educationInfo.startDate}
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
            value={educationInfo.endDate}
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
          placeholder="Enter degree / field of study"
          value={educationInfo.location}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex flex-row justify-content-between">
        <button type="button" className="btn btn-outline-danger mt-3">
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

export default AddEducation;
