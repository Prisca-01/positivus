import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="container md:px-28 flex flex-row items-center space-x-80">
      <div>
        <Image src="/logo-black.svg" alt="logo" width={130} height={70} />
      </div>
      <div className="flex flex-row space-x-8 items-center">
        <nav>
          <Link href= "#">About us</Link>
        </nav>
        <nav>
          <Link href= "#">Services</Link>
        </nav>
        <nav>
          <Link href= "#">Use Cases</Link>
        </nav>
        <nav>
          <Link href= "#">Pricing</Link>
        </nav>
        <nav>
          <Link href= "#">Blog</Link>
        </nav>
        <nav className="border-2 border-black p-2 rounded-lg">
          <Link href= "#">Request a quote</Link>
        </nav>
      </div>
    </div>
  )
}

