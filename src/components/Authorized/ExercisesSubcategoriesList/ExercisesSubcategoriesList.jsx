import { useSelector } from 'react-redux';
import {
  getCategories,
  getIsLoading,
  getError,
} from '../../../redux/exercises/categoriesSlice';
import { SubCatItems } from './ExercisesSubcategoriesList.styled';
import { Link } from 'react-router-dom';
import { ExercisesSubcategoriesItem } from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';

export const ExercisesSubcategoriesList = () => {
  const categories = useSelector(getCategories);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <div>
      {isLoading && !error && <b>Request in progress...</b>}

      {!categories ? (
        <p>you do not have any exersise category</p>
      ) : (
        <SubCatItems>
          <Swiper
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              375: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                grid: {
                  rows: 10,
                },
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                grid: {
                  rows: 3,
                },
              },
              1440: {
                slidesPerView: 5,
                slidesPerGroup: 5,
                grid: {
                  rows: 2,
                },
              },
            }}
            modules={[Grid, Pagination]}
          >
            {/* Відображення категорій для відповідного значення filter */}
            {categories.map((category) => (
              <SwiperSlide>
                <div>
                  <Link
                    key={category._id}
                    to={`/exercises/${category.filter}/${category.name}`}
                  >
                    <ExercisesSubcategoriesItem category={category} />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </SubCatItems>
      )}
    </div>
  );
};
