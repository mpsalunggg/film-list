import React, { useEffect } from 'react'
import { Card, message, Popover, Rate } from 'antd'
import { PATH_IMAGE } from '@/constant/endpoint'
import { FcLike } from 'react-icons/fc'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { useCreateFavoriteMovie } from '../../hooks'
import { formatRatesMovie, MoviesFormatedType } from '@/domains/Movie'

const CardMovie = ({ data }: { data: MoviesFormatedType }) => {
  const { original_title, poster_path, isFavorite, vote_average, id } = data
  const { mutate } = useCreateFavoriteMovie()
  const image = poster_path
    ? PATH_IMAGE + poster_path
    : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'

  return (
    <Card
      className="w-auto lg:h-[400px] md:h-[500px] sm:h-[600px] h-72 bg-center bg-cover relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('${image}')`,
      }}
    >
      {/* <Tag color={'blue'}>{release_date}</Tag> */}
      <div>
        <div className="absolute inset-0 p-4 flex flex-col justify-end">
          <div className="absolute inset-0 flex justify-end gap-2 top-0 bottom-0 a">
            <Popover
              placement="bottom"
              content={<h1 className="text-center">Add To Favorite</h1>}
              trigger={'hover'}
            >
              {isFavorite ? (
                <FcLike
                  className="text-2xl m-4 cursor-pointer"
                  onClick={() => mutate(id)}
                />
              ) : (
                <MdOutlineFavoriteBorder
                  className="text-2xl m-4 cursor-pointer text-white"
                  onClick={() => mutate(id)}
                />
              )}
            </Popover>
          </div>
          <h3 className="text-xl font-semibold text-white">
            {original_title.length > 20
              ? original_title.slice(0, 20) + '...'
              : original_title}
          </h3>
          {vote_average > 2 ? (
            <div className="lg:flex gap-1 items-center">
              <p className="text-yellow-400 mt-1">{formatRatesMovie(vote_average)}</p>
              <Rate disabled defaultValue={(vote_average * 5) / 10} count={5} />
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  )
}

export default CardMovie
