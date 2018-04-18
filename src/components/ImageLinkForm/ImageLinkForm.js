import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onImageSubmit }) => {
  return (
    <div>
      <p className="f3">
        {'This magic brain will detect faces in your picture. Give it a try.'}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="fa4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 dib pv2 white bg-light-purple"
            onClick={onImageSubmit}
          >
            {' '}
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
