import React, { useState } from 'react';

export const Button = ({ param, props, cardEditing }) => {
  const [onEddig, setOnEddig] = useState({});

  const [onInput, setOnInput] = useState('');
  const atEvent = (event) => {
    setOnInput(event.target.value);
  };

  return cardEditing ? (
    !onEddig[param] ? (
      <button
        type="button"
        className='button is-small custom-button'
        onClick={() => {
          setOnEddig({
            ...onEddig,
            [param]: true
          });
        }}
      >
        Edit
      </button>)
      : (
        <>
          <div className='Block-editing'>
            <input
              type="text"
              className='input is-small custom-input'
              value={onInput}
              onChange={(event) => atEvent(event)} />
            <button
              type="button"
              className='button is-small'
              onClick={() => {
                props.edit(props, `${param}`, onInput);
                setOnEddig({
                  ...onEddig,
                  [param]: false,
                });
              }}
            >
              done
            </button>
          </div>
        </>)
  ) : null;
};
