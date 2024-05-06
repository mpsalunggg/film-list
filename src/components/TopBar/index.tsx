import { getSessionProfile } from '@/helpers/storage'
import { useRemoveSession } from '@/hooks/useRemoveSession'
import { Button, Modal } from 'antd'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const { confirm } = Modal

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [storage, setStorage] = useState<string | null>(null)
  const { mutate: removeSession } = useRemoveSession()
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogout = () => {
    confirm({
      title: 'Are you sure you want to quit?',
      onOk() {
        removeSession()
        setIsMenuOpen(false)
      },
      onCancel() {
        setIsMenuOpen(false)
      },
      okButtonProps: {
        className:
          'bg-[#90cea1] mt-2 border-none hover:bg-[#01b4e4] mb-2',
        style: {
          color: 'white',
        },
      },
    })
  }

  useEffect(() => {
    const profileStorage = getSessionProfile()
    setStorage(profileStorage)
  }, [])

  return (
    <section className="w-full h-24 bg-[#0d253f] sticky top-0 flex justify-between items-center z-[99] lg:px-12 px-4">
      <img
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
        alt="Logo"
        className="lg:w-52 w-36 cursor-pointer"
        onClick={() => router.push('/movie')}
      />
      <div className="flex gap-6 items-center">
        <h1
          className="text-white hover:text-gray-400 cursor-pointer lg:inline hidden"
          onClick={() => router.push('/favorite')}
        >
          Favorite Movies
        </h1>
        {storage ? (
          <Button
            className="bg-[#90cea1] mt-2 border-none hover:bg-[#01b4e4] mb-2 lg:inline hidden"
            style={{
              color: 'white',
            }}
            onClick={() => handleLogout()}
          >
            Logout
          </Button>
        ) : (
          <Button
            className="bg-[#90cea1] mt-2 border-none hover:bg-[#01b4e4] mb-2 lg:inline hidden"
            style={{
              color: 'white',
            }}
            onClick={() => router.push('/')}
          >
            Login
          </Button>
        )}
      </div>
      <button className="lg:hidden text-white" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isMenuOpen && (
        <div className="lg:hidden absolute transition-all duration-75 top-24 left-0 right-0 bg-[#0d253f] flex flex-col items-center gap-4">
          <h1
            className="text-white hover:text-gray-400 cursor-pointer px-4"
            onClick={() => router.push('/favorite')}
          >
            Favorite Movies
          </h1>
          {storage ? (
            <Button
              className="bg-[#90cea1] border-none hover:bg-[#01b4e4] my-6"
              style={{
                color: 'white',
              }}
              onClick={() => handleLogout()}
            >
              Logout
            </Button>
          ) : (
            <Button
              className="bg-[#90cea1] border-none hover:bg-[#01b4e4] my-6"
              style={{
                color: 'white',
              }}
              onClick={() => router.push('/')}
            >
              Login
            </Button>
          )}
        </div>
      )}
    </section>
  )
}

export default TopBar
