import create from 'zustand';
import { FilterKey, OptionData } from '@/utils/types';
import { DEFAULT_FILTER, TYPE_TAB_OPTION } from '@/utils/constants';

type CommonStore = {
  loading: boolean;
  tabSelected: OptionData;
  searchValue: string;
  filterOption: Record<FilterKey, OptionData | null>;
  onLoading: (data: boolean) => void;
  onChangeTabValue: (data: OptionData) => void;
  onChangeSearchValue: (value: string) => void;
  onChangeFilterOption: (data: Record<FilterKey, OptionData | null>) => void;
};

const initialState = {
  loading: false,
  tabSelected: TYPE_TAB_OPTION[0]!,
  searchValue: '',
  filterOption: DEFAULT_FILTER,
};

export const useCommonStore = create<CommonStore>((set) => ({
  ...initialState,
  onLoading: (data) => set(() => ({ loading: data })),
  onChangeTabValue: (data) => set(() => ({ tabSelected: data })),
  onChangeSearchValue: (value) => set(() => ({ searchValue: value })),
  onChangeFilterOption: (data) => set(() => ({ filterOption: data })),
}));
