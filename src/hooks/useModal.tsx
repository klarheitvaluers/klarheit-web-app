import awardModalAtom from "@/atoms/AwardModalAtom";
import { useRecoilState, useSetRecoilState } from "recoil";

const useModal = () => {
  return useRecoilState<boolean>(awardModalAtom);
}

export const useSetModal = () => {
  return useSetRecoilState(awardModalAtom);
}

export default useModal;