import classNames from 'classnames';
import React, { useState } from 'react';

export const NewProduct = (props) => {
  const [product, setProduct] = useState(
    {
      id: 1,
      imageUrl: "",
      name: "",
      count: 4,
      comment: "",
      size: {
      width: 200,
      height: 200,
      },
      weight: "",
      comments: ["CommentModel", "CommentModel"]
      },
  );

  const [prodactErr, setProdErr] = useState(
    {
      name: false,
      imageUrl: false,
      weight: false,
    },
  );

  const clearForm = () => {
    setProduct((current) =>
      ({
        ...current,
        imageUrl: "",
        name: "",
        comment: "",
        weight: "",
      })
    );
  };

  const chekErrors = () => {
    setProdErr({
      name: !(product.name),
      weight: !(product.weight),
      imageUrl: !(product.imageUrl),
    });
  };


  const onFormSubmit = () => {
    chekErrors();
    if (
      product.name
      && product.imageUrl
      && product.weight
    ) {
      props.addNew(product);
      clearForm();
    }
  };

  const atEvent = (event) => {
    const { name, value } = event.target;

    setProduct({ ...product, [name]: value});
    setProdErr({ ...prodactErr, [name]: false });
  };

  return (
    <form
      className="form"
      onSubmit={
        (event) => {
          onFormSubmit();
          event.preventDefault();
        }
      }
    >
      <input
        className={classNames({ error: prodactErr.name })}
        type="text"
        placeholder={!prodactErr.name ? 'name' : 'Please enter name'}
        name="name"
        value={product.name}
        onChange={(event) => {
          atEvent(event);
        }}
      />
      <input
        type="text"
        placeholder="comment"
        name="comment"
        value={product.comment}
        onChange={(event) => {
          setProduct({ ...product, comment: event.target.value });
        }}
      />
      <input
        className={classNames({ error: prodactErr.imageUrl })}
        type="text"
        placeholder={!prodactErr.imageUrl ? 'imageUrl' : 'Please enter imageUrl'}
        name="imageUrl"
        value={product.imageUrl}
        onChange={(event) => {
          atEvent(event);
        }}
      />
      <input
        className={classNames({ error: prodactErr.weight })}
        type="text"
        placeholder={!prodactErr.weight ? 'weight' : 'Please enter weight'}
        name="weight"
        value={product.weight}
        onChange={(event) => {
          atEvent(event);
        }}
      />
      <button 
        type="submit"
        className="button"
      >
        Add
      </button>
    </form>
  );
};
