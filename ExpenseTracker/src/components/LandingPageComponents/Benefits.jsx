import { BenefitsData } from './BenefitsData'
import BenefitsCard from './BenefitsCard'

const Benefits = () => {

  const renderData = BenefitsData.map((data,index) => {
    return(
      <BenefitsCard 
      order={index}
      key={data.id}
      {...data}
    />
    )
  })

  return(
    <section className="w-full h-auto flex justify-center">
      <div className="listOfBenefits">
        {renderData}
      </div>
    </section>
  )
}

export default Benefits