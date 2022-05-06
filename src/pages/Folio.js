import { useState, useEffect } from "react"
import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Project from "../components/Project";
import Footer from "../components/Footer";
import '../../src/main2.css'

const FolioPage = (props) => {

  return (
    <>
		<Header />
		{/* <Nav /> */}
		<Project />
    </>
  )
}

export default FolioPage