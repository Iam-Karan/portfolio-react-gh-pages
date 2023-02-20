import AndroidStudio from "../../../images/Android_Studio.png";
import Android from "../../../images/android.png";
import Css from "../../../images/css.png";
import Figma from "../../../images/Figma.png";
import Firebase from "../../../images/Firebase.png";
import Flutter from "../../../images/flutter1.png";
import Github from "../../../images/Git.png";
import Html from "../../../images/html.webp";
import IntelIj from "../../../images/IntelliJ.png";
import Ios from "../../../images/ios.png";
import Java from "../../../images/java.png";
import JavaScript from "../../../images/javascript.png";
import Kotlin from "../../../images/Kotlin.png";
import MariaDB from "../../../images/mariadb.png";
import MaterialDesign from "../../../images/Material_Design.png";
import MongoDB from "../../../images/MongoDB.png";
import MySQL from "../../../images/MySQL.png";
import NextJs from "../../../images/nextJs.png";
import React from "../../../images/React.png";
import Sqlite from "../../../images/SQLite.png";
import Swift from "../../../images/swift.png";
import VsCode from "../../../images/Visual_Studio_Code.png";
import Xcode from "../../../images/Xcode.webp";

const mobileTechnology = [
  Android,
  Java,
  Kotlin,
  Flutter,
  Swift,
  Ios,
];
const nameOfMobileTechnology = ["Android", "Java", "Kotlin", "Flutter", "Swift", "IOS"];
const dataBase = [MySQL, MongoDB, MariaDB, Sqlite, Firebase];
const nameOfDataBase = ["MySQL", "MongoDB", "MariaDB", "SQLite", "Firebase"];
const webTechnology = [React, JavaScript, Html, Css, NextJs];
const nameOfWebTechnology = ["React", "JavaScript", "HTML", "CSS", "Next.JS"]
const tools = [AndroidStudio, Github, Figma, VsCode, IntelIj, Xcode];
const nameOfTools = ["AndroidStudio", "Github","Figma", "VSCode", "IntelIj", "Xcode"];

const ListOfSkills = [
  { id: 1, name: "Mobile Technology", image: mobileTechnology, nameOfImage: nameOfMobileTechnology },
  { id: 2, name: "Web Technology", image: webTechnology, nameOfImage: nameOfWebTechnology },
  { id: 3, name: "Data Base", image: dataBase, nameOfImage:nameOfDataBase },
  { id: 4, name: "Tools", image: tools, nameOfImage: nameOfTools },
];

export default ListOfSkills;
