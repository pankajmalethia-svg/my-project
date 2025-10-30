import React, { useState } from 'react';

// Base class Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Subclass Student
class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  displayInfo() {
    return `${super.displayInfo()}, Course: ${this.course}`;
  }
}

// Subclass Teacher
class Teacher extends Person {
  constructor(name, age, department) {
    super(name, age);
    this.department = department;
  }

  displayInfo() {
    return `${super.displayInfo()}, Department: ${this.department}`;
  }
}

const PersonHierarchyDemo = () => {
  const [personType, setPersonType] = useState('Student');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [department, setDepartment] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || (personType === 'Student' && !course) || (personType === 'Teacher' && !department)) {
      alert('Please fill all fields');
      return;
    }

    let newPerson;
    if (personType === 'Student') {
      newPerson = new Student(name, parseInt(age, 10), course);
    } else {
      newPerson = new Teacher(name, parseInt(age, 10), department);
    }

    setPeople([...people, newPerson]);
    setName('');
    setAge('');
    setCourse('');
    setDepartment('');
  };

  const handleRemove = (index) => {
    setPeople(people.filter((_, i) => i !== index));
  };

  const containerStyle = {
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    maxWidth: 480,
    margin: '30px auto',
    padding: 20,
    backgroundColor: '#fefefe',
    borderRadius: 8,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    color: '#222'
  };

  const titleStyle = {
    color: '#007acc',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  };

  const sectionStyle = {
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
    padding: 16,
    marginBottom: 16,
    border: '1px solid #ddd',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const labelStyle = {
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 8,
    color: '#333'
  };

  const infoStyle = {
    fontSize: 16,
    lineHeight: 1.4,
    color: '#444',
    maxWidth: '80%'
  };

  const inputStyle = {
    width: '100%',
    padding: 8,
    marginBottom: 12,
    borderRadius: 4,
    border: '1px solid #ccc',
    fontSize: 16
  };

  const buttonStyle = {
    padding: '10px 16px',
    backgroundColor: '#007acc',
    color: 'white',
    fontSize: 16,
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer'
  };

  const removeButtonStyle = {
    padding: '6px 12px',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    fontSize: 14
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Person Class Hierarchy Demo</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <label style={labelStyle}>Select Person Type:</label>
        <select
          style={inputStyle}
          value={personType}
          onChange={e => setPersonType(e.target.value)}
        >
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
        </select>

        <label style={labelStyle}>Name:</label>
        <input
          type="text"
          style={inputStyle}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <label style={labelStyle}>Age:</label>
        <input
          type="number"
          style={inputStyle}
          value={age}
          onChange={e => setAge(e.target.value)}
        />

        {personType === 'Student' ? (
          <>
            <label style={labelStyle}>Course:</label>
            <input
              type="text"
              style={inputStyle}
              value={course}
              onChange={e => setCourse(e.target.value)}
            />
          </>
        ) : (
          <>
            <label style={labelStyle}>Department:</label>
            <input
              type="text"
              style={inputStyle}
              value={department}
              onChange={e => setDepartment(e.target.value)}
            />
          </>
        )}

        <button type="submit" style={buttonStyle}>Add Person</button>
      </form>

      {people.length > 0 &&
        people.map((person, idx) => (
          <div key={idx} style={sectionStyle}>
            <div style={infoStyle}>{person.displayInfo()}</div>
            <button
              onClick={() => handleRemove(idx)}
              style={removeButtonStyle}
            >
              Remove
            </button>
          </div>
        ))
      }
    </div>
  );
};

export default PersonHierarchyDemo;
