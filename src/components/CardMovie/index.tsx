import { PATH_IMAGE } from '@/constant/endpoint'
import { MoviesType } from '@/domains/Movie'
import { Card, Tag } from 'antd'

const CardMovie = ({ data }: { data: MoviesType }) => {
  const { original_title, poster_path, release_date } = data

  return (
    <Card
      className="w-auto lg:h-[400px] md:h-[500px] sm:h-[600px] h-72 bg-center bg-cover relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('${
          PATH_IMAGE + poster_path
        }')`,
      }}
    >
      <Tag color={'blue'}>{release_date}</Tag>
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <h3 className="text-xl font-semibold mb-2 text-white">
          {original_title}
        </h3>
      </div>
    </Card>
  )
}

export default CardMovie
