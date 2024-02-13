import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../hooks';
import { uploadUserReview } from '../store/api-action';

type addPopUpReviewFormProps = {
  onHandleClick: ()=> void;
}


function AddPopUpReviewForm({onHandleClick}:addPopUpReviewFormProps): JSX.Element {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const dispatch = useAppDispatch();
  const currentItemId = useAppSelector((state)=>state.currentItem.id);

  const [formData, setFormData] = useState({
    cameraId: currentItemId,
    userName: '',
    advantage: '',
    disadvantage: '',
    review: '',
    rating: 0,
  });

  const onRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const rating = Number(evt.target.value);
    setFormData((prevState) => ({ ...prevState, rating }));
  };

  const onUserNameChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const userName = evt.target.value;
    setFormData((prevState) => ({ ...prevState, userName }));
  };
  const onUserPlusChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const advantage = evt.target.value;
    setFormData((prevState) => ({ ...prevState, advantage }));
  };
  const onUserMinusChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const disadvantage = evt.target.value;
    setFormData((prevState) => ({ ...prevState, disadvantage }));
  };
  const onUserCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const review = evt.target.value;
    setFormData((prevState) => ({ ...prevState, review }));
  };

  function getInvalidMarkup(val: string) {

    if (errors[val]) {
      return 'is-invalid';
    } else {
      return '';
    }
  }

  const onSubmit = () => {
    dispatch(uploadUserReview(formData));
    onHandleClick();
  };

  return (

    <form
      method="post"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-review__rate">
        <fieldset className={`rate form-review__item ${getInvalidMarkup('rate')}`}>
          <legend className="rate__caption">
            Рейтинг
            <svg width={9} height={9} aria-hidden="true">
              <use xlinkHref="#icon-snowflake" />
            </svg>
          </legend>
          <div className="rate__bar">
            <div className="rate__group">
              <input
                className="visually-hidden"
                id="star-5"
                {...register('rate', { required: true, pattern: /^[0-9]{1,1}\d{0}/ })}
                type="radio"
                defaultValue={5}
                onChange={onRatingChange}
              />
              <label className="rate__label" htmlFor="star-5" title="Отлично" />
              <input
                className="visually-hidden"
                id="star-4"
                {...register('rate', { required: true, pattern: /^[0-9]{1,1}\d{0}/ })}
                type="radio"
                defaultValue={4}
                onChange={onRatingChange}
              />
              <label className="rate__label" htmlFor="star-4" title="Хорошо" />
              <input
                className="visually-hidden"
                id="star-3"
                {...register('rate', { required: true, pattern: /^[0-9]{1,1}\d{0}/ })}
                type="radio"
                defaultValue={3}
                onChange={onRatingChange}
              />
              <label
                className="rate__label"
                htmlFor="star-3"
                title="Нормально"
              />
              <input
                className="visually-hidden"
                id="star-2"
                {...register('rate', { required: true, pattern: /^[0-9]{1,1}\d{0}/ })}
                type="radio"
                defaultValue={2}
                onChange={onRatingChange}
              />
              <label className="rate__label" htmlFor="star-2" title="Плохо" />
              <input
                className="visually-hidden"
                id="star-1"
                {...register('rate', { required: true, pattern: /^[0-9]{1,1}\d{0}/ })}
                type="radio"
                defaultValue={1}
                onChange={onRatingChange}
              />
              <label className="rate__label" htmlFor="star-1" title="Ужасно" />
            </div>
            <div className="rate__progress">
              <span className="rate__stars">{formData.rating}</span> <span>/</span>{' '}
              <span className="rate__all-stars">5</span>
            </div>
          </div>
          <p className="rate__message">Нужно оценить товар</p>
        </fieldset>
        <div className={`custom-input form-review__item ${getInvalidMarkup('user-name')}`}>
          <label>
            <span className="custom-input__label">
              Ваше имя
              <svg width={9} height={9} aria-hidden="true">
                <use xlinkHref="#icon-snowflake" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Введите ваше имя"
              {...register('user-name', {
                required: true, minLength: 2, maxLength: 15,
              })}
              onChange={onUserNameChange}
            />
          </label>
          <p className="custom-input__error">Нужно указать имя</p>
        </div>
        <div className={`custom-input form-review__item ${getInvalidMarkup('user-plus')}`}>
          <label>
            <span className="custom-input__label">
              Достоинства
              <svg width={9} height={9} aria-hidden="true">
                <use xlinkHref="#icon-snowflake" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Основные преимущества товара"
              {...register('user-plus', { required: true, minLength: 10, maxLength: 160 })}
              onChange={onUserPlusChange}
            />
          </label>
          <p className="custom-input__error">Нужно указать достоинства</p>
        </div>
        <div className={`custom-input form-review__item ${getInvalidMarkup('user-minus')}`}>
          <label>
            <span className="custom-input__label">
              Недостатки
              <svg width={9} height={9} aria-hidden="true">
                <use xlinkHref="#icon-snowflake" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Главные недостатки товара"
              {...register('user-minus', { required: true, minLength: 10, maxLength: 160 })}
              onChange={onUserMinusChange}
            />
          </label>
          <p className="custom-input__error">Нужно указать недостатки</p>
        </div>
        <div className={`custom-textarea form-review__item ${getInvalidMarkup('user-comment')}`}>
          <label>
            <span className="custom-textarea__label">
              Комментарий
              <svg width={9} height={9} aria-hidden="true">
                <use xlinkHref="#icon-snowflake" />
              </svg>
            </span>
            <textarea
              minLength={5}
              placeholder="Поделитесь своим опытом покупки"
              defaultValue={''}
              {...register('user-comment', { required: true, minLength: 10, maxLength: 160 })}
              onChange={onUserCommentChange}
            />
          </label>
          <div className="custom-textarea__error">
            Нужно добавить комментарий
          </div>
        </div>
      </div>
      <button className="btn btn--purple form-review__btn" type="submit">
        Отправить отзыв
      </button>
    </form>
  );
}

export default AddPopUpReviewForm;
