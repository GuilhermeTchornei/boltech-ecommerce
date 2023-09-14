import Banner from '@/components/banner';
import banner from '@/banner.png';

export default function Home() {
  return (
    <div className="max-w-max w-full flex min-h-screen flex-col justify-start px-10 gap-6">
      <div className="w-full h-[500px] max-h-[50%]">
        <Banner image={banner} />
      </div>
    </div>
  )
}
