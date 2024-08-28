import React from 'react';
import "../styles/CreateListing.scss";
import Navbar from '../components/Navbar';
import { categories, types } from '../data';

const CreateListing = () => {
  return (
    <div>
      <Navbar />

      <div className="create-listing">
        <h1>Publish Your Place</h1>
        <form>
          <div className="create-listing_step1">
            <h2>Step 1: Tell us about your place</h2>
            <hr />
            <h3>Which of these categories best describes your place?</h3>
            <div className="category-list">
              {categories?.map((item, index) => (
                <div className="category" key={index}>
                  <div className="category_icon">{item.icon}</div>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>

            <h3>What type of place will guests have?</h3>
            <div className="type-list">
              {types?.map((item, index) => {
                <div className="type" key={index}>
                  <div className="type_text">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              })}
            </div>

            <h3>Where is your place located?</h3>
            <div className="full">
              <div className="location">
                <p>Street Address</p>
                <input 
                  type="text" 
                  placeholder='Street Address' 
                  name='streetAddress 
                  required' />
              </div>
            </div>
          </div>



        </form>
      </div>
    </div>
  )
}

export default CreateListing
