import Image, { StaticImageData } from "next/image";

interface props {
    image: StaticImageData;
}

export default function Banner({ image }: props) {
    return (
        <div className="w-full h-full overflow-hidden flex relative">
            <Image src={image} alt='' fill className='max-w-full object-cover object-center' />
        </div>
    )
}