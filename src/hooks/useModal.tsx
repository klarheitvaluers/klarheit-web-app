import awardModalAtom from "@/atoms/AwardModalAtom";
import { useRecoilState } from "recoil";

const useModal = () => {
  return useRecoilState<boolean>(awardModalAtom);
}

export default useModal;