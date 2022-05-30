import EditorJS from '@editorjs/editorjs';
import React, { useCallback, useEffect, useState } from 'react';
import Button from '../Button';
import { configuration } from './configuration';

type EditorProps = {
  id: string;
};

const Editor: React.FC<EditorProps> = ({ id }) => {
  const [editor, setEditor] = useState<any>();

  const onSave = useCallback(async () => {
    try {
      const data = await editor.save();
      console.log(data);
    } catch (error) {
      console.log('Saving failed: ', error);
    }
  }, [editor]);

  useEffect(() => {
    const rawEditor = new EditorJS({
      holder: 'editorjs',
      placeholder: 'Writing some thing',
      ...configuration,
    });
    setEditor(rawEditor);
  }, [id]);

  return (
    <div>
      <Button variant="primary" onClick={onSave}>
        Save
      </Button>
      {editor && <div id="editorjs" />}
    </div>
  );
};

export default Editor;
