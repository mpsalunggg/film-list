import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const Loading: React.FC = () => {
  const antIcon = (
    <LoadingOutlined
      data-testid="loading-icon"
      style={{
        fontSize: 55,
      }}
      spin
    />
  )

  return (
    <div
      className="w-full h-screen bg-[#0d253f] flex justify-center items-center"
      data-testid="loading-spinner"
    >
      <Spin indicator={antIcon} className="text-white" />
    </div>
  )
}

export default Loading
