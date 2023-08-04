import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownShortWide,
  faArrowDownWideShort,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCategories } from "../../store/actions/PostActions";
import "../../assets/css/post.css";

function FilterPosts(props) {
  const filterSelect = [
    {
      id: 1,
      field: "Time",
      filter: "updatedAt",
    },
    {
      id: 2,
      field: "Content",
      filter: "content",
    },
  ];
  const filterSortName = [
    {
      id: 1,
      name: "asc",
      icon: faArrowDownShortWide,
    },
    {
      id: 2,
      name: "desc",
      icon: faArrowDownWideShort,
    },
  ];
  const categories = useSelector((state) => state.posts.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllCategories());
  }, []);

  return (
    <>
      <div className="post-filter">
        <div className="d-flex mb-2">
          <div className="d-flex">
            <div className="me-2">
              {/* select */}
              <Form.Select
                value={props.categoryId}
                onChange={props.handleSelectCategoriesChange}
              >
                {categories.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div className="me-2">
              {/* select */}
              <Form.Select
                value={props.column}
                onChange={props.handleSelectChange}
              >
                {filterSelect.map((item) => (
                  <option key={item.id} value={item.filter}>
                    {item.field}
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>
          <div className="ms-2 d-flex align-items-center">
            <div className="d-flex">
              {/* sort */}
              {filterSortName.map((item) => (
                <div key={item.id} className="d-flex">
                  <div className="d-flex align-items-center me-2">
                    <Form.Check
                      className="me-2"
                      value={item.name}
                      name="sortNotes"
                      label={item.name}
                      type="radio"
                      onChange={props.handleSortChange}
                      checked={props.sortName === item.name}
                    />
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Form className="d-flex mb-2" onSubmit={props.handleSearchSubmit}>
          <div className="input-group">
            <Form.Control
              name="seachToken"
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="form-control"
              // onChange={props.handleSearchChange}
            />
            <Button type="submit" variant="outline-secondary">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

FilterPosts.propTypes = {};

export default FilterPosts;
