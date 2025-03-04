import img from '../../assets/info1.svg'
import { BenefitsData } from './BenefitsData'
import BenefitsCard from './BenefitsCard'

const Benefits = () => {

  console.log(BenefitsData)

  const renderData = BenefitsData.map((data) => {
    return(
      <BenefitsCard 
      key="data.id"
      {...data}
    />
    )
  })

  return(
    <section className="w-full h-100 mt-10 flex justify-center">
      <div className="listOfBenefits">
        {renderData}
      </div>
    </section>
  )
}

export default Benefits