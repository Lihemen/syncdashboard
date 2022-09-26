import React from 'react';
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor';

import { EditorData } from '../../assets/dummy';
import { Header } from '../../components';
import OpacityContainer from '../../components/opacitycontainer';

const Editor = () => {
  return (
    <OpacityContainer>
      <div className='pageWrapper'>
        <Header category='Page' title='WYSIWYG Editor ' />

        <RichTextEditorComponent>
          <EditorData />
          <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
        </RichTextEditorComponent>
      </div>
    </OpacityContainer>
  );
};

export default Editor;

