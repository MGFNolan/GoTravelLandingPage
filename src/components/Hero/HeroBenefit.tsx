import { type HeroBenefit } from "../../utils/contentTypes";

interface HeroBenefitProps {
    benefit: HeroBenefit;
}

export default function HeroBenefit( {benefit}: HeroBenefitProps) {
  return (
    // <li>{benefit.description}</li>
    <li>Benefit</li>
  )
}
