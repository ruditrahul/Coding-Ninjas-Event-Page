import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Cards from "./Cards";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Pagination from "./Pagination";
import "./LaptopView.css";

function LaptopView({ eventCategoryNames, eventSubCategoryNames, tags }) {
  const [categoryName, setCategoryName] = useState("ALL_EVENTS"); //Setting the initial category as ALL_EVENTS
  const [subCategoryName, setSubCategoryName] = useState("Upcoming"); //Setting the initial sub-category as Upcoming
  const [tagName, setTags] = useState([""]);
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = events.slice(indexOfFirstPost, indexOfLastPost);

  function handleCategoryName(e) {
    setCategoryName(e.currentTarget.innerText);

    //Applying CSS to the clicked button
    const categoryBtn = document.querySelectorAll(".category-btn");
    categoryBtn.forEach((btn) => {
      btn.classList.remove("highlight");
    });
    e.currentTarget.classList.add("highlight");
  }

  function handleSubCatergoryName(e) {
    setSubCategoryName(e.currentTarget.innerText);

    //Applying CSS to the clicked Button
    const subCategoryBtn = document.querySelectorAll(".subCategory-btn");
    subCategoryBtn.forEach((btn) => {
      btn.classList.remove("highlight");
    });
    e.currentTarget.classList.add("highlight");
  }

  function handleTagName(e) {
    setTags((prevTags) => {
      const length = prevTags.length;

      //newArrayTag contains only unique tag names.
      //Checks and removes the tag if the currentTarget Tag is present in the newArrayTag.
      const newArrayTag = prevTags.filter(
        (tag) => tag !== e.currentTarget.innerText
      );

      //If the currentTarget Tag is not present then adding it to the newArrayTag.
      if (newArrayTag.length === length)
        return [...prevTags, e.target.innerText];
      else return newArrayTag;
    });

    //Applying CSS to the clicked button.
    e.currentTarget.classList.contains("highlight")
      ? e.currentTarget.classList.remove("highlight")
      : e.currentTarget.classList.add("highlight");
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
      .then((eventData) => setEvents(eventData.data.events));
  }, [categoryName, subCategoryName, tagName]);

  return (
    <div style={{ marginBottom: "10px" }}>
      <div className="category-div">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            onClick={handleCategoryName}
            className="category-btn highlight"
          >
            ALL_EVENTS
          </Button>
          {eventCategoryNames.slice(1).map((categoryName) => (
            <Button onClick={handleCategoryName} className="category-btn">
              {categoryName}
            </Button>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="subCategory-div">
          <Card style={{ margin: "0 7px" }}>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={handleSubCatergoryName}
                className="subCategory-btn highlight"
                style={{ color: "gray" }}
              >
                Upcoming
              </Button>
              {eventSubCategoryNames.slice(1).map((subCategoryName) => (
                <Button
                  onClick={handleSubCatergoryName}
                  className="subCategory-btn"
                  style={{ color: "gray" }}
                >
                  {subCategoryName}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="content-div">
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
                //If data not found then display this image
                <CardMedia
                  className="card-media"
                  image="https://i.pinimg.com/originals/c9/22/68/c92268d92cf2dbf96e3195683d9e14fb.png"
                  title="Contemplative Reptile"
                  style={{ height: "750px", width: "750px" }}
                />
              )}
            </CardContent>
          </Card>
        </div>

        <div className="tags-div">
          <Card style={{ margin: "0 7px" }}>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {tags.map((tag) => (
                <Button
                  onClick={handleTagName}
                  style={{ color: "gray" }}
                  className="tag-btn"
                >
                  {tag}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default LaptopView;
