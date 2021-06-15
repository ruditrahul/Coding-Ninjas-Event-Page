import { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Chip from "@material-ui/core/Chip";
import Cards from "./Cards";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Pagination from "./Pagination";
import React from "react";
import "./MobileView.css";

const eventCategoryNames = [
  "ALL_EVENTS",
  "BOOTCAMP_EVENT",
  "WEBINAR",
  "CODING_EVENTS",
  "WORKSHOP",
];
const eventSubCategoryNames = ["Upcoming", "Archived", "All Time Favorites"];

const tags = [
  "Interview Preparation",
  "Contest Solutions",
  "Competitive Programming",
  "Futuristic Tech",
  "Coding Concepts",
  "Career Guidance",
  "Web Development",
  "Android",
  "Machine Learning",
  "Campus Event",
  "Online Coding Event",
  "Hackathon",
  "Women Who Code",
  "GSoC",
  "Placement",
  "Aptitude Preparation",
  "Efficient Coding",
  "Programming Contest",
  "Coding Marathon",
  "All Night Coding",
  "Code Wars",
  "Scholarship Test",
];

function MobileView() {
  const [categoryName, setCategoryName] = useState("ALL_EVENTS");
  const [subCategoryName, setSubCategoryName] = useState("Upcoming");
  const [tagName, setTags] = useState([""]);
  const [events, setEvents] = useState([]);
  const [checked, setChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = events.slice(indexOfFirstPost, indexOfLastPost);

  const [categoryDropDownOpen, setCategoryDropDownOpen] = useState(false);

  const toggleCategory = () =>
    setCategoryDropDownOpen((prevState) => !prevState);

  const [subCategoryDropDownOpen, setSubCategoryDropDownOpen] = useState(false);

  const toggleSubCategory = () =>
    setSubCategoryDropDownOpen((prevState) => !prevState);

  const [tagDropDownOpen, setTagDropDownOpen] = useState(false);

  const toggleTag = () => setTagDropDownOpen((prevState) => !prevState);

  function handleTagName(e) {
    console.log(e.currentTarget);
    if (e.currentTarget.firstChild.checked === true)
      e.currentTarget.firstChild.checked = false;
    else e.currentTarget.firstChild.checked = true;
    setTags((prevTags) => {
      const length = prevTags.length;
      const newArrayTag = prevTags.filter(
        (tag) => tag !== e.currentTarget.innerText
      );
      e.currentTarget.checked = true;
      if (newArrayTag.length === length) {
        return [...prevTags, e.target.innerText];
      } else return newArrayTag;
    });

    if (e.currentTarget.classList.contains("highlight-dropdown"))
      e.currentTarget.classList.remove("highlight-dropdown");
    else e.currentTarget.classList.add("highlight-dropdown");
  }
  function handleCategoryName(e) {
    setCategoryName(e.currentTarget.innerText);
  }
  function handleSubCatergoryName(e) {
    setSubCategoryName(e.currentTarget.innerText);
  }

  //Function to change the page content
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetch(
      `https://api.codingninjas.com/api/v3/events?event_category=${categoryName}&event_sub_category=${subCategoryName}&tag_list=${tagName}&offset=0`
    )
      .then((res) => res.json())
      .then((data) => setEvents(data.data.events));
  }, [categoryName, subCategoryName, tagName]);

  return (
    <div className="main-mobile-div">
      <div className="mobile-category-div">
        <Dropdown isOpen={categoryDropDownOpen} toggle={toggleCategory}>
          <DropdownToggle caret>{categoryName}</DropdownToggle>
          <DropdownMenu>
            {eventCategoryNames.map((category) => (
              <DropdownItem
                onClick={handleCategoryName}
                className="category-dropdown-btn"
              >
                {category}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="sub-category-and-tags-div">
        <Dropdown isOpen={subCategoryDropDownOpen} toggle={toggleSubCategory}>
          <DropdownToggle caret>{subCategoryName}</DropdownToggle>
          <DropdownMenu>
            {eventSubCategoryNames.map((subCategory) => (
              <DropdownItem onClick={handleSubCatergoryName}>
                {subCategory}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <Dropdown isOpen={tagDropDownOpen} toggle={toggleTag}>
          <DropdownToggle caret>Filters</DropdownToggle>
          <DropdownMenu className="drop-down-menu">
            {tags.map((category) => (
              <DropdownItem
                onClick={handleTagName}
                className="tag-drop-down-btn"
              >
                {category}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>

      {tagName.length > 1 && (
        <div className="chip-div">
          {tagName.map(
            (tag) => tag !== "" && <Chip label={tag} className="chip" />
          )}
        </div>
      )}

      <div className="card-div">
        <Card>
          <CardContent>
            {events.length !== 0 ? (
              <div>
                <Cards eventsData={currentPosts} />
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={events.length}
                  paginate={paginate}
                />
              </div>
            ) : (
              <CardMedia
                className="card-media"
                image="https://i.pinimg.com/originals/c9/22/68/c92268d92cf2dbf96e3195683d9e14fb.png"
                title="Contemplative Reptile"
                style={{ height: "300px", width: "300px" }}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default MobileView;
