import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <div class="resume-div">
        <iframe 
                className="resume-iframe"
                title="resume"
                src="https://drive.google.com/file/d/1Vi_T60bp8eOXNzCWOqXA0XjstzCzX26O/preview" 
                width="100%" 
                height="900px">
        </iframe>      
      </div>
    );
  }
}

export default Resume;