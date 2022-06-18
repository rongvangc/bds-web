import create from 'zustand';

type CommonStore = {
  searchValue: string;
  changeSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const initialState = {
  searchValue: '',
};

export const useCommonStore = create<CommonStore>((set) => ({
  ...initialState,
  changeSearchValue: (e) => set(() => ({ searchValue: e.target.value })),
}));
