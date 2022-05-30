import Header from '@editorjs/header';
import SimpleImage from '@editorjs/simple-image';
import Quote from '@editorjs/quote';

export const configuration = {
  /**
   * Available Tools list.
   * Pass Tool's class or Settings object for each Tool you want to use
   */
  tools: {
    header: {
      class: Header,
      inlineToolbar: true,
    },
    quote: {
      class: Quote,
      inlineToolbar: true,
    },
    image: {
      class: SimpleImage,
    },
  },
  autofocus: true,
  /**
   * Previously saved data that should be rendered
   */
  // data: {}
};
