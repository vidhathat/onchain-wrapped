import React from "react"
import Image from 'next/image'

function TopNav(){
    return(
        <div className="flex items-center justify-center fixed top-5 left-1/2 transform -translate-x-1/2 mb-10">
        <Image src="/arbitrum.png" height={24} width={24} />
        <span className="ml-2 font-heading">ARBITRUM • Wrapped ‘23</span>
        </div>
    )
}

export default TopNav;
