import React, { useState } from 'react';
import { Button } from './Button';
import './Card.scss';

export const Card = (props) => {

  const [cardEditing, setCardEditing] = useState(false)


    return (
    <div className="card">
      <div className="card-image">
        <div className="wrap-picture">
          <img className="picture"
            src={props.imageUrl}
            alt={props.name}
          />
          <Button param={'imageUrl'} props={props} cardEditing={cardEditing}/>
        </div>
      </div>
      <div className="card-content">
        <div className="media title-block">
          <div className="media-left">
            <div className="image is-48x48">
              <img
                src="https://upwork-usw2-prod-assets-static.s3.us-west-2.amazonaws.com/org-logo/1164508365954920448"
                alt="inforce"
              />
            </div>
          </div>
          <div className="position-relative">
            <p className="title">{props.name}</p>
            <Button param={'name'} props={props} cardEditing={cardEditing}/>
          </div>
          <div className="position-relative">
            <p className="title media-right is-6">{props.weight}</p>
            <Button param={'weight'} props={props} cardEditing={cardEditing}/>
          </div>
        </div>

        <div className="content position-relative">
          {props.description}
          <Button param={'description'} props={props} cardEditing={cardEditing} />
          <br />
        </div>
        <div className="date">Date: {props.date}</div>
        <div className="button-wrap">
          <button
            type='button'
            className='button'
            onClick={() => {props.delete(props.productId)}}
          >
            delete
          </button>
          {!cardEditing ? (
            <button
              type='button'
              className='button margin-10'
              onClick={() => setCardEditing(true)}
            >
              Edit
            </button>
          )
          : (
            <button
            type='button'
            className='button margin-10'
            onClick={() => setCardEditing(false)}
          >
            Done
          </button>
          )}
        </div>
      </div>
    </div>
  );
}
