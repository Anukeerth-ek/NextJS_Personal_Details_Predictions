import React from 'react'

const getPredictedAge = async(name: string)=> {
  const response = await fetch(`https://api.agify.io/?name=${name}`)
  return response.json()
}

const getPredictedGender = async(name:string)=> {
  const response = await fetch(`https://api.genderize.io/?name=${name}`)
  return response.json()
}

const getPredictedCountry = async(name: string)=> {
  const response = await fetch(`https://api.nationalize.io/?name=${name}`)
  return response.json()
}

interface Params {
  params: {
    name: string
  }
}



export default async function Page({params}:Params) {
  const ageData = getPredictedAge(params.name)
  const genderData = getPredictedGender(params.name)
  const countryData = getPredictedCountry(params.name)

  const [age, gender, country] = await Promise.all([ageData, genderData, countryData])
  return(
    <div className='flex items-center justify-center bg-blue-300 h-[100vh]'>
      <div className='flex items-center justify-center flex-col w-[300px]  bg-white border-white p-5'>
        <div>Personal Info</div>
        <div>Age: <span className='text-black'>{age?.age}</span></div>
        <div>Gender: <span className='text-black'>{gender?.gender}</span></div>
        <div>Country: <span className='text-black'>{country?.country[0]?.country_id}</span></div>
      </div>
    </div>
  )
}