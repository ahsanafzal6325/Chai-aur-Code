import React from 'react'


function Card(props) {
    console.log("props: ", props)

    return (
        <div>
            <div className="relative h-[400px] w-[300px] rounded-md">
                <img
                    src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="AirMax Pro"
                    className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-white">{props.cardName}</h1>
                    <h1 className="text-lg font-semibold text-white">{props.userName}</h1>
                    <p className="mt-2 text-sm text-gray-300">
                        {props.description || "Default Description"}
                    </p>
                    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                        {props.btn || "Visit Me"}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Card 