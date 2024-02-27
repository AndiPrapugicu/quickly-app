"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "profileImage" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <section className="form-container">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h3>register now</h3>
          <p>
            your name <span>*</span>
          </p>
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            required
            maxLength="50"
            className="box"
            value={formData.name}
            onChange={handleChange}
          />
          <p>
            your email <span>*</span>
          </p>
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            required
            maxLength="50"
            className="box"
            value={formData.email}
            onChange={handleChange}
          />
          <p>
            your password <span>*</span>
          </p>
          <input
            type="password"
            name="password"
            placeholder="enter your password"
            required
            maxLength="20"
            className="box"
            value={formData.password}
            onChange={handleChange}
          />
          <p>
            confirm password <span>*</span>
          </p>
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm your password"
            required
            maxLength="20"
            className="box"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <p>
            select profile <span>*</span>
          </p>
          <input
            type="file"
            accept="image/*"
            required
            className="box"
            name="profileImage"
            onChange={handleChange}
          />
          <input
            type="submit"
            value="register new"
            name="submit"
            className="btn"
          />
        </form>
      </section>
    </div>
  );
};

export default RegisterForm;
