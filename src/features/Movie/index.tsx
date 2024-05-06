import { Layout } from '@/components'
import { Col, Pagination, PaginationProps, Row } from 'antd'
import { useState } from 'react'
import CardMovie from './sections/CardMovie'
import FormInput from './sections/FormInput'
import { useGetMovie } from './hooks'
import { TypeFormApi } from './type'
import Loading from '@/components/Loading'

const MovieFeature: React.FC = () => {
  const [query, setQuery] = useState({})
  const [current, setCurrent] = useState(1)
  const { data, isLoading, isError } = useGetMovie(query, current)

  const handleSubmit = (e: TypeFormApi) => {
    setQuery(e)
  }

  const onChange: PaginationProps['onChange'] = (page) => {
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
      <div className="w-full">
        <div className='lg:my-12 my-8 lg:mx-12 mx-4'>
          <FormInput onSubmit={handleSubmit} />
        </div>
        <Row gutter={[16, 16]} className="lg:px-12 md:px-6 sm:px-6 px-4 my-2">
          {data?.slice(0, 18).map((item: any, index: number) => (
            <Col xs={12} sm={12} md={8} lg={4} key={index}>
              <CardMovie data={item} />
            </Col>
          ))}
        </Row>

        <div
          className="flex justify-center"
        >
          <Pagination
            className="m-12"
            current={current}
            onChange={onChange}
            total={200}
            showSizeChanger={false}
          />
        </div>
      </div>
    </Layout>
  )
}
export default MovieFeature
