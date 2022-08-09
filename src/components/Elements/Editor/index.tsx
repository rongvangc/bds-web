import { isFunction } from '@/utils/common';
import EditorJS from '@editorjs/editorjs';
import React, { useCallback, useMemo } from 'react';
import Button from '../Button';
import { configuration } from './configuration';

type EditorProps = {
  id: string;
  placeHolder?: string;
  className?: string;
  onDataSave?: (data: any) => void;
};

const Editor: React.FC<EditorProps> = ({
  id,
  placeHolder = 'Writing some thing',
  className,
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

  // const onSave = useCallback(async () => {
  //   try {
  //     const data = await editor.save();
  //     isFunction(onDataSave) && onDataSave(data);
  //   } catch (error) {
  //     console.log('Saving failed: ', error);
  //   }
  // }, [editor, onDataSave]);

  return (
    <div className={className}>
      {/* <Button variant="primary" onClick={onSave}>
        Save
      </Button> */}
      {editor && <div id={id} />}
    </div>
  );
};

export default Editor;