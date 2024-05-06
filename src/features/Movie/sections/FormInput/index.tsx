import React, { useState } from 'react'
import { Input, Select, Button, Row, Col } from 'antd'
import { TypeFormApi, TypeGenre } from '../../type'
import { useGetGenre } from '../../hooks'

const { Option } = Select

interface FormInputProps {
  onSubmit: (values: TypeFormApi) => void
}

const FormInput: React.FC<FormInputProps> = ({ onSubmit }) => {
  const { data } = useGetGenre()
  const [searchValue, setSearchValue] = useState<string>('')
  const [sortValue, setSortValue] = useState<string>('')
  const [filterValue, setFilterValue] = useState<string>('')

  const handleFinish = () => {
    const values: TypeFormApi = {
      search: searchValue,
      sort: sortValue,
      filter: filterValue,
    }
    onSubmit(values)
    setSearchValue('')
    setSortValue('')
    setFilterValue('')
  }

  return (
    <Row gutter={[16, 16]} justify="start" align="middle">
      <Col xs={24} sm={6}>
        <Input
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </Col>

      <Col xs={24} sm={6}>
        <Select
          placeholder="Sort"
          options={[
            { value: 'popularity.desc', label: 'Popularity Desc' },
            { value: 'popularity.asc', label: 'Popularity Asc' },
            { value: 'revenue.asc', label: 'Revenue Asc' },
            { value: 'revenue.desc', label: 'Revenue Desc' },
          ]}
          className="w-full"
          onChange={(value) => setSortValue(value)}
        />
      </Col>

      <Col xs={24} sm={6}>
        <Select
          placeholder="Filter"
          className="w-full"
          onChange={(value) => setFilterValue(value)}
        >
          {data?.map((option: TypeGenre) => {
            return (
              <Option key={option.id} value={option.id}>
                {option.name}
              </Option>
            )
          })}
        </Select>
      </Col>

      <Col xs={24} sm={6}>
        <Button
          type="primary"
          onClick={handleFinish}
          className="bg-[#90cea1] border-none hover:bg-[#01b4e4] w-full"
          style={{
            color: 'white',
          }}
        >
          Submit
        </Button>
      </Col>
    </Row>
  )
}

export default FormInput
