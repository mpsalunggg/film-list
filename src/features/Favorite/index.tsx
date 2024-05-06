import { Layout } from '@/components'
import Loading from '@/components/Loading'
import { Col, Pagination, PaginationProps, Row } from 'antd'
import React, { useState } from 'react'
import { FcLike } from 'react-icons/fc'
import { useFavoriteMovie } from './hooks'
import CardFavorite from './sections/CardFavorite'

const FavoriteFeature: React.FC = () => {
  const [current, setCurrent] = useState(1)
  const { data, isLoading, isError } = useFavoriteMovie()
  const onChange: PaginationProps['onChange'] = (page) => {
    console.log(page)
    setCurrent(page)
  }

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return (
      <Layout>
        <h1 className="text-[#0d253f] text-center text-2xl font-bold py-12">
          You must login first! &#128521;
        </h1>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="w-full lg:px-12 px-4">
        {data?.length !== 0 ? (
          <>
            <div className=" flex items-center justify-center">
              <FcLike className="text-3xl m-4" />
              <h1 className="text-[#0d253f] text-2xl font-bold py-12">
                Favorites Movie
              </h1>
            </div>
            <Row gutter={[16, 16]} className="my-2 flex justify-center">
              {data?.slice(0, 18).map((item, index) => (
                <Col xs={12} sm={12} md={8} lg={4} key={index}>
                  <CardFavorite data={item} />
                </Col>
              ))}
            </Row>

            <div className="flex justify-center">
              <Pagination
                className="m-12"
                current={current}
                onChange={onChange}
                total={data?.length}
                showSizeChanger={false}
              />
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center w-full h-36">
            <h1 className="text-[#0d253f] text-2xl font-bold py-8">
              No Favorite Movie
            </h1>
          </div>
        )}
      </div>
    </Layout>
  )
}
export default FavoriteFeature
