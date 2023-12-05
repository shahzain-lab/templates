import { Button } from "@/shared/Button";
import ButtonWithIcon from "@/shared/ButtonWithIcon";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
       <Button>Hello o o o o</Button>
       <ButtonWithIcon Icon={<FaArrowRightLong />}>ButtonWithIcon</ButtonWithIcon>
    </main>
  )
}
