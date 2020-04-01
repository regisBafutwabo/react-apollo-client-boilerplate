import { configure } from '@storybook/react';
import '../src/storybook.css';
import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import { addParameters } from '@storybook/react';

addParameters({
    options:{
        theme:themes.dark,
        showRoots:false,
    }
}); 

addons.setConfig({
    theme:themes.dark,
})

let req;

if(process.env.NODE_ENV ==="test"){
    req = global.__requireContext(__dirname, '../src/stories', true, /.stories.tsx$/);
}else{
    req = require.context('../src/stories', true, /.stories.tsx$/);
}

function loadStories() {
    req.keys().forEach(req);
} 

configure(loadStories, module);