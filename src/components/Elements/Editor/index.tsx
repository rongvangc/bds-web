import { isFunction } from '@/utils/common';
import EditorJS from '@editorjs/editorjs';
import React, { useCallback, useMemo } from 'react';
import Button from '../Button';
import { configuration } from './configuration';

type EditorProps = {
  id: string;
  placeHolder?: string;
  onDataSave?: (data: any) => void;
};

const Editor: React.FC<EditorProps> = ({
  id,
  placeHolder = 'Writing some thing',
  onDataSave,
}) => {
  const editor = useMemo(
    () =>
      // @ts-ignore
      new EditorJS({
        holder: id,
        placeholder: placeHolder,
        ...configuration,
      }),
    [id, placeHolder]
  );

  const onSave = useCallback(async () => {
    try {
      const data = await editor.save();
      isFunction(onDataSave) && onDataSave(data);
    } catch (error) {
      console.log('Saving failed: ', error);
    }
  }, [editor, onDataSave]);

  return (
    <div>
      <Button variant="primary" onClick={onSave}>
        Save
      </Button>
      {editor && <div id={id} />}
    </div>
  );
};

export default Editor;

/**
 const { data: districtList } = useSWR(
    filterOption.province ? 'getDistrictList' : null,
    () => districtService.getDistrictList(filterOption?.province?.id!)
  );

  const { data: wardStreetList } = useSWR(
    filterOption.district ? 'getWardsAndStreetsByDistrictID' : null,
    () =>
      districtService.getWardsAndStreetsByDistrictID(
        filterOption?.district?.id!
      )
  );

  useEffect(() => {
    if (!districtList) return;

    const nDistrictList = districtList.reduce((arr, curr) => {
      const { _id, name, ...rest } = curr;

      arr.push({
        id: _id,
        value: _id,
        description: name,
        ...rest,
      });
      return arr;
    }, [] as OptionData[]);

    setNormalizeDistrictList(nDistrictList);
  }, [districtList]);

  useEffect(() => {
    if (!wardStreetList) return;

    const nWardList = wardStreetList[0].reduce((arr, curr) => {
      const { _id, name, ...rest } = curr;

      arr.push({
        id: _id,
        value: _id,
        description: name,
        ...rest,
      });
      return arr;
    }, [] as OptionData[]);

    setNormalizeWardList(nWardList);

    const nStreetList = wardStreetList[1].reduce((arr, curr) => {
      const { _id, name, ...rest } = curr;

      arr.push({
        id: _id,
        value: _id,
        description: name,
        ...rest,
      });
      return arr;
    }, [] as OptionData[]);
    setNormalizeStreetList(nStreetList);
  }, [wardStreetList]);

  const normalizeProvinceList = provinceList.reduce((arr, curr) => {
    const { _id, name, ...rest } = curr;
    arr.push({
      id: _id,
      value: _id,
      description: name,
      ...rest,
    });
    return arr;
  }, [] as OptionData[]); 


 */
